"use client"

import { useState } from "react"
import { Dialog, DialogTrigger } from "./ui/dialog"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import NewNoteDialog from "./NewNoteDialog"


function NewNoteButton({className}:{className?:string}) {
    const [open,setOpen] = useState(false)
  return (
     <Dialog open={open} onOpenChange={(open)=>setOpen(open)}>
        <DialogTrigger
        className={cn("text-black hover:text-purple-500 transition-colors duration-200 ease-in-out",className)}
        onClick={()=> setOpen(true)}
        >
            <Plus className="size-10 sm:size-12"/>
        </DialogTrigger>

        <NewNoteDialog setOpen={setOpen}/>
    </Dialog>
  )
}

export default NewNoteButton