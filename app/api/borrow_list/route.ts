import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/prisma/db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId") || "";

  const list = await prisma.borrow.findMany({ where: { userId: userId } });

  return NextResponse.json(list);
}
