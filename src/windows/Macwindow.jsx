import { Rnd } from "react-rnd";


const Macwindow = ({children, windowname,  setwindow}) => {
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
              <div
              onClick={() => setwindow(state => ({ ...state, [windowname]: false }))}
              className="dot red"></div>
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
