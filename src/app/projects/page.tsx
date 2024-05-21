import "../global.css";
import Project from "../components/project";
import projectsData from "../data/projects.json";

export default function Home() {
  return (
    <div className="StyledMain">
      <h2>All Projects</h2>
      <div className="StyledProjectsContainer">
        {projectsData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
