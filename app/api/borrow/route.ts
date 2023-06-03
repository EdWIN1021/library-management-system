import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function POST(request: Request) {
  const body = await request.json();

  console.log(body);

  return NextResponse.json({ test: "test" });
}
