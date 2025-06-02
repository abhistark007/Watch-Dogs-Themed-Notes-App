import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'


export const getUser = async () =>{
    const auth = getSupabaseAuth();
    const user = (await (await auth).getUser()).data.user;
    if(!user) redirect("/login");
    return user;

}

export async function getSupabaseAuth() {
  const cookieStore = await cookies()

  const supabaseClient = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )

  return supabaseClient.auth;
}

