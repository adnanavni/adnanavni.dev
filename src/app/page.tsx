import "./global.css";
import projectsData from "./data/projects.json";
import AboutMe from "./components/aboutme";
import Project from "./components/project";

export default function Home() {
  const filteredProjects = projectsData.filter((project) =>
    ["Catchmaster", "Jobel", "Speed Tester", "Shared Notes"].includes(
      project.name
    )
  );
  return (
    <div className="StyledMain">
      <AboutMe />
      <h2>Top picks:</h2>
      <div className="StyledProjectsContainer">
        {filteredProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
