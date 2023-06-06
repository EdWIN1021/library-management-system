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
import { User } from "@/app/types";
import { Borrow } from "@prisma/client";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const BorrowList = ({ session }: { session: Session | null }) => {
  const user = session?.user as User;
  const { isLoading, data: books } = useFetch(
    `/api/borrowList?userId=${user?.id}`
  );

  const router = useRouter();

  return (
    <TableContainer component={Paper} style={{ paddingTop: "35px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Borrow Date</TableCell>
            <TableCell>Return Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {books?.map((book: Borrow) => (
            <TableRow key={book?.bookId}>
              <TableCell>
                <Image
                  src={book?.imageUrl}
                  alt="..book"
                  width="100"
                  height="150"
                  priority
                />
              </TableCell>

              <TableCell>{book?.title}</TableCell>
              <TableCell>{book?.borrowDate.toString().split("T")[0]}</TableCell>
              <TableCell>{book?.returnDate.toString().split("T")[0]}</TableCell>

              <TableCell>
                <Button
                  onClick={() => router.push(`/books/${book.bookId}`)}
                  variant="outlined"
                >
                  Detail
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BorrowList;
