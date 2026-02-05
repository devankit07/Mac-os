import "../dock.scss";

const Dock = ({ setwindow }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          window.open("https://calendar.google.com/", "_blank");
        }}
        className="icon calender"
      >
        <img src="/doc-icons/calender.svg" alt="calender" />
      </div>
      <div
        onClick={() => setwindow((state) => ({ ...state, cli: true }))}
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="cli" />
      </div>
      <div
        onClick={() => setwindow((state) => ({ ...state, github: true }))}
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="github" />
      </div>
      <div
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/ankit-rathore-98208436a/",
            "_blank",
          );
        }}
        className="icon link"
      >
        <img src="/doc-icons/link.svg" alt="link" />
      </div>
      <div
        onClick={() =>
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=test@gmail.com",
            "_blank",
          )
        }
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="mail" />
      </div>
      <div
        onClick={() => setwindow((state) => ({ ...state, notes: true }))}
        className="icon note"
      >
        <img src="/doc-icons/note.svg" alt="note" />
      </div>
      <div
        onClick={() => setwindow((state) => ({ ...state, resume: true }))}
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="pdf" />
      </div>

      <div
        onClick={() => setwindow((state) => ({ ...state, spotify: true }))}
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="spotify" />
      </div>
    </footer>
  );
};

export default Dock;
