// import React from "react";

// const InDepthMission = () => {
//   return (
//     <section className="px-12 py-48 bg-white">
//       <div className="max-w-7xl mx-auto flex items-center gap-20">
//         {/* Text Content */}
//         <div className="w-1/2">
//           <span className="uppercase tracking-widest text-blue-600 text-sm font-semibold">
//             Our Mission
//           </span>

//           <h1 className="text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
//             Building a More <br /> Connected Community
//           </h1>

//           <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>

//           <p className="text-lg text-gray-700 leading-relaxed">
//             Chesco Connect helps residents of Chester County easily discover
//             local resources, programs, and opportunities all in one place. From
//             food assistance and mental health support to youth programs and
//             community events, essential services are often scattered and
//             difficult to find.
//             <br />
//             <br />
//             Our platform organizes these resources into clear, accessible
//             categories, making it simple for individuals, families, seniors, and
//             community members to find reliable support quickly. By connecting
//             people with the services they need, Chesco Connect strengthens
//             community ties and helps make Chester County a more supportive place
//             for everyone.
//           </p>
//         </div>

//         {/* Visual / Logo */}
//         <div className="w-1/2 flex justify-center">
//           <div className="relative">
//             <div className="absolute inset-0 bg-blue-300 blur-3xl opacity-30 rounded-full"></div>
//             <div className="relative bg-blue-900 w-64 h-64 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-xl">
//               CC
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InDepthMission;

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

// const InDepthMission = () => {
//   return (
//     <section className="px-12 py-48 bg-white">
//       <motion.div
//         className="max-w-7xl mx-auto flex items-center gap-20"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <motion.div className="w-1/2" variants={itemVariants}>
//           <motion.span
//             className="uppercase tracking-widest text-blue-600 text-sm font-semibold"
//             variants={itemVariants}
//           >
//             Our Mission
//           </motion.span>

//           <motion.h1
//             className="text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight"
//             variants={itemVariants}
//           >
//             Building a More <br /> Connected Community
//           </motion.h1>

//           <motion.div
//             className="w-20 h-1 bg-blue-600 rounded-full mb-6"
//             variants={itemVariants}
//           ></motion.div>

//           <motion.p
//             className="text-lg text-gray-700 leading-relaxed"
//             variants={itemVariants}
//           >
//             Chesco Connect helps residents of Chester County easily discover
//             local resources, programs, and opportunities all in one place. From
//             food assistance and mental health support to youth programs and
//             community events, essential services are often scattered and
//             difficult to find.
//             <br />
//             <br />
//             Our platform organizes these resources into clear, accessible
//             categories, making it simple for individuals, families, seniors, and
//             community members to find reliable support quickly. By connecting
//             people with the services they need, Chesco Connect strengthens
//             community ties and helps make Chester County a more supportive place
//             for everyone.
//           </motion.p>
//         </motion.div>
//         {/* Visual / Logo */}
//         <motion.div
//           className="w-1/2 flex justify-center"
//           variants={logoVariants}
//         >
//           <div className="relative">
//             <div className="absolute inset-0 bg-blue-300 blur-3xl opacity-30 rounded-full"></div>
//             <div className="relative bg-blue-900 w-64 h-64 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-xl">
//               CC
//             </div>
//           </div>
//         </motion.div>

//         {/* Text Content */}
//       </motion.div>
//     </section>
//   );
// };

// export default InDepthMission;

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

const InDepthMission = () => {
  return (
    <section className="px-4 sm:px-10 md:px-12 py-20 sm:py-32 lg:py-48 bg-white">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Text */}
        <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
          <motion.span
            className="uppercase tracking-widest text-blue-600 text-sm sm:text-base font-semibold"
            variants={itemVariants}
          >
            Our Mission
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-snug sm:leading-tight"
            variants={itemVariants}
          >
            Building a More <br /> Connected Community
          </motion.h1>

          <motion.div
            className="w-16 sm:w-20 h-1 bg-blue-600 rounded-full mb-6"
            variants={itemVariants}
          ></motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            Chesco Connect helps residents of Chester County easily discover
            local resources, programs, and opportunities all in one place. From
            food assistance and mental health support to youth programs and
            community events, essential services are often scattered and
            difficult to find.
            <br />
            <br />
            Our platform organizes these resources into clear, accessible
            categories, making it simple for individuals, families, seniors, and
            community members to find reliable support quickly. By connecting
            people with the services they need, Chesco Connect strengthens
            community ties and helps make Chester County a more supportive place
            for everyone.
          </motion.p>
        </motion.div>

        {/* Visual / Logo */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0"
          variants={logoVariants}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-300 blur-3xl opacity-30 rounded-full"></div>
            <div className="relative bg-blue-900 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-full flex items-center justify-center text-5xl sm:text-6xl font-bold text-white shadow-xl">
              CC
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InDepthMission;
