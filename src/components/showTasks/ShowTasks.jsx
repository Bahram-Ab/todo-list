import React, { useState, Fragment } from "react";
import {
  useShowContent,
  useShowContentActions,
} from "../../providers/showContentProvider";
import { useTasksActions } from "../../providers/tasksProvider";
import styles from "./showTasks.module.css";
import { MdAlarm } from "react-icons/md";
import EditTasks from "./EditTasks";

function ShowTasks({ header }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [itemID, setItemId] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const dispatchShowContent = useShowContentActions();
  const showContent = useShowContent();
  const dispatchTasks = useTasksActions();

  const handleDeleteTask = (id) => {
    dispatchTasks({ type: "delete", id: id });
    if (showContent.selectedOption === "otherCategory")
      dispatchShowContent({
        type: "otherCategory",
        category: showContent.category,
      });
    else dispatchShowContent({ type: showContent.selectedOption });
  };

  const handleEditTask = (
    title,
    description,
    category,
    deadLine,
    isImportant
  ) => {
    dispatchTasks({
      type: "edit",
      value: {
        title,
        id: itemID,
        description,
        category,
        deadLine,
        isImportant,
      },
    });
    if (showContent.selectedOption === "otherCategory")
      dispatchShowContent({
        type: "otherCategory",
        category: showContent.category,
      });
    else dispatchShowContent({ type: showContent.selectedOption });
  };

  const toggleEditHandler = (id) => {
    setToggleEdit(!toggleEdit);
    setItemId(id);
    const index = showContent.content.findIndex((e) => e.id === id);
    setItemIndex(index);
  };

  return (
    <Fragment>
      <h2 className={styles.header}>{header}</h2>
      <div className={styles.container}>
        {showContent.content.map((task) => {
          const dateObj = {
            year: task.deadLine.getFullYear(),
            month: task.deadLine.getMonth() + 1,
            day: task.deadLine.getDate(),
          };

          return (
            <div key={task.id} className={styles.item}>
              <div className={styles.title}>
                {task.title}
                {task.isImportant && (
                  <span className={styles.isImportant}>important</span>
                )}
              </div>
              <div className={styles.description}>{task.description}</div>
              <div className={styles.details}>
                <div className={styles.category}>
                  category : {task.category ? task.category : "no category"}
                </div>
                <div className={styles.deadLine}>
                  <MdAlarm className={styles.icon} />
                  {`${dateObj.year} \\ ${dateObj.month} \\ ${dateObj.day}`}
                </div>
              </div>
              <div className={styles.footer}>
                <div
                  className={styles.deleteKey}
                  onClick={() => handleDeleteTask(task.id)}
                >
                  delete
                </div>
                <div
                  className={styles.editKey}
                  onClick={() => toggleEditHandler(task.id)}
                >
                  edit
                </div>
              </div>
            </div>
          );
        })}
        {toggleEdit && (
          <EditTasks
            closeHandler={toggleEditHandler}
            preTitle={showContent.content[itemIndex].title}
            preDescription={showContent.content[itemIndex].description}
            preCategory={showContent.content[itemIndex].category}
            preDeadLine={showContent.content[itemIndex].deadLine}
            preIsImportant={showContent.content[itemIndex].isImportant}
            handleEditTask={(
              title,
              description,
              category,
              deadLine,
              isImportant
            ) =>
              handleEditTask(
                title,
                description,
                category,
                deadLine,
                isImportant
              )
            }
          />
        )}
      </div>
    </Fragment>
  );
}

export default ShowTasks;
