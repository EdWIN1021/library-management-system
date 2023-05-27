"use client";
import { useMemo } from "react";
import styles from "./styles.module.scss";
import { QuoteProps } from "./type";

const Quote: React.FC<QuoteProps> = ({ book }) => {
  console.log(book);

  const quote = useMemo(() => book.Quote1, [book]);

  return (
    <div className={styles.quote}>
      <div>{quote}</div>

      <div>- {book.authors}</div>
    </div>
  );
};

export default Quote;
