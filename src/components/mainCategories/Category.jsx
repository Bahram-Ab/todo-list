import React from "react";
import styles from "./mainCategories.module.css";
import { BiTask } from "react-icons/bi";
import { FiRepeat, FiSun } from "react-icons/fi";
import { MdTimerOff } from "react-icons/md";
import {
  BsExclamationCircle,
  BsCalendar,
  BsPencilSquare,
} from "react-icons/bs";
import { useNotes } from "../../providers/notesProvider";
import { useTasks } from "../../providers/tasksProvider";

function Category({ handleChooseOption, categories }) {
  const notes = useNotes();
  const tasks = useTasks();
  return categories.map((category) => {
    let icon, count;
    switch (category.item) {
      case "all":
        icon = <BiTask />;
        count = tasks.length;
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
      <div
        key={category.id}
        className={styles.category}
        onClick={(e) => handleChooseOption(e)}
      >
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
