import React from "react";
import styles from "./otherCategories.module.css";

function Category({ categories }) {
  const EditCategoryName = (category) => {
    if (category.length >= 20) {
      let editedCategory = category.substr(0, 18);
      editedCategory += "...";
      return editedCategory;
    }
    return category;
  };
  let icon;
  return categories.map((category) => {
    icon = category.item.replace(/\s+/g, "")[0];
    const categoryName = EditCategoryName(category.item);
    return (
      <div className={styles.category} key={category.id}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.item}>{categoryName}</span>
      </div>
    );
  });
}

export default Category;
