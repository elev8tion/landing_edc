import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing required Supabase environment variables. Please check your .env.local file.'
  );
}

// Validate URL format
try {
  new URL(supabaseUrl);
} catch {
  throw new Error('Invalid VITE_SUPABASE_URL format. Must be a valid URL.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
