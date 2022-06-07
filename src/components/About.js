import React from "react";
import LaptopBg from "../assets/images/LaptopBg2.png";

function About() {
  return (
    <div
      className="bg-[length:80%] bg-no-repeat bg-center h-screen w-screen z-20 relative"
      style={{
        backgroundImage: `url(${LaptopBg})`,
      }}
    >
      <div className="absolute w-[51%] left-1/2 -translate-x-1/2 pt-[32%] top-[50%] -translate-y-1/2 -mt-[2%] overflow-y-auto">
        <div className="absolute top-0 text-gray-300 md:text-xl text-sm space-y-4">
          <p className="text-[#ff7675]">{"{"}</p>
          <p className="ml-6">
            <span className="text-[#fdcb6e]">Name</span> :{" "}
            <span className="text-[#ffeaa7]">'Ha Phu Quy'</span>,
          </p>
          <p className="ml-6">
            <span className="text-[#fdcb6e]">Dob</span> :{" "}
            <span className="text-[#ffeaa7]">'29/01/2001'</span>,
          </p>
          <p className="ml-6">
            <span className="text-[#fdcb6e]">Gender</span> :{" "}
            <span className="text-[#ffeaa7]">'Male'</span>,
          </p>
          <p className="ml-6">
            <span className="text-[#fdcb6e]">Address</span> :{" "}
            <span className="text-[#ffeaa7]">'Bac Ninh, Viet Nam'</span>,
          </p>
          <p className="ml-6">
            <span className="text-[#fdcb6e]">Language</span> :{" "}
            <span className="text-[#fd79a8]">{"["}</span>
            <span className="text-[#ffeaa7]">'HTML'</span>,
            <span className="text-[#ffeaa7]"> 'CSS'</span>,
            <span className="text-[#ffeaa7]"> 'JavaScript/TypeScript'</span>,
            <span className="text-[#ffeaa7]"> 'NodeJs'</span>,
            <span className="text-[#ffeaa7]"> 'C/C++'</span>,
            <span className="text-[#ffeaa7]"> 'Java'</span>,
            <span className="text-[#ffeaa7]"> 'C#'</span>,
            <span className="text-[#ffeaa7]"> 'Solidity'</span>
            <span className="text-[#fd79a8]">{"]"}</span>,
          </p>
          <p className="ml-6">
            <span className="text-[#fdcb6e]">Framework</span> :{" "}
            <span className="text-[#fd79a8]">{"["}</span>
            <span className="text-[#ffeaa7]">'ReactJS'</span>,
            <span className="text-[#ffeaa7]"> 'NextJS'</span>,
            <span className="text-[#ffeaa7]"> 'VueJS'</span>,
            <span className="text-[#ffeaa7]"> 'ExpressJS'</span>
            <span className="text-[#fd79a8]">{"]"}</span>,
          </p>
          <p className="ml-6">
            <span className="text-[#fdcb6e]">Database</span> :{" "}
            <span className="text-[#fd79a8]">{"["}</span>
            <span className="text-[#ffeaa7]">'SQL'</span>,
            <span className="text-[#ffeaa7]"> 'MySql'</span>,
            <span className="text-[#ffeaa7]"> 'MongoDB'</span>,
            <span className="text-[#ffeaa7]"> 'Firebase'</span>
            <span className="text-[#fd79a8]">{"]"}</span>,
          </p>
          <p className="ml-6">
            <span className="text-[#fdcb6e]">Other</span> :{" "}
            <span className="text-[#fd79a8]">{"["}</span>
            <span className="text-[#ffeaa7]">'Bootstrap'</span>,
            <span className="text-[#ffeaa7]"> 'Tailwind CSS'</span>,
            <span className="text-[#ffeaa7]"> 'Sanity CMS'</span>
            <span className="text-[#fd79a8]">{"]"}</span>,
          </p>
          <p className="text-[#ff7675]">{"}"}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
