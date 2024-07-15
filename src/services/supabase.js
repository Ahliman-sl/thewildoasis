import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pjdyxdgapgblbydlhska.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqZHl4ZGdhcGdibGJ5ZGxoc2thIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MzA4MzQsImV4cCI6MjAzNjEwNjgzNH0.FPKq9kt7LmK4DXQ-IWbnb1tQYmaQU-rLFPZKH56ox8k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
