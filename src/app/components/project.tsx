import Image from "next/image";
import Link from "next/link";

export type Project = {
  name: string;
  description: string;
  tech: string;
  image: string;
  githubLink: string;
  homePage: string;
  showDesc: string;
  date: string;
};

export type ProjectProps = {
  project: Project;
};

const Project = ({ project }: ProjectProps) => {
  const { name, image, showDesc, date } = project;

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

        <Link
          href={"/projects/" + name.split(" ").join("").toLowerCase()}
          className="projectName"
        >
          {name}
        </Link>
      </div>
      <p className="description">{showDesc}</p>
      <div className="StyledProjectFooter">
        <p className="tech">{date}</p>
      </div>
    </div>
  );
};

export default Project;
