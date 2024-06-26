"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./Hero-highlight";
import AnimatedText from "../AnimatedText";

const variant = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
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
      duration: 1,
    },
  },
};

export function HeroHighlightDemo({ className = "" }) {
  return (
    <HeroHighlight>
      <motion.h1
        variants={variant}
        initial="initial"
        animate="animate"
        className="inline-block w-full text-darkPurple -z-10 dark:text-snow font-bold capitalize text-5xl xl:!text-6xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl "
      >
        <motion.span className="inline-block" variants={singleVariant}>
          {" "}
        </motion.span>

        <Highlight
          className="text-black dark:text-white my-4 -z-10 pb-1 text-lg font-bold uppercase text-darkPurple/75 dark:text-snow/75
          "
          variants={singleVariant}
        >
          {" "}
          WLECOME TO EMAN'S BIOGRAPHY
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
