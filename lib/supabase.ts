import { createClient, type SupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export function hasSupabaseConfig() {
  return Boolean(supabaseUrl && supabaseAnonKey)
}

function assertPublicConfig() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY")
  }
}

export function createSupabasePublicServerClient(): SupabaseClient | null {
  if (!hasSupabaseConfig()) {
    return null
  }

  return createClient(supabaseUrl!, supabaseAnonKey!, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

export function createSupabaseAdminServerClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return null
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

export function createSupabaseBrowserClient(): SupabaseClient {
  assertPublicConfig()
  return createClient(supabaseUrl!, supabaseAnonKey!)
}
