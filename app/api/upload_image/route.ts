import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function POST(request: NextRequest) {
  const { email, imageId } = await request.json();

  const updateImage = await prisma.user.update({
    where: {
      email,
    },
    data: {
      image: imageId,
    },
  });

  return NextResponse.json(
    {
      message: "image",
    },
    {
      status: 200,
    }
  );
}
