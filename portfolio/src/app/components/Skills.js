'use client';
import React from "react";
import {motion} from "framer-motion";

const Skill = ({name, x, y}) => {

return (
  <motion.div
    className="flex items-center justify-center rounded-full font-semibold bg-darkPurple text-snow
        py-3 px-6 shadow-darkPurple cursor-pointer absolute
        "
    whileHover={{ scale: 1.05 }}
    initial= {{x:0, y:0}}
    whileInView={{ x:x, y:y }}
    transition={{duration: 1.5}}
  >
    {name}
  </motion.div>
);

}



const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-darkPurple text-snow
        p-8 shadow-darkPurple cursor-pointer
        "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-19vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="23vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="10.5vw" />
        <Skill name="NextJS" x="20vw" y="-14vw" />
        <Skill name="NodeJS" x="0vw" y="-18vw" />
        <Skill name="Bootstrap" x="31vw" y="-5vw" />
        <Skill name="ExpressJS" x="-32vw" y="-5vw" />
        <Skill name="MongoDB" x="-20vw" y="-15vw" />
        <Skill name="Git" x="-31vw" y="18vw" />
        <Skill name="Linux" x="31vw" y="13vw" />
        <Skill name="SCSS" x="-5vw" y="17.5vw" />
        <Skill name="Github" x="-38vw" y="5vw" />
      </div>
    </>
  );
};

export default Skills;
