import Image from "next/image";
import Link from "next/link";
import { Project, ProjectProps } from "@/app/components/project";

const SingleProject = ({ project }: ProjectProps) => {
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

        <Link href={homePage} className="projectName">
          {name}
        </Link>
      </div>
      <p className="description">{description}</p>
      <div className="StyledProjectFooter">
        <p className="tech">{tech}</p>
        {githubLink === "" ? null : <Link href={githubLink}>@github</Link>}
      </div>
    </div>
  );
};

export default SingleProject;
