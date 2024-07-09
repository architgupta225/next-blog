import React from "react";
import CardList from "../components/cardList/CardList";
import { Menu } from "../components/menu/Menu";

export default function BlogPage({ searchParams }) {
  const page = parseInt(searchParams) || 1;
  const { cat } = searchParams;
  return (
    <div className="">
      <h1 className="bg-[coral] text-white px-[10px] py-[5px] text-center mb-10 capitalize">
        {cat} Blog
      </h1>
      <div className="flex gap-12">
        <CardList cat={cat} page={page} />
        <Menu />
      </div>
    </div>
  );
}
