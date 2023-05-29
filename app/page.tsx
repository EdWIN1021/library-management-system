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
  const [romance, fiction, children, quote] = await Promise.all([
    await getRomance(),
    await getFiction(),
    await getChildren(),
    await getQuote(),
  ]);

  return (
    <div className={styles.container}>
      <Banner book={quote} />
      <Search />
      <Row books={fiction} categoryId={"Fiction"} />
      <Row books={romance} categoryId={"Romance"} />
      <Row books={children} categoryId={"Children"} />
    </div>
  );
}
