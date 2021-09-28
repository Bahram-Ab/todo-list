import React, { createContext, useContext, useReducer } from "react";

const categoryContext = createContext();
export const useCategories = () => useContext(categoryContext);
const categoryContextDispatcher = createContext();
export const useCategoryActions = () => useContext(categoryContextDispatcher);

const initialState = [
  { item: "shopping", id: 0 },
  { item: "developing", id: 1 },
  { item: "home-work", id: 2 },
];
const categoryReducer = (state, action) => {
  switch (action.type) {
    case "add":
      let copyOfCategories = [...state];
      copyOfCategories.push({
        item: action.value,
        id: state.length,
      });
      return copyOfCategories;
    default:
      return state;
  }
};

const CategoryProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(categoryReducer, initialState);
  return (
    <categoryContext.Provider value={tasks}>
      <categoryContextDispatcher.Provider value={dispatch}>
        {children}
      </categoryContextDispatcher.Provider>
    </categoryContext.Provider>
  );
};

export default CategoryProvider;
