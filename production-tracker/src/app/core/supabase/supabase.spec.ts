import { TestBed } from '@angular/core/testing';
import { SUPABASE_CONFIG, SupabaseService } from './supabase';

const TEST_SUPABASE_URL = 'https://test.supabase.co';
const TEST_SUPABASE_KEY = 'test-anon-key';

describe('SupabaseService', () => {
  let service: SupabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SUPABASE_CONFIG,
          useValue: { url: TEST_SUPABASE_URL, anonKey: TEST_SUPABASE_KEY },
        },
      ],
    });
    service = TestBed.inject(SupabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose a supabase client', () => {
    expect(service.client).toBeDefined();
  });
});
