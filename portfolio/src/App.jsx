import React from "react";
import Routes from "./Routes";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className=" bg-slate-200 min-h-full flex flex-grow flex-col text-bl dark:text-white dark:bg-[#121619] tracking-wide">
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
