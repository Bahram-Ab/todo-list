import React, { useRef } from "react";
import Category from "./Category";
import styles from "./otherCategories.module.css";
import { FaPlus } from "react-icons/fa";
import {
  useCategories,
  useCategoryActions,
} from "../../providers/categoryProvider";
import { useShowContentActions } from "../../providers/showContentProvider";
import { toast } from "react-toastify";

function OtherCategories({ setSelectedItem, selectedItem }) {
  const inputCategory = useRef(null);
  const categories = useCategories();
  const dispatch = useCategoryActions();
  const dispatchShowContent = useShowContentActions();

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
      toast.error("Please Enter category name completely");
      inputCategory.current.value = "";
      return;
    } else if (isExists(inputValue)) {
      toast.error("this category already exist !!!");
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

  const handleChooseOption = (categoryName) => {
    dispatchShowContent({
      type: "otherCategory",
      category: categoryName,
    });
    setSelectedItem(categoryName);
  };

  return (
    <div className={styles.container}>
      <Category
        categories={categories}
        selectedItem={selectedItem}
        handleChooseOption={handleChooseOption}
      />
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
