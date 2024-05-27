"use client";
import React, { useState, useRef } from "react";
import envelopeIcon from "/public/images/svgs/lady-with-envelope-100.png";
import envelopeIcon2 from "/public/images/svgs/lady-with-envelope-102.png";
import envelopeIcon3 from "/public/images/svgs/lady-with-envelope-103.png";
import removeIcon from "/public/images/svgs/remove.png";
import Image from "next/image";
import Head from "next/head";
import Template from "../components/Template";
import AnimatedText from "../components/AnimatedText";
// import NextVideo from "next-video";
// import contactVideo from "/videos/contact.mp4"
import { motion } from "framer-motion";
import developer from "/public/images/profile/developer-girl.png";
import developer3 from "/public/images/profile/Default_A_brown_egyptian_developer_girl_wearing_glasses_sitti_0.jpg";

const ContactForm = () => {
  const [open, setOpen] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    // Email validation
    const email = formData.get("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const result = document.getElementById("result");
      result.innerHTML = "Please provide a valid email address";
      result.classList.remove("text-gray-500");
      result.classList.add("text-red-500");
      return;
    }

    // Abusive content detection
      const message = formData.get("message");
      const abusiveWords = ["abusive", "bad", "offensive", "fuck","cunt","stupid","twat", "dick", "bullocks", "pussy",]; // Add more abusive words here
      const isAbusive = abusiveWords.some((word) =>
      message.toLowerCase().includes(word.toLowerCase())
      );
      if (isAbusive) {
        const result = document.getElementById("result");
        result.innerHTML =
          "Your message contains abusive content. Please revise.";
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
        return;
      }
    
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Please wait...";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (response.status === 200) {
        const jsonResponse = await response.json();
        result.innerHTML = jsonResponse.message;

        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        const jsonResponse = await response.json();
        console.log(response);
        result.innerHTML = jsonResponse.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    } catch (error) {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    }

    form.reset();
    form.classList.remove("was-validated");
    setTimeout(() => {
      result.style.display = "none";
    }, 5000);

    result.style.display = "block"; // Show the result
    form.classList.add("was-validated");

  };

  const toggleWidget = () => {
    setOpen(!open);
  };

  return (
    <>
      <Head>
        <title>Eman | projects Page</title>
        <meta name="description" content="This is contact page" />
      </Head>
      <main className="min-h-screen ">
        <div className="w-full flex flex-col items-center justify-center ">
          <Template className="p-16">
            {/* <NextVideo
      className="w-full max-h-full"
       src={contactVideo} />; */}

            <div className="grid w-full grid-cols-9 gap-16 p-8 ">
              <motion.div
                className="col-span-3 overflow-hidden mt-8"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                }}
              >
                <Image
                  src={developer3}
                  alt="developer"
                  priority
                   sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  quality={100}
                  className="w-full  object-cover rounded-full"
                />
              </motion.div>
              <div className="col-span-4 w-full">
                <AnimatedText
                  text={"Where Communication Builds Bridges, Let's Connect!"}
                  className="text-left pt-40"
                />
                <p className=" my-4 text-base text-lg  text-darkPurple dark:text-snow">
                  Ready to take your project to the next level? Let's
                  collaborate and turn your vision into a stunning reality.
                  Whether you're looking to create a sleek and professional
                  website, optimize your online presence, or develop custom web
                  solutions, I'm here to help. With a passion for web
                  development and a commitment to excellence, I'll work closely
                  with you to bring your ideas to life. Don't hesitate to get in
                  touch – I can't wait to hear from you!
                </p>
              </div>
              <div className="col-span-2">
                {!open && (
                  <div
                    id="w3f__widget--content"
                    className="fixed flex flex-col z-50 bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto h-[calc(100%-95px)] w-full sm:w-[350px] overflow-auto min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md"
                  >
                    <div className="flex p-5 flex-col justify-center items-center h-32 bg-darkPurple">
                      <h3 className="text-lg text-white">Let's Get In Touch</h3>
                      <p className="text-white opacity-50">
                        We usually respond in a few hours
                      </p>
                    </div>
                    <div className="bg-gray-50 flex-grow p-6">
                      <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        id="form"
                        className="needs-validation"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <input
                          type="hidden"
                          name="access_key"
                          value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
                        />
                        <input
                          type="hidden"
                          name="subject"
                          value="New Submission from Web3Forms"
                        />
                        <input
                          type="checkbox"
                          name="botcheck"
                          style={{ display: "none" }}
                        />

                        <div className="mb-4">
                          <label
                            htmlFor="full_name"
                            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="full_name"
                            placeholder="John Doe"
                            required
                            className="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                          />
                          {/* <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                  Please provide your full name.
                </div> */}
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="john.doe@gmail.com"
                            required
                            className="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                          />

                          {/* <div className="empty-feedback text-red-400 text-sm mt-1">
                  Please provide your email address.
                </div>
                <div className="invalid-feedback text-red-400 text-sm mt-1">
                  Please provide a valid email address.
                </div> */}
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            Your Message
                          </label>

                          <textarea
                            rows="4"
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            className="w-full h-28 px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            required
                          ></textarea>
                          {/* <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                  Please enter your message.
                </div> */}
                        </div>
                        <div className="mb-3">
                          <button
                            type="submit"
                            className="w-full px-3 py-4 text-snow bg-darkPurple rounded-md focus:outline-none"
                          >
                            Send Message
                          </button>
                        </div>
                        <p
                          className="text-xs text-center text-gray-400"
                          id="result"
                        ></p>
                      </form>
                    </div>
                  </div>
                )}
                <motion.button
                  id="w3f__widget--btn"
                  onClick={toggleWidget}
                  className="fixed z-40 right-5 bottom-8  flex justify-center items-center w-14 h-14 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  // transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: open ? 0 : 360 }}
                    // transition={{ duration: 0.2 }}
                  >
                    {!open ? (
                      <Image src={removeIcon} alt="close" priority />
                    ) : (
                      <>
                        <Image src={envelopeIcon2} alt="envelope" priority />
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-xs font-bold text-red animate-pulse text-red-800"
                        >
                          click here
                        </motion.p>
                      </>
                    )}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </Template>
        </div>
      </main>
    </>
  );
};

export default ContactForm;
