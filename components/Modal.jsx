import React from "react";
import { AiOutlineDelete } from "react-icons/ai";



const Modal = ({setModal,id,deleteHandler}) => {
  return (
    <div className="flex w-screen h-screen absolute left-0 top-0 bg-slate-900 bg-opacity-70 z-[100] items-center justify-center transition-all duration-1000 ">
      <div className="flex z-[101] bg-[white] w-[80%] md:w-[30%] lg:w-[30%] h-[30%] rounded-lg   bg-opacity-100 flex-col p-5  ">
        <div className="flex w-full h-20% text-red-500 items-center justify-center">
          <div className="w-fit p-3 bg-red-500 bg-opacity-[10%]  flex items-center justify-center rounded-xl ">
            <AiOutlineDelete size={"1.5rem"}></AiOutlineDelete>
          </div>
        </div>
        <div className="w-full flex items-center justify-center font-medium pt-3 text-lg font-sans tracking-wide  ">
          Delete Board
        </div>
        <div className="w-full flex  font-sans tracking wide pt-2 items-center justify-center">
            You're going to delete the board. Are you sure?
        </div>
        <div className="w-full flex items-end justify-end p-3 gap-2 mt-2 pr-8 ">
            <button onClick={() => setModal(false)} className="w-[25%] rounded-r-lg  rounded-l-lg bg-slate-200 hover:bg-slate-300 text-black h-8 flex items-center justify-center  font-sans lg:font-medium lg:text-xs ">No, Keep it.</button>
            <button onClick={(e) =>{ e.preventDefault(); deleteHandler(id); setModal(false); }} className="w-[25%] rounded-r-lg rounded-l-lg  text-white bg-red-600 hover:bg-red-400 bg-opacity-80 h-8 items-center justify-center flex  font-sans lg:font-medium lg:text-xs  ">Yes, Delete it.</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
