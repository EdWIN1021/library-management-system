"use client";

import dynamic from "next/dynamic";
import { RowProp } from "./type";
// import BookItem from "../BookItem/BookItem";
import { Book } from "@/app/types";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Typography } from "@mui/material";

const BookItem = dynamic(() => import("../BookItem/BookItem"));

const Row: React.FC<RowProp> = ({ books, categoryId }) => {
  return (
    <div className={styles.category}>
      <div className={styles.header}>
        <h2 className={styles.title}>{categoryId}</h2>
        <Link href={`category/${categoryId.toLowerCase()}`}>More</Link>
      </div>

      <div className={styles.books}>
        {books?.map((book: Book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Row;
