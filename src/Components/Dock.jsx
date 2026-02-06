import "../dock.scss";

const Dock = ({ setwindow, windowState, playOpen, playClick }) => {
  
  // Universal click handler
  const handleAppClick = (name, isExternal = false, url = "") => {
    if (isExternal) {
      playClick();
      window.open(url, "_blank");
    } else {
      // Sound logic: Agar band hai toh open sound, warna click sound
      if (!windowState[name]) playOpen(); else playClick();
      setwindow((state) => ({ ...state, [name]: true }));
    }
  };

  return (
    <footer className="dock">
      <div className="icon calender" onClick={() => handleAppClick("", true, "https://calendar.google.com/")}>
        <img src="/doc-icons/calender.svg" alt="calendar" />
      </div>

      <div className="icon cli" onClick={() => handleAppClick("cli")}>
        <img src="/doc-icons/cli.svg" alt="cli" />
      </div>

      <div className="icon github" onClick={() => handleAppClick("github")}>
        <img src="/doc-icons/github.svg" alt="github" />
      </div>

      <div className="icon link" onClick={() => handleAppClick("", true, "https://www.linkedin.com/in/ankit-rathore-98208436a/")}>
        <img src="/doc-icons/link.svg" alt="link" />
      </div>

      <div className="icon mail" onClick={() => handleAppClick("", true, "https://mail.google.com/mail/?view=cm&fs=1&to=test@gmail.com")}>
        <img src="/doc-icons/mail.svg" alt="mail" />
      </div>

      <div className="icon note" onClick={() => handleAppClick("notes")}>
        <img src="/doc-icons/note.svg" alt="note" />
      </div>

      <div className="icon pdf" onClick={() => handleAppClick("resume")}>
        <img src="/doc-icons/pdf.svg" alt="resume" />
      </div>

      <div className="icon spotify" onClick={() => handleAppClick("spotify")}>
        <img src="/doc-icons/spotify.svg" alt="spotify" />
      </div>
    </footer>
  );
};

export default Dock;