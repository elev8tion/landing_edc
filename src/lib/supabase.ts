import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a null client if environment variables are not set
// This allows the app to run without Supabase configured
let supabaseClient = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    new URL(supabaseUrl);
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  } catch {
    console.warn('Invalid VITE_SUPABASE_URL format. Supabase features will be disabled.');
  }
} else {
  console.warn('Supabase environment variables not configured. Blog features will be disabled.');
}

export const supabase = supabaseClient;
