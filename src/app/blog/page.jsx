import React from "react";
import CardList from "../components/cardList/CardList";
import { Menu } from "../components/menu/Menu";

export default function BlogPage() {
  return (
    <div className="">
      <h1 className="bg-[coral] text-white px-[10px] py-[5px] text-center mb-10">
        Style Blog
      </h1>
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
