"use client";
import { RowProp } from "./type";
import BookItem from "../BookItem/BookItem";
import { Book } from "@/app/types";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";

const Row: React.FC<RowProp> = ({ books, type }) => {
  return (
    <>
      <h2>{type}</h2>
      <div className={styles.row}>
        {books?.map((book: Book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default Row;
