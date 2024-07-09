"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";

let getStorage, ref, uploadBytesResumable, getDownloadURL;
if (typeof window !== "undefined") {
  const firebaseStorage = require("firebase/storage");
  getStorage = firebaseStorage.getStorage;
  ref = firebaseStorage.ref;
  uploadBytesResumable = firebaseStorage.uploadBytesResumable;
  getDownloadURL = firebaseStorage.getDownloadURL;
}

import { app } from "../../utils/firebase";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (file && typeof window !== "undefined") {
      const storage = getStorage(app);
      const upload = () => {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            console.error("Upload failed:", error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL);
            });
          }
        );
      };

      upload();
    }
  }, [file]);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col relative">
      <input
        type="text"
        placeholder="Title"
        className="p-12 text-6xl border-none outline-none bg-transparent placeholder:text-[#b3b3b1] text-textColor"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="mb-12 px-5 py-2 w-max ml-12 bg-softBg"
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className="flex gap-5 h-[700px] relative">
        <button
          className="w-9 h-9 rounded-full bg-transparent border-solid border-textColor flex justify-center items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Image src="/plus.png" width={16} height={16} />
        </button>
        {open && (
          <div className="flex gap-5 bg-bg absolute z-10 w-full left-12">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
            />
            <button className="w-9 h-9 rounded-full bg-transparent border-solid border-textColor flex justify-center items-center cursor-pointer border-[#1a8917]">
              <label htmlFor="image">
                <Image src="/image.png" width={16} height={16} />
              </label>
            </button>
            <button className="w-9 h-9 rounded-full bg-transparent border-solid border-textColor flex justify-center items-center cursor-pointer border-[#1a8917]">
              <Image src="/external.png" width={16} height={16} />
            </button>
            <button className="w-9 h-9 rounded-full bg-transparent border-solid border-textColor flex justify-center items-center cursor-pointer border-[#1a8917]">
              <Image src="/video.png" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          className="w-full"
        />
      </div>
      <button
        className="absolute top-0 right-8 px-2 py-5 border-none bg-[#1a8917] color-white 
      cursor-pointer rounded-2xl"
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
