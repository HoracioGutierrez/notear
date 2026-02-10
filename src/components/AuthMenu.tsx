"use client";

import { Loader, LogIn, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function AuthMenu() {
  const { isLoading, isAuthenticated, user } = useKindeBrowserClient();

  if (isLoading) return <Loader className='animate-spin bg-transparent' />;

  if (!isAuthenticated) {
    return (
      <Button variant='default' size='sm' asChild>
        <LoginLink>
          <LogIn className="h-4 w-4 mr-2" />
          Login
        </LoginLink>
      </Button>
    );
  }

  if (isAuthenticated) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className='rounded-full'>
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={user?.picture as string}
              alt='Profile picture'
            />
            <AvatarFallback className="bg-primary/15">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <LogoutLink>Logout</LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return null;
}
