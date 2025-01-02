import projectData from "@/app/data/projects.json";
import { Project } from "@/app/components/project";
import SingleProject from "@/app/components/singleProject";
import { projectNameFormat } from "@/app/components/project";

interface ProjectDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
  const resolvedParams = await params;

  if (projectData.length === 0) return <>Loading...</>;

  const project = projectData.find(
    (project) => resolvedParams.id === projectNameFormat(project.name)
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
