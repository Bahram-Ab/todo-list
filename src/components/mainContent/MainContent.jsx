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

    default:
      contentComponent = <ShowTasks header={`${showContent.category} tasks`} />;
      break;
  }
  return (
    <section className={styles.container}>
      {contentComponent}
      <AddButton />
    </section>
  );
}

export default MainContent;
