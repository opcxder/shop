
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://eoohkhipdhinpvrqvlyo.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvb2hraGlwZGhpbnB2cnF2bHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNzA2NzUsImV4cCI6MjA1Njg0NjY3NX0.y_luoPoVBLA2D1TpHGo8YXIpz9wqdWRWD9z0e4qHUMA";

export const supabase = createClient(supabaseUrl, supabaseKey);
