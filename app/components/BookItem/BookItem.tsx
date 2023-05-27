"use client";
import { Book } from "@/app/types";
import Button from "@mui/material/Button";
import Image from "next/image";
import styles from "./styles.module.scss";

const BookItem = ({ book }: { book: Book }) => {
  return (
    <div className={styles.book}>
      <Image
        className={styles.image}
        src={book?.image_url}
        alt="..book"
        width="150"
        height="200"
        priority
      />
      <div className={styles.title}>{book.title}</div>
      <div>{book.authors}</div>
      <div>{book.rating}/5</div>
    </div>
  );
};

export default BookItem;
