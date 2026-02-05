import DateTime from "./DateTime";



const Nav = ({setwindow}) => {
  return (
    <nav>
    <div className="left">
        <div className="apple-icon">
            <img src="/navbar-icons/apple.svg" alt="apple" />
        </div>
        <div className="nav-item"><p>Ankit</p></div>
        <div  
        onClick={() => setwindow((state) => ({ ...state, notes: true }))}
        className="nav-item"><p>Note</p></div>
        <div
        
        onClick={() => setwindow((state) => ({ ...state, resume: true }))}
        className="nav-item"><p>Resume</p></div>

        <div 
        
        onClick={() => setwindow((state) => ({ ...state, spotify: true }))}
        className="nav-item"><p>Spotify</p></div>
        <div
        onClick={() => setwindow((state) => ({ ...state, cli: true }))}
        className="nav-item"><p>Terminal</p></div>

    </div>
    <div className="right">
        <div className="nav-icon">
            <img src="/navbar-icons/wifi.svg" alt="wifi" />
        </div>
        <div className="nav-item">
            <DateTime/>
        </div>

    </div>
    </nav>
  )
}

export default Nav
