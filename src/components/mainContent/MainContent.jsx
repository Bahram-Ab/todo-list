import React from "react";
import { useShowContent } from "../../providers/showContentProvider";
import AddButton from "../addTask/AddButton";
import ShowNotes from "../showNotes/ShowNotes";
import styles from "./mainContent.module.css";

function MainContent() {
  const showContent = useShowContent();

  return (
    <section className={styles.container}>
      <AddButton />
    </section>
  );
}

export default MainContent;
