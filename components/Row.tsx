"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Book } from "@/types/types";
import { Grid } from "@mui/material";

interface RowProp {
  books: Book[];
  title: string;
}

const BookItem = dynamic(() => import("./BookItem"));

const Row: React.FC<RowProp> = ({ books, title }) => {
  return (
    <div className="bg-white p-5">
      <div className="flex justify-between items-center mb-5 text-[#4d4d4d]">
        <h2 className="text-2xl">{title}</h2>
        <Link className="text-md" href={`category/${title.toLowerCase()}`}>
          More
        </Link>
      </div>

      <Grid
        container
        spacing={2}
        columns={{ xs: 12, sm: 12, md: 12 }}
        justifyContent={"center"}
      >
        {books?.map((book: Book) => (
          <Grid
            item
            key={book.id}
            xs={12}
            sm={4}
            md={2}
            className="flex justify-center"
          >
            <BookItem book={book} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Row;
