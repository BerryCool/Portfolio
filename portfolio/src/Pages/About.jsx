import React from "react";
import AboutBlock from "../Components/AboutBlock";

const About = () => {
  return (
    <div className="relative mb-36 ">
      <div className=" w-full px-16 py-44 text-center bg-indigo-600 text-white  ">
        <div className="md:w-2/5 mx-auto text-med font-medium leading-relaxed">
          <h1 className="text-4xl font-bold mb-10 ">About Me</h1>
          <p className="mb-6 ">
            I'm a versatile developer with a passion for creating visually
            appealing web designs. I am also passionate for writing clean,
            powerful code.
          </p>
          <p>
            With a balance of creativity and technical expertise, I bring a
            detail-oriented approach to both front-end aesthetics and back-end
            performance.
          </p>
        </div>
      </div>
      <div className="-mt-16 z-40 ">
        <AboutBlock />
      </div>
    </div>
  );
};

export default About;
