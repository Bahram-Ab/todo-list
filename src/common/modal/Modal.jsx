import React, { useState } from "react";
import styles from "./modal.module.css";

const Modal = ({ closeHandler, children }) => {
  const [showModal, setShowModal] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const handleShowWarning = (e) => {
    if (e.target.className === styles.container) setShowWarning(true);
  };
  const handleHideWarning = () => {
    setShowWarning(false);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      closeHandler();
    }, 200);
  };
  return (
    <div className={styles.container} onClick={handleShowWarning}>
      <div className={`${showModal ? styles.modalShow : styles.modalClose}`}>
        {children}
        {showWarning ? (
          <div className={styles.warning}>
            <h3 className={styles.warningTitle}>
              Are you sure to close modal ?
              <p className={styles.hint}>
                ( By pressing "Yes" your changes will be lost !! )
              </p>
            </h3>
            <div className={styles.options}>
              <div className={styles.option} onClick={handleCloseModal}>
                Yes
              </div>
              <div className={styles.option} onClick={handleHideWarning}>
                No
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
