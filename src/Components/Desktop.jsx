import { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import ContextMenu from "./ContextMenu";

const DesktopItem = ({ folder, onAction, setMenu, setEditingId, editingId }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="parent"
      // defaultPosition use karne se dragging "smooth" rehti hai reload ke baad bhi
      defaultPosition={{ x: folder.x, y: folder.y }}
      onStop={(e, data) => {
        onAction("updatePosition", { id: folder.id, x: data.x, y: data.y });
      }}
    >
      <div 
        ref={nodeRef}
        className="desktop-item"
        style={{ 
          width: "80px", 
          position: "absolute", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          cursor: "grab",
          padding: "5px", 
          pointerEvents: "auto", 
          zIndex: 10
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setMenu({ visible: true, x: e.clientX, y: e.clientY, targetId: folder.id });
        }}
      >
        <img 
          src="/folder.png" 
          alt="folder" 
          style={{ width: "50px", height: "50px", pointerEvents: "none" }} 
          onError={(e) => {e.target.src="https://cdn-icons-png.flaticon.com/512/716/716784.png"}}
        />
        
        {editingId === folder.id ? (
          <input
            autoFocus
            defaultValue={folder.name}
            style={{ 
              width: "100%", fontSize: "11px", textAlign: "center", 
              background: "#0058d8", color: "white", border: "none" 
            }}
            onBlur={(e) => {
              onAction("renameFolder", { id: folder.id, name: e.target.value });
              setEditingId(null);
            }}
            onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
          />
        ) : (
          <span 
            onDoubleClick={() => setEditingId(folder.id)}
            style={{ 
              color: "white", fontSize: "12px", textAlign: "center", 
              textShadow: "0 1px 2px black", marginTop: "4px", 
              userSelect: "none", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
            }}
          >
            {folder.name}
          </span>
        )}
      </div>
    </Draggable>
  );
};

const Desktop = ({ children, wallpaper, onAction, folders }) => {
  const [menu, setMenu] = useState({ visible: false, x: 0, y: 0, targetId: null });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const closeAll = () => setMenu((prev) => ({ ...prev, visible: false }));
    window.addEventListener("click", closeAll);
    return () => window.removeEventListener("click", closeAll);
  }, []);

  return (
    <div
      className="desktop"
      onContextMenu={(e) => {
        e.preventDefault();
        setMenu({ visible: true, x: e.clientX, y: e.clientY, targetId: null });
      }}
      style={{ 
        backgroundImage: `url(${wallpaper})`, 
        height: "100vh", width: "100vw", 
        position: "relative", overflow: "hidden", 
        backgroundSize: 'cover' 
      }}
    >
      <div className="folders-layer" style={{ 
          width: "100%", 
          height: "calc(100% - 150px)", // Dock aur Nav dono se bachne ke liye height kam ki
          position: "absolute", 
          top: "60px", // Nav se door rakhne ke liye gap badhaya
          left: "20px", 
          pointerEvents: "none" 
      }}>
        {folders.map((folder) => (
          <DesktopItem 
            key={folder.id} 
            folder={folder} 
            onAction={onAction} 
            setMenu={setMenu} 
            setEditingId={setEditingId} 
            editingId={editingId} 
          />
        ))}
      </div>

      {children}

      {menu.visible && (
        <ContextMenu
          x={menu.x} y={menu.y} targetId={menu.targetId}
          onAction={(type, id) => {
            if (type === "renameFolder") setEditingId(id);
            else onAction(type, id);
          }}
        />
      )}
    </div>
  );
};

export default Desktop;