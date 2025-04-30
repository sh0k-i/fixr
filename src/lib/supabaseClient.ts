import { createClient } from '@supabase/supabase-js';

const centralUrl = import.meta.env.VITE_CENTRAL_URL;
const centralKey = import.meta.env.VITE_CENTRAL_KEY;
const central = createClient(centralUrl, centralKey)

export { central };