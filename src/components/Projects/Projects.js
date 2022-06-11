import React from "react";
import CardProject from "./CardProject";

const projects = [
  {
    title: "Project1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quoddsadsadqweqmw,emqem",
    image: "",
  },
  {
    title: "Project1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quoddsadsadqweqmw,emqem",
    image: "",
  },
  {
    title: "Project1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quoddsadsadqweqmw,emqem",
    image: "",
  },
  {
    title: "Project1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quoddsadsadqweqmw,emqem",
    image: "",
  },
  {
    title: "Project1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quoddsadsadqweqmw,emqem",
    image: "",
  },
  {
    title: "Project1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quoddsadsadqweqmw,emqem",
    image: "",
  },
];

function Projects() {
  return (
    <div className="h-screen bg-gradient pt-[100px]">
      <div className="w-[80%] mx-auto grid md:grid-cols-3 grid-cols-1 gap-20">
        {projects.map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
