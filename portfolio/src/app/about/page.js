"use client";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Template from "../components/Template";

import Image from "next/image";
import profilePic from "/public/images/profile/eman.png";
import lightBulb from "/public/images/profile/miscellaneous_icons_1.svg";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Skills from "../components/Skills";
import { HeroHighlightDemo } from "../components/ui/Hero-light-demos2";
import TransitionEffect from "../components/TransitionEffect";

const about = () => {
  const Image2 = motion(Image);
  const [showBulb, setShowBulb] = useState(true);

  const profileRef = useRef(null);
  const bulbRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // here we are saying if the profileRef is available then do the following code which is to check if the top of the profileRef is less than the window height or if the window is scrolled to the top then hide the bulb image 
      
      if (profileRef.current) {
        const top = profileRef.current.getBoundingClientRect().top;

        const isScrolledToTop = window.scrollY === 0;
        if (top < window.innerHeight || isScrolledToTop) {
          setShowBulb(false);
        }

        if (top > window.innerHeight || isScrolledToTop) {
          setShowBulb(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Eman | About Page</title>
        <meta name="description" content="This is about page" />
      </Head>
      {/* <TransitionEffect /> */}

      <main className="montserrat bg-desert text-darkPurple dark:text-snow w-full min-h-screen">
        <div className="flex w-full flex-col items-center justify-center xs:p-0">
          <Template className="pt-20 p-28 sm:p-16 xs:p-10">
            <AnimatedText
              text="Let Passion Be The Light To Our Purpose!"
              className="mb-16  lg:!text-5xl sm:!text-4xl xs:!text-4xl sm:mb-8 lg:text-center"
            />
            <div className="grid w-full grid-cols-8 grid-rows[200px, 200px, 200px, 200px, 200px, 200px, 200px, 200px] gap-8 md:gap-4  sm:gap-4">
              <div className="col-span-4 row-span-4 flex flex-col items-start justify-start xl:col-span-8 xl:col-start-3 xl:col-end-8 md:col-start-2 md:col-span-8 xl:justify-center xl:row-start-4 xl:row-end-8 xl:pt-5">
                {/* <h2 className="pb-10 text-lg font-bold uppercase text-darkPurple/75 dark:text-snow/75">
                  Welcome to Eman's Biography
                </h2> */}
                <HeroHighlightDemo />
                <p className="font-medium">
                  Greetings! I'm Eman, a passionate web developer captivated by
                  the limitless possibilities of the digital Landscape. On the
                  lookout for exciting opportunities to contribute my skills and
                  passion to a forward-thinking team. My enthusiasm for web
                  development runs deep, stemming from a genuine fascination
                  with technology and a desire to create meaningful digital
                  experiences.
                </p>
                <p className="font-medium py-6">
                  Driven by a passion for creating innovative digital solutions,
                  I've immersed myself in the world of web development, learning
                  and experimenting with various technologies and frameworks. My
                  journey began with self-directed study, followed by intensive
                  vocational training in the web development, where it further
                  fueled my passion and equipped me with the skills to bring my
                  ideas to life through code.
                </p>
                <p className="font-medium sm:hidden">
                  Throughout my learning journey, I've undertaken a variety of
                  projects to apply and reinforce my skills. From responsive
                  websites to interactive web applications, each project
                  represents a step forward in my development journey and
                  demonstrates my ability to bring ideas to life.
                </p>
                <p className=" py-3 font-medium sm:hidden">
                  What drew me to web development was the opportunity to blend
                  creativity with technical skills, to craft digital experiences
                  that resonate with users and leave a lasting impression. The
                  dynamic nature of the field, where innovation and evolution
                  are constant companions, excites me and motivates me to push
                  the boundaries of what's possible.
                </p>
                <h2 className="py-3 text-lg font-bold uppercase text-darkPurple/75 sm:hidden">
                  Let's Connect:
                </h2>
                <p className="font-medium sm:hidden">
                  I'm excited about the prospect of leveraging my skills and
                  enthusiasm to contribute to a dynamic team and make a
                  meaningful impact in the field of web development. If you're
                  looking for a motivated and eager candidate who is ready to
                  hit the ground running, I'd love to connect and explore
                  potential opportunities to work together.
                </p>
              </div>
              <div
                className="col-span-3 col-end-9 row-start-1 row-end-4 xl:col-span-8 xl:col-start-3 xl:col-end-8 md:col-start-2 md:col-end-8 md:col-span-4 sm:col-start-1 sm:col-end-8 xs:col-start-4 xs:col-end-8  rounded-full overflow-hidden relative w-96 h-96 xs:w-20 xs:h-20"
                style={{
                  borderRadius: "50%",
                  border: "1px solid snow",

                  // width: "75%",
                  // height: "60%",
                  // objectFit: "cover",
                  filter: "drop-shadow(#F9E7DD 1rem 1rem 6px)",
                }}
              >
                <div ref={profileRef} className="top-0 -z-10">
                  <Image
                    src={profilePic}
                    alt="Eman"
                    priority
                    //       sizes="(max-width: 768px) 100vw,
                    // (max-width: 1200px) 50vw,
                    // 33vw"
                    className="rounded-full w-full"
                    style={{
                      filter: "brightness(1.12)",
                      // filter: brightness ? "brightness(1.12)" : "none",
                    }}
                  />
                </div>
              </div>

              <div
                className={`xl:right-14 xl:left-auto lg:hidden fixed left-auto right-28 bottom:auto top-32 inline-block w-20 ${
                  showBulb
                    ? "opacity-100 transition-opacity duration-500 ease-in"
                    : "opacity-0 transition-opacity duration-500 ease-out"
                }`}
              >
                <Image2
                  src={lightBulb}
                  alt="light bulb"
                  className="w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  style={{
                    filter:
                      "drop-shadow(0 0 20px #FFD700) drop-shadow(0 0 30px #FFF7F5) drop-shadow(0 0 40px #FFF7F5)",
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
            <Skills />
          </Template>
        </div>
      </main>
    </>
  );
};

export default about;
