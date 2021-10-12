import { Fragment } from "react";
import "./App.css";
import OptionsList from "./components/OptionsList/OptionsList";
import MainContent from "./components/mainContent/MainContent.jsx";
import CategoryProvider from "./providers/categoryProvider";
import NotesProvider from "./providers/notesProvider";
import ShowContentProvider from "./providers/showContentProvider";
import TasksProvider from "./providers/tasksProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <header>
        <h1>ToDo List</h1>
        <h1>Bahram-Ab</h1>
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
      <ToastContainer
        position="bottom-right"
        autoClose={6000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
}

export default App;
