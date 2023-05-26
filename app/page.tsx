import Search from "./components/Search/Search";
import {
  getTrending,
  getClassic,
  getReturned,
  getRomance,
  getFiction,
  getHorror,
  getChildren,
} from "./lib/genres";

import Row from "./components/Row/Row";
import styles from "./page.module.scss";

export default async function Home() {
  const [trending, classic, returned, romance, fiction, horror, children] =
    await Promise.all([
      await getTrending(),
      await getClassic(),
      await getReturned(),
      await getRomance(),
      await getFiction(),
      await getHorror(),
      await getChildren(),
    ]);

  return (
    <div className={styles.container}>
      <Search />
      <Row books={trending} type={"Trending"} />
      <Row books={classic} type={"Classic"} />
      <Row books={returned} type={"Recently Returned"} />
      <Row books={fiction} type={"Fiction"} />
      <Row books={romance} type={"Romance"} />
      <Row books={children} type={"Children"} />
    </div>
  );
}
