"use client";

import { Note as NoteType } from "@/db/schemas/notes";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

type Props = {
  note: NoteType;
};

function NoteComponent({ note }: Props) {
  return (
    <div
      className="w-full h-96 flex flex-col relative
        rounded-2xl
        
    bg-[#D3D3D3] p-4"
    >
      <div className="flex flex-wrap sm:gap-3 justify-between items-center">
        <div className="font-bold select-none">{note.createdAt.toISOString().slice(0, 10)}</div>
        <EditButton note={note}/>

        <DeleteButton noteId={note.id}/>
      </div>

      <p className="mt-3 text-wrap break-words overflow-y-auto">{note.text}</p>
    </div>
  );
}

export default NoteComponent;
