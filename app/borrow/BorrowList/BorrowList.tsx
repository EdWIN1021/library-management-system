"use client";

import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Divider,
  Grid,
  Link,
} from "@mui/material";
import { Borrow } from "@prisma/client";
import BorrowHead from "../BorrowHead/BorrowHead";
import BorrowItem from "../BorrowItem/BorrowItem";
import { useMemo } from "react";
import dayjs from "dayjs";
import styles from "./styles.module.scss";
import { useMutation } from "react-query";
import { makePayment } from "@/app/lib/request";

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
          justifyContent={"space-between"}
          className={styles.checkout}
        >
          <Grid item>
            <span className={styles.price}>Total: ${total}</span>
          </Grid>
          <Grid item>
            <Link style={{ cursor: "pointer" }} onClick={onPay}>
              Checkout
            </Link>
          </Grid>
        </Grid>
      </TableContainer>
    </>
  );
};

export default BorrowList;
