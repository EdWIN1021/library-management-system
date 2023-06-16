import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function POST(request: Request) {
  return NextResponse.json(
    {
      message: "pay",
    },
    { status: 200 }
  );
}
