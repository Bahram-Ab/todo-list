import React, { createContext, useContext, useReducer } from "react";
import { useNotes } from "./notesProvider";

const showContentContext = createContext();
export const useShowContent = () => useContext(showContentContext);
const showContentContextDispatcher = createContext();
export const useShowContentActions = () =>
  useContext(showContentContextDispatcher);

const ShowContentProvider = ({ children }) => {
  const notes = useNotes();
  const initialState = { selectedOption: "all", content: [] };
  const [showContent, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "notes":
        state = { selectedOption: "notes", content: notes };
        return state;

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
