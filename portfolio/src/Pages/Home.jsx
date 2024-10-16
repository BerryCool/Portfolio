import React from "react";
import About from "./About";
import Projects from "./Projects";
import CurrentProjects from "./CurrentProjects";

const Home = () => {
  return (
    <div className="min-h-full flex flex-col flex-grow gap-5 pb-16 relative">
      <div className="h-[100vh]">
        <div className="h-full w-full flex flex-col items-center justify-center flex-grow gap-5 fixed z-0">
        <h1 className="text-4xl font-semibold ">Hi, I'm Carlos Berry</h1>
        <div className="text-lg mt-2 px-12 md:px-0 text-center max-w-2xl flex flex-col gap-5 ">
          <p className="">
            I design and build a wide range of applications, and am passionate
            about making efficient and user-friendly software.
          </p>
        </div>
        </div>
      </div>
      <div className="bg-slate-200 z-40 ">
      <About />
      <Projects />
      <CurrentProjects />
      </div>

    </div>
  );
};

export default Home;
