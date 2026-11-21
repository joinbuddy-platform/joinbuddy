const SUPABASE_URL = "https://stqgcbadokqrnstdhabc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_IAQVVJkDP7aEJzr9_88dDQ_fwFVzB-d
";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
