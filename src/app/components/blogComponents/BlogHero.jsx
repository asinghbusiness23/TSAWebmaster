// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { FaBookOpen } from "react-icons/fa"; // Changed icon
// import { IoIosSearch } from "react-icons/io";
// import { CiSquarePlus } from "react-icons/ci";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0 },
// };

// const item2 = {
//   hidden: { opacity: 1, y: 0 },
//   show: { opacity: 1, y: 0 },
// };

// const button1 = {
//   hidden: { opacity: 0, x: -50 },
//   show: { opacity: 1, x: 0 },
// };

// const button2 = {
//   hidden: { opacity: 0, x: 50 },
//   show: { opacity: 1, x: 0 },
// };

// const BlogHero = () => {
//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="h-screen bg-gradient-to-br from-blue-400 to-blue-200 text-center flex justify-center items-center flex-col bg-[chescoImage.svg]"
//     >
//       <motion.div
//         variants={item}
//         className="bg-blue-800 w-30 h-30 rounded-full flex items-center justify-center text-4xl text-white mb-6"
//       >
//         <FaBookOpen />
//       </motion.div>
//       <motion.h1 variants={item} className="font-bold text-2xl text-white mb-4">
//         Resource Blogs
//       </motion.h1>
//       <motion.p
//         variants={item}
//         className="text-3xl text-blue-700 w-200 max-w-2xl"
//       >
//         Stay updated with stories, tips, and news about local programs,
//         nonprofits, and services across Chester County.
//       </motion.p>
//       <motion.div variants={item2} className="flex mt-8">
//         <motion.a
//           variants={button1}
//           href="/exploreResources#ExploreResourcesHeader"
//           className="bg-blue-950 flex justify-center items-center py-2 rounded-2xl text-lg px-8 text-white text-center mr-2"
//         >
//           <IoIosSearch className="inline mr-1 text-2xl" />
//           Browse Blogs
//         </motion.a>
//         <motion.a
//           variants={button2}
//           href="/submitBlog"
//           className="border-1 border-gray-500 py-2 rounded-2xl bg-white text-lg px-8 text-black text-center flex items-center justify-center"
//         >
//           <CiSquarePlus className="inline mr-1 text-2xl" />
//           Submit a Story
//         </motion.a>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default BlogHero;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import { FaBookOpen } from "react-icons/fa";

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

const BlogHero = () => {
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
        <FaBookOpen />
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={item}
        className="font-bold text-xl sm:text-2xl text-white mb-4"
      >
        Resource Blogs
      </motion.h1>

      {/* Tagline */}
      <motion.p variants={item} className="text-xl sm:text-3xl text-blue-700">
        Stay updated with stories, tips, and news about local programs,
        nonprofits, and services across Chester County.{" "}
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
          href="/exploreResources#ExploreResourcesHeader"
        >
          <IoIosSearch className="mr-1 text-2xl" />
          Browse Blogs
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
          Submit A Story
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default BlogHero;
