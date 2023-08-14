"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleOnSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push(`category/${search.toLowerCase()}`);
    setSearch("");
  };

  return (
    <form className={styles.search} onSubmit={handleOnSubmit}>
      <input
        className={styles.searchField}
        value={search}
        placeholder="search something..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type={"submit"} className={styles.btn}>
        Search
      </button>
    </form>
  );
};

export default Search;
