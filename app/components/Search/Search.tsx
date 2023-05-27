"use client";
import Image from "next/image";
import Quote from "../Quote/Quote";
import { Book } from "@/app/types";
import styles from "./styles.module.scss";
import Input from "../Input/Input";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { Button, ButtonBase, TextField } from "@mui/material";

const Search = ({ book }: { book: Book }) => {
  return (
    <>
      <div
        className={styles.bg}
        style={{
          width: "1200px",
          height: "500px",
          position: "relative",
          objectFit: "contain",
          marginBottom: "40px",
        }}
      >
        <Quote book={book} />

        <Image src="/images/abc.jpg" alt="..." fill priority />

        <div className={styles.search}>
          <InputBase
            className={styles.search_input}
            placeholder="search something..."
          />
          <ButtonBase className={styles.search_btn}>Search</ButtonBase>
        </div>
      </div>
    </>
  );
};

export default Search;
