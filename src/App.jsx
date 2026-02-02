import "./app.scss"
import Dock from "./Components/Dock"
import Nav from "./Components/Nav"
import Macwindow from "./windows/macwindow"


const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>

      <Macwindow/>
    </main>
  )
}

export default App