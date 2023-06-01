"use client";
import { Book } from "@/app/types";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const BookItem = ({ book }: { book: Book }) => {
  const router = useRouter();

  return (
    <div
      className={styles.book}
      onClick={() => router.push(`/books/${book?.id}`)}
    >
      <Image
        className={styles.image}
        src={book?.image_url}
        alt="..book"
        width="150"
        height="200"
        priority
      />

      <div className={styles.title}>{book?.title}</div>
      <div className={styles.author}>{book?.authors}</div>
      <div className={styles.rating}>
        {book?.rating}
        <span>/5</span>
      </div>
    </div>
  );
};

export default BookItem;
