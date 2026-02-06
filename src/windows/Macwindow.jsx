import { Rnd } from "react-rnd";

const Macwindow = ({ children, windowname, setwindow }) => {
  return (
    <Rnd
      default={{
        width: 700,
        height: 500,
        x: 100,
        y: 100,
      }}
      minWidth={350}
      minHeight={250}
      bounds=".desktop"
      dragHandleClassName="window-nav-bar" // Specific class for dragging
      lockAspectRatio={windowname === "spotify"}
      // Critical for layout stability:
      style={{ zIndex: 100, display: "flex", overflow: "hidden" }} 
    >
      <div className="mac-window-container">
        {/* Title Bar / Nav */}
        <div className="window-nav-bar">
          <div className="window-dots">
            <div onClick={() => setwindow(false)} className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="window-title">
            <p>{windowname}</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="window-main-content">
          {children}
        </div>
      </div>
    </Rnd>
  );
};

export default Macwindow;