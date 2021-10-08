import React from "react";
import { filterTasksBy } from "../../providers/showContentProvider";
import styles from "./otherCategories.module.css";
import { useTasks } from "../../providers/tasksProvider";

function Category({ handleChooseOption, categories, selectedItem }) {
  const tasks = useTasks();
  const EditCategoryName = (category) => {
    if (category.length >= 12) {
      let editedCategory = category.substr(0, 12);
      editedCategory += "...";
      return editedCategory;
    }
    return category;
  };
  let icon;
  return categories.map((category) => {
    icon = category.item.replace(/\s+/g, "")[0];
    const categoryName = EditCategoryName(category.item);
    const count = filterTasksBy("other", tasks, category.item).length;
    return (
      <div
        className={`${styles.category} ${
          selectedItem === category.item && styles.selected
        }`}
        key={category.id}
        onClick={() => handleChooseOption(categoryName)}
      >
        <div className={styles.content}>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.item}>{categoryName}</span>
        </div>
        <div className={styles.count}>{count ? count : ""}</div>
      </div>
    );
  });
}

export default Category;
