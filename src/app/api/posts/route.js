import { NextResponse } from "next/server";
import prisma from "../../../utils/connect";

export const GET = async () => {
  try {
    const posts = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};