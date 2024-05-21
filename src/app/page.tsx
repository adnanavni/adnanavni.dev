import "./global.css";
import SingleProject from "./components/singleProject";
import projectsData from "./data/projects.json";
import AboutMe from "./components/aboutme";

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
          <SingleProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
