import { Fragment } from "react";
import "./App.css";
import OptionsList from "./components/OptionsList/OptionsList";
import ShowContent from "./components/ShowContent/ShowContent";
import CategoryProvider from "./providers/categoryProvider";

function App() {
  return (
    <Fragment>
      <header>
        <h1>todo list</h1>
      </header>
      <main>
        <CategoryProvider>
          <OptionsList />
          <ShowContent />
        </CategoryProvider>
      </main>
    </Fragment>
  );
}

export default App;
