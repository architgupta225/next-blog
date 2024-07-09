import Image from "next/image";
import React from "react";
import { Menu } from "../../components/menu/Menu";
import { Comments } from "../../components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

export default async function SinglePage({ params }) {
  const { slug } = params;

  const data = await getData(slug);
  return (
    <div className="container">
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl 2xl:text-6xl mb-12 font-bold">
            {data.title}
          </h1>
          <div className="flex items-center gap-5">
            {data?.user?.image && (
              <div className="w-12 h-12 relative">
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            )}
            <div className="flex flex-col gap-1 text-softTextColor">
              <span className="text-xl font-medium">{data?.user.name}</span>
              <span>01.01.24</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="flex-1 h-80 relative hidden lg:block">
            <Image src="/p1.jpeg" alt="" fill className="object-cover " />
          </div>
        )}
      </div>
      <div className="flex gap-12  mt-14">
        <div className="flex-[5]">
          <div className="" dangerouslySetInnerHTML={{ __html: data.desc }} />
          <div className="">
            <Comments postSlug={slug}  />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
