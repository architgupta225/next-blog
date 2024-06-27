import Image from "next/image";
import React from "react";
import { Menu } from "../components/menu/Menu";

export default function SinglePage() {
  return (
    <div className="container">
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <h1 className="text-6xl mb-12">
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
        <div className="flex-1 h-80 relative">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="flex gap-12">
        <div className="flex-[5] mt-14">
          <div className="">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              omnis aut hic aspernatur exercitationem voluptatum facilis
              praesentium, a quibusdam dicta cupiditate, numquam delectus
              excepturi voluptatem sint inventore suscipit corrupti libero.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              omnis aut hic aspernatur exercitationem voluptatum facilis
              praesentium, a quibusdam dicta cupiditate, numquam delectus
              excepturi voluptatem sint inventore suscipit corrupti libero.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              omnis aut hic aspernatur exercitationem voluptatum facilis
              praesentium, a quibusdam dicta cupiditate, numquam delectus
              excepturi voluptatem sint inventore suscipit corrupti libero.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              omnis aut hic aspernatur exercitationem voluptatum facilis
              praesentium, a quibusdam dicta cupiditate, numquam delectus
              excepturi voluptatem sint inventore suscipit corrupti libero.
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
