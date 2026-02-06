import { useState, useEffect } from "react";
import ContextMenu from "./ContextMenu";

const Desktop = ({ children, wallpaper, isRefreshing, onAction }) => {
  const [menu, setMenu] = useState({ visible: false, x: 0, y: 0 });

  const handleRightClick = (e) => {
    e.preventDefault();
    setMenu({ visible: true, x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const closeMenu = () => setMenu((prev) => ({ ...prev, visible: false }));
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, []);

  return (
    <div
      className="desktop"
      onContextMenu={handleRightClick}
      style={{
        backgroundColor: "#1a1a1a", // Safe fallback color
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
        filter: isRefreshing ? "brightness(0.6)" : "none",
        height: "100vh",
        width: "100vw",
        position: "relative"
      }}
    >
      {children}

      {menu.visible && (
        <ContextMenu
          x={menu.x}
          y={menu.y}
          onAction={(type) => {
            onAction(type); 
            setMenu({ ...menu, visible: false });
          }}
        />
      )}
    </div>
  );
};

export default Desktop;