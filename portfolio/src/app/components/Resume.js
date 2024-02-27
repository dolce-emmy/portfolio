"use client";
import React, { useState } from "react";
import Image from "next/image";
import downloadIcon from "/public/images/download-icon.png";
import {Star} from "./Icons";

import { motion } from "framer-motion";

// Define the Star component
// const Star = ({ className, ...rest }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={58}
//     height={58}
//     className={className}
//     {...rest}
//   >
//     <title />
//     <g fill="none" fillRule="evenodd">
//       <path
//         fill="#F6AB27"
//         d="M30.757 1.144 38.2 16.948a1.968 1.968 0 0 0 1.475 1.123l16.644 2.534a2.08 2.08 0 0 1 1.086 3.502L45.362 36.408a2.115 2.115 0 0 0-.563 1.818l2.843 17.37a1.98 1.98 0 0 1-2.843 2.164l-14.887-8.201a1.88 1.88 0 0 0-1.824 0l-14.887 8.2a1.98 1.98 0 0 1-2.843-2.163l2.843-17.37a2.115 2.115 0 0 0-.563-1.818L.594 24.107a2.08 2.08 0 0 1 1.086-3.502l16.644-2.534a1.968 1.968 0 0 0 1.475-1.123l7.444-15.804a1.92 1.92 0 0 1 3.514 0Z"
//       />
//       <path
//         fill="#F4CD1E"
//         d="M36.39 13.11a60.614 60.614 0 0 0-13.18 9.52A57.32 57.32 0 0 0 12.63 36.4L.59 24.11a2.079 2.079 0 0 1 1.09-3.5l16.64-2.54a1.997 1.997 0 0 0 1.48-1.12l7.44-15.81a1.929 1.929 0 0 1 3.52 0l5.63 11.97Z"
//       />
//     </g>
//   </svg>
// );

const Resume = () => {
  const commonClassName =
    "flex items-center justify-center  text-snow bg-darkPurple rounded-md hover:bg-snow hover:text-darkPurple text-lg font-semibold border-2 border-solid border-transparent hover:border-darkPurple shadow-lg hover:shadow-xl";
  // how to pass the commonClassName to the Link component in the Resume and the certificate as a prop

  const [animateStars, setAnimateStars] = useState(false);

  const handleClick = () => {

    setAnimateStars(true);

    setTimeout(() => {
      setAnimateStars(false);
    }, 1000);
  }

  return (
    <>
      <motion.a
        href="/eman_hassan_cv.pdf"
        target="blank"
        className={` relative ${commonClassName}  px-6 py-2.5 `}
        download={true}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 1.1 }}
        onClick={handleClick}
      >
        Resume
        <Image src={downloadIcon} alt="download icon" className="w-9 ml-2" />
      </motion.a>

      <motion.a
        href="/certificate.pdf"
        target="blank"
        className={`${commonClassName} px-4 py-2.5 ml-4 relative`}
        download={true}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 1.1 }}
        animateStars={animateStars}
      >
        Certificate
        <Image src={downloadIcon} alt="download icon" className="w-9 ml-2" />
      </motion.a>

      {animateStars && (
        <motion.div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          {[...Array(20)].map((_, index) => (
           
            <Star
             key={index}
              // className={`w-10 h-10 rounded-full bg-yellow-400 animate-star delay-${
              //   index * 100
              // }`}
              className={`animate-star delay-${index * 100}`}
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            
             
            />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Resume;
