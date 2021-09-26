import React, { useState } from "react";
import Select from "react-select";
import styles from "./selectOption.module.css";

const SelectOption = ({ options, setSelectedValue }) => {
  const [selectedOption, setSelectedOption] = useState();
  const handleChange = (e) => {
    setSelectedOption(e);
    setSelectedValue(e);
  };

  return (
    <Select
      theme={(theme) => ({
        ...theme,
        borderRadius: 4,
        colors: {
          ...theme.colors,
          primary25: "#C4B5FD",
          primary: "#8b5cf6",
          primary50: "#A78BFA",
          neutral0: "#F5F3FF",
          neutral20: "#A78BFA",
          neutral30: "#A78BFA",
          neutral40: "#8b5cf6",
          neutral50: "#A78BFA",
          neutral60: "#A78BFA",
          neutral70: "#8b5cf6",
          neutral80: "#8b5cf6",
          neutral90: "#8b5cf6",
        },
      })}
      className={styles.control}
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isSearchable
    />
  );
};

export default SelectOption;
