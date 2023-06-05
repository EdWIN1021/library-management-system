"use client";
import { Book } from "@/app/types";
import Image from "next/image";
import styles from "./styles.module.scss";

const BookImage = ({ book }: { book: Book }) => {
  return (
    <div className={styles.contianer}>
      <div className={styles.image_wrapper}>
        <Image
          src={book?.image_url || ""}
          alt="book..."
          width="200"
          height="250"
          priority
        />

        <div className={styles.quotes}>
          <div>Quotes:</div>
          <ul>
            <li>{book?.Quote1}</li>
            <li>{book?.Quote2}</li>
            <li>{book?.Quote3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookImage;
