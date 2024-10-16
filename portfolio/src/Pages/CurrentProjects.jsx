import React from "react";
import SmallGridBlock from "../Reusable/SmallGridBlock";
import CityPtbo from "../assets/CityPtbo.webp";
import DS from "../assets/DS.png";
const ProjData = [
  {
    title: "City of Peterborough DEI Management",
    img: CityPtbo,
    desc: "In collaboration with the City of Peterborough, my team and I are developing a DEI management platform. This platform will allow the city to track and manage DEI initiatives.",
  },
  {
    title: "GEMS",
    img: DS,
    desc: "An automation tool that generates camp staff schedules based on heuristic algorithms.",
    click:''
  },
];

const CurrentProjects = () => {
  return (
    <>
    <h2 className="text-3xl font-medium mx-auto w-full text-center mt-16 ">Current Projects</h2>
    <div className="grid h-fit w-full p-10 place-content-center"
    style={{gridTemplateColumns: "auto auto auto"}}
    >
        <ConstructBlocks />
    </div>
    </>
  );
};

const ConstructBlocks = () => {
  return ProjData.map((proj) => {
    return (
        <SmallGridBlock 
        background={proj.img}
        label={proj.title}
        desc={proj.desc}
        />
    );
  });
};


export default CurrentProjects;
