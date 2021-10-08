import React, { useState } from "react";
import { useShowContent } from "../../providers/showContentProvider";
import MainCategories from "../mainCategories/MainCategories";
import OtherCategories from "../otherCategories/OtherCategories";
import styles from "./optionList.module.css";

function OptionsList() {
  const showContent = useShowContent();
  const [selectedItem, setSelectedItem] = useState(showContent.selectedOption);
  return (
    <section className={styles.container}>
      <h3>Categories</h3>
      <MainCategories
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <OtherCategories
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </section>
  );
}
export default OptionsList;
