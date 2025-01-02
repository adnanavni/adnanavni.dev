import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "@/app/components/project";

const SingleProject = ({ project }: ProjectProps) => {
  const { name, description, image, githubLink, homePage } = project;

  return (
    <div className="singleProject">
      <div className="projectPart">
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
      <div className="projectFooter">
        {githubLink === "" ? null : <Link href={githubLink}>@github</Link>}
      </div>
    </div>
  );
};

export default SingleProject;
