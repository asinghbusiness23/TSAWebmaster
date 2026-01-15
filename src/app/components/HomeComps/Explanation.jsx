// import React from "react";

// const Explanation = () => {
//   return (
//     <div className="flex flex-col items-center font-bold justify-center py-40 bg-white">
//       <h3 className="text-4xl mb-4">How it Works</h3>
//       <p className="font-lg text-gray-500 mb-16 font-medium">
//         Finding and accessing community resources has never been easier
//       </p>
//       <div className="flex justify-around gap-30">
//         <Step
//           number={1}
//           name="Search"
//           description="Browse or search our comprehensive directory"
//         />
//         <Step
//           number={2}
//           name="Connect"
//           description="Find resources that match your needs"
//         />{" "}
//         <Step
//           number={3}
//           name="Engage"
//           description="Access services and get involved"
//         />
//       </div>
//     </div>
//   );
// };

// const Step = (props) => {
//   const { number, name, description } = props;
//   return (
//     <div className="flex flex-col items-center w-90">
//       <div className="rounded-full bg-blue-500 flex justify-center items-center w-20 h-20 mb-4 shadow-2xl">
//         <p className="text-5xl text-white">{number}</p>
//       </div>
//       <p className="text-lg/7 font-medium">{name}</p>
//       <p className="text-lg/7 text-center text-gray-500 font-medium">{description}</p>
//     </div>
//   );
// };

// export default Explanation;
// import React from "react";

// const Explanation = () => {
//   return (
//     <div className="flex flex-col items-center justify-center py-20 sm:py-40 px-4 sm:px-10 bg-white">
//       {/* Heading */}
//       <h3 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold text-center">
//         How it Works
//       </h3>
//       <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-12 text-center">
//         Finding and accessing community resources has never been easier
//       </p>

//       {/* Steps */}
//       <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 md:gap-16 w-full max-w-6xl">
//         <Step
//           number={1}
//           name="Search"
//           description="Browse or search our comprehensive directory"
//         />
//         <Step
//           number={2}
//           name="Connect"
//           description="Find resources that match your needs"
//         />
//         <Step
//           number={3}
//           name="Engage"
//           description="Access services and get involved"
//         />
//       </div>
//     </div>
//   );
// };

// const Step = ({ number, name, description }) => {
//   return (
//     <div className="flex flex-col items-center text-center w-full sm:w-56 md:w-64">
//       <div className="rounded-full bg-blue-500 flex justify-center items-center w-16 sm:w-20 h-16 sm:h-20 mb-4 shadow-2xl">
//         <p className="text-3xl sm:text-5xl text-white font-bold">{number}</p>
//       </div>
//       <p className="text-lg sm:text-xl font-medium mb-2">{name}</p>
//       <p className="text-sm sm:text-base text-gray-500">{description}</p>
//     </div>
//   );
// };

// export default Explanation;
"use client";
import React from "react";
import { motion } from "framer-motion";

// Container variant to stagger children
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Individual step animation
const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Explanation = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 sm:py-40 px-4 sm:px-10 bg-white">
      {/* Heading */}
      <motion.h3
        className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        How it Works
      </motion.h3>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-500 mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Finding and accessing community resources has never been easier
      </motion.p>

      {/* Steps */}
      <motion.div
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 md:gap-16 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Step
          number={1}
          name="Search"
          description="Browse or search our comprehensive directory"
        />
        <Step
          number={2}
          name="Connect"
          description="Find resources that match your needs"
        />
        <Step
          number={3}
          name="Engage"
          description="Access services and get involved"
        />
      </motion.div>
    </section>
  );
};

const Step = ({ number, name, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center w-full sm:w-56 md:w-64"
      variants={stepVariants}
    >
      <div className="rounded-full bg-blue-500 flex justify-center items-center w-16 sm:w-20 h-16 sm:h-20 mb-4 shadow-2xl">
        <p className="text-3xl sm:text-5xl text-white font-bold">{number}</p>
      </div>
      <p className="text-lg sm:text-xl font-medium mb-2">{name}</p>
      <p className="text-sm sm:text-base text-gray-500">{description}</p>
    </motion.div>
  );
};

export default Explanation;
