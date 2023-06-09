import { NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function POST(request: Request) {
  const body = await request.json();

  // bookId: '3',
  // title: 'To Kill a Mockingbird',
  // imageUrl: 'https://images.gr-assets.com/books/1361975680l/2657.jpg',
  // borrowDate: '2023-06-09T02:22:36.477Z',
  // returnDate: '2023-06-09T02:22:36.477Z',
  // userId: 'bb41b382-31e2-4018-afca-196335718602'

  console.log(body);

  const book = await prisma.borrow.create({
    data: body,
  });

  return NextResponse.json(book);
}
