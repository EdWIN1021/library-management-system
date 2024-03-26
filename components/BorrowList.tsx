"use client";

import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Divider,
  Grid,
  Link,
  Button,
} from "@mui/material";
import { Borrow } from "@prisma/client";
import BorrowHead from "./BorrowHead";
import BorrowItem from "./BorrowItem";
import { useMemo } from "react";
import dayjs from "dayjs";
import { useMutation } from "react-query";
import { makePayment } from "@/lib/request";

const BorrowList = ({ borrowList }: { borrowList: Borrow[] }) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: makePayment,
  });

  const quantity = useMemo(() => {
    return borrowList
      ?.filter(
        (borrow) =>
          dayjs().diff(dayjs(borrow.returnDate), "day") > 0 && !borrow.return
      )
      .reduce(
        (accumulator, currentValue) =>
          accumulator + dayjs().diff(dayjs(currentValue.returnDate), "day"),
        0
      );
  }, [borrowList]);

  const total = useMemo(() => (quantity * 0.99).toFixed(2), [quantity]);

  const onPay = async () => {
    await mutate(quantity, {
      onSuccess: (data: any) => {
        window.location.assign(data?.url);
      },
    });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <BorrowHead />
          <TableBody>
            {borrowList?.map((book: Borrow) => (
              <BorrowItem key={book?.bookId} book={book} />
            ))}
          </TableBody>
        </Table>

        <Divider />

        <Grid
          container
          className="text-[#ff8a00] text-xl p-2 items-center justify-between"
        >
          <Grid item>
            <span>Total: ${total}</span>
          </Grid>
          <Grid item>
            <Button onClick={onPay}>Checkout</Button>
          </Grid>
        </Grid>
      </TableContainer>
    </>
  );
};

export default BorrowList;
