import "./app.scss"
import Dock from "./Components/Dock"
import Nav from "./Components/Nav"
import Github from "./windows/github"




const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>

     <Github/>
    </main>
  )
}
// const Gitcard = ({
//   data = {
//     id: 1,
//     image: "",
//     title: "",
//     description: "",
//     tags: [],
//     repoLink: "",
//     demoLink: "",
//   },
// }) => {
//   return (
//     <div className="card">
//       <img src={data.image} alt="repo-image" />
//       <h2>{data.title}</h2>
//       <p>{data.description}</p>

//       <div className="tags">
//         {data.tags.map((tag) => (
//           <p className="tag">{tag}</p>
//         ))}
//       </div>
//       <div className="urls">
//         <a href={data.repoLink}>Repository</a>
//         <a href={data.demoLink}>Demo Link</a>
//       </div>
//     </div>
//   );
// };

export default App