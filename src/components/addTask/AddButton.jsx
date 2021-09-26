import React, { Fragment, useState } from "react";
import styles from "./addTask.module.css";
import { FaPlus, FaAngleDown } from "react-icons/fa";
import { MdAssignment, MdNoteAdd } from "react-icons/md";
import NewTaskModal from "./NewTaskModal";
import NewNoteModal from "../addTask/NewNoteModal";

function AddButton() {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleToggleBtn = () => {
    setToggle(!toggle);
  };
  const handleAddTaskClicked = () => {
    setShowTaskModal(!showTaskModal);
    setToggle(false);
  };
  const handleAddNoteClicked = () => {
    setShowNoteModal(!showNoteModal);
    setToggle(false);
  };

  return (
    <Fragment>
      {showTaskModal && <NewTaskModal closeHandler={handleAddTaskClicked} />}
      {showNoteModal && <NewNoteModal closeHandler={handleAddNoteClicked} />}
      <div className={styles.container}>
        <div
          className={`${styles.mainBtn} ${toggle && styles.toHide}`}
          onClick={handleToggleBtn}
        >
          <div className={styles.content}>
            {!toggle ? <FaPlus /> : <FaAngleDown />}
          </div>
        </div>
        <div
          className={`${styles.addTaskBtn} ${toggle && styles.showTask}`}
          onClick={handleAddTaskClicked}
        >
          <div className={styles.content}>
            <MdAssignment />
            <span>New task</span>
          </div>
        </div>
        <div
          className={`${styles.addNoteBtn} ${toggle && styles.showNote}`}
          onClick={handleAddNoteClicked}
        >
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
