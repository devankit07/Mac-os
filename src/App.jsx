import { useState } from "react";
import "./app.scss";

import Dock from "./Components/Dock";
import Nav from "./Components/Nav";

import Notes from "./Components/Notes";
import Cli from "./windows/Cli";
import Github from "./windows/Github";
import Resume from "./windows/Resume";
import Spotify from "./windows/Spotify";

import Desktop from "./Components/Desktop";

const App = () => {

  const [window, setwindow] = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  return (
    <Desktop>

      <Nav setwindow={setwindow} />
      <Dock window={window} setwindow={setwindow} />

      {window.github && (
        <Github windowname="github" setwindow={setwindow} />
      )}

      {window.notes && (
        <Notes windowname="notes" setwindow={setwindow} />
      )}

      {window.resume && (
        <Resume windowname="resume" setwindow={setwindow} />
      )}

      {window.spotify && (
        <Spotify windowname="spotify" setwindow={setwindow} />
      )}

      {window.cli && (
        <Cli windowname="cli" setwindow={setwindow} />
      )}

    </Desktop>
  );
};

export default App;
