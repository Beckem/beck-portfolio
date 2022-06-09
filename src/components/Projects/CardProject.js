import React from "react";
import "./Projects.css";
function CardProject({ title, description }) {
  return (
    <div className="card-container">
      <div className="card">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2">{description}</p>
        <img
          src="https://storage.googleapis.com/pik-buk/inspitrip/2019_1dae4334-8ae5-4f4f-bcbb-ae9c9a836706.jpg?w=800"
          alt="project-1"
          className="rounded-md mt-2 shadow-lg"
        />

        <div className="layers">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
