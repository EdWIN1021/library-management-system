"use client";
import styles from "./styles.module.scss";
import { QuoteProps } from "./type";

const Quote: React.FC<QuoteProps> = ({ book }) => {
  return (
    <div className={styles.quote}>
      <div>{book?.Quote1}</div>
      <div>- {book?.authors}</div>
    </div>
  );
};

export default Quote;
