import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

const supabaseUrl = "https://hampvjtjhfaxthnmgdmu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhbXB2anRqaGZheHRobm1nZG11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5ODU3MTYsImV4cCI6MjA0MTU2MTcxNn0.NyitKtOk9rxEqXGTO6rpxzC5cfiGJDILvhAIigwtfyY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
