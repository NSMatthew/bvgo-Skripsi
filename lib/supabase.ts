import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://drmzrbydynawphmjhptu.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRybXpyYnlkeW5hd3BobWpocHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MzIyODYsImV4cCI6MjA1ODAwODI4Nn0.cfoH6ynmk4AxsUm800NDlfKwGpsi45oZFA2SjS_9b-E"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})