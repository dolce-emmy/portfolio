'use client';
import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Template from '../components/Template'
import AnimatedText from '../components/AnimatedText'
import { motion } from 'framer-motion'
import Loading from "../template/Loading";
import Link from 'next/link';
import Image from 'next/image';
import {Github3Icon} from '../components/Icons';
import project1 from '/public/images/projects/friendfusion.png';


const FeaturedProject = ({type, title, summary, img, link, github}) => {

  return (
    <article
      className="w-full flex items-center justify-between text-snow
    rounded-3xl border border-solid border-darkPurple bg-darkPurple shadow-2xl p-12
    "
    >
      <Link
        href={link}
        target="blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} priority className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-cordovan font-medium text-2xl">{type}</span>
        <Link
          href={link}
          target="blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full  text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="blank"
            className="hover:translate-y-1 hover:scale-110 transition duration-300 ease-in-out delay-150"
          >
            
            <Github3Icon width={100} height={100}  />
          </Link>
          <Link
            href={link}
            target="blank"
            className="ml-4 rounded-lg bg-snow text-darkPurple p-2 px-6 text-lg font-semibold hover:translate-y-1 hover:scale-110 transition duration-300 ease-in-out delay-150"
          >
            Visit Projects
          </Link>
        </div>
      </div>
    </article>
  );

}

const Project = ({title, type, img, link, github}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center border border-darkPurple bg-darkPurple text-snow p-6 relative rounded-2xl">
      <Link
        href={link}
        target="blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} priority className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-cordovan font-medium text-2xl">{type}</span>
        <Link
          href={link}
          target="blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full  text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          
          <Link
            href={link}
            target="blank"
            className=" text-lg font-semibold hover:translate-y-1 hover:scale-110 transition duration-300 ease-in-out delay-150 hover:underline underline-offset-2"
          >
            Visit
          </Link>
          <Link
            href={github}
            target="blank"
            className="hover:translate-y-1 hover:scale-110 transition duration-300 ease-in-out delay-150"
          >
            {" "}
            <Github3Icon width={60} height={60} />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
  
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Eman | projects Page</title>
        <meta name="description" content="This is projects page" />
      </Head>
      <Loading loading={Loading} />
      <NavBar />
      <main className="montserrat">
        <div className="w-full flex flex-col mb-16 items-center justify-center">
          <Template className="pt-16">
            <AnimatedText
              text={"Dreams in Action: Turning Imagination into Reality!"}
              className="mb-16"
            />
            <div className="grid grid-cols-12 gap-24">
              <div className="col-span-12 flex flex-col items-center justify-between">
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
              <div className="col-span-6">Project-2</div>
              <div className="col-span-12">Feature Projects</div>
              <div className="col-span-6">Project-3</div>
              <div className="col-span-6">Project-4</div>
            </div>
          </Template>
        </div>
      </main>
    </>
  );
}

export default projects