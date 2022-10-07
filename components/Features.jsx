import React from "react";
import Box from "./Box";
import Lottie from "react-lottie";
import animation from "./anime/arrow.json";
import salyNote from "./anime/Saly-38.svg"
import salyCal from "./anime/Saly-42.svg"
import salyProject from "./anime/Saly-13.svg"
import salyNot from "./anime/Saly-19.svg"


const Features = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    // here is where we will declare lottie animation
    animationData: animation,
    rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full h-screen p-10  flex flex-row bg-teal-50 relative ">
      <div className="flex items-center justify-center w-1/2">
        <div className="text-7xl  w-[80%] ml-20 font-bold text-slate-700 text ">Toolkit To Do More In Life</div>
      </div>
      <div className="grid grid-cols-2  w-1/2 h-[80%] grid-flow-row gap-8 m-10 max-h-full  ">
        <Box title={"Manage Projects"} source={salyProject}></Box>
        <Box title={"Organise Tasks"} source={salyCal}></Box>
        <Box title={"Notedown Stuff"} source={salyNote}></Box>
        <Box title={"Get Notified"} source={salyNot}></Box>
      </div>
      <div className="absolute bottom-[200px] left-[550px] rotate-12">
        <Lottie options={defaultOptions} width={200} height={100} ></Lottie>
      </div>
    </div>
  );
};

export default Features;
