"use client";
import Image from "next/image";
import Quote from "../Quote/Quote";
import styles from "./styles.module.scss";
import { Book } from "@/app/types";
const Banner = ({ book }: { book: Book }) => {
  return (
    <div className={styles.bg}>
      <Quote book={book} />
      <Image src="/images/abc.jpg" alt="..." fill priority />
    </div>
  );
};

export default Banner;
