import { useState, useEffect } from "react";
import ContextMenu from "./ContextMenu";

const Desktop = ({ children }) => {

  const [menu, setMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  const [wallpaper, setWallpaper] = useState(
    "/mac-wall2.jpg" // default image
  );

  const handleRightClick = (e) => {
    e.preventDefault();

    setMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
    });
  };

  // Menu Action Handler
  const handleAction = (type) => {

    if (type === "refresh") {
      window.location.reload();
    }

    if (type === "wallpaper") {
      const wallpapers = [
        "/mac1.jpg",
        "/mac2.jpg",
        "/mac3.jpg",
      ];

      const random =
        wallpapers[Math.floor(Math.random() * wallpapers.length)];

      setWallpaper(random);
    }

    if (type === "about") {
      alert("💻 MacOS Clone by Ankit\nReact Project 2026");
    }

    setMenu({ ...menu, visible: false });
  };

  useEffect(() => {
    const close = () =>
      setMenu((prev) => ({ ...prev, visible: false }));

    window.addEventListener("click", close);

    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <div
      className="desktop"
      onContextMenu={handleRightClick}
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
    >

      {children}

      {menu.visible && (
        <ContextMenu
          x={menu.x}
          y={menu.y}
          onAction={handleAction}
        />
      )}

    </div>
  );
};

export default Desktop;
