"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function UserButton() {
  const router = useRouter();
  const { data: session, status } = useSession();

//   if (status === "loading") {
//     return <Loader className="size-6 mr-4 mt-4 float-right animate-spin" />;
//   }
  console.log("Session Data:", session);
  const avatarFallback = session?.user?.name?.charAt(0).toUpperCase();
  const handleSignOut = async () => {
    await signOut({
      redirect: false,
    });
    router.push("/");
  };

  return (
    <div>
      {/* {session ? (
        <div className="flex items-center gap-3 border-l-2 border-gray-300 pl-3 pr-4">
          <div className="flex flex-col place-items-end text-right justify-end">
            <span className="">{session.user.name}</span>
            <span className="text-sm text-gray-500">{session.user.role}</span>
          </div>
          <div className="rounded-full bg-blue-600 w-10 h-10 flex items-center justify-center font-bold text-xl ">
            {avatarFallback}
          </div>
          
          <button
                    onClick={handleSignOut}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Sign Out
                </button>
        </div>
      ) : (
        <button
          onClick={() => router.push("/sign-in")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>
      )} */}
      
{status === "loading" ?
<Loader className="size-6 mr-4 mt-4 float-right animate-spin" />:
session? (


<DropdownMenu.Root>
    <div className="flex items-center gap-3 border-l-2 border-gray-300 pl-3 pr-4">
          <div className="flex flex-col place-items-end text-right justify-end">
            <span className="">{session.user.name}</span>
            <span className="text-sm text-gray-500">{session.user.role}</span>
          </div>
			<DropdownMenu.Trigger asChild>
				<button
					className=" inline-flex size-[35px] items-center justify-center rounded-full bg-white text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-pointer"
					aria-label="Customise options"
				>
					<span className="text-blue-700 font-bold">{avatarFallback}</span>
				</button>
			</DropdownMenu.Trigger>
</div>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					className="mt-3 min-w-[100px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
					sideOffset={5}
				>
					<DropdownMenu.Item className="text-gray-800 text-sm outline-none text-center" onClick={handleSignOut}>
						Logout
						
					</DropdownMenu.Item>
                    </DropdownMenu.Content>
                    </DropdownMenu.Portal>
        </DropdownMenu.Root>
):<button
          onClick={() => router.push("/sign-in")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>}
    </div>

  );
}
