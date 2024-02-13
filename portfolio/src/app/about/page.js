import React from "react";
import Link from "next/link";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Template from "../components/Template";
import NavBar from "../components/NavBar";
import Image from "next/image";
import profilePic from "/public/images/profile/eman3.png";
const about = () => {
  return (
    <>
      <Head>
        <title>Eman | About Page</title>
        <meta name="description" content="This is about page" />
      </Head>
      <NavBar />
      <main className="montserrat bg-desert text-darkPurple w-full min-h-screen">
        <div className="flex w-full flex-col items-center justify-center">
          <Template className="pt-16">
            <AnimatedText
              text="Let Passion Be The  Compass To Our Purpose!"
              className="mb-16 text-darkPurple"
            />
            <div className="grid w-full grid-cols-8 gap-16">
              <div className="col-span-3 flex flex-col items-start justify-start">
                <h2 className="mb-4 text-lg font-bold uppercase text-darkPurple/75">
                  Welcome to Eman's Biography
                </h2>
                <p className="font-medium">
                  Greetings! I'm a passionate web developer captivated by the
                  limitless possibilities of the digital realm. On the lookout
                  for exciting opportunities to contribute my skills and passion
                  to a forward-thinking team. my enthusiasm for web development
                  runs deep, stemming from a genuine fascination with technology
                  and a desire to create meaningful digital experiences.
                </p>
                <p className="font-medium my-4">
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
              </div>
              <div
                className="col-span-3 relative shadow-2xl overflow-hidden bg-darkPurple"
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "100%",
                  height: "73%",
                  objectFit: "cover",
                  
                }}
              >
                <div className="relative overflow-hidden rounded-full bg-white" style={{ width: "100%", height: "100%" }}>
                  <Image
                    src={profilePic}
                    alt="Eman"
                    priority
                    // I want the image to be radius 50% of its container
                    className=" w-full"
                  />
                </div>
              </div>
            </div>
          </Template>
        </div>
      </main>
    </>
  );
};

export default about;
