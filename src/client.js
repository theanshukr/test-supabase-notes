import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://hcqyfyaxennszcsfpgnr.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'your-anon-key-here';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function fetchNotes() {
  console.log('Fetching notes with anon key...');
  const { data, error } = await supabase.from('notes').select('*');
  if (error) {
    console.error('Error fetching notes:', error);
  } else {
    console.log('Notes retrieved:', data);
  }
}

if (process.argv[1] && process.argv[1].endsWith('client.js')) {
  fetchNotes();
}
