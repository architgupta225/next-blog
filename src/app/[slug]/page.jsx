import Image from "next/image";
import React from "react";
import { Menu } from "../components/menu/Menu";
import { Comments } from "../components/comments/Comments";

export default function SinglePage() {
  return (
    <div className="container">
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl 2xl:text-6xl mb-12 font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 relative">
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col gap-1 text-softTextColor">
              <span className="text-xl font-medium">John Doe</span>
              <span>01.01.24</span>
            </div>
          </div>
        </div>
        <div className="flex-1 h-80 relative hidden lg:block">
          <Image src="/p1.jpeg" alt="" fill className="object-cover " />
        </div>
      </div>
      <div className="flex gap-12  mt-14">
        <div className="flex-[5]">
          <div className="">
            <p className="mb-5 text-lg sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              omnis aut hic aspernatur exercitationem voluptatum facilis
              praesentium, a quibusdam dicta cupiditate, numquam delectus
              excepturi voluptatem sint inventore suscipit corrupti libero.
            </p>
            <p className="mb-5 text-lg sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              omnis aut hic aspernatur exercitationem voluptatum facilis
              praesentium, a quibusdam dicta cupiditate, numquam delectus
              excepturi voluptatem sint inventore suscipit corrupti libero.
            </p>
            <p className="mb-5 text-lg sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              omnis aut hic aspernatur exercitationem voluptatum facilis
              praesentium, a quibusdam dicta cupiditate, numquam delectus
              excepturi voluptatem sint inventore suscipit corrupti libero.
            </p>
            <p className="mb-5 text-lg sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              omnis aut hic aspernatur exercitationem voluptatum facilis
              praesentium, a quibusdam dicta cupiditate, numquam delectus
              excepturi voluptatem sint inventore suscipit corrupti libero.
            </p>
            <div className="">
              <Comments />
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
