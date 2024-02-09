import NavBar from "./components/NavBar";
import Image from "next/image";
import profilePic from "/public/images/profile/developer-coding-hd.png";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import arrowIcon from "/public/images/arrow-icon.png";
import Resume from "./components/Resume";



export default function Home() {
  return (
    <>
      {/* <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <NavBar />
      <main className="montserrat bg-desert text-darkPurple w-full min-h-screen">
        <div className="w-full h-full inline-block z-0 bg-desert p-28 pt-0 ">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="developer girl coding"
                className="w-full h-auto"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center ">
              <AnimatedText
                text={
                  "From Lines of Code to Digital Magic, I'm Eman, a Web Developer."
                }
                className="text-left"
              />

              <p className="my-4 text-base font-medium text-darkPurple">
                Hello World! I'm a passionate web developer on a journey of
                self-discovery and skill-building. With a background as a
                self-taught developer, I delved into the world of web
                development driven by curiosity and a thirst for knowledge. I
                completed a comprehensive web development course, where I gained
                essential skills and practical experience to complement my
                self-taught journey. I'm dedicated to pushing the boundaries of
                what's possible in the digital realm. Explore my portfolio to
                see a glimpse of my work.
              </p>
              <div className="flex items-center self-start mt-2">
                <Resume />
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
