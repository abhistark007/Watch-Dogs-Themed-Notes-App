import { getUser } from "@/lib/auth";
import UserButton from "./UserButton";
import NewNoteButton from "./NewNoteButton";

async function Header() {
  const user = await getUser();
  return (
    <div className="relative flex mt-3 sm:mx-4 px-4 bg-blue-700 h-20 sm:w-[90%] w-[95%] rounded-2xl shadow-xl justify-between items-center
    sm:px-4">
      <UserButton user={user} />


      <div className="text-3xl text-white font-bold max-[450px]:hidden">Watch Dog Notes</div>


      <NewNoteButton/>
    </div>
  )
}

export default Header