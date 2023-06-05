"use client";
import Rating from "@mui/material/Rating";
import styles from "./styles.module.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";
import { Range } from "react-date-range";
import { useSession } from "next-auth/react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Book, User } from "@/app/types";
import { openLogin } from "@/app/features/modal/modalSlice";

import DatePicker from "@/app/components/DatePicker/DatePicker";
import { useMemo, useState } from "react";
import useFetch from "@/app/hooks/useFetch";
import { Borrow } from "@prisma/client";
import { useDispatch } from "react-redux";

const BookDetail = ({ book }: { book: Book }) => {
  const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
    disabled: true,
  };

  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const user = session?.user as User;

  const { isLoading, data: borrowList } = useFetch(
    `/api/borrowList?userId=${user?.id}`
  );

  console.log(book);

  const exist = useMemo(
    () => borrowList.find((item: Borrow) => item.bookId === book.id),
    [borrowList]
  );

  const handleBorrow = async () => {
    if (!user) {
      dispatch(openLogin());
    }

    const res = await fetch("/api/borrow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookId: book?.id,
        borrowDate: dateRange.startDate,
        returnDate: dateRange.endDate,
        userId: user?.id,
      }),
    });

    console.log(res);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.detail}>
            <div className={styles.title}>{book?.title}</div>
            <div className={styles.author}>By {book?.authors}</div>
            <div className={styles.edition}>{book?.edition}</div>

            <div className={styles.rating}>
              <Rating value={book?.rating} precision={0.5} readOnly />
              {book?.rating} ratings
            </div>

            <div>{book?.genres}</div>

            <div className={styles.status}>
              <div>
                <div className={styles.title}>Availability</div>

                <div className={styles.format}>
                  <CheckCircleIcon style={{ color: "#42bb4e" }} />
                  {"Paperback"}
                </div>

                <div className={styles.format}>
                  <CheckCircleIcon style={{ color: "#42bb4e" }} />
                  {"Hardcover"}
                </div>

                <div className={styles.format}>
                  <CheckCircleIcon style={{ color: "#42bb4e" }} />
                  {"Mass Market Paperback"}
                </div>
              </div>

              <div>
                <div className={styles.title}>Status</div>
                <div className={styles.shelf}>
                  {exist ? <span>In-Shelf</span> : <span>In-Stock</span>}
                </div>
              </div>
            </div>

            <div style={{ margin: "20px 0" }}>
              <DatePicker dateRange={dateRange} setDateRange={setDateRange} />
            </div>

            <div style={{ marginTop: "30px" }}>
              {exist ? (
                <Button variant="contained" size="large" disabled={true}>
                  Borrowed
                </Button>
              ) : (
                <Button variant="contained" size="large" onClick={handleBorrow}>
                  Borrow
                </Button>
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
          <TabList
            style={{
              marginLeft: "40px",
            }}
          >
            <Tab label="Overview" value="1" />
          </TabList>
          <TabPanel
            value="1"
            style={{ padding: "0", marginTop: "20px", marginLeft: "40px" }}
          >
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
    </>
  );
};

export default BookDetail;
