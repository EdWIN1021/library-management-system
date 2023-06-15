import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function POST(request: NextRequest) {
  const { email, imagefile } = await request.json();

  const updateImage = await prisma.user.update({
    where: {
      email,
    },
    data: {
      image: imagefile,
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
