import React from "react";
import styles from "./mainCategories.module.css";
import { FaTasks } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { FiRepeat, FiSun } from "react-icons/fi";
import { MdTimerOff } from "react-icons/md";
import {
  BsExclamationCircle,
  BsCalendar,
  BsPencilSquare,
} from "react-icons/bs";
import { useNotes } from "../../providers/notesProvider";
function Category({ categories }) {
  const notes = useNotes();
  return categories.map((category) => {
    let icon;
    let count;
    switch (category.item) {
      case "all":
        icon = <BiTask />;
        count = 0;
        break;
      case "routines":
        icon = <FiRepeat />;
        count = 0;
        break;
      case "today":
        icon = <FiSun />;
        count = 0;
        break;
      case "tomorrow":
        icon = <BsCalendar />;
        count = 0;
        break;
      case "important":
        icon = <BsExclamationCircle />;
        count = 0;
        break;
      case "projects":
        icon = <FaTasks />;
        count = 0;
        break;
      case "notes":
        icon = <BsPencilSquare />;
        count = notes.length;
        break;
      case "expired tasks":
        icon = <MdTimerOff />;
        count = 0;
        break;
      default:
        break;
    }
    return (
      <div className={styles.category} key={category.id}>
        <div className={styles.content}>
          {icon}
          <div className={styles.itemTitle}>{category.item}</div>
        </div>
        <div className={styles.count}>{count ? count : ""}</div>
      </div>
    );
  });
}

export default Category;
