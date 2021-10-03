import React, { createContext, useContext, useReducer } from "react";

const tasksContext = createContext();
export const useTasks = () => useContext(tasksContext);
const tasksContextDispatcher = createContext();
export const useTasksActions = () => useContext(tasksContextDispatcher);

const initialState = [];
const tasksReducer = (state, action) => {
  switch (action.type) {
    case "add":
      let copyOfTasks = [...state];
      copyOfTasks.push({
        title: action.value.title,
        description: action.value.description,
        category: action.value.category,
        deadLine: action.value.deadLine,
        isImportant: action.value.isImportant,
        id: state.length,
      });
      return copyOfTasks;

    case "edit":
      const task = action.value;
      const index = state.findIndex((e) => e.id === task.id);
      const updatedTask = { ...state[index] };
      updatedTask.title = task.title;
      updatedTask.description = task.description;
      updatedTask.category = task.category;
      updatedTask.deadLine = task.deadLine;
      updatedTask.isImportant = task.isImportant;
      const copyOfState = [...state];
      copyOfState[index] = updatedTask;
      state = [...copyOfState];
      return state;

    case "delete":
      const filteredState = state.filter((n) => n.id !== action.id);
      const fixedState = filteredState.map((e, index) => {
        return { ...e, id: index };
      });
      return fixedState;

    default:
      return state;
  }
};

const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);
  return (
    <tasksContext.Provider value={tasks}>
      <tasksContextDispatcher.Provider value={dispatch}>
        {children}
      </tasksContextDispatcher.Provider>
    </tasksContext.Provider>
  );
};

export default TasksProvider;
