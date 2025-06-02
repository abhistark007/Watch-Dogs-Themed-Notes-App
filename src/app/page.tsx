import Header from "@/components/Header";
import NoteComponent from "@/components/NoteComponent";
import db from "@/db";
import { notes } from "@/db/schemas/notes";
import { getUser } from "@/lib/auth";
import { desc, eq } from "drizzle-orm";

export default async function Home() {
  const user = await getUser();
 
  const _notes = await db
    .select()
    .from(notes)
    .where(eq(notes.userId, user.id))
    .orderBy(desc(notes.updatedAt));


 
  return <div className="min-h-screen w-full flex flex-col items-center px-4 pb-24 bg-gray-400">
    <Header />
    <div className="sm:w-[90%] grid w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
      {
        _notes.map((note)=>(
          <NoteComponent key={note.id} note={note} />
        ))
      }
    </div>
  </div>;
}
