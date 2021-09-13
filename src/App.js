import "./App.css";
import OptionsList from "./components/containers/OptionsList/OptionsList";
import ShowContent from "./components/containers/ShowContent/ShowContent";
function App() {
  return (
    <main className="main">
      <OptionsList />
      <ShowContent />
    </main>
  );
}

export default App;
