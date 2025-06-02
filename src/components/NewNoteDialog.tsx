import { Dispatch, SetStateAction, useTransition } from "react";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import toast from "react-hot-toast";
import { addNewNoteAction } from "@/actions/notes";

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

function NewNoteDialog({ setOpen }: Props) {
  const [isPending, startTransition] = useTransition();

  const handleAddNewNote = async (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await addNewNoteAction(formData);
      if (!errorMessage) {
        setOpen(false);
        toast.success("Successfully added note");
      } else {
        toast.error(errorMessage);
      }
    });
  };

  return (
    <DialogContent className="sm:max-w-[450px] bg-white overflow-auto p-2">
      <DialogTitle>Add New Note</DialogTitle>

      <form action={handleAddNewNote}>
        <Textarea
          id="text"
          name="text"
          disabled={isPending}
          className="mb-6 mt-2 min-h-[300px]  border-blue-600 focus:outline-0 focus:ring-0 focus:border-blue-700"
        />

        <DialogFooter>
          <Button
            type="submit"
            disabled={isPending}
            
            className="w-40 shadow-2xl bg-blue-700 text-white"
          >
            {isPending ? "Adding Note..." : "Add Note"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

export default NewNoteDialog;
