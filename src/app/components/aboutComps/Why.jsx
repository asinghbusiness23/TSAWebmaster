// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.2, // stagger text and bar animations
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const logoVariants = {
//   hidden: { opacity: 0, scale: 0.5 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const Why = () => {
//   return (
//     <section className="px-12 py-48 bg-white">
//       <motion.div
//         className="max-w-7xl mx-auto flex items-center gap-20"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         {/* Visual / Logo */}
//         <motion.div
//           className="w-1/2 flex justify-center"
//           variants={logoVariants}
//         >
//           <div className="relative">
//             <img src="/unityImg.jpg" alt="" />
//           </div>
//         </motion.div>

//         {/* Text Content */}
//         <motion.div className="w-1/2 text-right" variants={itemVariants}>
//           <motion.span
//             className="uppercase tracking-widest text-blue-600 text-sm font-semibold"
//             variants={itemVariants}
//           >
//             Why?
//           </motion.span>

//           <motion.h1
//             className="text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight"
//             variants={itemVariants}
//           >
//             Promoting Awareness & <br /> Increasing Accessibility
//           </motion.h1>

//           <motion.div
//             className="w-20 h-1 bg-blue-600 rounded-full mb-6 ml-auto"
//             variants={itemVariants}
//           ></motion.div>

//           <motion.p
//             className="text-lg text-gray-700 leading-relaxed"
//             variants={itemVariants}
//           >
//             Chester County is home to many resources and organizations dedicated
//             to helping those in need and supporting community members’ growth.
//             However, these resources often remain inaccessible simply due to a
//             lack of awareness. ChescoConnect aims to bridge this gap, fostering
//             a stronger community where everyone can come together and reach
//             their full potential.
//           </motion.p>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Why;
"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Why = () => {
  return (
    <section className="px-4 sm:px-10 md:px-12 py-20 sm:py-32 lg:py-48 bg-white">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Visual / Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0"
          variants={logoVariants}
        >
          <div className="relative w-full max-w-md">
            <img
              src="/unityImg.jpg"
              alt="Unity Illustration"
              className="w-full h-auto rounded-2xl object-cover shadow-xl"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2 text-left lg:text-right"
          variants={itemVariants}
        >
          <motion.span
            className="uppercase tracking-widest text-blue-600 text-sm sm:text-base font-semibold"
            variants={itemVariants}
          >
            Why?
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-snug sm:leading-tight"
            variants={itemVariants}
          >
            Promoting Awareness & <br /> Increasing Accessibility
          </motion.h1>

          <motion.div
            className="w-16 sm:w-20 h-1 bg-blue-600 rounded-full mb-6 ml-0 lg:ml-auto"
            variants={itemVariants}
          ></motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            Chester County is home to many resources and organizations dedicated
            to helping those in need and supporting community members’ growth.
            However, these resources often remain inaccessible simply due to a
            lack of awareness. ChescoConnect aims to bridge this gap, fostering
            a stronger community where everyone can come together and reach
            their full potential.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Why;
