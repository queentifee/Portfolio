
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Hero from "./assets/Hero.jpg";

const HeroSection = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContact(true);
    }, 3000); // Show after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[60vh] md:h-screen w-full">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </motion.div>

      {/* Centered Text Content */}
      <div className="absolute mt-10 inset-0 flex flex-col px-4 z-10">
        <h1 className="bebas-neue-logo text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide">
          Hello!
        </h1>
        <h1 className="mt-5  bebas-neue-regula text-2xl sm:text-4xl lg:text-3xl text-white tracking-wide mt-3">
          Welcome to Queen_Codes Portfolio.
          <br />
          I'm
          <span className="bg-gradient-to-r from-[#D8BFD8] to-[#FFC0CB] text-transparent bg-clip-text">
            {" "}
            <Typewriter
  words={[" Queen Samuel", "A Software Developer", "A Creative Coder ❤️"]}
  loop={true}
  cursor
  cursorStyle="|"
  typeSpeed={100}
  deleteSpeed={50}
/>
          </span>
        </h1>
      </div>

      {/* Contact Form Drop Down */}
      {showContact && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
           className="absolute top-0 right-10 h-[70%] w-80 p-4 shadow-lg rounded-lg flex flex-col bg-gradient-to-b from-purple-400 to-purple-200">
          <h3 className="text-xl font-bold text-gray-900 text-center">Let's Connect!</h3>
          
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 mt-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          />
          
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mt-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          />
          
          <textarea
            placeholder="Briefly describe your project"
            className="w-full p-2 mt-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 h-24"
          ></textarea>
          
          <button className="mt-4 w-full bg-purple-500 text-white py-2 rounded-full hover:bg-purple-700">
            Submit
          </button>
        
        
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;

