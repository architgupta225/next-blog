import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MenuPosts = ({ withImage }) => {
  const contentClassMapping = {
    travel: "bg-[#ff7857]",
    coding: "bg-[#775aec]",
    culture: "bg-[#ffb14f]",
    food: "bg-[#7fb881]",
    fashion: "bg-[#ff7887]",
  };

  return (
    <div className="flex flex-col gap-9 mt-[35px] mb-[60px]">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 relative aspect-square">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-[lightgray] border-[3px] object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1 ">
          <span
            className={`py-[3px] px-[8px] text-xs text-white w-max rounded-[10px] ${contentClassMapping["travel"]}`}
          >
            Travel
          </span>
          <h3 className="text-lg font-medium text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="gap-4 flex text-xs">
            <span>John Doe</span>
            <span className="text-gray-400">11.02.23</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 relative aspect-square">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-[lightgray] border-[3px] object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1 ">
          <span
            className={`py-[3px] px-[8px] text-xs text-white w-max rounded-[10px] ${contentClassMapping["coding"]}`}
          >
            Travel
          </span>
          <h3 className="text-lg font-medium text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="gap-4 flex text-xs">
            <span>John Doe</span>
            <span className="text-gray-400">11.02.23</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 relative aspect-square">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-[lightgray] border-[3px] object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1 ">
          <span
            className={`py-[3px] px-[8px] text-xs text-white w-max rounded-[10px] ${contentClassMapping["food"]}`}
          >
            Travel
          </span>
          <h3 className="text-lg font-medium text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="gap-4 flex text-xs">
            <span>John Doe</span>
            <span className="text-gray-400">11.02.23</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 relative aspect-square">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-[lightgray] border-[3px] object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1 ">
          <span
            className={`py-[3px] px-[8px] text-xs text-white w-max rounded-[10px] ${contentClassMapping["culture"]}`}
          >
            Travel
          </span>
          <h3 className="text-lg font-medium text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="gap-4 flex text-xs">
            <span>John Doe</span>
            <span className="text-gray-400">11.02.23</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
