"use client"

import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { signOutAction } from "@/actions/user"
import toast from "react-hot-toast"
import { User } from "@supabase/supabase-js"

type Props={
    user:User
}

function UserButton({user}:Props) {
    const router=useRouter();
    const handleSignOut= async()=>{
        const toastId=toast.loading("Signing Out...");
        await signOutAction();
        router.replace("/login")
        toast.dismiss(toastId)
    }

  return (
     <DropdownMenu modal={false}>
      <DropdownMenuTrigger >
        <Avatar className="rounded-full sm:size-12">
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>XX</AvatarFallback>
      </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white" align="start">
        <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
        onClick={handleSignOut}
        className="hover:text-red-600 duration-200 hover:font-bold">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton