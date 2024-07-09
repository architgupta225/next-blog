"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

export const Comments = ({ postSlug }) => {
  const {status} = useSession();

  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXTAUTH_URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc,setDesc] = useState("")

  const handleSubmit = async() => {
    await fetch("/api/comments" ,{
      method : "POST",
      body:JSON.stringify({desc,postSlug})
    })
    mutate()
  }

  return (
    <div className="mt-14">
      <div className="text-softTextColor mb-7">Comments</div>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-7">
          <textarea
            placeholder="write a comment"
            className="p-5 w-full"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
          <button  onClick={handleSubmit}
          className="px-5 py-4 bg-[teal] text-white font-bold border-none rounded-[5px] cursor-pointer">
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="mt-12">
        {isLoading
          ? "loading..."
          : data?.map((item) => (
              <div className="mb-12" key={item._id}>
                <div className="flex items-center gap-5 mb-5">
                  {item.user?.image && (
                    <Image
                      src={item.user.image}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                  )}
                  <div className="flex flex-col gap-1 text-softTextColor">
                    <span className="font-medium ">{item.user.name}</span>
                    <span className="text-sm font-light">{item.createdAt}</span>
                  </div>
                </div>
                <p className="desc">{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};
