import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lzsfgzvxpsbrzycmrmve.supabase.co";
const supabaseKey =
    "sb_publishable_EnCTD5AExgYUZ9yqirrM8g_9_60cUp9";

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;