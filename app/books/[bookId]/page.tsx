import { getBook } from "@/app/lib/genres";
import styles from "./styles.module.scss";

import BookImage from "./BookImage/BookImage";
import BookDetail from "./BookDetail/BookDetail";

const Book = async ({ params }: { params: { bookId: string } }) => {
  const book = await getBook(params.bookId);

  return (
    <div className={styles.book}>
      <BookImage book={book} />
      <BookDetail book={book} />
    </div>
  );
};

export default Book;
