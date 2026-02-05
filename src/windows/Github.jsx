import GithubData from "../assets/github.json";
import Macwindow from "./Macwindow";


const Gitcard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <div className="tags">
        {data.tags && <span className="tag">{data.tags}</span>}
      </div>
      <div className="urls">
        <a href={data.repoLink} target="_blank" rel="noreferrer">
          Repo
        </a>
        <a href={data.demoLink} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
};

const Github = () => {
  return (
    <Macwindow title="Ankit - GitHub">
      <div className="cards">
        {GithubData.map((project) => (
          <Gitcard key={project.id} data={project} />
        ))}
      </div>
    </Macwindow>
  );
};

export default Github;
