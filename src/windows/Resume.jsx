import Macwindow from "./Macwindow";

const Resume = ({ windowname, setwindow }) => {
  return (
    <Macwindow windowname={windowname} setwindow={setwindow}>
        <div className="resume-window">
      <embed src="/resume.pdf" frameBorder="0"></embed>
        </div>
    </Macwindow>
  )
}

export default Resume
