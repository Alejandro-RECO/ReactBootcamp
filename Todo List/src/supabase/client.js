import { createClient } from "@supabase/supabase-js";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "../utils/config";

export const client = createClient(
  SUPABASE_URL, SUPABASE_ANON_KEY
);
