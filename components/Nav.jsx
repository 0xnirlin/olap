import React from "react";
import logo from "./Olaphome.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

const Nav = () => {
  const { data: session, status } = useSession();
  console.log("STATUS: ", status);
  console.log(session);
  useEffect(() => {}, [status, session]);

  return (
    <div className="flex flex-row md:h-20 lg:h-20 h-0 sm:h-1 bg-white  w-full items-center shadow-sm ">
      <div className="pl-10 w-[25%]">
        <Image src={logo} alt="Picture of the author" width={100} height={80} />
      </div>
      <div className="flex flex-row justify-evenly w-1/2 font-medium  text-lg">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Careers</Link>
      </div>
      <div>
        {status == "unauthenticated"?   <button
          className="flex rounded-lg    items-center justify-center hover:cursor-pointer  lg:w-28   top-6 right-8 px-4 py-2 h-fit font-bold     border-green-500 border-2 text-slate-800 "
          onClick={() => signIn("github", { callbackUrl: '/app/boards' })}
        >
          Sign In
        </button>:    <button
          className="flex rounded-lg   items-center justify-center hover:cursor-pointer  lg:w-28   top-6 right-8 px-4 py-2 h-fit font-medium  transition-all   border-red-500  text-slate-800 border-2"
          onClick={() => signOut("github")}
        >
          Sign Out
        </button>}
     
      </div>
    </div>
  );
};

export default Nav;
