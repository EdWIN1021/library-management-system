import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/prisma/db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  console.log("runs");

  return NextResponse.json([]);
}
