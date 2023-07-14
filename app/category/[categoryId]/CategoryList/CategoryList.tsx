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
  const [order, setOrder] = useState(true);

  const {
    data: books,
    isLoading,
    refetch,
  } = useQuery({
    queryFn: () => getBooks(page, categoryId, order),
    enabled: false,
  });

  console.log(books);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    refetch();
  }, [page, order]);

  return (
    <>
      {!isLoading && (
        <TableContainer component={Paper}>
          <Table>
            <CategoryHead
              order={order}
              handleOrder={() => setOrder((value) => !value)}
            />
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
