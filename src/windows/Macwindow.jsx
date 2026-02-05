import { Rnd } from "react-rnd";

const Macwindow = ({ children, windowname, setwindow }) => {
  return (
    <Rnd
      default={{
        width: 600,
        height: 400,
        x: 300,
        y: 200,
      }}
    lockAspectRatio={windowname === "spotify"}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              onClick={() =>
                setwindow((state) => ({
                  ...state,
                  [windowname]: false,
                }))
              }
              className="dot red"
            ></div>

            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>{windowname}</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default Macwindow;
