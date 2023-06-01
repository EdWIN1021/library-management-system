"use client";
import Rating from "@mui/material/Rating";
import styles from "./styles.module.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Button } from "@mui/material";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Book } from "@/app/types";

import useFetch from "@/app/hooks/useFetch";

const BookDetail = ({ book }: { book: Book }) => {
  return (
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
                Paperback
              </div>
              <div className={styles.format}>
                <CheckCircleIcon style={{ color: "#42bb4e" }} />
                Hardcover
              </div>

              <div className={styles.format}>
                <CheckCircleIcon style={{ color: "#42bb4e" }} />
                Mass Market Paperback
              </div>
            </div>

            <div>
              <div className={styles.title}>Status</div>
              <div className={styles.shelf}>In-Shelf</div>
            </div>
          </div>

          <Button variant="contained" size="large">
            BORROW
          </Button>

          <div className={styles.quotes}>
            <div className={styles.quote}>Quote1: {book?.Quote1}</div>
            <div className={styles.quote}>Quote2: {book?.Quote2}</div>
            <div className={styles.quote}>Quote3: {book?.Quote3}</div>
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
        <TabList style={{ backgroundColor: "#fff" }}>
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
  );
};

export default BookDetail;
