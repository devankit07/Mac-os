import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import Macwindow from "../windows/Macwindow";
const Notes = () => {
     const [markdown,setmarkdown] = useState(null)

    useEffect(()=>{
        fetch("./note.txt")
        .then(res => res.text())
        .then(text => setmarkdown(text))
    },[])
  return (
   
    <div>
      <Macwindow>
        <div className="note-window">{markdown?<Markdown>{markdown}</Markdown>:<p>Loading..</p>}</div>
      </Macwindow>
    </div>
  )
}

export default Notes
