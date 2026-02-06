import { useState, useEffect } from "react";
import Desktop from "./Desktop";
import Nav from "./Nav";
import Dock from "./Dock";
import { useAudio } from "../UseAudio";

import Github from "../windows/Github";
import Notes from "../Components/Notes";
import Resume from "../windows/Resume";
import Cli from "../windows/Cli";
import Spotify from "../windows/Spotify";

const MacOS = () => {
  const playClick = useAudio("/sounds/click.mp3");
  const playOpen = useAudio("/sounds/open.mp3");
  const playClose = useAudio("/sounds/close.mp3");

  const [windowState, setWindowState] = useState({
    github: false,
    notes: false,
    resume: false,
    cli: false,
    spotify: false,
  });

  const [folders, setFolders] = useState(() => {
    const saved = localStorage.getItem("mac_folders");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("mac_folders", JSON.stringify(folders));
  }, [folders]);

  const createNewFolder = () => {
    const offset = folders.length * 30;

    const newFolder = {
      id: Date.now(),
      name: `New Folder ${folders.length + 1}`,
      x: offset,
      y: offset,
    };
    setFolders([...folders, newFolder]);
    playClick();
  };

  const deleteFolder = (id) => {
    setFolders(folders.filter((f) => f.id !== id));
    playClose();
  };

  const renameFolder = (id, newName) => {
    setFolders(folders.map((f) => (f.id === id ? { ...f, name: newName } : f)));
    playClick();
  };

  const updateFolderPosition = (id, x, y) => {
    setFolders((prev) => prev.map((f) => (f.id === id ? { ...f, x, y } : f)));
  };

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

  const handleAction = (type, data) => {
    if (type === "refresh") playClick();
    if (type === "newFolder") createNewFolder();
    if (type === "deleteFolder") deleteFolder(data);
    if (type === "updatePosition")
      updateFolderPosition(data.id, data.x, data.y);

    if (type === "renameFolder") {
      if (data?.id) renameFolder(data.id, data.name);
      else {
        const folder = folders.find((f) => f.id === data);
        const newName = prompt("Rename Folder:", folder.name);
        if (newName) renameFolder(data, newName);
      }
    }

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
  };

  return (
    <Desktop
      wallpaper={wallpapers[wallpaperIndex]}
      folders={folders}
      onAction={handleAction}
    >
      <Nav
        onWallpaperChange={(idx) => {
          setWallpaperIndex(idx);
          localStorage.setItem("selectedWallpaper", idx);
        }}
        wallpapers={wallpapers}
      />
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
