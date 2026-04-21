import { inject, Injectable, InjectionToken } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { Database } from './database.types';

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

export const SUPABASE_CONFIG = new InjectionToken<SupabaseConfig>('SUPABASE_CONFIG', {
  providedIn: 'root',
  factory: () => ({ url: environment.supabaseUrl, anonKey: environment.supabaseAnonKey }),
});

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  readonly client: SupabaseClient<Database>;

  constructor() {
    const { url, anonKey } = inject(SUPABASE_CONFIG);
    this.client = createClient<Database>(url, anonKey);
  }
}
