"use client";
import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const HireMe = () => {
  
  return (
    <div
      className="fixed left-2 bottom-0
    flex items-center justify-center overflow-hidden md:right-6 md:left-auto md:top-0 md:bottom-auto md:absolute
    "
    >
      <div className="w-40 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-darkPurple animate-spin-slow dark:fill-snow"}
        />
        <motion.a
          href="/contact"
          className="flex items-center justify-center text-darkPurple
      absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md
      border border-solid border-darkPurple w-20 h-20 rounded-full font-semibold
      hover:text-snow dark:bg-snow hover:dark:text-snow hover:dark:border-snow
      md:w-12 md:h-12 md:text-[10px]
      
      "
          whileHover={{
            backgroundColor: [
              "#E1C8B2",
              "#27182D",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#27182D",
              "#E1C8B2",
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          Hire Me
        </motion.a>
      </div>
    </div>
  );
};

export default HireMe;
