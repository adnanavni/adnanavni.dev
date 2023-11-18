import "./global.css";
import Project from "./components/project";
import projectsData from "./projects.json";
import AboutMe from "./components/aboutme";

export default function Home() {
  const filteredProjects = projectsData.filter((project) =>
    ["Catchmaster", "Jobel", "Speed Tester", "Tic Tac Toe"].includes(
      project.name
    )
  );
  return (
    <div className="StyledMain">
      <AboutMe />
      <h2>Projects</h2>
      <div className="StyledProjectsContainer">
        {filteredProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
