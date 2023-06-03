"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Image from "next/image";
import { Book, User } from "@/app/types";
import styles from "./styles.module.scss";
import Rating from "@mui/material/Rating";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

import { Button, Pagination } from "@mui/material";
import useFetch from "@/app/hooks/useFetch";

const BookList = ({
  books,
  session,
}: {
  books: Book[];
  session: Session | null;
}) => {
  const router = useRouter();
  const user = session?.user as User;


  const handleChangePage = (event: unknown, newPage: number) => {};

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {};

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, maxWidth: 1400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell></TableCell>

            <TableCell>Rating</TableCell>
            <TableCell>Categories</TableCell>
            <TableCell>Format</TableCell>
            {session && <TableCell>Favoirte</TableCell>}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {books?.map((book) => (
            <TableRow key={book.id}>
              <TableCell>
                <Image
                  src={book?.image_url}
                  alt="..book"
                  width="100"
                  height="150"
                  priority
                />
              </TableCell>

              <TableCell>
                <div className={styles.title}>
                  <div>{book?.title}</div>
                  <div>{book?.authors}</div>
                  <div className={styles.edition}>{book?.edition}</div>
                </div>
              </TableCell>

              <TableCell>
                <div className={styles.rating}>
                  <Rating value={book?.rating} precision={0.5} readOnly />
                </div>
              </TableCell>
              <TableCell>{book?.genres}</TableCell>
              <TableCell>{book?.format}</TableCell>

              <TableCell>
                <Button
                  className={styles.btn}
                  onClick={() => router.push(`/books/${book.id}`)}
                  variant="outlined"
                >
                  Detail
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination className={styles.pagination} count={10} color="primary" />
    </TableContainer>
  );
};

export default BookList;
