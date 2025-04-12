import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ypfvkuwlxovptthvnxut.supabase.co'; // ← your actual project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZnZrdXdseG92cHR0aHZueHV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NDQ2NDYsImV4cCI6MjA2MDAyMDY0Nn0.9FChP8fK0_F5NhYNjPDeOCUwz35ONkSAgxnQKYsIrNI'; // ← use anon key (not service role/secret)

export const supabase = createClient(supabaseUrl, supabaseKey);