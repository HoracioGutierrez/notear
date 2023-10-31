"use client"
import { handler } from "@/app/api/auth/[...nextauth]/route"
import { SessionProvider } from "next-auth/react"

type Props = {
    children: React.ReactNode
}

export default function AuthProvider({ children }: Props) {
    return (
        <SessionProvider session={handler}>
            {children}
        </SessionProvider>
    )
}