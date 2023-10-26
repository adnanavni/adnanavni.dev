import Image from "next/image";
import Link from "next/link";
import projectsData from "../projects.json";

export type Project = {
  name: string;
  description: string;
  tech: string;
  image: string;
  githubLink: string;
  homePage: string;
};

export type ProjectProps = {
  project: Project;
};

export const Project = ({ project }: ProjectProps) => {
  const { name, description, tech, image, githubLink, homePage } = project;

  return (
    <div className="StyledProject">
      <div className="StyledProjectPart">
        <Image
          alt={name}
          src={`/project-logos/${image}`}
          width={32}
          height={32}
        />
        <Link href={homePage}>
          <h3>{name}</h3>
        </Link>
      </div>
      <p>{description}</p>
      <p>{tech}</p>
      <div className="StyledProjectFooter">
        <Link href={githubLink}>@github</Link>
      </div>
    </div>
  );
};

export default function Projects() {
  const filteredProjects = projectsData.filter((project) =>
    ["Catchmaster", "Jobel", "Dots"].includes(project.name)
  );
  return (
    <div className="StyledProjectsContainer">
      {filteredProjects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}
