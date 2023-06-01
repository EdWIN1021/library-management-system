"use client";
import { Book } from "@/app/types";
import Image from "next/image";
import styles from "./styles.module.scss";

const BookImage = ({ book }: { book: Book }) => {
  return (
    <div className={styles.contianer}>
      <Image
        src={book?.image_url || ""}
        alt="book..."
        width="200"
        height="250"
        priority
      />
    </div>
  );
};

export default BookImage;
