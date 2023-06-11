"use client";

import styles from "./styles.module.scss";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button, Tab, Rating } from "@mui/material";
import { TabContext, TabList, TabPanel, LoadingButton } from "@mui/lab";
import { Book, User } from "@/app/types";
import { openLogin } from "@/app/features/modal/modalSlice";
import DatePicker from "@/app/components/DatePicker/DatePicker";
import useBorrow from "@/app/hooks/useBorrow";
import { useMutation } from "react-query";
import { createBorrow } from "@/app/lib/request";

const formats = ["Paperback", "Hardcover", "Mass Market Paperback"];

const BookDetail = ({ book }: { book: Book }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const user = session?.user as User;
  const [dateRange, setDateRange] = useState({
    borrowDate: dayjs(),
    returnDate: dayjs(),
  });

  const { data: borrow, refetch } = useBorrow("borrow", book?.id, user?.id);

  const { mutate, isLoading } = useMutation({
    mutationFn: createBorrow,
  });

  const handleBorrow = async () => {
    if (!user) {
      return dispatch(openLogin());
    }

    await mutate(
      {
        bookId: book?.id.toString(),
        title: book?.title,
        imageUrl: book?.image_url,
        borrowDate: dateRange.borrowDate,
        returnDate: dateRange.returnDate,
        userId: user?.id,
      },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.detail}>
          <div className={styles.title}>{book?.title}</div>
          <div>By {book?.authors}</div>
          <div className={styles.edition}>{book?.edition}</div>

          <div className={styles.rating}>
            <Rating value={book?.rating} precision={0.5} readOnly />
            {book?.rating} ratings
          </div>

          <div>{book?.genres}</div>

          <div className={styles.status}>
            <div>
              <div className={styles.title}>Availability</div>

              {formats.map((format) => (
                <div className={styles.format} key={format}>
                  {format === book?.format ? (
                    <CheckCircleIcon style={{ color: "#42bb4e" }} />
                  ) : (
                    <CancelIcon style={{ color: "#f34040" }} />
                  )}

                  {book?.format}
                </div>
              ))}
            </div>

            <div>
              <div className={styles.title}>Status</div>
              <div className={styles.shelf}>
                {borrow ? <span>In-Shelf</span> : <span>In-Stock</span>}
              </div>
            </div>
          </div>

          <div>
            <DatePicker
              dateRange={dateRange}
              setDateRange={setDateRange}
              disabled={borrow ? true : false}
            />
          </div>

          <div className={styles.btn}>
            {borrow ? (
              <Button variant="contained" size="large" disabled>
                Borrowed
              </Button>
            ) : (
              <LoadingButton
                loading={isLoading}
                variant="contained"
                size="large"
                onClick={handleBorrow}
              >
                Borrow
              </LoadingButton>
            )}
          </div>
        </div>

        <div className={styles.description}>
          <div>
            <span>About</span> Book
          </div>

          <div>{book?.description}</div>
        </div>
      </div>

      <TabContext value={"1"}>
        <TabList>
          <Tab label="Overview" value="1" />
        </TabList>
        <TabPanel value="1">
          <div className={styles.data_container}>
            <div className={styles.data}>
              <p>Review Count</p>
              <p>{book?.review_count}</p>
            </div>
            <div className={styles.data}>
              <p>Page Number</p>
              <p>{book?.num_pages}</p>
            </div>
            <div className={styles.data}>
              <p>Language</p>
              <p>English</p>
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default BookDetail;
