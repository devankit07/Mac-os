import Macwindow from "./Macwindow";

const Spotify = ({ windowname, setwindow }) => {
  return (
    <Macwindow windowname={windowname} setwindow={setwindow}>
      <div className="spotify-window">
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcXr3xuOkUJZ?theme=0"
          style={{ borderRadius: 12 }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </Macwindow>
  );
};

export default Spotify;
