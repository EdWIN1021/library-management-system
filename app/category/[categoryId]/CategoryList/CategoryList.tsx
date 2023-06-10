"use client";

import styles from "./styles.module.scss";
import {
  Paper,
  TableContainer,
  TableBody,
  Table,
  Pagination,
} from "@mui/material";
import CategoryHead from "../CategoryHead/CategoryHead";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Book } from "@/app/types";

const CategoryList = ({ books }: { books: Book[] }) => {
  const handleChangePage = (event: unknown, newPage: number) => {};

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {};

  return (
    <TableContainer component={Paper}>
      <Table>
        <CategoryHead />
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
