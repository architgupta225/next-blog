"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className="w-12 h-5 rounded-[50px] cursor-pointer flex bg-black items-center justify-between relative p-[1px]"
      onClick={toggle}
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={`z-10 rounded-[50%] w-4 h-4 bg-white absolute ${
          theme === "dark" ? "left-[2px] " : "right-[2px]"
        }`}
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};
