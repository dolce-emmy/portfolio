"use client";
import React from "react";
import { motion } from "framer-motion";


const variant = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      // the staggerChildren property is used to stagger the animation of each word in the sentence so that they don't all animate at the same time
      staggerChildren: 0.1,
    },
  },
};

const singleVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center
    overflow-hidden sm:py-0
    "
    >
      <motion.h1
        className={`inline-block w-full text-darkPurple dark:text-snow font-bold capitalize text-5xl ${className}`}
        variants={variant}
        initial="initial"
        animate="animate"
      >
        {
          //  here we are splitting the text into an array of words and then mapping over it to add a span tag to each word so that we can animate each word separately
          // the &nbsp; is to add a space between each word it's called a non-breaking space
          text.split(" ").map((word, index) => (
            <motion.span
              key={word + "-" + index}
              className="inline-block"
              variants={singleVariant}
            >
              {word}&nbsp;
            </motion.span>
          ))
        }
      </motion.h1>

    </div>
  );
};
export default AnimatedText;
