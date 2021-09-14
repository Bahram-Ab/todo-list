import React from "react";
import AddButton from "../addTask/AddButton";
import styles from "./showContent.module.css";

function ShowContent() {
  return (
    <section className={styles.container}>
      <AddButton />
    </section>
  );
}

export default ShowContent;
