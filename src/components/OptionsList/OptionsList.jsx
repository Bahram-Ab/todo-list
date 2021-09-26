import React from "react";
import MainCategories from "../mainCategories/MainCategories";
import OtherCategories from "../otherCategories/OtherCategories";
import styles from "./optionList.module.css";

function OptionsList() {
  return (
    <section className={styles.container}>
      <h3>Categories</h3>
      <MainCategories />
      <OtherCategories />
    </section>
  );
}
export default OptionsList;
