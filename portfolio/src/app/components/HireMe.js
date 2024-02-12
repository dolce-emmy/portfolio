import React from 'react'
import { CircularText } from './Icons' 
import Link from 'next/link';


const HireMe = () => {
  return (
    <div
      className="fixed left-2 bottom-0
    flex items-center justify-center overflow-hidden
    "
    >
      <div className="w-40 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-darkPurple animate-spin-slow "} />
      <Link href="/contact" className="flex items-center justify-center text-darkPurple
      absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md
      border border-solid border-darkPurple w-20 h-20 rounded-full font-semibold
      hover:bg-darkPurple hover:text-snow
      
      ">
      Hire Me</Link>
      </div>
    </div>
  );
}

export default HireMe