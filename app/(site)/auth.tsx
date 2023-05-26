"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export const LoginButton = () => {
  const { data: session } = useSession();

  return (
    <div className="ml-auto flex gap-2">
      {session?.user ? (
        <>
          <p className="text-sky-600">Welcome, {session.user.email}</p>
          <button className="text-red-500" onClick={() => signOut()}>
            Sign Out
          </button>
        </>
      ) : (
        <button className="text-green-600" onClick={() => signIn()}>
          Sign In
        </button>
      )}
    </div>
  );
};
