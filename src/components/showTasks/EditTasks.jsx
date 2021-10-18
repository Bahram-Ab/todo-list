import React, { useState } from "react";
import styles from "./editTasks.module.css";
import Modal from "../../common/modal/Modal";
import SelectOption from "../../common/selectOption/SelectOption";
import DateInput from "../../common/dateInput/DateInput";
import { useCategories } from "../../providers/categoryProvider";

function EditTasks({
  closeHandler,
  handleEditTask,
  preTitle,
  preDescription,
  preCategory,
  preDeadLine,
  preIsImportant,
}) {
  const [title, setTitle] = useState(preTitle);
  const [description, setDescription] = useState(preDescription);
  const [category, setCategory] = useState(preCategory);
  const [deadLine, setDeadLine] = useState(preDeadLine);
  const [isImportant, setIsImportant] = useState(preIsImportant);
  const categories = useCategories();

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
    handleEditTask(title, description, category, deadLine, isImportant);
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
            <label className={styles.selectLabel}>task category</label>
            <SelectOption
              options={options}
              setSelectedValue={setCategory}
              preSelected={options.find((e) => e.label === preCategory)}
            />
          </div>
          <div className={`${styles.selectGroupe}  ${styles.flexEnd}`}>
            <label className={styles.selectLabel}>deadLine</label>
            <DateInput
              setSelectedValue={setDeadLine}
              preSelected={preDeadLine}
            />
          </div>
        </div>
        <div className={styles.modalFooter}>
          <div className={styles.switchGroupe}>
            <label className={styles.label}> Is it important</label>
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
}

export default EditTasks;
