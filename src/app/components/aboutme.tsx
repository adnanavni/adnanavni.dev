/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

function AboutMe() {
  return (
    <div className="aboutMe">
      <Image src={"/icon.png"} alt="logo" width={80} height={80} />

      <p className="greeting">Hey there!</p>
      <p>
        I'm Adnan Avni, a fourth-year student at Metropolia University of
        Applied Sciences, majoring in software engineering. I'm on track to
        graduate by end of spring 2025.
      </p>
      <p>Feel free to try out and explore the code of my projects!</p>
      <p className="excitement">
        Excited to share my journey in software engineering, explore industry
        insights, and connect with like-minded folks.
      </p>
    </div>
  );
}

export default AboutMe;
