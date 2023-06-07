"use client";
import Rating from "@mui/material/Rating";
import styles from "./styles.module.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Book, User } from "@/app/types";
import { openLogin } from "@/app/features/modal/modalSlice";
import DatePicker from "@/app/components/DatePicker/DatePicker";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import LoadingButton from "@mui/lab/LoadingButton";

const BookDetail = ({ book }: { book: Book }) => {
  const { data: session } = useSession();
  const user = session?.user as User;
  const [borrowedBook, setBorrowedBook] = useState();
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [dateRange, setDateRange] = useState({
    borrowDate: dayjs(),
    returnDate: dayjs(),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/borrow/${book?.id}?userId=${user?.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (res.status === 200 && data) {
          setBorrowedBook(data);
          setDateRange({
            ...dateRange,
            borrowDate: dayjs(data?.borrowDate),
            returnDate: dayjs(data?.returnDate),
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [user]);

  const handleBorrow = async () => {
    if (!user) {
      return dispatch(openLogin());
    }

    try {
      setIsButtonLoading(true);
      const res = await fetch("/api/borrow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookId: book?.id.toString(),
          title: book?.title,
          imageUrl: book?.image_url,
          borrowDate: dateRange.borrowDate,
          returnDate: dateRange.returnDate,
          userId: user?.id,
        }),
      });

      const data = await res.json();

      if (res.ok && data) {
        setIsButtonLoading(false);
        toast.success(`You have borrowed the book: ${book?.title} `);
        setBorrowedBook(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!isLoading && (
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
                    {borrowedBook ? (
                      <span>In-Shelf</span>
                    ) : (
                      <span>In-Stock</span>
                    )}
                  </div>
                </div>
              </div>

              <div style={{ margin: "20px 0" }}>
                <DatePicker
                  dateRange={dateRange}
                  setDateRange={setDateRange}
                  disabled={borrowedBook ? true : false}
                />
              </div>

              <div style={{ marginTop: "30px" }}>
                {borrowedBook ? (
                  <Button variant="contained" size="large" disabled>
                    Borrowed
                  </Button>
                ) : (
                  <LoadingButton
                    loading={isButtonLoading}
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
      )}
    </>
  );
};

export default BookDetail;
