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
import { getBooks } from "@/app/lib/request";
import { useQuery } from "react-query";

const CategoryList = ({ categoryId }: { categoryId: string }) => {
  const [page, setPage] = useState(1);

  const {
    data: books,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: () => getBooks(page, categoryId),
    enabled: false,
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    refetch();
  }, [page]);

  return (
    <>
      {!isLoading && (
        <TableContainer component={Paper}>
          <Table>
            <CategoryHead />
            <TableBody>
              {books?.map(
                (book: Book) =>
                  book.id && <CategoryItem key={book.id} book={book} />
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
      )}
    </>
  );
};

export default CategoryList;
