import React from "react";
import { useShowContent } from "../../providers/showContentProvider";
import AddButton from "../addTask/AddButton";
import ShowNotes from "../showNote/ShowNotes";
import styles from "./mainContent.module.css";

function MainContent() {
  const showContent = useShowContent();
  let contentComponent;
  switch (showContent.selectedOption) {
    case "notes":
      contentComponent = <ShowNotes />;
      break;

    default:
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
