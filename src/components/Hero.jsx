import React from "react";

const Hero = (props) => {
  return (
    <div className="lg:h-[50vh] h-[30vh] w-full hero">
      <div className="w-full overlay border-b-4 border-orange-600 h-full flex items-center justify-center">
        <h1 className="lg:text-5xl text-3xl mt-10 font-semibold text-white">{props.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
