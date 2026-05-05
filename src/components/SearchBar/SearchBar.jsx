import React from "react";
import { Input } from "../ui/input";

import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    //    <!-- From Uiverse.io by krlozCJ -->
    <div class={styles.container}>
      <Input
        type="text"
        name="text"
        className={`${styles.input} `}
        required
        placeholder="Type to search..."
      />
      <div class={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class={styles.ionicon}
          viewBox="0 0 512 512"
        >
          <title>Search</title>
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="45"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="45"
            d="M338.29 338.29L448 448"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
