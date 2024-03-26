"use client";

import {
  Paper,
  TableContainer,
  TableBody,
  Table,
  Pagination,
} from "@mui/material";
import CategoryHead from "./CategoryHead";
import CategoryItem from "./CategoryItem";
import { Book } from "@/types/types";
import { useEffect, useState } from "react";
import { getBooks } from "@/lib/request";
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

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    refetch();
  }, [page, order]);

  return (
    <>
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

        <div className="flex justify-center my-5">
          <Pagination
            className="justify-center"
            count={10}
            color="primary"
            onChange={handleChangePage}
          />
        </div>
      </TableContainer>
    </>
  );
};

export default CategoryList;
