"use client";

import { Button, Rating, TableRow, TableCell } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Book } from "@/types/types";

const CategoryItem = ({ book }: { book: Book }) => {
  const router = useRouter();

  return (
    <TableRow>
      <TableCell>
        <Image
          src={book?.image_url}
          alt="..book"
          width="100"
          height="150"
          priority
        />
      </TableCell>

      <TableCell>
        <div>
          <div>{book?.title}</div>
          <div>{book?.authors}</div>
          <div>{book?.edition}</div>
        </div>
      </TableCell>

      <TableCell>
        <div>
          <Rating value={book?.rating} precision={0.05} readOnly />
        </div>
      </TableCell>
      <TableCell>{book?.genres}</TableCell>
      <TableCell>{book?.format}</TableCell>

      <TableCell>
        <Button
          onClick={() => router.push(`/books/${book.id}`)}
          variant="outlined"
        >
          Detail
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CategoryItem;
