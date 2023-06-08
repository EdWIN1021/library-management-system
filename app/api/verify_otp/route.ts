import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function POST(request: Request) {
  const { otp } = await request.json();

  console.log(otp);

  return NextResponse.json(
    {
      message: "hi",
    },
    {
      status: 200,
    }
  );
}
