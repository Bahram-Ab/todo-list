import React from "react";
import MainCategories from "../mainCategories/MainCategories";
import styles from "./optionList.module.css";

function OptionsList() {
  return (
    <section className={styles.container}>
      <h3>categories</h3>
      <MainCategories />
    </section>
  );
}
export default OptionsList;
