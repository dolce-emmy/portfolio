"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter, usePathname } from "next/navigation";
import { LinkedInIcon, Github3Icon, Medium } from "./Icons";
import { motion } from "framer-motion";
import hook from "../components/hooks/useThemeSwitcher";
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";
import SunIcon from "/public/images/svgs/sun.png";
import MoonIcon from "/public/images/svgs/moon.png"
import Image from "next/image";
// we will create another component called customLink so we don't have to repeat the same code for each link
const CustomLink = ({ href, title, className }) => {
  const router = useRouter();
  const path = usePathname();
  console.log(path);

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
      h-[2px] inline-block w-0 bg-darkPurple
      absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${path === href ? "w-full" : "w-0"}
      
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between montserrat bg-desert text-darkPurple">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />

        <CustomLink
          router="/src/app/pages/about.js"
          href="/about"
          title="About"
          className="mx-4"
        />

        <CustomLink href="/projects" title="Projects" className="mx-4" />

        <CustomLink href="/articles" title="Articles" className="mx-4" />

        <CustomLink href="/contact" title="Contact" className="ml-4" />

        {/* <CustomLink href="/contact" title="Contact" className="m-4" /> */}
      </nav>

      <nav className=" flex items-center justify-center flex-wrap">
        <motion.a
          href="https://www.linkedin.com/in/emanwebdev/"
          target={"blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 1.1 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://github.com/dolce-emmy"
          target={"blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 1.1 }}
        >
          <Github3Icon />
        </motion.a>
        <motion.a
          href="https://medium.com/@dolce-emmy"
          target={"blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 1.1 }}
        >
          <Medium />
        </motion.a>
        {/* <a href="/" target={"blank"}>
          T
        </a> */}

        <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 1.1 }}
        onClick={() => {
          setMode(mode === "dark" ? "light" : "dark");
        }}
        >
          {mode === "dark" ? 
          <Image src={SunIcon} alt="sun" property="true" className="w-12 fill-darkPurple"/> 
          
          : <Image src={MoonIcon} alt="moon" property="true" className="w-12 fill-darkPurple"/>}
        </motion.button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
