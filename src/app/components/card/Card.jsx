import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ key, item }) => {
  return (
    <div className="mb-12 flex items-center gap-12" key={key}>
      {item.img && (
        <div className="flex-1 h-80 relative hidden lg:block">
          <Image src={item.img} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-5">
        <div>
          <span className="text-gray">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-[crimson] font-semibold">{item.catSlug}</span>
        </div>
        <Link href="/">
          <h1 className="text-xl font-bold">{item.title}</h1>
        </Link>
        <p className="text-[18px] font-light text-softTextColor">
          {item.desc.substring(0, 60)}
        </p>
        <Link
          href={`/posts/${item.slug}`}
          className="border-b border-[crimson] w-max px-0.5"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
