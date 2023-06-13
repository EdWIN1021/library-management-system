import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { pwd, confirmPwd, email } = await request.json();

  if (pwd !== confirmPwd) {
    return NextResponse.json(
      {
        error: "The password and confirm password do not match.",
      },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(pwd, 10);

  const updatedPwd = await prisma.user.update({
    where: {
      email,
    },
    data: {
      hashedPassword,
    },
  });

  if (updatedPwd) {
    return NextResponse.json(
      {
        error: "Your password has been successfully reset.",
      },
      { status: 200 }
    );
  }
}
