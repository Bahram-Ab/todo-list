import React, { useState } from "react";
import Modal from "../../common/modal/Modal";
import { useNotesActions } from "../../providers/notesProvider";
import { useShowContentActions } from "../../providers/showContentProvider";
import styles from "./newTaskAndNoteModal.module.css";

const NewNoteModal = ({ closeHandler }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const noteDispatch = useNotesActions();
  const showDispatch = useShowContentActions();
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const handleConfirmClicked = () => {
    noteDispatch({ type: "add", value: { title, text } });
    showDispatch({ type: "notes" });
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
