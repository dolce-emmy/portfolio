'use client';
import React from "react";
import {motion} from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Skill = ({name, lgX, lgY, mdX, mdY}) => {

const isMediumScreen = useMediaQuery({ query: "(max-width: 768px)" });

const x = isMediumScreen ? mdX : lgX;
const y = isMediumScreen ? mdY : lgY;

return (
  <motion.div
    className="flex items-center justify-center rounded-full font-semibold bg-darkPurple text-snow
        py-3 px-6 shadow-darkPurple cursor-pointer absolute md:relative  dark:bg-snow dark:text-darkPurple
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 
       
        "
      
    whileHover={{ scale: 1.10}}
    initial= {{x:0, y:0}}
    whileInView={{ x:x, y:y }}
    transition={{duration: 1, ease: "easeOut" }}
    
  >
    {name}
  </motion.div>
);

}



const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 text-center md:text-6xl md:mt-32 xs:mt-16 xs:mb-4">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark z-0 md:bg-none
      
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:flex-wrap md:gap-2 md:h-[40vh] md:justify-start sm:h-[30vh]
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-darkPurple  text-snow 
        p-8 shadow-darkPurple cursor-pointer dark:bg-snow dark:text-darkPurple lg:p-6 md:p-4 xs:text-xs xs:p-2 md:hidden

        "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" lgX="-19vw" lgY="2vw" />
        <Skill name="CSS" lgX="-5vw" lgY="-10vw" />
        <Skill name="Javascript" lgX="23vw" y="6vw" />
        <Skill name="ReactJS" lgX="0vw" lgY="10.5vw" />
        <Skill name="NextJS" lgX="20vw" lgY="-14vw" />
        <Skill name="Bootstrap" lgX="0vw" lgY="-20vw" />
        <Skill name="NodeJS" lgX="31vw" lgY="-5vw" />
        <Skill name="ExpressJS" lgX="-32vw" lgY="-5vw" />
        <Skill name="MongoDB" lgX="-20vw" lgY="-15vw" />
        <Skill name="RestAPI" lgX="-31vw" lgY="18vw" />
        <Skill name="Linux" lgX="31vw" lgY="13vw" />
        <Skill name="Git" lgX="-5vw" lgY="16vw" />
        <Skill name="Github" lgX="-38vw" lgY="5vw" />
        <Skill name="Kanban" lgX="10vw" lgY="19vw" />
        <Skill name="SCSS" lgX="38vw" lgY="-5vw" />
      </div>
    </>
  );
};

export default Skills;
