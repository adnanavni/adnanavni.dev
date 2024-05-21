import projectData from "@/app/data/projects.json";
import { Project } from "@/app/components/project";
import SingleProject from "@/app/components/singleProject";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  if (projectData.length === 0) return <>Loading</>;

  const project = projectData.find(
    (project) => params.id === project.name.split(" ").join("").toLowerCase()
  );
  return (
    <div className="StyledProjectDetails">
      {project ? (
        <SingleProject project={project as Project} />
      ) : (
        "404: Project not found"
      )}
    </div>
  );
}
