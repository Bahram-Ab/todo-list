import React, { createContext, useContext, useReducer } from "react";
import { useNotes } from "./notesProvider";
import { useTasks } from "./tasksProvider";
const showContentContext = createContext();
export const useShowContent = () => useContext(showContentContext);
const showContentContextDispatcher = createContext();
export const useShowContentActions = () =>
  useContext(showContentContextDispatcher);

const ShowContentProvider = ({ children }) => {
  const notes = useNotes();
  const tasks = useTasks();
  const initialState = { selectedOption: "all", content: [] };
  const [showContent, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "all":
        return { selectedOption: "all", content: tasks };
      case "today":
        return { selectedOption: "today", content: "dasbvafdsb" };
      case "tomorrow":
        return { selectedOption: "tomorrow", content: "dasbvafdsb" };
      case "important":
        return { selectedOption: "important", content: "dasbvafdsb" };
      case "expired":
        return { selectedOption: "expired", content: "dasbvafdsb" };
      case "routine":
        return { selectedOption: "routine", content: "dasbvafdsb" };
      case "notes":
        return { selectedOption: "notes", content: notes };

      default:
        return state;
    }
  }, initialState);
  return (
    <showContentContext.Provider value={showContent}>
      <showContentContextDispatcher.Provider value={dispatch}>
        {children}
      </showContentContextDispatcher.Provider>
    </showContentContext.Provider>
  );
};

export default ShowContentProvider;
