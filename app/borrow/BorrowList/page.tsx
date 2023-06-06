"use client";

import { Session } from "next-auth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import useFetch from "@/app/hooks/useFetch";
import styles from "./styles.module.scss";
import { User } from "@/app/types";
import { Borrow } from "@prisma/client";

const BorrowList = ({ session }: { session: Session | null }) => {
  const user = session?.user as User;
  const { isLoading, data: books } = useFetch(
    `/api/borrowList?userId=${user?.id}`
  );

  console.log(books);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
          {/* {books?.map((book: Borrow) => (
            <TableRow key={book?.bookId}>
              <TableCell>
                <Image
                  src={book?.image_url}
                  alt="..book"
                  width="100"
                  height="150"
                  priority
                />
              </TableCell>

              <TableCell>{book?.genres}</TableCell>
              <TableCell>{book?.format}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BorrowList;
