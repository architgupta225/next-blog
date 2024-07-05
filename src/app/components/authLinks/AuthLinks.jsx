"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

export const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  
  return (
    <div className="flex gap-5">
      {status === 'unauthenticated' ? (
        <Link href="/login">Login</Link>
      ) : (
        <div className="flex gap-[20px]">
          <Link href="/write">Write</Link>
          <span className="cursor-pointer" onClick={signOut}>Logout</span>
        </div>
      )}
      <div
        className="w-5 h-4 flex sm:hidden flex-col justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full h-[2px] bg-textColor"></div>
        <div className="w-full h-[2px] bg-textColor "></div>
        <div className="w-full h-[2px] bg-textColor"></div>
      </div>
      {open && (
        <div
          className="absolute top-[100px] left-0 bg-bg custom-height w-full text-center 
        flex items-center justify-center text-3xl flex-col gap-12"
        >
          <Link href="/" className="flex sm:hidden">
            Homepage
          </Link>
          <Link href="/" className="flex sm:hidden">
            Contact
          </Link>
          <Link href="/" className="flex sm:hidden">
            About
          </Link>
          {status ? (
            <Link href="/login">Login</Link>
          ) : (
            <div className="flex gap-[20px]">
              <Link href="/write">Write</Link>
              <span className="cursor-pointer">Logout</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
