"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <button
        className="w-[100px] border-none p-4 bg-[crimson] text-white cursor-pointer disabled:bg-[rgba(220,20,60,0.473)] disabled:cursor-not-allowed"
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className="w-[100px] border-none p-4 bg-[crimson] text-white cursor-pointer disabled:bg-[rgba(220,20,60,0.473)] disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};
