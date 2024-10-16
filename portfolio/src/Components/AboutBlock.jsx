import React from "react";
import { GraduationCap, Code } from "@phosphor-icons/react";
import  Crest  from "../assets/crest.svg";


const aboutData = [
  {
    logo: (
      <img 
      src={Crest} alt="Trent University Crest"
      size={72}
        weight="light"
        className="bg-emerald-300 rounded-full p-2 m-auto"
      />

    ),
    title: "Student",
    desc: "I study Computer Science at Trent University.",
    subtitle1: "What I specialize in:",
    content1: "Software Engineering, Computer Theory",

    subtitle2: "Skills I've gathered:",
    content2: [
      "Web Development",
      "DSA",
      "Project Management",
      "Database Management",
      "Computer Theory",
      "Software Architecture",
    ],
  },
  {
    logo: (
      <Code
        size={72}
        weight="light"
        className="bg-emerald-300 rounded-full p-2 m-auto"
      />
    ),
    title: "Versatile Developer",
    desc: "I'm experienced in a variety of frameworks, tools, and topics.",
    subtitle1: "Languages I speak most:",
    content1: "JSX, HTML & CSS, C/C#, Java, SQL, Git",

    subtitle2: "Dev Tools:",
    content2: [
      "Node JS",
      "TailwindCSS",
      "React Native",
      ".NET Framework",
      "UNIX",
      "LucidChart",
    ],
  },
  {
    logo: (
      <GraduationCap
        size={72}
        weight="light"
        className="bg-emerald-300 rounded-full p-2 m-auto"
      />
    ),
    title: "Learning Enthusiast",
    desc: "I love what I do, and with so much to discover, I'm always learning.",
    subtitle1: "What I'm exploring:",
    content1: "Advanced DSA, Automation, AI, UI/UX",

    subtitle2: "What's Next:",
    content2: [
      "Machine Learning",
      "Data Science",
      "Containerization",
      "Cloud Computing",
      "Dynamic Programming",
    ],
  },
];

const AboutBlock = () => {
  return (
    <div className=" py-12 md:py-0 mx-6 lg:mx-16 xl:mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-0 shadow-md bg-white rounded-2xl overflow-hidden font-medium text-gray-950 ">
      <BlockConstructor />
    </div>
  );
};

export default AboutBlock;

export const BlockConstructor = () => {
  return aboutData.map((item) => {
    return (
      <div className="grid gap-10 py-10 md:py-16 px-4 lg:px-6 md:border-none md:shadow-lg text-center ">
        <div className=" md:h-52 xl:h-44">
          <div className="md:mb-6">{item.logo}</div>

          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="">{item.desc}</p>
        </div>
        <div className="md:h-20">
          <p className="text-green-600 ">{item.subtitle1}</p>
          <p>{item.content1}</p>
        </div>
        <div className="md:h-56">
          <p className="text-green-600 ">{item.subtitle2}</p>
          <ul className="list-none text-center space-y-3">
            {item.content2.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  });
};
