import { Fragment } from "react";
import "./App.css";
import OptionsList from "./components/OptionsList/OptionsList";
import MainContent from "./components/mainContent/MainContent.jsx";
import CategoryProvider from "./providers/categoryProvider";
import NotesProvider from "./providers/notesProvider";
import ShowContentProvider from "./providers/showContentProvider";
import TasksProvider from "./providers/tasksProvider";

function App() {
  return (
    <Fragment>
      <header>
        <h1>todo list</h1>
      </header>
      <main>
        <TasksProvider>
          <NotesProvider>
            <CategoryProvider>
              <ShowContentProvider>
                <OptionsList />
                <MainContent />
              </ShowContentProvider>
            </CategoryProvider>
          </NotesProvider>
        </TasksProvider>
      </main>
    </Fragment>
  );
}

export default App;
