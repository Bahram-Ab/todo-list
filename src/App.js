import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import OptionsList from "./components/OptionsList/OptionsList";
import ShowContent from "./components/ShowContent/ShowContent";

function App() {
  return (
    <Fragment>
      <header>
        <h1>todo list</h1>
      </header>
      <main>
        <OptionsList />
        <ShowContent />
      </main>
    </Fragment>
  );
}

export default App;
