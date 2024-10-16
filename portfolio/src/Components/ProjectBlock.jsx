import React, { useState, lazy, Suspense } from "react";
import KnowSignsImage from "../assets/KnowSigns.png";
import Csharp from "../assets/csharp.png";

const ProjData = [
  {
    title: "Know The Signs",
    img: KnowSignsImage,
    desc: "Know The Signs of Trafficking is a human trafficking awareness platform. It aims to raise awareness by using careful design tactics coupled with interactive information. ",
    features: [
      "Designed with React and TailwindCSS",
      "Interactive graphs",
      "Fully responsive",
      "Screen reader compatability",
      "Interactive components",
    ],
    click: ()=>window.open("https://berrycool.github.io/cois3850", "_blank")
  },
  {
    title: "8-Puzzle AI",
    img: Csharp,
    desc: "An AI algoorithm that solves the 8-puzzle problem based on user-selected heuristics.",
    features: [
      "Designed with C#",
      "Uses the A* algorithm",
      "Highly efficient and optimized",
      "Supports up to 5 heuristics",
      "In development: Machine Learning implementation",
    ],
    click:''
  },
  



  
];

const ProjectBlock = () => {
  return (
    <div className="grid w-full place-content-center"
    style={{gridTemplateColumns: "auto auto auto"}}
    >
        <ConstructBlocks />
    </div>
  );
};

const ConstructBlocks = () => {
  return ProjData.map((proj) => {
    return (
      <div className="p-6 mx-5 bg-white max-w-lg rounded-2xl overflow-hidden shadow-md"
      >
        <div className="overflow-hidden h-56 rounded-2xl "
        >
          <div
            className="h-full  hover:[transform:scale(1.2)] hover:cursor-pointer rounded-2xl transition-transform duration-300"
            style={{
              backgroundImage: `url(${proj.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "white",
            }}
            onClick={proj.click}
          >
          </div>
        </div>
        <div className="relative bg-white bg-opacity-75 p-4 rounded-xl rgb(250, 254, 255) 0px 0px 4rem 6rem"
        style={{
          boxShadow:"rgb(250, 254, 255) 0px 0px 4rem 6rem"
        }}
        >
          <h2 className="text-2xl font-semibold mb-4 ">{proj.title}</h2>
          <p className="leading-relaxed mb-8">{proj.desc}</p>
          <p className=" text-lg mb-3 font-semibold ">Key Features:</p>
          <ul className="list-none space-y-3">
            {proj.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  });
};


export default ProjectBlock;
