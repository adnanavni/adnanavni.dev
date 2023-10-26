import { Project } from "./landingPageProjects";
import projectsData from "../projects.json";

export default function AllProjects() {
  return (
    <div className="StyledProjectsContainer">
      {projectsData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}
