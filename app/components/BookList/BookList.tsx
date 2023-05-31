"use client";

import Image from "next/image";
import { Book } from "@/app/types";
import useFetch from "@/app/hooks/useFetch";
import styles from "./styles.module.scss";
import Rating from "@mui/material/Rating";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Button, Pagination } from "@mui/material";

const BookList = ({ categoryId }: { categoryId: string }) => {
  const { isLoading, data: books } = useFetch(
    `https://example-data.draftbit.com/books?q=${categoryId}&_page=1&_limit=20`
  );

  return (
    <>
      {!isLoading && (
        <div className={styles.bookList}>
          {books?.map((book: Book) => (
            <div className={styles.listItem} key={book.id}>
              <Image
                src={book?.image_url}
                alt="..book"
                width="100"
                height="150"
                priority
              />

              <div className={styles.title}>
                <div>{book?.title}</div>
                <div>{book?.authors}</div>
                <div className={styles.edition}>{book?.edition}</div>
              </div>

              <div className={styles.rating}>
                <Rating value={book?.rating} precision={0.5} readOnly />
              </div>

              <div className={styles.category}>
                <div>{book?.genres}</div>
              </div>

              <ul className={styles.format}>
                <li>
                  <CheckCircleIcon
                    className={styles.icon}
                    style={{ color: "#42bb4e" }}
                  />
                  Paperback
                </li>
                <li>
                  <CancelIcon
                    className={styles.icon}
                    style={{ color: "##4d4d4d" }}
                  />
                  Hardcover
                </li>
                <li>
                  <CancelIcon
                    className={styles.icon}
                    style={{ color: "#4d4d4d" }}
                  />
                  Mass Market Paperback
                </li>
              </ul>

              <div className={styles.favorite}>
                {/* <FavoriteIcon style={{ color: "#f34040" }} /> */}
                <FavoriteBorderIcon style={{ color: "#f34040" }} />
              </div>

              <Button className={styles.btn} variant="outlined">
                Detail
              </Button>
            </div>
          ))}
          <Pagination
            className={styles.pagination}
            count={10}
            color="primary"
          />
        </div>
      )}
    </>
  );
};

export default BookList;
