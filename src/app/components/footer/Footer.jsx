import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-softTextColor py-5">
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="lama blog" width={50} height={50} />
          <h1 className="text-2xl">Archit Blog</h1>
        </div>
        <p className="font-light ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          asperiores debitis in laudantium ratione explicabo omnis
          necessitatibus molestias facere, quae a numquam ut laboriosam laborum
          consequuntur dolorum, quibusdam magnam soluta!
        </p>
        <div className="mt-2 flex gap-2">
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className="flex-1 flex justify-between w-full sm:gap-7 md:justify-end md:gap-12 lg:gap-28">
        <div className="flex flex-col gap-2 font-light">
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-2 font-light">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-2 font-light">
          <span className="font-bold">Social</span>
          <Link href="/">facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};
