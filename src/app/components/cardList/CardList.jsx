import React from "react";
import { Pagination } from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

const getData = async (page ,cat) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CardList = async ({ page ,cat }) => {
  const { posts, count } = await getData(page,cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="flex-[5]">
      <h1 className="mb-12 text-3xl font-bold">Recent Posts</h1>
      <div>
        {posts?.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
