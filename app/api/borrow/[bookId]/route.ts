import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/prisma/db";

export async function GET(request: NextRequest) {
  const { searchParams, pathname } = new URL(request.url);
  const userId = searchParams?.get("userId") || "";
  const bookId = pathname.split("/")[pathname.split("/").length - 1];

  const borrowed = await prisma.borrow.findFirst({
    where: { bookId: bookId, userId: userId },
  });

  return NextResponse.json(borrowed);
}
