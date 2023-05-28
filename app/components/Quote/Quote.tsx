"use client";
import styles from "./styles.module.scss";
import { QuoteProps } from "./type";

const Quote: React.FC<QuoteProps> = ({ book }) => {
  return (
    <div className={styles.quote}>
      {book && (
        <>
          <h1>{book?.Quote1}</h1>
          <h2>- {book?.authors}</h2>
        </>
      )}
    </div>
  );
};

export default Quote;
