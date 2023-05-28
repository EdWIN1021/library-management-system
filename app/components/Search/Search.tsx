"use client";
import styles from "./styles.module.scss";
import InputBase from "@mui/material/InputBase";
import ButtonBase from "@mui/material/ButtonBase";

const Search = () => {
  return (
    <div className={styles.search}>
      <InputBase
        className={styles.searchField}
        placeholder="search something..."
      />
      <ButtonBase className={styles.btn}>Search</ButtonBase>
    </div>
  );
};

export default Search;
