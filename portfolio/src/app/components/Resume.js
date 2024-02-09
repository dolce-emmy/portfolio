"use client";
import React from "react";
import Image from "next/image";
import downloadIcon from "/public/images/download-icon.png";
import {Star} from "./Stars";
import { motion } from "framer-motion";

const Resume = () => {
  const commonClassName =
    "flex items-center justify-center  text-snow bg-darkPurple rounded-md hover:bg-snow hover:text-darkPurple text-lg font-semibold border-2 border-solid border-transparent hover:border-darkPurple shadow-lg hover:shadow-xl relative";
  // how to pass the commonClassName to the Link component in the Resume and the certificate as a prop

  return (
    <>
      <motion.a
        href="/eman_hassan_cv.pdf"
        target="blank"
        className={`${commonClassName}  px-6 py-2.5`}
        download={true}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 1.1 }}
        relative
      >
        Resume
        <Image src={downloadIcon} alt="download icon" className="w-9 ml-2" />
        <Star />
      </motion.a>

      <motion.a
        href="mailto:eman.yassin83@gmail.com"
        target="blank"
        className={`${commonClassName} px-4 py-2.5 ml-4`}
        download={true}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 1.1 }}
        
      >
        Certificate
        <Image src={downloadIcon} alt="download icon" className="w-9 ml-2" />
        <Star />
      </motion.a>
    </>
  );
};

export default Resume;
