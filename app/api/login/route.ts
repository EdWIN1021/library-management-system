import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!isEmail(email)) {
    return NextResponse.json(
      {
        error: "Please enter a valid email address.",
      },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json(
      {
        error: "Please check your username and password.",
      },
      { status: 401 }
    );
  }

  const match = await bcrypt.compare(password, user.hashedPassword as string);

  if (match) {
    return NextResponse.json(
      {
        user,
      },
      {
        status: 200,
      }
    );
  }
}
