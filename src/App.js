import { Fragment } from "react";
import "./App.css";
import OptionsList from "./components/OptionsList/OptionsList";
import ShowContent from "./components/ShowContent/ShowContent";
import CategoryProvider from "./providers/categoryProvider";
import NotesProvider from "./providers/notesProvider";

function App() {
  return (
    <Fragment>
      <header>
        <h1>todo list</h1>
      </header>
      <main>
        <NotesProvider>
          <CategoryProvider>
            <OptionsList />
            <ShowContent />
          </CategoryProvider>
        </NotesProvider>
      </main>
    </Fragment>
  );
}

export default App;
