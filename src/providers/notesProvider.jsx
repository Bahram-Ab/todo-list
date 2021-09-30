import React, { createContext, useContext, useReducer } from "react";

const notesContext = createContext();
export const useNotes = () => useContext(notesContext);
const notesContextDispatcher = createContext();
export const useNotesActions = () => useContext(notesContextDispatcher);

const initialState = [];
const notesReducer = (state, action) => {
  switch (action.type) {
    case "add":
      let copyOfNotes = [...state];
      copyOfNotes.push({
        title: action.value.title,
        text: action.value.text,
        id: state.length,
      });
      return copyOfNotes;

    case "edit":
      const note = action.value;
      const index = state.findIndex((e) => e.id === note.id);
      const updatedNote = { ...state[index] };
      updatedNote.title = note.title;
      updatedNote.text = note.text;
      const copyOfState = [...state];
      copyOfState[index] = updatedNote;
      state = [...copyOfState];
      return state;

    case "delete":
      const filteredState = state.filter((n) => n.id !== action.id);
      return filteredState;

    default:
      return state;
  }
};

const NotesProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(notesReducer, initialState);
  return (
    <notesContext.Provider value={notes}>
      <notesContextDispatcher.Provider value={dispatch}>
        {children}
      </notesContextDispatcher.Provider>
    </notesContext.Provider>
  );
};

export default NotesProvider;
