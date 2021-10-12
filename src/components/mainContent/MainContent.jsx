import React from "react";
import { useShowContent } from "../../providers/showContentProvider";
import AddButton from "../addTask/AddButton";
import ShowNotes from "../showNote/ShowNotes";
import ShowTasks from "../showTasks/ShowTasks";
import styles from "./mainContent.module.css";

function MainContent() {
  const showContent = useShowContent();
  let contentComponent;
  switch (showContent.selectedOption) {
    case "all":
    case "today":
    case "tomorrow":
    case "important":
    case "expired":
      contentComponent = (
        <ShowTasks header={`${showContent.selectedOption} tasks`} />
      );
      break;

    case "notes":
      contentComponent = <ShowNotes />;
      break;

    case "Welcome":
      contentComponent = false;
      break;

    default:
      contentComponent = <ShowTasks header={`${showContent.category} tasks`} />;
      break;
  }
  return (
    <section className={styles.container}>
      {contentComponent ? (
        contentComponent
      ) : (
        <div className={styles.welcomeMessageContainer}>
          <h4 className={styles.header}>Hey Dear</h4>
          <p className={styles.message}>
            Welcome to our website .
            <br /> we are so happy to choose us to help you don't waste your
            time .
            <br /> by adding your first task , start to have better plans and
            better days ...
          </p>
          <p className={styles.footer}> - Let's do it!!! - </p>
        </div>
      )}
      <AddButton />
    </section>
  );
}

export default MainContent;
