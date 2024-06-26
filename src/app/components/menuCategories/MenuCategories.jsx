import Link from "next/link";
import React from "react";

export const MenuCategories = () => {
  const contentClassMapping = {
    style: "bg-[#57c4ff31]",
    travel: "bg-[#ff795736]",
    coding: "bg-[#5e4fff31]",
    culture: "bg-[#ffb04f45]",
    food: "bg-[#7fb88133]",
    fashion: "bg-[#da85c731]",
  };

  return (
    <div className="mt-9 mb-14 flex flex-wrap gap-5 ">
      <Link
        href="/blog?cat=style"
        className={`px-[25px] py-[10px] rounded-lg text-sm  ${contentClassMapping["travel"]}`}
      >
        Travel
      </Link>
      <Link
        href="/blog?cat=style"
        className={`px-[25px] py-[10px] rounded-lg text-sm  ${contentClassMapping["coding"]}`}
      >
        Coding
      </Link>
      <Link
        href="/blog?cat=style"
        className={`px-[25px] py-[10px] rounded-lg text-sm  ${contentClassMapping["food"]}`}
      >
        Food
      </Link>
      <Link
        href="/blog?cat=style"
        className={`px-[25px] py-[10px] rounded-lg text-sm  ${contentClassMapping["culture"]}`}
      >
        Culture
      </Link>
      <Link
        href="/blog?cat=style"
        className={`px-[25px] py-[10px] rounded-lg text-sm  ${contentClassMapping["style"]}`}
      >
        Style
      </Link>
      <Link
        href="/blog?cat=style"
        className={`px-[25px] py-[10px] rounded-lg text-sm  ${contentClassMapping["fashion"]}`}
      >
        Fashion
      </Link>
    </div>
  );
};
