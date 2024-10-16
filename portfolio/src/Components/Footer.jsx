import React from "react";
import { Envelope, Phone, LinkedinLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="  bg-blue-950 w-full text-white py-4 z-40  mx-auto text-center">
        <h2 className="text-2xl mb-4">Contact</h2>
      <div className="flex items-center gap-6 justify-center">
        <button
          className="hover:text-yellow-500 cursor-pointer transition-colors duration-200"
          onClick={() => window.open("mailto:carlosberry338@gmail.com")}
        >
          <Envelope size={34} />
        </button>
        <button
          className="hover:text-yellow-500 cursor-pointer transition-colors duration-200"
          onClick={() => window.open("tel:647-668-5202")}
        >
          <Phone size={34} />
        </button>

        <button
          className="hover:text-yellow-500 cursor-pointer transition-colors duration-200"
          onClick={() => window.open("https://www.linkedin.com/in/carlosberry338/")}
        >
          <LinkedinLogo size={34} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
