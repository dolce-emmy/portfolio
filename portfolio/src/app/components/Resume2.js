import React, { useState } from "react";
import Image from "next/image";
import downloadIcon from "/public/images/download-icon.png";
import like from "/public/images/like.png";
import { Star } from "./Icons";
import { motion } from "framer-motion";
import HireMe from "./HireMe";
import tools from "/public/images/profile/tools.png"
import lightBulb from "/public/images/profile/miscellaneous_icons_1.svg";
// define the component handles the animation of the stars

const AnimatedStars = ({ animateStars }) => {
  return (
    animateStars && (
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
              left: `${Math.random() * 90}%`,
            }}
          />
        ))}
      </motion.div>
    )
  );
};

// define the animated link component

const AnimatedLink = ({ href, children, onClick, className }) => {
  const commonClassName =
    "flex items-center justify-center  text-snow bg-darkPurple rounded-md hover:bg-snow hover:text-darkPurple text-lg font-semibold border-2 border-solid border-transparent hover:border-darkPurple shadow-lg hover:shadow-xl";
  return (
    <motion.a
      href={href}
      target="blank"
      className={` relative ${commonClassName} ${className}`}
      download={true}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 1.1 }}
      onClick={onClick}
    >
      {children}
      <Image src={downloadIcon} alt="download icon" className="w-9 ml-2" />
    </motion.a>
  );
};

const Resume2 = () => {
  const [animateStars, setAnimateStars] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleClick = () => {
    setAnimateStars(true);
    setShowThankYou(true);

    setTimeout(() => {
      setAnimateStars(false);
    }, 1000);
  };

  // const handleClose = () => {
  //   setShowThankYou(false);
  // };

  return (
    <>
      <AnimatedLink
        href="/eman_hassan_cv.pdf"
        onClick={handleClick}
        className={`px-6 py-2.5`}
      >
        Resume
      </AnimatedLink>

      <AnimatedLink
        href="/certificate.pdf"
        onClick={handleClick}
        className={`ml-4 px-6 py-2.5`}
      >
        Certificate
      </AnimatedLink>

      <AnimatedStars animateStars={animateStars} />

      {/* {showThankYou && (
        <div className="fixed bottom-2 end-2 ">
          <div className="bg-darkPurple rounded-lg p-4 shadow-lg">
            <p className="text-lg font-semibold text-center text-snow">
              Downloaded Successfully
              <Image src={like} alt="like icon" className="w-10 inline ml-2" />
            </p>
            <button
              className="absolute top-0 right-1 text-snow hover:text-champagne"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Resume2;
