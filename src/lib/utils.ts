import { clsx, type ClassValue } from "clsx"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
const  authOptions = {
  providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      })
  ]
}

export const handler = NextAuth(authOptions)