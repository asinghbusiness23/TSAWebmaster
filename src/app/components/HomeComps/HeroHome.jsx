"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";

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

const HeroHome = () => {
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
        CC
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={item}
        className="font-bold text-xl sm:text-2xl text-white mb-4"
      >
        Chesco Connect
      </motion.h1>

      {/* Tagline */}
      <motion.p variants={item} className="text-xl sm:text-3xl text-blue-700">
        Connecting Chester County, One Resource at a Time
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
          Explore Resources
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

export default HeroHome;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { IoIosSearch } from "react-icons/io";
// import { CiSquarePlus } from "react-icons/ci";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 30 },
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

// const HeroHome = () => {
//   return (
//     <motion.div
//       className="
//         h-screen sm:h-screen
//         bg-gradient-to-br from-blue-400 to-blue-200
//         text-center
//         flex justify-center items-center flex-col
//         px-4 sm:px-0
//       "
//       variants={container}
//       initial="hidden"
//       animate="show"
//     >
//       {/* Logo */}
//       <motion.div
//         variants={item}
//         className="
//           bg-blue-800
//           w-30 h-30 sm:w-20 sm:h-20
//           rounded-full
//           flex items-center justify-center
//           text-4xl sm:text-2xl
//           text-white
//           mb-6
//         "
//       >
//         CC
//       </motion.div>

//       {/* Title */}
//       <motion.h1
//         variants={item}
//         className="font-bold text-2xl sm:text-lg text-white mb-4"
//       >
//         Chesco Connect
//       </motion.h1>

//       {/* Tagline */}
//       <motion.p variants={item} className="text-3xl sm:text-xl text-blue-700">
//         Connecting Chester County, One Resource at a Time
//       </motion.p>

//       {/* Buttons */}
//       <motion.div
//         variants={item}
//         className="flex flex-col sm:flex-row mt-8 gap-3 max-sm:gap-4 w-full justify-center items-center"
//       >
//         <motion.a
//           variants={button1}
//           className="
//             bg-blue-950
//             flex items-center justify-center
//             py-2 sm:py-1
//             px-6 sm:px-8
//             rounded-2xl
//             text-lg sm:text-sm
//             text-white
//             max-sm:w-full
//           "
//           href="/exploreResources#ExploreResourcesHeader"
//         >
//           <IoIosSearch className="mr-1 text-2xl" />
//           Explore Resources
//         </motion.a>

//         <motion.a
//           variants={button2}
//           className="
//             border border-gray-500
//             bg-white
//             flex items-center justify-center
//             py-2 sm:py-1
//             px-6 sm:px-8
//             rounded-2xl
//             text-lg sm:text-sm
//             max-sm:w-full
//           "
//           href="/suggest"
//         >
//           <CiSquarePlus className="mr-1 text-2xl" />
//           Suggest a Resource
//         </motion.a>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default HeroHome;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
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

// const HeroHome = () => {
//   return (
//     <motion.div
//       className="h-screen bg-gradient-to-br from-blue-400 to-blue-200 text-center flex justify-center items-center flex-col"
//       variants={container}
//       initial="hidden"
//       animate="show"
//     >
//       <motion.div
//         variants={item}
//         className="bg-blue-800 w-30 h-30 rounded-full flex items-center justify-center text-4xl text-white mb-6"
//       >
//         CC
//       </motion.div>

//       <motion.h1 variants={item} className="font-bold text-2xl text-white mb-4">
//         Chesco Connect
//       </motion.h1>

//       <motion.p variants={item} className="text-3xl text-blue-700">
//         Connecting Chester County, One Resource at a Time
//       </motion.p>

//       <motion.div className="flex mt-8 gap-3" variants={item2}>
//         <motion.a
//           className="bg-blue-950 flex items-center py-2 px-8 rounded-2xl text-lg text-white"
//           href="/exploreResources#ExploreResourcesHeader"
//           variants={button1}
//         >
//           <IoIosSearch className="mr-1 text-2xl" />
//           Explore Resources
//         </motion.a>

//         <motion.a
//           className="border border-gray-500 py-2 px-8 rounded-2xl bg-white text-lg text-black flex items-center"
//           variants={button2}
//           href="/suggest"
//         >
//           <CiSquarePlus className="mr-1 text-2xl" />
//           Suggest a Resource
//         </motion.a>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default HeroHome;
