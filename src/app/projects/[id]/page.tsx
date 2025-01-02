import projectData from "@/app/data/projects.json";
import { Project } from "@/app/components/project";
import SingleProject from "@/app/components/singleProject";
import { projectNameFormat } from "@/app/components/project";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  if (projectData.length === 0) return <>Loading</>;

  const project = projectData.find(
    (project) => params.id === projectNameFormat(project.name)
  );
  return (
    <div className="projectDetails">
      {project ? (
        <SingleProject project={project as Project} />
      ) : (
        "404: Project not found"
      )}
    </div>
  );
}
