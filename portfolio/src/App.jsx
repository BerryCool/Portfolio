import React from "react";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <div className=" bg-slate-200 min-h-full flex flex-grow flex-col text-bl dark:text-white dark:bg-[#121619] tracking-wide">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
