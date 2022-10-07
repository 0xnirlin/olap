import React from 'react'
import Link from "next/link";
import scrollStyle from "../styles/Boards.module.css";
import boardStyle from "../styles/Board.module.css"
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteDoc } from 'firebase/firestore';

const Board = (props) => {
  // console.log("Taging: ",props.item.tags)
    
      
  return (
    //in props we need item object from firebase
    // <div className='w-full bg-slate-700'>
        <Link href={props.item.title?`/boards/${props.item.title.split(" ").join("-")}  `:"/"}>
            <div className={`flex flex-col text-slate-600  rounded-md   m-3    font-medium text-xl border border-slate-300 border-solid leading-snug transition-all text-left font-sans  h-fit  hover:cursor-pointer duration-300 bg text top-0 lg:w-[30%] md:w-[45%]  min-w-[95%] lg:min-w-[30%] md:min-w-[45%]    `}>
              <div
                className={`flex flex-row gap-2 ml-4 mt-4 overflow-x-scroll ${scrollStyle.scrollu}`}
              >
                {props.item.tags? props.item.tags.map((tag) => {
                  const tagColor = Object.entries(tag);
                  const color = tagColor[0][1]
                  

                  return (
                    <div
                      style={{ backgroundColor: `${props.colors[color]}` }}
                      className={`flex items-center justify-center  text-slate-900 p-1 rounded   font-normal text-xs w-fit  `}
                    >
                      {tagColor[0][0].charAt(0).toUpperCase() + tagColor[0][0].slice(1)}
                    </div>
                  );
                }) : <button className='lex items-center justify-center  text-slate-900 p-1 px-2 rounded   font-medium text-xs w-fit bg-green-400 hover:cursor-pointer hover:bg-green-300 transition-all '>Add Tag</button>}
                {/* <div className="mt-auto justify-center  text-slate-900 p-1 rounded   font-medium text-xs w-fit bg-purple-300 ">
                {items
                  ? item.createdAt.toDate().toDateString()
                  : item.createdAt}
              </div> */}
              </div>
              <div
                className={`mt-4 mb-4 ml-4 mr-2 overflow-auto ${scrollStyle.scrollu}  h-7 truncate `}
              >
                {props.item.title? props.item.title : " "}
              </div>
              <div className="ml-4 mb-5 flex flex-row gap-2">
                <div className="hover:-translate-y-1 hover:cursor-pointer transition-all hover:text-blue-500 duration-500 ">
                  <BiEdit></BiEdit>
                </div>
                <div className="hover:-translate-y-1 hover:cursor-pointer transition-all hover:text-red-500 duration-500 " onClick={(e) =>{e.preventDefault(); props.setID(props.id); props.setModal(true)}}>
                  <AiOutlineDelete></AiOutlineDelete>
                </div>
              </div>
              {props.item.status? props.item.status == "done"? 
              <div className="w-full  rounded-b-md bg-red-400 mt-auto m-0 p-0  h-0.5 "></div>:
              <div className="w-full  rounded-b-md bg-green-400 mt-auto m-0 p-0 h-0.5  "></div>:<div> </div>
            }
            {/* <div>{props.id? props.id:"LOADING...."}</div> */}
            
            </div>
            
          </Link>
    // </div>
  )
}

export default Board