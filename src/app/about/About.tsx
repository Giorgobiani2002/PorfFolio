import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";

export default function About() {
  return (
    <div className="max-w-[1200px] w-full m-auto " id="about">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-bold text-black dark:text-white">
              ABOUT <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                ME
              </span>
            </h1>
          </>
        }
      >
        <div className="text-[16px] font-mono flex flex-col justify-between h-[400px] ">
          <p>
            I’m a passionate full-stack developer eager to grow and contribute
            to the tech industry. I have hands-on experience building both the
            front-end and back-end of web applications using a variety of
            technologies.
          </p>
          <p>
            On the front-end, I’ve worked with HTML, CSS, SCSS, JavaScript,
            React.js, Next.js, and Tailwind CSS to create interactive,
            responsive, and visually appealing user interfaces.
          </p>
          <p>
            On the back-end, I’ve gained proficiency in Node.js, Express.js,
            MongoDB, and TypeScript, allowing me to build dynamic, full-stack
            applications. I’m always learning and improving my coding practices,
            and I enjoy collaborating with others to deliver high-quality
            solutions that provide great user experiences.
          </p>
          <p>
            Excited to take on new challenges, I’m constantly expanding my skill
            set and looking for opportunities to contribute to impactful
            projects.
          </p>
        </div>
      </ContainerScroll>
    </div>
  );
}
