import Image from "next/image";
import Link from "next/link";

export type Project = {
  name: string;
  description: string;
  image: string;
  githubLink: string;
  homePage: string;
  showDesc: string;
  date: string;
};

export type ProjectProps = {
  project: Project;
};

export const projectNameFormat = (name: string) => {
  let formattedName = name.replace(/ä/g, "a").replace(/ö/g, "o");
  return formattedName.split(" ").join("").toLowerCase();
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
          href={"/projects/" + projectNameFormat(name)}
          className="projectName"
        >
          {name}
        </Link>
      </div>
      <p className="description">{showDesc}</p>
      <div className="StyledProjectFooter">
        <p className="date">{date}</p>
      </div>
    </div>
  );
};

export default Project;
