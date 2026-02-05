import { useEffect, useState } from "react"
import Macwindow from "../windows/Macwindow";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Notes = ({ windowname, setwindow }) => {
     const [markdown,setmarkdown] = useState(null)

    useEffect(()=>{
        fetch("./note.txt")
        .then(res => res.text())
        .then(text => setmarkdown(text))
    },[])
  return (
   
    <div>
      <Macwindow windowname={windowname} setwindow={setwindow}>
        <div className="note-window">
          {markdown?<SyntaxHighlighter language="typescript" style={atelierDuneDark}>{markdown}</SyntaxHighlighter>:<p>Loading..</p>}</div>
      </Macwindow>
    </div>
  )
}

export default Notes
