import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Comments = () => {
  const status = "authenticated";
  return (
    <div className="mt-14">
      <div className="text-softTextColor mb-7">Comments</div>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-7">
          <textarea
            placeholder="write a comment"
            className="p-5 w-full"
          ></textarea>
          <button className="px-5 py-4 bg-[teal] text-white font-bold border-none rounded-[5px] cursor-pointer">
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="mt-12">
        <div className="mb-12">
          <div className="flex items-center gap-5 mb-5">
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col gap-1 text-softTextColor">
              <span className="font-medium ">John Doe</span>
              <span className="text-sm font-light">01.01.23</span>
            </div>
          </div>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero rem
            debitis quibusdam ea quod laborum possimus, laboriosam iusto tempora
            sint et saepe quia. Doloremque inventore quaerat veritatis delectus
            corporis quas!
          </p>
        </div>
        <div className="mb-12">
          <div className="flex items-center gap-5 mb-5">
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col gap-1 text-softTextColor">
              <span className="font-medium ">John Doe</span>
              <span className="text-sm font-light">01.01.23</span>
            </div>
          </div>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero rem
            debitis quibusdam ea quod laborum possimus, laboriosam iusto tempora
            sint et saepe quia. Doloremque inventore quaerat veritatis delectus
            corporis quas!
          </p>
        </div>
        <div className="mb-12">
          <div className="flex items-center gap-5 mb-5">
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col gap-1 text-softTextColor">
              <span className="font-medium ">John Doe</span>
              <span className="text-sm font-light">01.01.23</span>
            </div>
          </div>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero rem
            debitis quibusdam ea quod laborum possimus, laboriosam iusto tempora
            sint et saepe quia. Doloremque inventore quaerat veritatis delectus
            corporis quas!
          </p>
        </div>
        <div className="mb-12">
          <div className="flex items-center gap-5 mb-5">
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col gap-1 text-softTextColor">
              <span className="font-medium ">John Doe</span>
              <span className="text-sm font-light">01.01.23</span>
            </div>
          </div>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero rem
            debitis quibusdam ea quod laborum possimus, laboriosam iusto tempora
            sint et saepe quia. Doloremque inventore quaerat veritatis delectus
            corporis quas!
          </p>
        </div>
      </div>
    </div>
  );
};
