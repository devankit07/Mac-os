const ContextMenu = ({ x, y, onAction, targetId }) => {
  const isNearRightEdge = window.innerWidth - x < 180;
  return (
    <div
      className="context-menu"
      style={{
        top: y,
        left: isNearRightEdge ? x - 160 : x,
        position: "fixed",
      }}
    >
      {targetId ? (
        <>
          <p onClick={() => onAction("renameFolder", targetId)}>
            ✏️ Rename Folder
          </p>
          <p
            onClick={() => onAction("deleteFolder", targetId)}
            style={{ color: "red" }}
          >
            🗑️ Delete Folder
          </p>
        </>
      ) : (
        <>
          <p onClick={() => onAction("newFolder")}>📁 New Folder</p>
          <p onClick={() => onAction("refresh")}>🔄 Refresh Desktop</p>
          <p onClick={() => onAction("clear")}>🧹 Clear Windows</p>
        </>
      )}
    </div>
  );
};

export default ContextMenu;
