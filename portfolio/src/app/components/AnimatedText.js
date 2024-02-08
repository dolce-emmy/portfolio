"use client";
import React from "react";
import { motion } from "framer-motion";

const variant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 2,
      x: { duration: 1 },
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center
    overflow-hidden
    "
    >
      <motion.h1
        className={`inline-block w-full text-bg-darkPurple font-bold capitalize text-5xl ${className}`}
        variants={ variant }
        initial="initial"
        animate="animate"
      >
        {
          //  here we are splitting the text into an array of words and then mapping over it to add a span tag to each word so that we can animate each word separately
          // the &nbsp; is to add a space between each word it's called a non-breaking space

          text.split(" ").map((word, index) => (
            <span key={word + "-" + index} className="inline-block">
              {word}&nbsp;
            </span>
          ))
        }
      </motion.h1>
    </div>
  );
  variants = {};
};
export default AnimatedText;
