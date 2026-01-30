"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "../ui/button";

export default function LogInButton() {
    const { data: session } = useSession();
    
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Button
          className="cursor-pointer hover:text-black hover:bg-secondary-foreground bg-accent text-white"
          variant="goast"
          size="sm"
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button
        className="cursor-pointer hover:text-black bg-accent hover:bg-secondary-foreground text-white"
        variant="goast"
        size="sm"
        onClick={() => signIn()}
      >
        Sign in
      </Button>
    </>
  );
}
