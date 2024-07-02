import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="text-softBg p-7 md:px-12 md:py-24 lg:px-36 lg:py-36 flex flex-col gap-12 rounded-lg">
        <div className="p-5 rounded-md border-none text-white text-sm md:text-base font-normal md:font-bold cursor-pointer flex justify-center items-center bg-[#ff5555]">
          Sign in with Google
        </div>
        <div className="p-5 rounded-md border-none text-white text-sm md:text-base font-normal md:font-bold cursor-pointer flex justify-center items-center bg-[#111]">
          Sign in with GitHub
        </div>
        <div className="p-5 rounded-md border-none text-white text-sm md:text-base font-normal md:font-bold cursor-pointer flex justify-center items-center bg-[#087BEA]">
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
}
