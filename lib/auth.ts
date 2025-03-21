import { supabase } from './supabase'
import { User, Session } from '@supabase/supabase-js'  // Import tipe User dan Session

// Deklarasi tipe untuk respons
type AuthResponse = {
  user: User | null;
  session: Session | null;
  error: Error | null;
}

// Fungsi untuk Register Pengguna Baru
export const registerUser = async (email: string, password: string): Promise<AuthResponse> => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })
  if (error) {
    console.error('Error Register:', error.message)
    return { user: null, session: null, error }
  }
  return { user: data?.user || null, session: data?.session || null, error: null }
}

// Fungsi untuk Login Pengguna
export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) {
    console.error('Error Login:', error.message)
    return { user: null, session: null, error }
  }
  return { user: data?.user || null, session: data?.session || null, error: null }
}

// Fungsi untuk Logout Pengguna
export const logoutUser = async (): Promise<{ success: boolean; error: string | null }> => {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('Error Logout:', error.message)
    return { success: false, error: error.message }
  }
  return { success: true, error: null }
}