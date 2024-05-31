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

export function HeroHighlightDemo({className = ""}) {
  return (
    <HeroHighlight>
      <motion.h1
        variants={variant}
        initial="initial"
        animate="animate"
        className= "inline-block w-full text-darkPurple dark:text-snow font-bold capitalize text-5xl "
      >
        <motion.span className="inline-block" variants={singleVariant}>
          From Lines of Code to Digital Magic.{" "}
        </motion.span>

        <Highlight 
        className="text-black dark:text-white my-4 -z-10"
        variants={singleVariant}
        >
          I'm Eman, a Web Developer
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
