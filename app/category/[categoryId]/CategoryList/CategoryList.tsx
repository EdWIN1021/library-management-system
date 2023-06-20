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
import { useEffect, useState } from "react";

const CategoryList = ({ books }: { books: Book[] }) => {
  const [page, setPage] = useState(1);
  const [volumes, setVolumes] = useState<Book[]>(books);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {}, [page]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <CategoryHead />
        <TableBody>
          {volumes?.map(
            (volume: Book) =>
              volume.id && <CategoryItem key={volume.id} book={volume} />
          )}
        </TableBody>
      </Table>

      <Pagination
        className={styles.pagination}
        count={10}
        color="primary"
        onChange={handleChangePage}
      />
    </TableContainer>
  );
};

export default CategoryList;
