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
      case "all":
        dispatch({ type: "all" });
        break;
      case "routine":
        dispatch({ type: "routine" });
        break;
      case "today":
        dispatch({ type: "today" });
        break;
      case "tomorrow":
        dispatch({ type: "tomorrow" });
        break;
      case "important":
        dispatch({ type: "important" });
        break;
      case "notes":
        dispatch({ type: "notes" });
        break;
      case "expired tasks":
        dispatch({ type: "expired" });
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
