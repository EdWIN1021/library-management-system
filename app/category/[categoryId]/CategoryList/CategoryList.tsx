"use client";

import styles from "./styles.module.scss";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Pagination,
} from "@mui/material";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Book } from "@/app/types";
import { useRouter } from "next/navigation";

const CategoryList = ({ books }: { books: Book[] }) => {
  const handleChangePage = (event: unknown, newPage: number) => {};

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {};

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Categories</TableCell>
            <TableCell>Format</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {books?.map((book) => (
            <CategoryItem key={book.id} book={book} />
          ))}
        </TableBody>
      </Table>

      <Pagination className={styles.pagination} count={10} color="primary" />
    </TableContainer>
  );
};

export default CategoryList;
