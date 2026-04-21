-- Enable UUID extension
create extension if not exists "pgcrypto";

-- Profiles table (extends auth.users)
create table if not exists public.profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  email        text not null unique,
  role         text not null check (role in ('admin','warehouse','cutter','sewing','qa','store')),
  full_name    text,
  created_at   timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Inventory table (fabric tracking)
create table if not exists public.inventory (
  id               uuid primary key default gen_random_uuid(),
  material_name    text not null,
  quantity_meters  numeric(10,2) not null check (quantity_meters >= 0),
  status           text not null default 'received'
                     check (status in ('received','delivered_to','accepted','cutting_complete')),
  recipient_id     uuid references public.profiles(id),
  date_received    date not null,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

alter table public.inventory enable row level security;

create policy "Authenticated users can read inventory"
  on public.inventory for select
  using (auth.role() = 'authenticated');

create policy "Warehouse and admin can insert inventory"
  on public.inventory for insert
  with check (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('admin','warehouse')
    )
  );

create policy "Warehouse and admin can update inventory"
  on public.inventory for update
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('admin','warehouse','cutter')
    )
  );

-- Production batches table
create table if not exists public.production_batches (
  id                      uuid primary key default gen_random_uuid(),
  inventory_id            uuid not null references public.inventory(id),
  batch_code              text not null unique,
  status                  text not null default 'cutting_complete'
                            check (status in (
                              'cutting_complete','sewing_in_progress','sewing_complete',
                              'qa_in_progress','qa_complete','store_received','store_rejected'
                            )),
  pieces_back             int not null default 0,
  pieces_front            int not null default 0,
  pieces_right_side       int not null default 0,
  pieces_left_side        int not null default 0,
  pieces_top              int not null default 0,
  pieces_inside_separator int not null default 0,
  pieces_side_pocket      int not null default 0,
  backpacks_completed     int not null default 0,
  backpacks_approved      int not null default 0,
  backpacks_returned      int not null default 0,
  created_at              timestamptz not null default now(),
  updated_at              timestamptz not null default now()
);

alter table public.production_batches enable row level security;

create policy "Authenticated users can read batches"
  on public.production_batches for select
  using (auth.role() = 'authenticated');

create policy "Cutter and admin can insert batches"
  on public.production_batches for insert
  with check (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('admin','cutter')
    )
  );

create policy "Role-based batch updates"
  on public.production_batches for update
  using (auth.role() = 'authenticated');

-- QA logs table
create table if not exists public.qa_logs (
  id              uuid primary key default gen_random_uuid(),
  batch_id        uuid not null references public.production_batches(id),
  inspector_id    uuid not null references public.profiles(id),
  approved_count  int not null check (approved_count >= 0),
  returned_count  int not null check (returned_count >= 0),
  details         text,
  created_at      timestamptz not null default now()
);

alter table public.qa_logs enable row level security;

create policy "Authenticated users can read qa logs"
  on public.qa_logs for select
  using (auth.role() = 'authenticated');

create policy "QA and admin can insert qa logs"
  on public.qa_logs for insert
  with check (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('admin','qa')
    )
  );

-- Auto-update updated_at trigger
create or replace function public.handle_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger inventory_updated_at
  before update on public.inventory
  for each row execute procedure public.handle_updated_at();

create trigger batches_updated_at
  before update on public.production_batches
  for each row execute procedure public.handle_updated_at();

-- Auto-create profile on user signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, email, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'role', 'warehouse')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
