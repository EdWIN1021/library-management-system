"use client";
import {
  getTrending,
  getClassic,
  getReturned,
  getRomance,
  getFiction,
  getChildren,
} from "./lib/genres";
import { getQuote } from "./lib/quotes";
import Search from "./components/Search/Search";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import styles from "./page.module.scss";

export default async function Home() {
  const [trending, classic, returned, romance, fiction, children, quote] =
    await Promise.all([
      await getTrending(),
      await getClassic(),
      await getReturned(),
      await getRomance(),
      await getFiction(),
      await getChildren(),
      await getQuote(),
    ]);

  return (
    <div className={styles.container}>
      <Banner book={quote} />
      <Search />
      <Row books={classic} type={"Classic"} />
      <Row books={trending} type={"Trending"} />
      <Row books={classic} type={"Classic"} />
      <Row books={returned} type={"Recently Returned"} />
      <Row books={fiction} type={"Fiction"} />
      <Row books={romance} type={"Romance"} />
      <Row books={children} type={"Children"} />
    </div>
  );
}
