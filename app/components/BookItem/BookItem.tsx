"use client";
import { Book } from "@/app/types";
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

      <ul>
        <li className={styles.title}>{book?.title}</li>
        <li className={styles.author}>{book?.authors}</li>
        <li className={styles.rating}>
          {book?.rating}
          <span>/5</span>
        </li>
      </ul>
    </div>
  );
};

export default BookItem;
