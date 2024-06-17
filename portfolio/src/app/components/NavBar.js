"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter, usePathname } from "next/navigation";
import { LinkedInIcon, Github3Icon, Medium } from "./Icons";
import { motion} from "framer-motion";
import useThemeSwitcher from "../components/hooks/useThemeSwitcher";
import SunIcon from "/public/images/svgs/sun.png";
import MoonIcon from "/public/images/svgs/moon.png";
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
       dark:bg-snow
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className="",toggle }) => {
  const router = useRouter();
  const path = usePathname();
  console.log(path);

const handleClick = () => {

  // here we are calling the toggle function that we passed as a prop to do the toggle for the hamburger menu so when we click on the link it will close the menu
  toggle();

  // here we are using the router to push the href to the url so it will navigate to the page
  router.push(href);
}
  return (
    // here we are using a button instead of a link because we want to trigger the toggle function when we click on the button
    <button
      href={href}
      className={`${className} relative group text-snow dark:text-dark my-2 `}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
      h-[2px] inline-block w-0 bg-snow    absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${path === href ? "w-full" : "w-0"}
       dark:bg-dark
       
      `}
        
      >
        &nbsp;
      </span>
    </button>
  );
};


const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    
    setIsMenuOpen(!isMenuOpen);

  }

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between montserrat bg-desert dark:bg-dark text-darkPurple
    dark:text-snow relative lg:px-16 md:px-12 sm:px-8 xs:px-4
    "
    >
      {/* here is the hamburger menu that will be displayed on mobile or tablet screens so it's hidden until the screen is at max-width: 1023px then it will be displayed */}
      <button
        // lg:flex is a media query that will display this button only on screens that are smaller than 1023px
        className="flex flex-col justify-center items-center hidden lg:flex mt-2"
        onClick={toggleMenu}
      >
        {/* <span className="sr-only">Toggle Menu</span> */}
        <span
          className={`h-0.5 block w-6 transition-all duration-300 ease-in-out  bg-darkPurple dark:bg-snow rounded-sm  ${
            isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`h-0.5 block w-6 transition-all duration-300 ease-in-out bg-darkPurple dark:bg-snow rounded-sm my-0.5 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`h-0.5 block w-6 transition-all duration-300 ease-in-out bg-darkPurple dark:bg-snow rounded-sm ${
            isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          
            <CustomLink href="/" title="Home" className="mr-4" />

            <CustomLink href="/about" title="About" className="mx-4" />

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
            {mode === "dark" ? (
              <Image
                src={SunIcon}
                alt="sun"
                priority
                className="w-12 fill-dark"
              />
            ) : (
              <Image
                src={MoonIcon}
                alt="moon"
                priority
                className="w-12 fill-dark"
              />
            )}
          </motion.button>
        </nav>
      </div>

      {/* here we are making a condition to trigger the toggle for the hamburger menu for the mobile so if the menu is open to render all the elements */}
      {isMenuOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-darkPurple/90 dark:bg-snow/75 text-snow  rounded-lg backdrop-blur-md shadow-lg py-32 
      "
        >
          <nav className="flex flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={toggleMenu}
            />

            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={toggleMenu}
            />

            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={toggleMenu}
            />

            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={toggleMenu}
            />

            <CustomMobileLink
              href="/contact"
              title="Contact"
              className=""
              toggle={toggleMenu}
            />

            {/* <CustomLink href="/contact" title="Contact" className="m-4" /> */}
          </nav>

          <nav className=" flex items-center justify-center flex-wrap mt-2">
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
              {mode === "dark" ? (
                <Image
                  src={SunIcon}
                  alt="sun"
                  priority
                  className="w-12 fill-dark"
                />
              ) : (
                <Image
                  src={MoonIcon}
                  alt="moon"
                  priority
                  className="w-12 fill-dark"
                />
              )}
            </motion.button>
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[50%] lg:-translate-x-7 ">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
