"use client";

import { TableHead, TableRow, TableCell } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const CategoryHead: React.FC<{
  order: boolean;
  handleOrder: () => void;
}> = ({ order, handleOrder }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell>Title</TableCell>
        <TableCell>
          <div onClick={handleOrder}>
            {order ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}

            <span>rating</span>
          </div>
        </TableCell>
        <TableCell>Categories</TableCell>
        <TableCell>Format</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default CategoryHead;
