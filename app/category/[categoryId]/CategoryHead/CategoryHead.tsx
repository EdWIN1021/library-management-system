"use client";

import { TableHead, TableRow, TableCell } from "@mui/material";
const CategoryHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Rating</TableCell>
        <TableCell>Categories</TableCell>
        <TableCell>Format</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default CategoryHead;
