"use client";
import { RowProp } from "./type";
import BookItem from "../BookItem/BookItem";
import { Book } from "@/app/types";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";

const Row: React.FC<RowProp> = ({ books, type }) => {
  return (
    <div className={styles.row}>
      <h2 className={styles.type}>{type}</h2>
      <div className={styles.books}>
        {books?.map((book: Book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Row;
