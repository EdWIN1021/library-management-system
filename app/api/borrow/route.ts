import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function POST(request: Request) {
  const body = await request.json();

  const res = await prisma.borrow.create({
    data: body,
  });

  return NextResponse.json({ test: "test" });
}
