import {
  getFantasy,
  getHistorical,
  getRomance,
  getFiction,
  getChildren,
  getSchool,
} from "./lib/genres";
import { getQuote } from "./lib/quotes";
import Search from "./components/Search/Search";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import styles from "./page.module.scss";

export default async function Home() {
  const [fantasy, historical, fiction, romance, school, children, quote] =
    await Promise.all([
      await getFantasy(),
      await getHistorical(),
      await getFiction(),
      await getRomance(),
      await getSchool(),
      await getChildren(),
      await getQuote(),
    ]);

  return (
    <div className={styles.container}>
      <Banner book={quote} />
      <Search />
      <Row books={fantasy} categoryId={"Fantasy"} />
      <Row books={historical} categoryId={"Historical"} />
      <Row books={fiction} categoryId={"Fiction"} />
      <Row books={school} categoryId={"School"} />
      <Row books={romance} categoryId={"Romance"} />
      <Row books={children} categoryId={"Children"} />
    </div>
  );
}
