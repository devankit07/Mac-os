import "./app.scss";
import Dock from "./Components/Dock";
import Nav from "./Components/Nav";
import Notes from "./Components/Notes";
import Github from "./windows/Github";
import Resume from "./windows/Resume";
import Spotify from "./windows/Spotify";

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />

      <Github />
      <Notes />
      <Resume/>
      <Spotify/>
    </main>
  );
};

export default App;
