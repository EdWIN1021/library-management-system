"use client";

import { Book } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BookItem = ({ book }: { book: Book }) => {
  const router = useRouter();

  return (
    <div
      className="w-[200px] cursor-pointer"
      onClick={() => router.push(`/books/${book?.id}`)}
    >
      <Image
        className="w-full h-[250px] mb-3"
        src={book?.image_url}
        alt="..book"
        width={150}
        height={200}
      />

      <div className="overflow-hidden text-ellipsis text-nowrap">
        {book?.title}
      </div>
      <div className="overflow-hidden text-ellipsis text-nowrap">
        {book?.authors}
      </div>
      <div className="text-sm">
        {book?.rating}
        <span className="text-[#A7A7A7]">/5</span>
      </div>
    </div>
  );
};

export default BookItem;
