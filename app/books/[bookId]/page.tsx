"use client";
import { getBook } from "@/app/lib/genres";
import Image from "next/image";

const Book = async ({ params }: { params: { bookId: string } }) => {
  const book = await getBook(params.bookId);

  console.log("asdadss");

  return (
    <div>
      <div>
        <Image
          src={book?.image_url || ""}
          alt="book..."
          width="250"
          height="300"
          priority
        />
      </div>

      <div></div>
    </div>
  );
};

export default Book;
