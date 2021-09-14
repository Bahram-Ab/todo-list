import React, { useRef, useState } from "react";
import Category from "./Category";
import styles from "./otherCategories.module.css";
import { FaPlus } from "react-icons/fa";

function OtherCategories() {
  const inputCategory = useRef(null);
  const [categories, setCategories] = useState([
    { item: "shopping", id: 0 },
    { item: "developing", id: 1 },
    { item: "home work", id: 2 },
  ]);

  const addCategory = () => {
    const inputValue = inputCategory.current.value;
    //validate input value
    if (inputValue.replace(/\s+/g, "") === "") {
      alert("please Enter category completely");
      inputCategory.current.value = "";
      return;
    } else if (categories.indexOf(inputValue) > -1) {
      alert("this category already exist !!!");
      inputCategory.current.value = "";
      return;
    }
    //set new category
    setCategories([...categories, { item: inputValue, id: categories.length }]);
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
