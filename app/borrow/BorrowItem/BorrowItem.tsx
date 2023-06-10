"use client";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { Borrow } from "@prisma/client";

const BorrowItem = ({ book }: { book: Borrow }) => {
  const router = useRouter();
  return (
    <TableRow>
      <TableCell>
        <Image
          src={book?.imageUrl}
          alt="..book"
          width="100"
          height="150"
          priority
        />
      </TableCell>

      <TableCell>{book?.title}</TableCell>
      <TableCell>{book?.borrowDate.toString().split("T")[0]}</TableCell>
      <TableCell>{book?.returnDate.toString().split("T")[0]}</TableCell>

      <TableCell>
        <Button
          onClick={() => router.push(`/books/${book.bookId}`)}
          variant="outlined"
        >
          Detail
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default BorrowItem;
