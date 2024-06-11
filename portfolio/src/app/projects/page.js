"use client";
import React from "react";
import { useEffect, useRef } from "react";
import Head from "next/head";
import Template from "../components/Template";
import AnimatedText from "../components/AnimatedText";
import { easeInOut, motion } from "framer-motion";
import Loading from "../template/loading";
import Link from "next/link";
import Image from "next/image";
import { Github3Icon } from "../components/Icons";
import project1 from "/public/images/projects/friendfusion.png";
import project2 from "/public/images/projects/Luxevivre.png";
import project3 from "/public/images/projects/pilot_coder.png";


const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {3
  
  return (
    <article
      className="w-full flex items-center justify-between text-darkPurple
    rounded-3xl border border-solid border-snow bg-snow shadow-2xl shadow-champagne p-12 overflow-hidden relative
    lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4 
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl xs:-right-2 xs_h[102%] xs:w-full
      "
      />
      <Link
        href={link}
        target="blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          priority
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-cordovan font-medium text-xl xs:text-base">{type}</span>
        <Link
          href={link}
          target="blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full  text-left text-4xl font-bold sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium sm:text-sm">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="blank"
            className="hover:translate-y-1 hover:scale-110 transition duration-300 ease-in-out delay-150
            sm:w-16
            "
          >
            <Github3Icon width={100} height={100} />
          </Link>
          <Link
            href={link}
            target="blank"
            className="ml-4 rounded-lg bg-darkPurple text-snow p-2 px-6 text-lg font-semibold hover:translate-y-1 hover:scale-110 transition duration-300 ease-in-out delay-150
            sm:px-4 sm:text-base
            "
          >
            Visit Projects
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <motion.article className="w-full flex flex-col items-center justify-center 
    border border-snow bg-snow text-darkPurple p-6 relative rounded-2xl shadow-2xl shadow-champagne
    xs:p-4
    ">
      <Link
        href={link}
        target="blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="w-full h-72 lg:h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-cordovan font-medium text-xl lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target="blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full  text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="blank"
            className=" text-darkPurple text-lg font-semibold hover:translate-y-1 hover:scale-110 transition duration-300 ease-in-out delay-150 hover:underline underline-offset-2
            md:text-base
            "
          >
            Visit
          </Link>
          <Link
            href={github}
            target="blank"
            className="hover:translate-y-1 hover:scale-110 transition duration-300 ease-in-out delay-150
            md:w-12
            "
          >
            {" "}
            <Github3Icon width={60} height={60} />{" "}
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Eman | projects Page</title>
        <meta name="description" content="This is projects page" />
      </Head>
      <Loading />

      <main className="montserrat">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: easeInOut }}
        >
          <Template className="pt-16 p-28 sm:p-10">
            <AnimatedText
              text={"Dreams in Action: Turning Imagination into Reality!"}
              className="mb-16 lg:!text-5xl md:text!4xl sm:mb-8 sm:!text-3xl"
            />
            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
              <div className="col-span-12 flex flex-col items-center justify-between">
                <FeaturedProject
                  title="FriendFusion Social Media"
                  img={project1}
                  summary="A social media platform for friends to connect and share their experiences hshdszgerfvwer uhguzwefbuzewzruwe3
                kuifewuiruiewufiew oiefniuweuiferuif okenuifniuwe."
                  link="https://friend-fusion-social-media-website.onrender.com/"
                  github="https://github.com/dolce-emmy/FriendFusion"
                  type="Featured Project"
                />
              </div>
              <div className="col-span-6 sm:col-span-12">
                Project-1
                <Project
                  title="LuxeVivre Restaurant"
                  img={project2}
                  summary="A social media platform for friends to connect and share their experiences hshdszgerfvwer uhguzwefbuzewzruwe3
                kuifewuiruiewufiew oiefniuweuiferuif okenuifniuwe."
                  link="/"
                  github="https://github.com/dolce-emmy/LuxeVivre/tree/main/LuxeVivre"
                  type="Featured Project"
                />
              </div>
              <div className="col-span-6 sm:col-span-12">
                Project-2
                <Project
                  title="Pilot Coder News"
                  img={project3}
                  summary="A social media platform for friends to connect and share their experiences hshdszgerfvwer uhguzwefbuzewzruwe3
                kuifewuiruiewufiew oiefniuweuiferuif okenuifniuwe."
                  link="https://friend-fusion-social-media-website.onrender.com/"
                  github="https://github.com/dolce-emmy/News-App"
                  type="Featured Project"
                />
              </div>
              {/* <div className="col-span-12">
                  Feature Projects
                  <FeaturedProject
                    title="FriendFusion Social Media"
                    img={project1}
                    summary="A social media platform for friends to connect and share their experiences hshdszgerfvwer uhguzwefbuzewzruwe3
                kuifewuiruiewufiew oiefniuweuiferuif okenuifniuwe."
                    link="https://friend-fusion-social-media-website.onrender.com/"
                    github="/"
                    type="Featured Project"
                  />
                </div>
                <div className="col-span-6">
                  Project-3
                  <Project
                    title="FriendFusion Social Media"
                    img={project1}
                    summary="A social media platform for friends to connect and share their experiences hshdszgerfvwer uhguzwefbuzewzruwe3
                kuifewuiruiewufiew oiefniuweuiferuif okenuifniuwe."
                    link="https://friend-fusion-social-media-website.onrender.com/"
                    github="/"
                    type="Featured Project"
                  />
                </div>
                <div className="col-span-6">
                  Project-4
                  <Project
                    title="FriendFusion Social Media"
                    img={project1}
                    summary="A social media platform for friends to connect and share their experiences hshdszgerfvwer uhguzwefbuzewzruwe3
                kuifewuiruiewufiew oiefniuweuiferuif okenuifniuwe."
                    link="https://friend-fusion-social-media-website.onrender.com/"
                    github="/"
                    type="Featured Project"
                  />
                </div> */}
            </div>
          </Template>
        </motion.div>
      </main>
    </>
  );
};

export default projects;
