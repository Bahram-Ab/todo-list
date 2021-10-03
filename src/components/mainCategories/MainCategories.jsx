import React from "react";
import styles from "./mainCategories.module.css";
import Category from "./Category";
import { useShowContentActions } from "../../providers/showContentProvider";

function MainCategories() {
  const dispatch = useShowContentActions();
  const categories = [
    { item: "all", id: 0 },
    { item: "routines", id: 1 },
    { item: "today", id: 2 },
    { item: "tomorrow", id: 3 },
    { item: "important", id: 4 },
    { item: "notes", id: 5 },
    { item: "expired tasks", id: 6 },
  ];

  const handleChooseOption = (e) => {
    switch (e.target.textContent) {
      case "notes":
        dispatch({ type: "notes" });
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <Category
        categories={categories}
        handleChooseOption={handleChooseOption}
      />
    </div>
  );
}

export default MainCategories;
