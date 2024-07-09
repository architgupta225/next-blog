import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("${process.env.NEXTAUTH_URL}/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

export const CategoryList = async () => {
  const data = await getData();
  return (
    <div>
      <h1 className="my-12 text-3xl font-bold">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        {data?.map((item) => {
          let bgColor = "";
          switch (item.title.toLowerCase()) {
            case "style":
              bgColor = "bg-[#57c4ff31]";
              break;
            case "fashion":
              bgColor = "bg-[#da85c731]";
              break;
            case "travel":
              bgColor = "bg-[#da85c731]";
              break;
            case "culture":
              bgColor = "bg-[#da85c731]";
              break;
            case "coding":
              bgColor = "bg-[#da85c731]";
              break;
            default:
              bgColor = "bg-[#7fb88133]";
          }

          return (
            <Link
              href={`/blog?cat=${item.title}`}
              className={`flex items-center gap-[10px] justify-center w-[100%]
        sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 rounded-[10px] capitalize ${bgColor}`}
              key={item._id}
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-full w-8 h-8"
                />
              )}
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};