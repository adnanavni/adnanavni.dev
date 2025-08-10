/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

function AboutMe() {
  return (
    <div className="aboutMe">
      <Image src={"/icon.png"} alt="logo" width={80} height={80} />

      <p className="greeting">Hi there!</p>
      <p>
        I'm Adnan Avni — a freshly graduated software engineer from Metropolia
        University of Applied Sciences.
      </p>
      <p>
        I'm passionate about building impactful, user-friendly software
        solutions and continuously growing as a developer.
      </p>
      <p>
        Here, you can explore my projects, dive into my code, and see how I
        approach problem-solving.
      </p>
      <p className="excitement">
        Currently, I'm looking for exciting opportunities where I can contribute
        my skills, learn from experienced teams, and create meaningful digital
        products.
      </p>
    </div>
  );
}

export default AboutMe;
