import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuPosts } from "../menuPosts/MenuPosts";
import { MenuCategories } from "../menuCategories/MenuCategories";

export const Menu = () => {
  return (
    <div className="flex-[2]">
      <h2 className="text-gray text-base font-normal ">What's hot</h2>
      <h1 className="text-2xl">Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className="text-gray text-base font-normal ">Discover by topic</h2>
      <h1 className="text-2xl">Categories</h1>
      <MenuCategories />

      <h2 className="text-gray text-base font-normal ">Choosen by editor</h2>
      <h1 className="text-2xl">Editors pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};
