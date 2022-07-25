import React from "react";
import Typist from "react-typist";
import "./Hero.css";
const colors = [
  "purple",
  "medium-blue",
  "light-blue",
  "red",
  "orange",
  "yellow",
  "cyan",
  "light-green",
  "lime",
  "magenta",
  "lightish-red",
  "pink",
];
function Hero() {
  return (
    <div className="section_1">
      {colors.map((item) => (
        <div key={item} className={`${item} section_1_item`}></div>
      ))}
      <Typist cursor={{ show: false }}>
        <div className="absolute top-[40vh] left-1/2 -translate-x-1/2 font-semibold">
          <div className="text-white md:text-4xl text-2xl text-center">
            {" "}
            Hi, I'm Phu Quy
          </div>
        </div>
        <div className="absolute top-[calc(40vh+1.5rem)] left-1/2 -translate-x-1/2 font-semibold">
          <div className="text-[#ff7675] md:text-6xl text-4xl md:pt-12 pt-6 text-center">
            Software Engineer
          </div>
        </div>
        <div className="absolute top-[calc(40vh+6.2rem)] left-1/2 -translate-x-1/2 font-semibold">
          <div className="text-[#fdcb6e] md:text-4xl text-2xl md:pt-12 pt-6 text-center">
          Blockchain Enthusiast
          </div>
        </div>

        <Typist.Delay ms={300} />
      </Typist>
    </div>
  );
}

export default Hero;
