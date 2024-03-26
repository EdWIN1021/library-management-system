"use client";
import { Book } from "@/types/types";
import Image from "next/image";

const BookImage = ({ book }: { book: Book }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={book?.image_url} alt="book..." width={200} height={250} />

      <div className="mt-5">
        <p className="text-xl mb-5">Quotes:</p>
        <ul className="flex flex-col gap-3">
          <li>{book?.Quote1}</li>
          <li>{book?.Quote2}</li>
          <li>{book?.Quote3}</li>
        </ul>
      </div>
    </div>
  );
};

export default BookImage;
