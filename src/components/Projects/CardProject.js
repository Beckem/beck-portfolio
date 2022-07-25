import React, { useState } from "react";
import "./Projects.css";
import Modal from "react-modal";
import { XCircleIcon } from "@heroicons/react/outline";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
  },
};

Modal.setAppElement("#root");

function CardProject({
  title,
  description,
  image,
  details,
  technologies,
  link,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="card-container" onClick={openModal}>
        <div className="card">
          <h3 className="text-lg font-semibold text-green-400">{title}</h3>
          <p className="mt-2">{description}</p>
          <img
            src={image}
            alt="project-1"
            className="rounded-md mt-2 shadow-lg h-[180px]"
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
          <button className="w-full absolute bottom-3 right-0 text-green-400 text-lg font-semibold drop-show">
            View Details
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="md:px-4 px-0">
          <button onClick={closeModal}>
            <XCircleIcon className="w-8 h-8 absolute right-1 top-1 text-red-500" />
          </button>

          <div className="flex md:flex-row flex-col gap-6">
            <div className="md:flex-[3]">
              <img src={image} alt="project" className="rounded-lg w-full" />
              <a className="visit-btn md:w-[400px] md:h-[40px] w-[200px] h-[20px] mt-4" href={link}>
                <span>{link?.split("//")[1]}</span>
                <span>Visit Page</span>
              </a>
            </div>

            <div className="md:flex-[2] space-y-4 mt-4 md:mt-0">
              <p className="text-base font-medium text-neutral-600">
                <span className="font-semibold text-lg text-neutral-700">
                  Description:{" "}
                </span>
                {details}
              </p>

              <p className="text-base font-medium text-neutral-600">
                <span className="font-semibold text-lg text-neutral-700">
                  Technologies:{" "}
                </span>
                {technologies?.map((tech) => (
                  <span>{tech}, </span>
                ))}
                ...
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CardProject;
