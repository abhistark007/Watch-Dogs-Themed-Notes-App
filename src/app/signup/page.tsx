"use client";

import { createAccountAction} from "@/actions/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

function SignUpPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSignupButton = (formData: FormData) => {
    startTransition(async () => {
        const {errorMessage}= await createAccountAction(formData);
        if(!errorMessage){
            router.replace("/");
            toast.success("Account Created Successfully",{
                duration:5000
            })
        }else{
            toast.error(errorMessage)
        }
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[url(../../public/mainbg.png)] bg-center bg-cover ">
      {isPending && 
      <div className="flex flex-col gap-4  text-white text-3xl justify-between items-center">
        <p>Signing Up...</p>
        <Loader2 className="size-6 animate-spin"/>
        </div>}

      <form action={handleSignupButton} className={`${isPending && "hidden"}`}>
        <div className="sm:w-[500px] flex flex-col justify-between items-center gap-4 backdrop-blur-md rounded-2xl p-4">
          <h3 className="text-2xl text-red-600 font-bold">
            Welcome To Watch Dogs Themed Notes
          </h3>
          <Input
            disabled={isPending}
            type="email"
            name="email"
            placeholder="Email"
            className="mt-4 mb-4 text-green-500"
            required
          />
          <Input
            disabled={isPending}
            type="password"
            name="password"
            placeholder="Password"
            className="mb-4 text-green-500"
            required
          />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full bg-green-500 text-white duration-200 hover:scale-95 cursor-pointer"
          >
            SignUp
          </Button>
          <p className="flex gap-3 text-white">
           Already have an account ?{" "}
            <Link
              href={"/login"}
              className="text-blue-600 duration-200 hover:scale-110"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
