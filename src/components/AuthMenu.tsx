"use client";

import { Loader } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

export default function AuthMenu() {
  const { isLoading, isAuthenticated, user } = useKindeBrowserClient();

  if (isLoading) return <Loader className='animate-spin bg-transparent' />;

  if (!isAuthenticated) {
    return (
      <Button className='w-full' variant='default'>
        <LoginLink>Login</LoginLink>
      </Button>
    );
  }

  if (isAuthenticated) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className='rounded-full'>
          <Avatar>
            <Image
              width={50}
              height={50}
              src={user?.picture as string}
              alt='Profile picture'
            />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Button className='w-full' variant='default'>
              <LogoutLink>logout</LogoutLink>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return null;
}
