import Macwindow from "./Macwindow";

const Resume = ({ windowname, setwindow }) => {
  return (
    <Macwindow windowname={windowname} setwindow={setwindow}>
      <div className="resume-window" style={{ width: "100%", height: "100%" }}>
        <embed 
          src="/resume1.pdf" 
          type="application/pdf"
          width="100%" 
          height="100%" 
          style={{ border: "none" }}
        />
      </div>
    </Macwindow>
  );
};

export default Resume;