import React from "react";
import styles from "./mainCategories.module.css";
import { FaTasks } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { FiRepeat, FiSun } from "react-icons/fi";
import {
  BsExclamationCircle,
  BsCalendar,
  BsPencilSquare,
} from "react-icons/bs";

function Category({ categories }) {
  return categories.map((category) => {
    let icon;
    switch (category.item) {
      case "all":
        icon = <BiTask />;
        break;
      case "routines":
        icon = <FiRepeat />;
        break;
      case "today":
        icon = <FiSun />;
        break;
      case "tomorrow":
        icon = <BsCalendar />;
        break;
      case "important":
        icon = <BsExclamationCircle />;
        break;
      case "projects":
        icon = <FaTasks />;
        break;
      case "notes":
        icon = <BsPencilSquare />;
        break;
      default:
        break;
    }
    return (
      <div className={styles.category} key={category.id}>
        {icon}
        <span>{category.item}</span>
      </div>
    );
  });
}

export default Category;
