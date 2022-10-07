import { MotionConfig } from "framer-motion";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


const Box = ({ title, source }) => {
  return (
    <>
      <div
        className="max-h-full justify-evenly rounded-xl bg-white shadow-md flex flex-col items-center  text-[1.75rem] font-bold text-slate-600"
        style={{}}
      >
        
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, repeatDelay: 0 ,ease: "easeOut"}}>{source ? <Image src={source} height={"700em"}></Image> : ""}</motion.div>
        <div className="-mt-10">{title}</div>
      </div>
    </>
  );
};

export default Box;
