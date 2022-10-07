import Link from 'next/link';
import React from 'react'
import Lottie from "react-lottie";
import animation from './anime/jump.json'



const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    // here is where we will declare lottie animation
    animationData: animation,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice",
    },
 };

  return (
    <div className='w-full flex  items-center h-screen bg-gradient-to-r  pt-16 flex-col  ' >
        {/* <div className='w-[75%] h-[70%]  rounded-2xl  bg-sky-600 -mt-20'>
            <h1 className='text-'>Empowering the Indivisual Productivity</h1>
        </div> */}
        <div className='  text-7xl w-[60%] font-bold  text-center text-slate-700   min-h-fit  ' >
          One Platform for Teams and Indivisuals to Stay Productive
        </div>
        <Link href={"/app/boards"}>
        <div className='mt-8 bg-rose-500 p-2 rounded-lg text-white font-bold w-[8rem] h-[3rem] flex items-center justify-center z-10 hover:cursor-pointer '>
         Go To App
        </div>
        </Link>
        <div className='-mt-5 z-0'>
          <Lottie options={defaultOptions} height={300} width={300} />

        </div>
        
    </div>
  )
}

export default Header