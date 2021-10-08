import React, { createContext, useContext, useReducer } from "react";
import { useNotes } from "./notesProvider";
import { useTasks } from "./tasksProvider";
const showContentContext = createContext();
export const useShowContent = () => useContext(showContentContext);
const showContentContextDispatcher = createContext();
export const useShowContentActions = () =>
  useContext(showContentContextDispatcher);

export const filterTasksBy = (keyName, tasks, categoryName = "") => {
  switch (keyName) {
    case "today":
      return tasks.filter(
        (e) =>
          e.deadLine.getDate() === new Date().getDate() &&
          e.deadLine.getMonth() === new Date().getMonth() &&
          e.deadLine.getFullYear() === new Date().getFullYear()
      );

    case "tomorrow":
      let tomorrowDay = new Date();
      tomorrowDay.setDate(new Date().getDate() + 1);
      return tasks.filter(
        (e) =>
          e.deadLine.toLocaleDateString() === tomorrowDay.toLocaleDateString()
      );

    case "important":
      return tasks.filter((e) => e.isImportant === true);

    case "expired":
      return tasks.filter(
        (e) =>
          e.deadLine.getFullYear() < new Date().getFullYear() ||
          e.deadLine.getMonth() < new Date().getMonth() ||
          e.deadLine.getDate() < new Date().getDate()
      );

    case "other":
      return tasks.filter((e) => e.category === categoryName);

    default:
      break;
  }
};

const ShowContentProvider = ({ children }) => {
  const notes = useNotes();
  const tasks = useTasks();
  const initialState = { selectedOption: "all", content: [] };
  const [showContent, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "all":
        return { selectedOption: "all", content: tasks };
      case "today":
        return {
          selectedOption: "today",
          content: filterTasksBy("today", tasks),
        };
      case "tomorrow":
        return {
          selectedOption: "tomorrow",
          content: filterTasksBy("tomorrow", tasks),
        };
      case "important":
        return {
          selectedOption: "important",
          content: filterTasksBy("important", tasks),
        };
      case "expired":
        return {
          selectedOption: "expired",
          content: filterTasksBy("expired", tasks),
        };
      case "notes":
        return { selectedOption: "notes", content: notes };
      case "otherCategory":
        return {
          selectedOption: "otherCategory",
          content: filterTasksBy("other", tasks, action.category),
          category: action.category,
        };

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
