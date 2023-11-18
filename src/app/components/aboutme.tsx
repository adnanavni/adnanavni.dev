/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

function AboutMe() {
  return (
    <div className="StyledAboutMe">
      <Image src={"/icon.png"} alt="logo" width={80} height={80} />

      <p className="Greeting">Hey there!</p>
      <p>
        I'm Adnan Avni, a third-year student at Metropolia University of Applied
        Sciences. Majoring in software engineering.
      </p>
      <p>Feel free to try out and explore the code of my projects!</p>
      <p className="Excitement">
        Excited to share my journey in software engineering, explore industry
        insights, and connect with like-minded folks.
      </p>
    </div>
  );
}

export default AboutMe;
