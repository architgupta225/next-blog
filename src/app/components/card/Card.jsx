import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ key , item }) => {
  return (
    <div className="mb-12 flex items-center gap-12" key={key}>
      <div className="flex-1 h-80 relative hidden lg:block">
        <Image src="/p1.jpeg" alt="" fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <div>
          <span className="text-gray">11.02.23 - </span>
          <span className="text-[crimson] font-semibold">CULTURE</span>
        </div>
        <Link href="/">
          <h1 className="text-xl font-bold">
            {item.title}
          </h1>
        </Link>
        <p className="text-[18px] font-light text-softTextColor">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt aliquid
          sed iusto sint beatae accusantium praesentium odio, optio consequatur
          deleniti quia, dolorem laborum dolores dolor id? Explicabo officia vel
          molestiae.
        </p>
        <Link href="/" className="border-b border-[crimson] w-max px-0.5">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
