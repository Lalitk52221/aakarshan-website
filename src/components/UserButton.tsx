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
      {status === "loading" ? (
        <Loader className="size-6 mr-4 mt-4 float-right animate-spin" />
      ) : session ? (
        <DropdownMenu.Root>
          <div className="flex items-center gap-3 md:border-l-2 border-gray-300 pl-3 pr-4 ">
            <div className="md:flex md:flex-col place-items-end text-right md:justify-end hidden ">
              <span className="">{session.user.name}</span>
              <span className="text-sm text-gray-500">{session.user.role}</span>
            </div>
            <DropdownMenu.Trigger asChild>
              <button
                className=" md:inline-flex md:size-[35px] px-8 py-3 md:p-0 md:items-center md:justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 md:bg-white md:text-violet11 text-white focus:shadow-black cursor-pointer "  
                aria-label="Customise options"
              >
                <span className="text-white font-bold md:block hidden">
                  {avatarFallback}
                </span>
                <span className="text-white font-bold md:hidden block">
                  {session.user.name}
                </span>
              </button>
            </DropdownMenu.Trigger>
          </div>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="mt-3 min-w-[100px] rounded-md bg-white p-[5px] z-100 hover:bg-amber-500 cursor-pointer shadow-md "
              sideOffset={5}
            >
              <DropdownMenu.Item
                className="text-gray-800 text-sm outline-none text-center hover:text-white w-full"
                onClick={handleSignOut}
              >
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      ) : (
        <button
          onClick={() => router.push("/sign-in")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
