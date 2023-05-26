"use client";
import { Book } from "@/app/types";
import Button from "@mui/material/Button";
import Image from "next/image";
import styles from "./styles.module.scss";

const BookItem = ({ book }: { book: Book }) => {
  return (
    <div>
      <Image
        className={styles.image}
        src={book?.image_url}
        alt="..book"
        width="150"
        height="200"
        priority
      />
      <Button>info</Button>
    </div>
  );
};

export default BookItem;
