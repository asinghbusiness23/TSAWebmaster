// import React from "react";
// import Image from "next/image";

// const Mission = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-white">
//       <h1 className="text-4xl mb-4 font-bold">Our Mission</h1>
//       <p className="text-center text-xl/8 w-230 mb-6">
//         Chesco Connect is an accessible, modern digital hub designed to connect
//         Chester County residents with essential resources, programs, and support
//         — and most importantly, each other. We believe in building a stronger
//         community through connection, collaboration, and care.
//       </p>
//       <div className="flex justify-around w-full">
//         <Image
//           src="/missionPic1.jpg"
//           width={400}
//           height={300}
//           alt="Mission Image"
//           className="rounded-2xl"
//         ></Image>
//         <Image
//           src="/missionPic2.jpg"
//           width={400}
//           height={300}
//           alt="Mission Image"
//           className="rounded-2xl"
//         ></Image>
//       </div>
//     </div>
//   );
// };

// export default Mission;
// import React from "react";
// import Image from "next/image";

// const Mission = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 md:px-10 py-10">
//       {/* Heading */}
//       <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold text-center">
//         Our Mission
//       </h1>

//       {/* Paragraph */}
//       <p className="text-center text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
//         Chesco Connect is an accessible, modern digital hub designed to connect
//         Chester County residents with essential resources, programs, and support
//         — and most importantly, each other. We believe in building a stronger
//         community through connection, collaboration, and care.
//       </p>

//       {/* Images */}
//       <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-5xl justify-center items-center">
//         <div className="w-full md:w-1/2">
//           <Image
//             src="/missionPic1.jpg"
//             width={600}
//             height={400}
//             alt="Mission Image 1"
//             className="rounded-2xl w-full h-auto object-cover"
//           />
//         </div>
//         <div className="w-full md:w-1/2">
//           <Image
//             src="/missionPic2.jpg"
//             width={600}
//             height={400}
//             alt="Mission Image 2"
//             className="rounded-2xl w-full h-auto object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mission;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // stagger heading, paragraph, and images
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Mission = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-white px-4 md:px-10 py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold text-center"
        variants={itemVariants}
      >
        Our Mission
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="text-center text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
        variants={itemVariants}
      >
        Chesco Connect is an accessible, modern digital hub designed to connect
        Chester County residents with essential resources, programs, and support
        — and most importantly, each other. We believe in building a stronger
        community through connection, collaboration, and care.
      </motion.p>

      {/* Images */}
      <motion.div
        className="flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-5xl justify-center items-center"
        variants={itemVariants}
      >
        <motion.div className="w-full md:w-1/2" variants={itemVariants}>
          <Image
            src="/missionPic1.jpg"
            width={600}
            height={400}
            alt="Mission Image 1"
            className="rounded-2xl w-full h-auto object-cover"
          />
        </motion.div>
        <motion.div className="w-full md:w-1/2" variants={itemVariants}>
          <Image
            src="/missionPic2.jpg"
            width={600}
            height={400}
            alt="Mission Image 2"
            className="rounded-2xl w-full h-auto object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Mission;
