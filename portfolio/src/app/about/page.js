"use client";
import { useState, useEffect, useRef} from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Template from "../components/Template";
import NavBar from "../components/NavBar";
import Image from "next/image";
import profilePic from "/public/images/profile/eman.png";
import lightBulb from "/public/images/profile/miscellaneous_icons_1.svg";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Skills from "../components/Skills";




const about = () => {

    const Image2 = motion(Image);
    const [showBulb, setShowBulb] = useState(true);

    const profileRef =  useRef(null);
    const bulbRef =  useRef(null);

    useEffect(() => {

      const handleScroll = () => {
        // here we are 
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
      }

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

      <NavBar />
      
      <main className="montserrat bg-desert text-darkPurple w-full min-h-screen">
        <div className="flex w-full flex-col items-center justify-center">
          <Template className="pt-8">
            <AnimatedText
              text="Let Passion Be The Light To Our Purpose!"
              className="mb-16 text-darkPurple"
            />
            <div className="grid w-full grid-cols-6 gap-16">
              <div className="col-span-3 flex flex-col items-start justify-start">
                <h2 className="pb-10 text-lg font-bold uppercase text-darkPurple/75">
                  Welcome to Eman's Biography
                </h2>
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
                  vocational training in the web development, where it further fueled
                  my passion and equipped me with the skills to bring my ideas
                  to life through code.
                </p>
                <p className="font-medium">
                  Throughout my learning journey, I've undertaken a variety of
                  projects to apply and reinforce my skills. From responsive
                  websites to interactive web applications, each project
                  represents a step forward in my development journey and
                  demonstrates my ability to bring ideas to life.
                </p>
                <p className=" py-3 font-medium">
                  What drew me to web development was the opportunity to blend
                  creativity with technical skills, to craft digital experiences
                  that resonate with users and leave a lasting impression. The
                  dynamic nature of the field, where innovation and evolution
                  are constant companions, excites me and motivates me to push
                  the boundaries of what's possible.
                </p>
                <h2 className="py-3 text-lg font-bold uppercase text-darkPurple/75">
                  Let's Connect:
                </h2>
                <p className="font-medium">
                  I'm excited about the prospect of leveraging my skills and
                  enthusiasm to contribute to a dynamic team and make a
                  meaningful impact in the field of web development. If you're
                  looking for a motivated and eager candidate who is ready to
                  hit the ground running, I'd love to connect and explore
                  potential opportunities to work together.
                </p>
              </div>
              <div
                className="col-span-3 relative"
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "70%",
                  height: "59%",
                  objectFit: "cover",
                  filter: "drop-shadow(#F9E7DD 2rem 2rem 10px)",
                }}
              >
                <div ref={profileRef} className="absolute top-0 -right-3 -z-10">
                  <Image
                    src={profilePic}
                    alt="Eman"
                    priority
                    className=" w-full h-auto"
                    style={{
                      filter: "brightness(1.12)",
                      // filter: brightness ? "brightness(1.12)" : "none",
                    }}
                  />
                </div>
              </div>

              <div
                className={`fixed right-32 top-24 inline-block w-20 ${(showBulb) ? "opacity-100 transition-opacity duration-500 ease-in": "opacity-0 transition-opacity duration-500 ease-out"}`}
              >
                <Image2
                  src={lightBulb}
                  alt="light bulb"
                  className="w-full h-auto"
                  priority
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
