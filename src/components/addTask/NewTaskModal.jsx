import React, { useState } from "react";
import DateInput from "../../common/dateInput/DateInput";
import Modal from "../../common/modal/Modal";
import SelectOption from "../../common/selectOption/SelectOption";
import styles from "./newTaskAndNoteModal.module.css";
import { useCategories } from "../../providers/categoryProvider";
import { useTasksActions } from "../../providers/tasksProvider";
import {
  useShowContent,
  useShowContentActions,
} from "../../providers/showContentProvider";

const NewTaskModal = ({ closeHandler }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [deadLine, setDeadLine] = useState(new Date());
  const [isImportant, setIsImportant] = useState(false);
  const categories = useCategories();
  const showContent = useShowContent();
  const dispatchShowContent = useShowContentActions();
  const dispatchTasks = useTasksActions();

  let options = [];
  categories.map((category) => {
    return (options = [
      ...options,
      { value: category.id, label: category.item },
    ]);
  });

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeIsImportant = () => {
    setIsImportant(!isImportant);
  };
  const handleConfirmClicked = () => {
    dispatchTasks({
      type: "add",
      value: { title, description, category, deadLine, isImportant },
    });

    switch (showContent.selectedOption) {
      case "all":
      case "today":
      case "tomorrow":
      case "important":
      case "expired":
        dispatchShowContent({ type: showContent.selectedOption });
        break;

      case "notes":
        dispatchShowContent({ type: "all" });
        break;

      case "otherCategory":
        dispatchShowContent({
          type: "otherCategory",
          category: showContent.category,
        });
        break;

      default:
        break;
    }

    closeHandler();
  };

  return (
    <Modal closeHandler={closeHandler}>
      <form className={styles.container}>
        <h3 className={styles.h3}>add new task</h3>

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

        <label className={styles.label} htmlFor="description">
          description :
        </label>
        <textarea
          value={description}
          className={styles.textarea}
          id="description"
          rows="4"
          cols="20"
          placeholder="type something ... "
          onChange={handleChangeDescription}
        />
        <div className={styles.selectInputs}>
          <div className={styles.selectGroupe}>
            <label className={styles.selectLabel}>task category :</label>
            <SelectOption options={options} setSelectedValue={setCategory} />
          </div>
          <div className={`${styles.selectGroupe}  ${styles.flexEnd}`}>
            <label className={styles.selectLabel}>deadLine :</label>
            <DateInput setSelectedValue={setDeadLine} />
          </div>
        </div>
        <div className={styles.modalFooter}>
          <div className={styles.switchGroupe}>
            <label className={styles.label}> Is it important ?</label>
            <div className={styles.switchBox}>
              <input
                checked={isImportant}
                type="checkbox"
                className={styles.switch}
                onChange={handleChangeIsImportant}
              />
            </div>
          </div>
          <div className={styles.submitKey} onClick={handleConfirmClicked}>
            <span>Confirm</span>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default NewTaskModal;
