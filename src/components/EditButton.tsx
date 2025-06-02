"use client"

import { Note } from "@/db/schemas/notes"
import { useState } from "react"
import { Dialog, DialogTrigger } from "./ui/dialog"
import { Edit } from "lucide-react"
import EditNoteDialog from "./EditNoteDialog"
import { cn } from "@/lib/utils"


type Props={
    note: Note
}

function EditButton({note}:Props) {
    const [open,setOpen]=useState(false);
  return (
    <Dialog
    open={open}
    onOpenChange={(open)=>setOpen(open)}
    >
        <DialogTrigger
        className={cn("text-black hover:text-purple-500 transition-colors duration-200 ease-in-out")}
        onClick={()=> setOpen(true)}
        >
            <Edit className="size-5 text-green-600"/>
        </DialogTrigger>


        <EditNoteDialog setOpen={setOpen} note={note}/>
    </Dialog>
  )
}

export default EditButton