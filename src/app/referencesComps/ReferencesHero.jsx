"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import { FaBook } from "react-icons/fa"; // changed icon to represent references

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const button1 = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const button2 = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

const ReferencesHero = () => {
  return (
    <motion.div
      className="
        h-screen sm:h-screen
        bg-gradient-to-br from-blue-400 to-blue-200
        text-center
        flex justify-center items-center flex-col
        px-4 sm:px-0
      "
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Logo */}
      <motion.div
        variants={item}
        className="
          bg-blue-800
          w-20 h-20 sm:w-30 sm:h-30
          rounded-full
          flex items-center justify-center
          text-2xl sm:text-4xl
          text-white
          mb-6
        "
      >
        <FaBook />
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={item}
        className="font-bold text-xl sm:text-2xl text-white mb-4"
      >
        References & Resources
      </motion.h1>

      {/* Tagline */}
      <motion.p variants={item} className="text-xl sm:text-3xl text-blue-700">
        Images, Websites, and Other Resources Used to Create this Wonderful TSA Project
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={item}
        className="
          flex flex-col sm:flex-row
          mt-8
          gap-4 sm:gap-3
          w-full sm:w-auto
        "
      >
        <motion.a
          variants={button1}
          className="
            bg-blue-950
            flex items-center justify-center
            py-3 sm:py-2
            px-6 sm:px-8
            rounded-2xl
            text-base sm:text-lg
            text-white
            w-full sm:w-auto
          "
          href="#referencesExplore"
        >
          <IoIosSearch className="mr-1 text-2xl" />
          Browse References
        </motion.a>

        <motion.a
          variants={button2}
          className="
            border border-gray-500
            py-3 sm:py-2
            px-6 sm:px-8
            rounded-2xl
            bg-white
            text-base sm:text-lg
            text-black
            flex items-center justify-center
            w-full sm:w-auto
          "
          href="/suggest"
        >
          <CiSquarePlus className="mr-1 text-2xl" />
          Suggest a Resource
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ReferencesHero;
