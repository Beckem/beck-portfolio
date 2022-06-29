import React from "react";
import CardProject from "./CardProject";
import Project1 from "../../assets/images/Projects/Project1.png";
import Project2 from "../../assets/images/Projects/Project2.png";
import Project3 from "../../assets/images/Projects/Project3.png";
import Project4 from "../../assets/images/Projects/Project4.png";
import Project5 from "../../assets/images/Projects/Project5.png";
const projects = [
  {
    title: "Beckem love 2001",
    description: "My pet project where I apply what I learned.",
    image: Project1,
    technologies: [
      "React",
      "Redux",
      "Firebase",
      "Styled-Components",
      "Material-UI",
    ],
    details:
      "My first website I wrote for my girlfriend. It's like a mini social network for 2 people that helps us save memories. I use what I've learned to continuously update it.",
    link: "https://beckem-love-2001.web.app",
  },
  {
    title: "Beck blog",
    description:
      "My blog website where I wrote when I found something interesting.",
    image: Project2,
    technologies: ["NextJS", "TailwindCSS", "SanityCMS", "TypeScript"],
    details:
      "My blog website where I wrote when I found something interesting.",
    link: "https://beck-blog.vercel.app",
  },
  {
    title: "D2 Solution",
    description: "Outsourcing project landing pages for D2 Solution. ",
    image: Project3,
    technologies: ["NextJS", "Monorepos with Nx", "TailwindCSS", "TypeScript"],
    details:
      "Outsourcing project landing pages built when I was internship at GOD Group",
    link: "https://d2-solutions.vercel.app",
  },
  {
    title: "AirBnB Clone",
    description: "Small project clone Airbnb UI and some features",
    image: Project4,
    technologies: ["NextJS", "Date-Picker", "TailwindCSS", "MapBox Api"],
    details: "Project Clone AirBnB UI and some functionality",
    link: "https://airbnb-clone-beckem.vercel.app",
  },
  {
    title: "Amazon Clone",
    description: "Small project clone Amazon.com",
    image: Project5,
    technologies: ["NextJS", "TailwindCSS", "Redux", "Firebase", "Stripe"],
    details: "Small project clone Amazon.com",
    link: "https://amazon-clone-2-0-pi.vercel.app",
  },
  {
    title: "Project1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quoddsadsadqweqmw,emqem",
    image: "",
    technologies: ["abc", "abc"],
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quoddsadsadqweqmw,emqem",
    link: "#",
  },
];

function Projects() {
  return (
    <div className="h-screen bg-gradient py-[100px] relative">
      <h2 className="title-1">Projects</h2>
      <div className="flex items-center overflow-auto space-x-24  absolute top-1/2 -translate-y-1/2 px-20 pt-10 pb-20 w-screen custom-scrollbar">
        {projects.map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            details={project.details}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
