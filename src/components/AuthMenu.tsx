'use client'

import { Loader } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

export default function AuthMenu() {

    const { status, data } = useSession()

    const handleClickLogin = () => {
        signIn("google")
    }

    const handleClickLogout = () => {
        signOut()
    }

    if (status === 'unauthenticated') {
        return (
            <Button variant={"default"} onClick={handleClickLogin}>login</Button>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
                <Avatar>
                    <AvatarImage src={data?.user?.image as string} alt="Profile picture" />
                    {!data && <AvatarFallback asChild>
                        <Loader className="animate-spin bg-transparent" />
                    </AvatarFallback>}
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Button className="w-full" variant="default" onClick={handleClickLogout}>logout</Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}