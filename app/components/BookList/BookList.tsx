"use client";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Book } from "@/app/types";

const BookList = ({ categoryId }: { categoryId: string }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("runs");
      const res = await fetch(
        `https://example-data.draftbit.com/books?q=${categoryId}&_page=1&_limit=10`
      );

      if (res.status === 200) {
        const books = await res.json();
        setBooks(books);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ListItem>
        <ListItemText primary={"Title"} />
        <ListItemText primary={"Category"} />
      </ListItem>
      {books?.map((book: Book) => (
        <List key={book.title}>
          <ListItem style={{ backgroundColor: "#fff" }}>
            <ListItemAvatar style={{ marginRight: "10px" }}>
              <Image
                src={book?.image_url}
                alt="..book"
                width="100"
                height="150"
                priority
              />
            </ListItemAvatar>
            <ListItemText primary={book?.title} secondary={book?.edition} />
            <ListItemText primary={book?.title} secondary={book?.edition} />
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default BookList;
