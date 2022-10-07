import React from "react";
import Image from "next/image";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import { FiPackage } from "react-icons/fi";
import logo from "./OLAP.svg";
import { useRouter } from "next/router";
import Link from 'next/link'

const BoardNav = () => {
    const router = useRouter()

  return (
    <div
      className="  flex-col      font-thin text-base tracking-wide h-screen bg-gray-900 w-52 hidden md:hidden lg:flex   "
      style={{  background: "#1E1F21" }}
    >
      <div className="w-full h-1/6 flex  px-6 py-2  ">
      <Link href={'/'}>
        <Image className = 'hover:cursor-pointer' src={logo} alt="Picture of the author" width={90} height={80} />
      </Link>
      </div>
      
      <Link href="/boards">
      <div className="w-full flex flex-row   hover:bg-slate-500  px-6 py-2 text-white hover:cursor-pointer">
        <DashboardCustomizeOutlinedIcon
          style={{ width: "30px", color: "white" }}
          className="icons"
        ></DashboardCustomizeOutlinedIcon>
      
          <button className="ml-1">Boards</button>
     
      </div>
      </Link>
    
      <div className="w-full flex flex-row    hover:bg-slate-500 px-6 py-2 text-white hover:cursor-pointer">
        <FiPackage size={"1.4em"}></FiPackage>
        <div className=" ml-2">
          <h1>Projects</h1>
        </div>
      </div>
    </div>
    
  );
};

export default BoardNav;
