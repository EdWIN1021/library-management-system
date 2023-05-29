"use client";
import styles from "./styles.module.scss";

const Search = () => {
  return (
    <div className={styles.search}>
      <input className={styles.searchField} placeholder="search something..." />
      <button className={styles.btn}>Search</button>
    </div>
  );
};

export default Search;
