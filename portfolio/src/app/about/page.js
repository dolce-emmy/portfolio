"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Template from "../components/Template";
import NavBar from "../components/NavBar";
import Image from "next/image";
import profilePic from "/public/images/profile/eman.png";
import profilePic2 from "/public/images/profile/eman3.png";
import lightBulb from "/public/images/profile/miscellaneous_icons_1.svg";
import Confetti from "react-confetti";
import { motion } from "framer-motion";



const about = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const Image2 = motion(Image);
  const [brightness, setBrightness] = useState(false);
  useEffect(() => {

const handleScroll = () => {
  // here I am saying if brightness is false, then set it to true 
  if (!brightness) {
    setBrightness(true);
  }
};

window.addEventListener("scroll", handleScroll);

return () => {

  window.removeEventListener("scroll", handleScroll);
};
    // setShowConfetti(true);

    // const timeoutId = setTimeout(() => {
    //   setShowConfetti(false);
    // }, 4000); // Adjust the duration (in milliseconds) as needed

    // return () => {
    //   clearTimeout(timeoutId);
    // };
  }, [brightness]);

  return (
    <>
      <Head>
        <title>Eman | About Page</title>
        <meta name="description" content="This is about page" />
      </Head>
      {/* <Confetti
        width={1920}
        height={1080}
        numberOfPieces={showConfetti ? 200 : 0}
        // here the initial velocity controls the direction of the falling confetti and it's adjusted to 50 to make it fall in a straight line
        initialVelocityY={50}
      /> */}
      <NavBar />
      <main className="montserrat bg-desert text-darkPurple w-full min-h-screen">
        <div className="flex w-full flex-col items-center justify-center">
          <Template className="pt-8">
            <AnimatedText
              text="Let Passion Be The Light To Our Purpose!"
              className="mb-16 text-darkPurple"
            />
            <div className="grid w-full grid-cols-5 gap-16">
              <div className="col-span-3 flex flex-col items-start justify-start">
                <h2 className="pb-10 text-lg font-bold uppercase text-darkPurple/75">
                  Welcome to Eman's Biography
                </h2>
                <p className="font-medium">
                  Greetings! I'm Eman, a passionate web developer captivated by
                  the limitless possibilities of the digital Landscape. On the
                  lookout for exciting opportunities to contribute my skills and
                  passion to a forward-thinking team. my enthusiasm for web
                  development runs deep, stemming from a genuine fascination
                  with technology and a desire to create meaningful digital
                  experiences.
                </p>
                <p className="font-medium py-6">
                  Driven by a passion for creating innovative digital solutions,
                  I've immersed myself in the world of web development, learning
                  and experimenting with various technologies and frameworks. My
                  journey began with self-directed study, followed by intensive
                  training at a web development course, where it further fueled
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
                  creativity with technical skill, to craft digital experiences
                  that resonate with users and leave a lasting impression. The
                  dynamic nature of the field, where innovation and evolution
                  are constant companions, excites me and motivates me to push
                  the boundaries of what's possible.
                </p>
                <h2 className="text-lg font-bold uppercase text-darkPurple/75">
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
                className="col-span-2 relative"
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "70%",
                  height: "73%",
                  objectFit: "cover",
                  filter: "drop-shadow(#F9E7DD 2rem 2rem 10px)",
                }}
              >
                <Image
                  src={profilePic}
                  alt="Eman"
                  priority
                  className=" w-full h-auto"
                  style={{
                    // filter: "brightness(1.12)",
                    filter: brightness ? "brightness(1.2)" : "none",
                  }}
                />
              </div>

              <div className="fixed right-40 top-24 inline-block w-20">
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
          </Template>
        </div>
      </main>
    </>
  );
};

export default about;
