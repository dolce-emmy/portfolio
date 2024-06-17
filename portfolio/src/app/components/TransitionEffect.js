"use client";
import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-persianOrange"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-darkPurple"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        // exit={{x: '100%'}}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
          //   type: "spring",
        }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-caribbean"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        // exit={{x: '100%'}}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
          //   type: "spring",
        }}
      />
    </>
  );
};

export default TransitionEffect;
