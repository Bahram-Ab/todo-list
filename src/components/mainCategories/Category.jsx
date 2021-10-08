import React from "react";
import styles from "./mainCategories.module.css";
import { BiTask } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { MdTimerOff } from "react-icons/md";
import {
  BsExclamationCircle,
  BsCalendar,
  BsPencilSquare,
} from "react-icons/bs";
import { useNotes } from "../../providers/notesProvider";
import { useTasks } from "../../providers/tasksProvider";
import { filterTasksBy } from "../../providers/showContentProvider";

function Category({ handleChooseOption, categories, selectedItem }) {
  const notes = useNotes();
  const tasks = useTasks();
  return categories.map((category) => {
    let icon, count;
    switch (category.item) {
      case "all":
        icon = <BiTask />;
        count = tasks.length;
        break;
      case "today":
        icon = <FiSun />;
        count = filterTasksBy("today", tasks).length;
        break;
      case "tomorrow":
        icon = <BsCalendar />;
        count = filterTasksBy("tomorrow", tasks).length;
        break;
      case "important":
        icon = <BsExclamationCircle />;
        count = filterTasksBy("important", tasks).length;
        break;
      case "notes":
        icon = <BsPencilSquare />;
        count = notes.length;
        break;
      case "expired tasks":
        icon = <MdTimerOff />;
        count = filterTasksBy("expired", tasks).length;
        break;
      default:
        break;
    }
    return (
      <div
        key={category.id}
        className={`${styles.category} ${
          selectedItem === category.item && styles.selected
        }`}
        onClick={() => handleChooseOption(category.item)}
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
