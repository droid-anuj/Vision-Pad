'use client'

import { ReactNode } from 'react'
import { ConvexReactClient , AuthLoading, Authenticated } from 'convex/react'
import { ClerkProvider, SignedIn, SignedOut,  SignInButton, SignUpButton  } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { useAuth } from '@clerk/nextjs'
import Loading from '@/components/auth/loading'
import VisionPadHome from '@/app/(home)/home'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider  publishableKey="pk_test_dHJ1c3R5LXRpY2stMi5jbGVyay5hY2NvdW50cy5kZXYk">
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <SignedIn>
          <Authenticated>
            {children}
          </Authenticated>
        </SignedIn>

        <SignedOut>
              <VisionPadHome/>
            </SignedOut>

        <AuthLoading>
          <Loading />
        </AuthLoading>
        </ConvexProviderWithClerk>
    </ClerkProvider>
    
  )
}