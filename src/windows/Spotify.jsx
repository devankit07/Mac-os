import Macwindow from "./Macwindow";

const Spotify = ({ windowname, setwindow }) => {
  return (
    <Macwindow windowname={windowname} setwindow={setwindow}>
      <div className="spotify-window" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcXr3xuOkUJZ?theme=0"
          style={{ 
            borderRadius: 12, 
            width: "100%", 
            height: "100%", 
            border: "none" 
          }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </Macwindow>
  );
};

export default Spotify;




