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

import DatePicker from "@/app/components/DatePicker/DatePicker";
import { useMemo, useState } from "react";
import useFetch from "@/app/hooks/useFetch";
import { Borrow } from "@prisma/client";

const BookDetail = ({ book }: { book: Book }) => {
  const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const { data: session } = useSession();
  const user = session?.user as User;

  const { isLoading, data: borrowList } = useFetch(
    `/api/borrowList?userId=${user?.id}`
  );

  const exist = useMemo(
    () => borrowList.find((item: Borrow) => item.bookId === book.id),
    [borrowList]
  );

  const handleBorrow = async () => {
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
                  {book?.format}
                </div>
              </div>

              <div>
                <div className={styles.title}>Status</div>
                <div className={styles.shelf}>
                  {exist ? <span>In-Shelf</span> : <span>In-Stock</span>}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <DatePicker dateRange={dateRange} setDateRange={setDateRange} />
            </div>
            {exist ? (
              <Button variant="contained" size="large">
                Return
              </Button>
            ) : (
              <Button variant="contained" size="large" onClick={handleBorrow}>
                Borrow
              </Button>
            )}

            <div className={styles.quotes}>
              <div>Quotes: </div>

              <div className={styles.quote}>{book?.Quote1}</div>
              <div className={styles.quote}>{book?.Quote2}</div>
              <div className={styles.quote}>{book?.Quote3}</div>
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
          <TabList style={{ backgroundColor: "#fff", marginTop: "20px" }}>
            <Tab label="Overview" value="1" />
          </TabList>
          <TabPanel value="1" style={{ padding: "0", marginTop: "20px" }}>
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
