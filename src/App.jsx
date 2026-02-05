import "./app.scss";
import Dock from "./Components/Dock";
import Nav from "./Components/Nav";
import Notes from "./Components/Notes";
import Github from "./windows/Github";

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />

      <Github />
      <Notes />
    </main>
  );
};

export default App;
