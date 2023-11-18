import "../global.css";
import Project from "../components/project";
import projectsData from "../projects.json";

export default function Home() {
  return (
    <div className="StyledMain">
      <div className="StyledProjectsContainer">
        {projectsData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
