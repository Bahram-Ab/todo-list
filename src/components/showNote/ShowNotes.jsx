import React, { Fragment, useState } from "react";
import { useNotesActions } from "../../providers/notesProvider";
import {
  useShowContent,
  useShowContentActions,
} from "../../providers/showContentProvider";
import EditNotes from "./EditNotes";
import styles from "./showNotes.module.css";

function ShowNotes() {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [itemID, setItemId] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const showContent = useShowContent();
  const dispatchShowContent = useShowContentActions();
  const dispatchNote = useNotesActions();

  const handleDeleteNote = (id) => {
    dispatchNote({ type: "delete", id: id });
    dispatchShowContent({ type: "notes" });
  };

  const handleEditNote = (title, text) => {
    dispatchNote({ type: "edit", value: { title, text, id: itemID } });
    dispatchShowContent({ type: "notes" });
  };

  const toggleEditHandler = (id) => {
    setToggleEdit(!toggleEdit);
    setItemId(id);
    const index = showContent.content.findIndex((e) => e.id === id);
    setItemIndex(index);
  };

  return (
    <Fragment>
      <h2 className={styles.header}>your notes</h2>
      <div className={styles.container}>
        {showContent.content.map((note) => {
          return (
            <div key={note.id} className={styles.item}>
              <div className={styles.title}>{note.title}</div>
              <div className={styles.text}>{note.text}</div>
              <div className={styles.footer}>
                <div
                  className={styles.deleteKey}
                  onClick={() => handleDeleteNote(note.id)}
                >
                  delete
                </div>
                <div
                  className={styles.editKey}
                  onClick={() => toggleEditHandler(note.id)}
                >
                  edit
                </div>
              </div>
            </div>
          );
        })}
        {toggleEdit && (
          <EditNotes
            closeHandler={toggleEditHandler}
            preTitle={showContent.content[itemIndex].title}
            preText={showContent.content[itemIndex].text}
            handleEditNote={(title, text) => handleEditNote(title, text)}
          />
        )}
      </div>
    </Fragment>
  );
}

export default ShowNotes;
