import { getCategory } from "./lib/genres";
import { getQuote } from "./lib/quotes";
import Search from "./components/Search/Search";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import styles from "./page.module.scss";

export default async function Home() {
  const [
    fantasy,
    mystery,
    romance,
    science,
    young,
    children,
    historical,
    quote,
  ] = await Promise.all([
    await getCategory("Fiction"),
    await getCategory("Mystery"),
    await getCategory("Romance"),
    await getCategory("Science"),
    await getCategory("Young Adult"),
    await getCategory("Children"),
    await getCategory("Historical"),
    await getQuote(),
  ]);

  return (
    <div className={styles.container}>
      <Banner book={quote} />
      <Search />
      <Row books={fantasy} categoryId={"Fiction"} />
      <Row books={mystery} categoryId={"Mystery"} />
      <Row books={romance} categoryId={"Romance"} />
      <Row books={science} categoryId={"Science"} />
      <Row books={young} categoryId={"Young Adult"} />
      <Row books={children} categoryId={"Children"} />
      <Row books={historical} categoryId={"Historical"} />
    </div>
  );
}
