import Link from "next/link";
import Image from "next/image";
import Github from "../../../public/github.png";
import Linkedin from "../../../public/linkedin.png";
import Logo from "../../../public/icon.png";
import styles from "../styles.module.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="navName">
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
          <Image
            id="logo"
            alt="logo"
            src={Logo}
            width={30}
            height={30}
            className={styles.hideOnMobile}
          ></Image>
          <h1 style={{ padding: 0 }} className="styles.smallerFont">
            adnanavni.dev
          </h1>
        </Link>
      </div>
      <div className="navLinks">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </div>
      <div className="navImages">
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
