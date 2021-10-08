import React from "react";
import styles from "./mainCategories.module.css";
import Category from "./Category";
import { useShowContentActions } from "../../providers/showContentProvider";

function MainCategories({ setSelectedItem, selectedItem }) {
  const dispatch = useShowContentActions();
  const categories = [
    { item: "all", id: 0 },
    { item: "today", id: 1 },
    { item: "tomorrow", id: 2 },
    { item: "important", id: 3 },
    { item: "expired tasks", id: 4 },
    { item: "notes", id: 5 },
  ];

  const handleChooseOption = (item) => {
    switch (item) {
      case "all":
        dispatch({ type: "all" });
        setSelectedItem("all");
        break;
      case "today":
        dispatch({ type: "today" });
        setSelectedItem("today");
        break;
      case "tomorrow":
        dispatch({ type: "tomorrow" });
        setSelectedItem("tomorrow");
        break;
      case "important":
        dispatch({ type: "important" });
        setSelectedItem("important");
        break;
      case "notes":
        dispatch({ type: "notes" });
        setSelectedItem("notes");
        break;
      case "expired tasks":
        dispatch({ type: "expired" });
        setSelectedItem("expired tasks");
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
        selectedItem={selectedItem}
      />
    </div>
  );
}

export default MainCategories;
