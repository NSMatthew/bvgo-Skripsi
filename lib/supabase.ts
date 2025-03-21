import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'

config()  // Memuat variabel lingkungan dari .env file

const supabaseUrl = process.env.SUPABASE_URL || ""
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || ""

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})