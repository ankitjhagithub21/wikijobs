import React from "react";

const Hero = (props) => {
  return (
    <div className="h-[50vh] w-full hero">
      <div className="w-full overlay h-full flex items-center justify-center">
        <h1 className="text-5xl font-semibold text-white">{props.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
