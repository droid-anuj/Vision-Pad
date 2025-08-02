'use client'

import { ReactNode } from 'react'
import { ConvexReactClient , AuthLoading, Authenticated } from 'convex/react'
import { ClerkProvider, SignedIn, SignedOut,  SignInButton, SignUpButton  } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { useAuth } from '@clerk/nextjs'
import Loading from '@/components/auth/loading'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider  publishableKey="pk_test_dHJ1c3R5LXRpY2stMi5jbGVyay5hY2NvdW50cy5kZXYk">
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
           {/* ✅ Renders children only if signed in */}
        <SignedIn>
          <Authenticated>
            {children}
          </Authenticated>
        </SignedIn>

        {/* ✅ Show login form if signed out */}
        <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

        <AuthLoading>
          <Loading />
        </AuthLoading>
        </ConvexProviderWithClerk>
    </ClerkProvider>
    
  )
}