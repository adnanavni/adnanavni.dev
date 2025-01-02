import "../global.css";
import Project from "../components/project";
import projectsData from "../data/projects.json";

export default function Home() {
  return (
    <div className="main">
      <h2>All Projects</h2>
      <div className="projectsContainer">
        {projectsData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
