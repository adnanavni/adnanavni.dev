import Link from "next/link";
import Image from "next/image";
import Github from "../../../public/github.png";
import Linkedin from "../../../public/linkedin.png";
import Logo from "../../../public/icon.png";

export default function NavBar() {
  return (
    <nav className="StyledNav">
      <div className="StyledNavName">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Image alt="logo" src={Logo} width={30} height={30}></Image>
          <h1 style={{ padding: 0 }}>adnanavni.dev</h1>
        </Link>
      </div>
      <div className="StyledNavLinks">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/cv">CV</Link>
      </div>
      <div className="StyledNavImages">
        <Link href="https://github.com/adnanavni">
          <Image
            alt="github"
            src={Github}
            width={24}
            height={24}
            style={{ filter: "invert(1)" }}
          ></Image>
        </Link>
        <Link href="https://www.linkedin.com/in/adnanavni/">
          <Image
            alt="linkedin"
            src={Linkedin}
            width={24}
            height={24}
            style={{
              filter: "grayscale(1) contrast(5) invert(1)",
              objectFit: "contain",
            }}
          ></Image>
        </Link>
      </div>
    </nav>
  );
}
