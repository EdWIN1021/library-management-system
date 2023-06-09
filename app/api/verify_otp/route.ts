import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function POST(request: Request) {
  const { otp, email } = await request.json();

  console.log("asdadsadsadsad");
  console.log(otp);
  console.log(email);

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      otp: true,
    },
  });

  if (user?.otp === otp) {
    return NextResponse.json(
      {
        message: "Your verification code has been successfully verified.",
      },
      {
        status: 200,
      }
    );
  }

  return NextResponse.json(
    {
      message: "unauthorized",
    },
    {
      status: 400,
    }
  );
}
