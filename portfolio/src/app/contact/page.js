'use client';

import React, { useState, useRef } from "react";
import envelopeIcon from "/public/images/svgs/lady-with-envelope-100.png"
import removeIcon from "/public/images/svgs/remove.png"
import Image from "next/image";

import {motion} from "framer-motion";

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
    form.classList.add("was-validated");
  };

  const toggleWidget = () => {
    setOpen(!open);
  };

  return (
    <div>
      <h1>Let's stay in Touch</h1>
      {!open && (
        <div
          id="w3f__widget--content"
          className="fixed flex flex-col z-50 bottom-[100px] top-0 right-0 h-auto left-0 sm:top-auto sm:right-5 sm:left-auto h-[calc(100%-95px)] w-full sm:w-[350px] overflow-auto min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md"
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
              <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
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
                  placeholder="eman.yassin83@gmail.com"
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
              <p className="text-xs text-center text-gray-400" id="result"></p>
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
            <Image src={removeIcon} alt="close" />
          ) : (
            <>
              <Image src={envelopeIcon} alt="envelope" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-red animate-pulse text-red-800"
              >
                click here
              </motion.p>
            </>
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ContactForm;