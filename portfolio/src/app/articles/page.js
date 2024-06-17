"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Template from "../components/Template";
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import article1 from "/public/images/article1.jpg";
import article2 from "/public/images/article2.jpg";
import article3 from "/public/images/article3.jpg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link, isMediumScreen }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    // here we are saying if isMediumScreen is false, then show the image on hover else don't show it
    if(isMediumScreen ===false){
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
    }
  };

  const handleMouseLeave = (e) => {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  console.log("isMediumScreenMoving:", isMediumScreen); 

  return (
    <Link
      href={link}
      target="blank"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
        ref={imgRef}
        src={img}
        alt={title}
        priority
        //here we are saying if the screen is medium, then don't show the image and hide it
        className={`z-10 w-20 h-20 hidden absolute rounded-lg object-cover ${
          isMediumScreen ? "hidden" : ""
        }`}
      />
    </Link>
  );
};

const Article = ({ img, title, time, link, isMediumScreen }) => {


  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 1, ease: "easeInOut" } }}
      className="  relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-snow  text-darkPurple first:mt-0 border border-solid border-snow
    shadow-2xl shadow-champagne sm:flex-col
    "
    >
      <MovingImage title={title} img={img} link={link}
       isMediumScreen={isMediumScreen} 
       />
      <span className="text-darkPurple font-semibold pl-4 sm:self-start sm:pl-0 xs:text-xs">
        {time}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ link, img, title, time, summary }) => {
  return (
    <li className=" relative col-span-1 w-full p-4 bg-snow border border-solid border-snow rounded-2xl shadow-2xl shadow-champagne">
      {/* <div
          className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl
      "
        /> */}
      <Link
        href={link}
        target="blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="w-full h-96 object-cover rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <Link href={link} target="blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg ">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-darkPurple font-semibold">{time}</span>
    </li>
  );
};
const articles = () => {

 const [isMediumScreen, setIsMediumScreen] = useState(false);
useEffect(() => {

  const mediaQuery = window.matchMedia("(max-width: 767px)");
  console.log(mediaQuery.matches);
  setIsMediumScreen(mediaQuery.matches);

  const handler = () => setIsMediumScreen(mediaQuery.matches);
  mediaQuery.addEventListener("change", handler);

  return () => mediaQuery.removeEventListener("change", handler);
}, []);

useEffect(
  () => {

    const updateScreenSize = () => {
      
      const mediaQuery = window.matchMedia("(max-width: 767px)");
      setIsMediumScreen(mediaQuery.matches);
    };

    updateScreenSize(); // Initial check
console.log("isMediumScreen updated",isMediumScreen);
    const handler = () => {
      updateScreenSize();
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  },
  [
    isMediumScreen
  ]
);

  return (
    <>
      <Head>
        <title>Eman | Articles Page</title>
        <meta name="description" content="This is articles page" />
      </Head>
      {/* <TransitionEffect /> */}
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Template className="pt-16 p-28 sm:p-5">
          <AnimatedText
            text="Feed your intellect, feed your soul!"
            className="mb-16 lg:!text-5xl md:text!4xl sm:mb-8 sm:!text-3xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={article1}
              title="Resolving Framer Motion Compatibility in Next.js 14: The ‘use client’ Workaround"
              summary="In this blog post, we’ll delve into the compatibility issues between Framer Motion and Next.js 14 and explore a simple yet effective workaround: the ‘use client’ directive."
              time="2 min read"
              link="https://medium.com/@dolce-emmy/resolving-framer-motion-compatibility-in-next-js-14-the-use-client-workaround-1ec82e5a0c75"
            />

            <FeaturedArticle
              img={article2}
              title="How to Create a Glowing Lightbulb Effect in Next.js with Framer Motion, Tailwind CSS"
              summary="In this blog post, we’ll delve into the compatibility issues between Framer Motion and Next.js 14 and explore a simple yet effective workaround: the ‘use client’ directive."
              time="2 min read"
              link="https://medium.com/@dolce-emmy/how-to-create-a-glowing-lightbulb-effect-in-next-js-with-framer-motion-and-tailwind-css-3c4ee4d6426e"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-snow">
            All Articles
          </h2>
          <ul>
            <Article
              title="Embracing the Future: Why Next.js is Leading the Way"
              img={article3}
              time="3 min read"
              link="https://medium.com/@dolce-emmy/embracing-the-future-why-next-js-is-leading-the-way-e7196ad39808"
              isMediumScreen={isMediumScreen}
            />
            <Article
              title="Next.js vs React.js: Understanding the Differences"
              img=""
              time="3 min read"
              link="https://medium.com/@dolce-emmy/next-js-vs-react-js-understanding-the-differences-d5bb52afe1c5"
              isMediumScreen={isMediumScreen}
            />

            <Article
              title="Optimizing Image Loading in Next.js: Understanding Prioritization"
              link="https://medium.com/@dolce-emmy/title-optimizing-image-loading-in-next-js-understanding-prioritization-e102a8bbb3f1"
              time="2 min read"
              isMediumScreen={isMediumScreen}
            />
            <Article
              title="Supercharge Your Next.js Website with Optimized Image Loading"
              img=""
              time="2 min read"
              link="https://medium.com/@dolce-emmy/embracing-the-future-why-next-js-is-leading-the-way-e7196ad39808"
              isMediumScreen={isMediumScreen}
            />

            <Article
              title="Demystifying Server-Side Rendering (SSR) and Static Site Generation (SSG) with Next.js"
              img=""
              time="3 min read"
              link="https://medium.com/@dolce-emmy/embracing-the-future-why-next-js-is-leading-the-way-e7196ad39808"
              isMediumScreen={isMediumScreen}
            />
          </ul>
        </Template>
      </main>
    </>
  );
};

export default articles;
