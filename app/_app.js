import '@/css/tailwind.css'
import '@/css/prism.css'
import { SessionProvider } from "next-auth/react"
import React from "react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}