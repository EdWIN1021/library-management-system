"use client";

import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import { Borrow } from "@prisma/client";
import BorrowHead from "../BorrowHead/BorrowHead";
import BorrowItem from "../BorrowItem/BorrowItem";

const BorrowList = ({ borrowList }: { borrowList: Borrow[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <BorrowHead />
        <TableBody>
          {borrowList?.map((book: Borrow) => (
            <BorrowItem key={book?.bookId} book={book} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BorrowList;
