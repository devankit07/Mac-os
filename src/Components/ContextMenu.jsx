const ContextMenu = ({ x, y, onAction }) => {
  return (
    <div
      className="context-menu"
      style={{
        top: y,
        left: x,
      }}
    >

      <p onClick={() => onAction("refresh")}>🔄 Refresh</p>

      <p onClick={() => onAction("wallpaper")}>
        🖼 Change Wallpaper
      </p>
      
      <p onClick={() => onAction("about")}>
        ℹ️ About
      </p>

    </div>
  );
};

export default ContextMenu;
