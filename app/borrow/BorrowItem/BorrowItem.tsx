"use client";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { Borrow } from "@prisma/client";
import { useMemo } from "react";
import dayjs from "dayjs";
import { useMutation } from "react-query";
import { makePayment } from "@/app/lib/request";

const BorrowItem = ({ book }: { book: Borrow }) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: makePayment,
  });

  const lateFee = useMemo(
    () => (dayjs().diff(dayjs(book.returnDate), "day") * 0.99).toFixed(2),
    [book]
  );

  const quantity = useMemo(
    () => dayjs().diff(dayjs(book.returnDate), "day"),
    [book]
  );

  const onPay = async () => {
    await mutate(quantity, {
      onSuccess: (data: any) => {
        window.location.assign(data?.url);
      },
    });
  };

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

      {book?.return ? (
        <TableCell>{"Returned"}</TableCell>
      ) : (
        <TableCell>{"Expired"}</TableCell>
      )}

      {book?.return ? (
        <TableCell>{"$0"}</TableCell>
      ) : (
        <TableCell>${lateFee}</TableCell>
      )}

      {book?.return ? (
        <TableCell>
          <Button
            onClick={() => router.push(`/books/${book.bookId}`)}
            variant="outlined"
          >
            Detail
          </Button>
        </TableCell>
      ) : (
        <TableCell>
          <Button
            style={{ width: "82.39px" }}
            onClick={onPay}
            variant="outlined"
          >
            Pay
          </Button>
        </TableCell>
      )}
    </TableRow>
  );
};

export default BorrowItem;
