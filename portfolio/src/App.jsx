import React from "react";
import Routes from "./Routes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-mainlt text-bl dark:text-white dark:bg-[#121619]">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
