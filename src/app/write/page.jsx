"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { data, status } = useSession();

  const router = useRouter();

  if(status === "loading"){
    return <div>Loading...</div>
  }

  if(status === "authenticated"){
    router.push('/')
  }

  return (
    <div className="cont">
      <input
        type="text"
        placeholder="Title"
        className="p-12 text-6xl border-none outline-none bg-transparent placeholder:text-[#b3b3b1]"
      />
      <div className="flex gap-5 h-[700px] relative">
        <button
          className="w-9 h-9 rounded-full bg-transparent border-solid border-textColor flex justify-center items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Image src="/plus.png" width={16} height={16} />
        </button>
        {open && (
          <div className="flex gap-5 bg-bg absolute z-10 w-full left-12">
            <button className="w-9 h-9 rounded-full bg-transparent border-solid border-textColor flex justify-center items-center cursor-pointer border-[#1a8917]">
              <Image src="/image.png" width={16} height={16} />
            </button>
            <button className="w-9 h-9 rounded-full bg-transparent border-solid border-textColor flex justify-center items-center cursor-pointer border-[#1a8917]">
              <Image src="/external.png" width={16} height={16} />
            </button>
            <button className="w-9 h-9 rounded-full bg-transparent border-solid border-textColor flex justify-center items-center cursor-pointer border-[#1a8917]">
              <Image src="/video.png" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          className="w-full"
        />
      </div>
      <button className="absolute top-20 right-8 px-2 py-5 border-none bg-[#1a8917] color-white cursor-pointer rounded-2xl">
        Publish
      </button>
    </div>
  );
};

export default WritePage;
