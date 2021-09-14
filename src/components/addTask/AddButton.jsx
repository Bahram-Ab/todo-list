import React, { Fragment } from "react";
import styles from "./addTask.module.css";
import { FaPlus } from "react-icons/fa";
import { MdAssignment, MdNoteAdd } from "react-icons/md";

function AddButton() {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.mainBtn}>
          <div className={styles.content}>
            <FaPlus />
          </div>
        </div>
        <div className={styles.addTaskBtn}>
          <div className={styles.content}>
            <MdAssignment />
            <span>New task</span>
          </div>
        </div>
        <div className={styles.addNoteBtn}>
          <div className={styles.content}>
            <MdNoteAdd />
            <span>New note</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddButton;
