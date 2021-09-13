import React from "react";
import styles from "./mainCategories.module.css";
import Category from "./Category";

function MainCategories() {
  const categories = [
    "all",
    "routines",
    "today",
    "tomorrow",
    "important",
    "projects",
    "notes",
  ];
  return (
    <div className={styles.container}>
      <Category categories={categories} />
    </div>
  );
}

export default MainCategories;
