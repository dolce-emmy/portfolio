"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
// export * from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-2">
        <MotionLink
          href="/"
          className="w-16 h-16 bg-darkPurple text-snow flex items-center justify-center rounded-full text-2xl font-bold"
          whileHover={{
            backgroundColor: [
              "#27182D",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#27182D",
            ],
            transition: { duration: 1, repeat: Infinity},
          }}
        >
          EH
        </MotionLink>
      </div>
    </>
  );
};

export default Logo;
