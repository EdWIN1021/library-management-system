import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export async function POST(request: Request, res: Response) {
  const { email, password, username, confirmPwd } = await request.json();

  const user = await prisma.user.findFirst({ where: { email } });

  if (!isEmail(email)) {
    return NextResponse.json(
      {
        error: "Please enter a valid email address.",
      },
      { status: 400 }
    );
  }

  if (user) {
    return NextResponse.json(
      {
        error:
          "User already exists. Please choose a different email or username.",
      },
      { status: 409 }
    );
  }

  if (password !== confirmPwd) {
    return NextResponse.json(
      {
        error: "The password and confirm password do not match.",
      },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      id: uuidv4(),
      username,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(
    {
      message: "Congratulations! You have successfully signed up.",
    },
    {
      status: 201,
    }
  );
}
