"use client";
import Image from "next/image";
import profilePic from "/public/images/profile/developer-coding-hd.png";
import AnimatedText from "./components/AnimatedText";
import Template from "./components/Template";
import Resume from "./components/Resume";
import Resume2 from "./components/Resume2";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";
import Head from "next/head";
import { HeroHighlightDemo } from "./components/ui/Hero-light-demo";
import { GlowingStarsBackgroundCardPreview } from "./components/ui/GlowingStarsBackgroundCardPreview";
import TransitionEffect from "./components/TransitionEffect";
export default function Home() {


  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Head>
        <title>Eman | Portfolio</title>
        <meta name="description" content="This is Home page" />
      </Head>

      {/* <TransitionEffect/> */}
      
      <main className="">
        {/* <GlowingStarsBackgroundCardPreview /> */}
        <Template className="pt-0 px-28 xl:pt-6 lg:pt-16 md:py-5 sm:pt-8  sm:px-10">
          {/* <GlowingStarsBackgroundCardPreview/> */}
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="developer girl coding"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              55vw"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
              {/* <AnimatedText
                text={
                  "From Lines of Code to Digital Magic, I'm Eman, a Web Developer."
                }
                className="!text-left xl:!text-6xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              /> */}

              <HeroHighlightDemo className="!text-left xl:!text-6xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-lg" />

              <p className="my-4 text-lg text-base  text-darkPurple dark:text-snow sm:text-sm ">
                Hello World! I'm a passionate web developer on a journey of
                self-discovery and skill-building. With a background as a
                self-taught developer, I delved into the world of web
                development driven by curiosity and a thirst for knowledge. I
                completed further training (Weiterbildung) as a web developer,
                where I gained essential skills and practical experience to
                complement my self-taught journey. I'm dedicated to pushing the
                boundaries of what's possible in the digital realm. Explore my
                portfolio to see a glimpse of my work.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Resume2 />
              </div>
            </div>
          </div>
        </Template>
        <HireMe />
        {/* <div className="fixed right-4 bottom-1 inline-block w-28 ">
          <Image src={lightBulb} className="w-full h-auto" />
        </div> */}

        {/* <Footer /> */}
      </main>
    </>
  );
}
