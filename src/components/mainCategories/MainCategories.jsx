import React from "react";
import styles from "./mainCategories.module.css";
import Category from "./Category";

function MainCategories() {
  const categories = [
    { item: "all", id: 0 },
    { item: "routines", id: 1 },
    { item: "today", id: 2 },
    { item: "tomorrow", id: 3 },
    { item: "important", id: 4 },
    { item: "projects", id: 5 },
    { item: "notes", id: 6 },
  ];
  return (
    <div className={styles.container}>
      <Category categories={categories} />
    </div>
  );
}

export default MainCategories;
