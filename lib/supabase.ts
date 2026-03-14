import { createClient, type SupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabasePublicKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY

export function hasSupabaseConfig() {
  return Boolean(supabaseUrl && supabasePublicKey)
}

function assertPublicConfig() {
  if (!supabaseUrl || !supabasePublicKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL and public key env (NEXT_PUBLIC_SUPABASE_ANON_KEY or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY)")
  }
}

export function createSupabasePublicServerClient(): SupabaseClient | null {
  if (!hasSupabaseConfig()) {
    return null
  }

  return createClient(supabaseUrl!, supabasePublicKey!, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

export function createSupabaseAdminServerClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseServiceKey) {
    return null
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

export function createSupabaseBrowserClient(): SupabaseClient {
  assertPublicConfig()
  return createClient(supabaseUrl!, supabasePublicKey!)
}
