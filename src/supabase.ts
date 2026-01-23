import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://fvbvxzsylcllspuvqowr.supabase.co', // Project URL
  'sb_publishable_Q_AkpwbgfBJEfT9UiqWlrg_uIu9hg3h'   // Publishable key
);
