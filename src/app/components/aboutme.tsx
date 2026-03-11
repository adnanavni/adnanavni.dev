/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

function AboutMe() {
  return (
    <div className="aboutMe">
      <Image src={"/icon.png"} alt="logo" width={80} height={80} />

      <p className="greeting">Hi there!</p>
      <p>
        I'm Adnan Avni, a software engineer graduated from Metropolia
        University of Applied Sciences.
      </p>
      <p>
        I currently work on one of Finland's most advanced e-commerce
        platforms in the construction industry, building impactful,
        user-friendly software and continuously growing as a developer.
      </p>
      <p>
        Here, you can explore my projects, dive into my code, and see how I
        approach problem-solving.
      </p>
      <p className="excitement">
        I'm especially interested in creating meaningful digital products and
        solving real-world problems through thoughtful engineering.
      </p>
    </div>
  );
}

export default AboutMe;
