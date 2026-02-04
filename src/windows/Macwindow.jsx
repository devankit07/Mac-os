import { Rnd } from "react-rnd";
import("./window.scss");

const Macwindow = ({children}) => {
  return (
    <div>
      <Rnd
      default={{
        height:"25vw",
        width:"30vw",
        x:300,
        y:200

      }}
      >
        <div className="window">
          <div className="nav">
            <div className="dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="title">
              <p>Ankit -zsh</p>
            </div>
          </div>
          <div className="main-content">{children}</div>
        </div>
      </Rnd>
    </div>
  );
};

export default Macwindow;
