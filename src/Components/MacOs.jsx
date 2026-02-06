import { useState } from "react";
import Desktop from "./Desktop";
import Nav from "./Nav";
import Dock from "./Dock";
import { useAudio } from "../UseAudio";

// Windows
import Github from "../windows/Github";
import Notes from "../Components/Notes";
import Resume from "../windows/Resume";
import Cli from "../windows/Cli";
import Spotify from "../windows/Spotify";

const MacOS = () => {
  const playClick = useAudio("/sounds/click.mp3");
  const playOpen = useAudio("/sounds/open.mp3");
  const playClose = useAudio("/sounds/close.mp3");

  // State ka naam windowState hi rakhein
  const [windowState, setWindowState] = useState({
    github: false,
    notes: false,
    resume: false,
    cli: false,
    spotify: false,
  });

  const [wallpaperIndex, setWallpaperIndex] = useState(() => {
    const saved = localStorage.getItem("selectedWallpaper");
    return saved !== null ? parseInt(saved) : 0;
  });

  const wallpapers = ["/mac2.jpg", "/mac-wall2.jpg", "/mac1.jpg", "/mac3.jpg"];

  const toggleWindow = (name, value) => {
    if (value) playOpen();
    else playClose();
    setWindowState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Desktop
      wallpaper={wallpapers[wallpaperIndex]}
      onAction={(type) => {
        if (type === "refresh") playClick();
        if (type === "clear") {
          playClose();
          setWindowState({
            github: false,
            notes: false,
            resume: false,
            cli: false,
            spotify: false,
          });
        }
      }}
    >
      <Nav
        onWallpaperChange={(idx) => {
          playClick();
          setWallpaperIndex(idx);
          localStorage.setItem("selectedWallpaper", idx);
        }}
        wallpapers={wallpapers}
      />

      {/* WINDOW RENDERING - Ensure windowState is used here */}

      <div className="window-layer">
        {windowState.github && (
          <Github
            windowname="github"
            setwindow={(v) => toggleWindow("github", v)}
          />
        )}
        {windowState.notes && (
          <Notes
            windowname="notes"
            setwindow={(v) => toggleWindow("notes", v)}
          />
        )}
        {windowState.resume && (
          <Resume
            windowname="resume"
            setwindow={(v) => toggleWindow("resume", v)}
          />
        )}
        {windowState.cli && (
          <Cli windowname="cli" setwindow={(v) => toggleWindow("cli", v)} />
        )}
        {windowState.spotify && (
          <Spotify
            windowname="spotify"
            setwindow={(v) => toggleWindow("spotify", v)}
          />
        )}
      </div>

      <Dock
        setwindow={setWindowState}
        windowState={windowState}
        playOpen={playOpen}
        playClick={playClick}
      />
    </Desktop>
  );
};

export default MacOS;
