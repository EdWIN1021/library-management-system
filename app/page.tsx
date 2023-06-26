import { getCategory } from "./lib/books";
import { getQuote } from "./lib/quotes";
import Search from "./components/Search/Search";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import styles from "./page.module.scss";
import { Category } from "./types";

export default async function Home() {
  const { Fiction, Mystery, Romance, Science, Travel, Children, Historical } =
    Category;

  const [
    fiction,
    mystery,
    romance,
    science,
    young,
    children,
    historical,
    quote,
  ] = await Promise.all([
    await getCategory(Fiction),
    await getCategory(Mystery),
    await getCategory(Romance),
    await getCategory(Science),
    await getCategory(Travel),
    await getCategory(Children),
    await getCategory(Historical),
    await getQuote(),
  ]);

  return (
    <div className={styles.container}>
      <Banner book={quote} />
      <Search />
      <Row books={fiction} categoryId={Fiction} />
      <Row books={mystery} categoryId={Mystery} />
      <Row books={romance} categoryId={Romance} />
      <Row books={science} categoryId={Science} />
      <Row books={young} categoryId={Travel} />
      <Row books={children} categoryId={Children} />
      <Row books={historical} categoryId={Historical} />
    </div>
  );
}
