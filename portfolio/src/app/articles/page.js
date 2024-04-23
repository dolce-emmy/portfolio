"use client";
import React from "react";
import Head from "next/head";
import Template from "../components/Template";
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import article1 from "/public/images/article1.jpg";
import article2 from "/public/images/article2.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const Article = ({ img, title, time, link }) => {
  return (
    <li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-snow  text-darkPurple first:mt-0 border border-solid border-darkPurple
    border-r-4 border-b-4
    "
    >
      <Link href={link} target="blank">
        <h2 className="capitalize text-xl font-semibold hover:underline">
          {title}
        </h2>
      </Link>
      <span className="text-darkPurple font-semibold pl-4">{time}</span>
    </li>
  );
};

const FeaturedArticle = ({ link, img, title, time, summary }) => {
  return (
    <li className=" relative col-span-1 w-full p-4 bg-snow border border-solid border-darkPurple rounded-2xl shadow-2xl">
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
          className="w-full h-96 object-cover rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <Link href={link} target="blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-darkPurple font-semibold">{time}</span>
    </li>
  );
};
const articles = () => {
  return (
    <>
      <Head>
        <title>Eman | Articles Page</title>
        <meta name="description" content="This is articles page" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Template className="pt-16">
          <AnimatedText
            text="Feed your intellect, feed your soul!"
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              img={article1}
              title="Resolving Framer Motion Compatibility in Next.js 14: The ‘use client’ Workaround"
              summary="In this blog post, we’ll delve into the compatibility issues between Framer Motion and Next.js 14 and explore a simple yet effective workaround: the ‘use client’ directive."
              time="2 min read"
              link="https://medium.com/@dolce-emmy/resolving-framer-motion-compatibility-in-next-js-14-the-use-client-workaround-1ec82e5a0c75"
            />

            <FeaturedArticle
              img={article2}
              title="Resolving Framer Motion Compatibility in Next.js 14: The ‘use client’ Workaround"
              summary="In this blog post, we’ll delve into the compatibility issues between Framer Motion and Next.js 14 and explore a simple yet effective workaround: the ‘use client’ directive."
              time="2 min read"
              link="https://medium.com/@dolce-emmy/resolving-framer-motion-compatibility-in-next-js-14-the-use-client-workaround-1ec82e5a0c75"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Optimizing Image Loading in Next.js: Understanding Prioritization"
              img=""
              link="https://medium.com/@dolce-emmy/title-optimizing-image-loading-in-next-js-understanding-prioritization-e102a8bbb3f1"
              time="2 min read"
              
            />
            <Article
              title="Next.js vs React.js: Understanding the Differences"
              img=""
              time="3 min read"
              link="https://medium.com/@dolce-emmy/next-js-vs-react-js-understanding-the-differences-d5bb52afe1c5"
            />
            <Article
              title="Embracing the Future: Why Next.js is Leading the Way"
              img=""
              time="3 min read"
              link="https://medium.com/@dolce-emmy/embracing-the-future-why-next-js-is-leading-the-way-e7196ad39808"
            />
          </ul>
        </Template>
      </main>
    </>
  );
};

export default articles;
