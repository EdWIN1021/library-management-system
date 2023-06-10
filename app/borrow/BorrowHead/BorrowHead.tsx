"use client";

import { TableRow, TableHead, TableCell } from "@mui/material";

const BorrowHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Borrow Date</TableCell>
        <TableCell>Return Date</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default BorrowHead;
