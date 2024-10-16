import React from "react";

const SmallGridBlock = ({color, label, background, desc}) => {
  return (
    <div className={`relative ${color} mx-5 h-60 w-96 shadow-md rounded-xl overflow-hidden`}
    >
        
        <img src={background} alt={label} 
        className="absolute h-full w-full object-cover hover:scale-110 hover:opacity-0 ease-in-out duration-300 z-40"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-blue-950 text-white z-10 text-center p-5">
            <h2 className="text-xl font-semibold mb-4">
                {label}
            </h2>
            <p className="text-md font-medium">
                {desc}
            </p>
        </div>
        
    </div>
  )
}

export default SmallGridBlock