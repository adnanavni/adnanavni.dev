import Image from "next/image";
import Link from "next/link";

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

const Project = ({ project }: ProjectProps) => {
  const { name, description, tech, image, githubLink, homePage } = project;

  return (
    <div className="StyledProject">
      <div className="StyledProjectPart">
        {image !== "" && (
          <Image
            alt={name}
            src={`/project-logos/${image}`}
            width={32}
            height={32}
          />
        )}

        <Link href={homePage}>
          <h3>{name}</h3>
        </Link>
      </div>
      <p className="description">{description}</p>
      <div className="StyledProjectFooter">
        <p className="tech">{tech}</p>
        <Link href={githubLink}>@github</Link>
      </div>
    </div>
  );
};

export default Project;
