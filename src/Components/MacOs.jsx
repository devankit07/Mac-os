import { useState } from "react";
import Desktop from "./Desktop";
import Nav from "./Nav";
import Dock from "./Dock";

const MacOS = () => {
  // 1. Initial state check: Pehle localStorage se pucho, nahi toh 0 index use karo
  const [wallpaperIndex, setWallpaperIndex] = useState(() => {
    const saved = localStorage.getItem("selectedWallpaper");
    return saved !== null ? parseInt(saved) : 0;
  });

  const [window, setwindow] = useState({ 
    github: false, notes: false, resume: false, cli: false, spotify: false 
  });
  
  const [isRefreshing, setIsRefreshing] = useState(false);
  const wallpapers = ["/mac2.jpg", "/mac-wall2.jpg", "/mac1.jpg", "/mac3.jpg"];

  // 2. Wallpaper change hone par use localStorage mein save karo
  const selectWallpaper = (index) => {
    setWallpaperIndex(index);
    localStorage.setItem("selectedWallpaper", index);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 400); 
  };

  return (
    <Desktop
      wallpaper={wallpapers[wallpaperIndex]} 
      isRefreshing={isRefreshing}
      onAction={(type) => {
        if (type === "refresh") handleRefresh();
        if (type === "clear") setwindow({ github: false, notes: false, resume: false, cli: false, spotify: false });
      }}
    >
      <Nav
        setwindow={setwindow} 
        onWallpaperChange={selectWallpaper} 
        wallpapers={wallpapers} 
      />

      {/* Windows Logic same rahega */}
      {window.github && <Github windowname="github" setwindow={setwindow} />}
      {window.notes && <Notes windowname="notes" setwindow={setwindow} />}
      {window.resume && <Resume windowname="resume" setwindow={setwindow} />}
      {window.cli && <Cli windowname="cli" setwindow={setwindow} />}
      {window.spotify && <Spotify windowname="spotify" setwindow={setwindow} />}

      <Dock setwindow={setwindow} window={window}/>
    </Desktop>

    
  );
};

export default MacOS;