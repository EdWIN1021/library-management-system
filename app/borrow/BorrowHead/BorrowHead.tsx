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
        <TableCell>Status</TableCell>
        <TableCell>Late fee</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default BorrowHead;
