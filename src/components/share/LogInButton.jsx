"use client";
import { signIn, signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { IoLogOutOutline } from "react-icons/io5";
import { LuArrowRightToLine } from "react-icons/lu";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

export default function LogInButton() {
  const { session, user } = useAuth();
    
  if (session) {
    return (
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-3">
        <Button
          className="btnPrimary text-white"
          variant="goast"
          size="sm"
          onClick={() => signOut()}
        >
          <IoLogOutOutline /> Sign out
        </Button>

        <div className="border-2 border-secondary overflow-hidden w-10 h-10 rounded-full flex justify-center items-center">
          <Image src={user.image} height={30} width={30} alt="User image" />
        </div>
      </div>
    );
  }
  return (
    <>
      <Button
        className="cursor-pointer w-full md:w-auto btnPrimary text-white"
        variant="goast"
        size="sm"
        onClick={() => signIn()}
      >
        <LuArrowRightToLine />
        Sign in
      </Button>
    </>
  );
}
