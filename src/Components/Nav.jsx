import { useState } from "react";
import DateTime from "./DateTime";

const Nav = ({ onWallpaperChange, wallpapers }) => {
  const [showWallMenu, setShowWallMenu] = useState(false);

  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="/navbar-icons/apple.svg" alt="apple" />
        </div>
        <div className="nav-item">
          <p>Ankit</p>
        </div>
        <div className="nav-item" style={{ position: "relative" }}>
          <p
            onClick={() => setShowWallMenu(!showWallMenu)}
            style={{ cursor: "pointer" }}
          >
            🖼 Wallpapers
          </p>

          {showWallMenu && (
            <div className="nav-dropdown">
              {wallpapers &&
                wallpapers.map((wall, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => {
                      onWallpaperChange(index);
                      setShowWallMenu(false);
                    }}
                  >
                    Wall {index + 1}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className="right">
        <div className="nav-icon">
          <img src="/navbar-icons/wifi.svg" alt="wifi" />
        </div>
        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
