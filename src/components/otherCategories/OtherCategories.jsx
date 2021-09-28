import React, { useRef } from "react";
import Category from "./Category";
import styles from "./otherCategories.module.css";
import { FaPlus } from "react-icons/fa";
import {
  useCategories,
  useCategoryActions,
} from "../../providers/categoryProvider";

function OtherCategories() {
  const inputCategory = useRef(null);
  const categories = useCategories();
  const dispatch = useCategoryActions();

  const isExists = (value) => {
    let result = false;
    categories.forEach((c) => {
      if (value.toLowerCase() === c.item.toLowerCase()) {
        result = true;
      }
    });
    return result;
  };

  const addCategory = () => {
    let inputValue = inputCategory.current.value;
    //validate input value
    if (inputValue.replace(/\s+/g, "") === "") {
      alert("please Enter category completely");
      inputCategory.current.value = "";
      return;
    } else if (isExists(inputValue)) {
      alert("this category already exist !!!");
      inputCategory.current.value = "";
      return;
    }
    //set new category
    const newVal = inputValue.replace(/\s+/g, "");
    dispatch({ type: "add", value: newVal });

    inputCategory.current.value = "";
    window.scrollTo(0, window.screen.height);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory();
  };

  return (
    <div className={styles.container}>
      <Category categories={categories} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.item}
          placeholder="add category ..."
          ref={inputCategory}
        />
        <span onClick={addCategory}>
          <FaPlus className={styles.plus} />
        </span>
      </form>
    </div>
  );
}

export default OtherCategories;
