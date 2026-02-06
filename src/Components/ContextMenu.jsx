const ContextMenu = ({ x, y, onAction }) => {
  return (
    <div className="context-menu" style={{ top: y, left: x }}>
      <p onClick={() => onAction("refresh")}>🔄 Refresh Desktop</p>
      <p onClick={() => onAction("clear")}>🧹 Clear All Windows</p>
      <hr style={{ border: "0.5px solid rgba(255,255,255,0.1)" }} />
      <p onClick={() => alert("💻 MacOS Clone by Ankit")}>ℹ️ About This Mac</p>
    </div>
  );
};
export default ContextMenu;

