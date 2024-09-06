"use client";

import styles from "./styles.module.scss";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button, Rating, Tab } from "@mui/material";
import { LoadingButton, TabContext, TabList, TabPanel } from "@mui/lab";
import { Book, User } from "@/types/types";
import { openLogin } from "@/features/modal/modalSlice";
import DatePicker from "@/components/DatePicker";
import useBorrow from "@/hooks/useBorrow";
import { useMutation } from "react-query";
import { createBorrow } from "@/lib/request";

const formats = ["Paperback", "Hardcover", "Mass Market Paperback"];

const BookDetail = ({ book }: { book: Book }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const user = session?.user as User;
  const [dateRange, setDateRange] = useState({
    borrowDate: dayjs(),
    returnDate: dayjs(),
  });

  const { data, refetch } = useBorrow("borrow", book?.id, user?.id);
  const borrow = data || { ...dateRange, return: true };

  const { mutate, isLoading: isButtonLoading } = useMutation({
    mutationFn: createBorrow,
  });

  const handleBorrow = async () => {
    if (!user) {
      return dispatch(openLogin());
    }

    if (dateRange.borrowDate.isSame(dateRange.returnDate)) {
      return toast.error("Borrow date and Return date cannot be same");
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
          toast.success(`You have borrowed the book: ${book?.title}`);
        },
      }
    );
  };

  return (
    <div className="mx-10">
      <p className="text-xl">{book?.title}</p>
      <p className="my-1">By {book?.authors}</p>
      <div className="text-sm text-[#A7A7A7]">{book?.edition}</div>

      <div className="flex items-center gap-4 my-4 ">
        <Rating value={book?.rating} precision={0.5} readOnly />
        {book?.rating} ratings
      </div>

      <div>{book?.genres}</div>

      <div className="flex my-5 gap-8">
        <div>
          <div className="text-xl mb-5">Availability</div>

          {formats.map((format) => (
            <div className="flex items-center gap-3 mb-2" key={format}>
              {format === book?.format ? (
                <>
                  <CheckCircleIcon style={{ color: "#42bb4e" }} />
                  {book?.format}
                </>
              ) : (
                <>
                  <CancelIcon style={{ color: "#f34040" }} />
                  {format}
                </>
              )}
            </div>
          ))}
        </div>

        <div>
          <div className="text-xl mb-5">Status</div>
          <span className="text-center rounded bg-[#42bb4e] text-[white] px-2 py-1 text-nowrap">
            In-Shelf
          </span>
        </div>
      </div>

      <DatePicker
        dateRange={dateRange}
        setDateRange={setDateRange}
        disabled={!borrow?.return}
      />

      <div className="my-10">
        {!borrow?.return ? (
          <Button variant="outlined" size="large" disabled>
            Borrowed
          </Button>
        ) : (
          <LoadingButton
            loading={isButtonLoading}
            variant="outlined"
            size="large"
            onClick={handleBorrow}
          >
            Borrow
          </LoadingButton>
        )}
      </div>

      <TabContext value={"1"}>
        <TabList>
          <Tab label="Overview" value="1" />
        </TabList>
        <TabPanel value="1">
          <div className="flex gap-8">
            <div className="w-[125px] border border-solid border-[#dddddd] rounded px-4 py-2 flex flex-col justify-center items-center">
              <p className="text-sm">Review Count</p>
              <p className="text-[#ff8a00]">{book?.review_count}</p>
            </div>
            <div className="w-[125px] border border-solid border-[#dddddd] rounded px-4 py-2 flex flex-col justify-center items-center">
              <p className="text-sm">Page Number</p>
              <p className="text-[#ff8a00]">{book?.num_pages}</p>
            </div>
            <div className="w-[125px] border border-solid border-[#dddddd] rounded px-4 py-2 flex flex-col justify-center items-center">
              <p className="text-sm">Language</p>
              <p className="text-[#ff8a00]">English</p>
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default BookDetail;
