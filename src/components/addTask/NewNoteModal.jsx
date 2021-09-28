import React, { useState } from "react";
import Modal from "../../common/modal/Modal";
import { useNotesActions } from "../../providers/notesProvider";
import styles from "./newTaskAndNoteModal.module.css";

const NewNoteModal = ({ closeHandler }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useNotesActions();
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const handleConfirmClicked = () => {
    dispatch({ type: "add", value: { title, text } });
    closeHandler();
  };
  return (
    <Modal closeHandler={closeHandler}>
      <form className={styles.container}>
        <h3 className={styles.h3}>add new note</h3>
        <label className={styles.label} htmlFor="title">
          title :
        </label>
        <input
          value={title}
          className={styles.input}
          type="text"
          id="title"
          placeholder="type something ... "
          onChange={handleChangeTitle}
        />
        <label className={styles.label} htmlFor="text">
          your text :
        </label>
        <textarea
          value={text}
          className={styles.textarea}
          id="text"
          rows="7"
          cols="20"
          placeholder="type something ... "
          onChange={handleChangeText}
        />
        <div
          className={styles.modalFooter}
          style={{ marginTop: "20px", justifyContent: "flex-end" }}
        >
          <div className={styles.submitKey} onClick={handleConfirmClicked}>
            <span>Confirm</span>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default NewNoteModal;
