// "use client";
// import { useState } from "react";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Highlights2 = () => {
//   const featuredCareers = [
//     {
//       name: "Chester County Food Bank",
//       image: "/CCFBimg.jpg",
//       description:
//         "Providing food and essential supplies to families in need in Chester County",
//     },
//     {
//       name: "Downingtown Area School District",
//       image: "/dasdimg.jpg",
//       description:
//         "School district offering educational programs for students in Downingtown",
//     },
//     {
//       name: "Meals on Wheels of Chester County",
//       //   image:
//       //     "https://www.pixalytics.com/wp-content/uploads/2014/01/6920310_ml.jpg",
//       image: "/mowccimg.webp",
//       description:
//         "Delivers meals to seniors and homebound residents in Chester County",
//     },
//   ];

//   var [activeIndex, setActiveIndex] = useState(0);

//   const nextCareer = () => {
//     setActiveIndex((prev) => (activeIndex = prev === 2 ? 2 : prev + 1));
//   };
//   const prevCareer = () => {
//     setActiveIndex((prev) => (activeIndex = prev === 0 ? 0 : prev - 1));
//   };

//   const textVariants = {
//     hidden: {
//       opacity: 0,
//       x: 100,
//       transition: { duration: 0.5, ease: "easeInOut" },
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.5, ease: "easeInOut" },
//     },
//   };

//   const textContainerVariants = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   return (
//     <div className="overflow-x-hidden">
//       {/* <h2>Featured Careers</h2> */}
//       <div className="flex justify-center flex-col w-full h-dvh bg-white">
//         <div className="flex-col">
//           <div className="rounded-2xl h-full grid grid-cols-[50%_50%] grid-rows-[100%] justify-between w-full px-15 py-10 items-center">
//             <motion.div
//               className="flex flex-col"
//               key={activeIndex}
//               variants={textContainerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <motion.h2 variants={textVariants} className="font-bold text-4xl">
//                 {featuredCareers[activeIndex].name}
//               </motion.h2>
//               <motion.p variants={textVariants} className="mt-5 text-xl w-9/10">
//                 {featuredCareers[activeIndex].description}
//               </motion.p>
//               <a
//                 className="text-center py-3 mt-7 border-2 w-35 rounded-4xl hover:bg-gray-200 hover:-translate-y-1 duration-150"
//                 href="/exploreResources"
//               >
//                 Learn More
//               </a>
//             </motion.div>
//             <div className="relative flex-row-reverse flex h-[500px] items-center">
//               <motion.div
//                 className="z-3 w-[250] absolute"
//                 animate={{
//                   opacity: activeIndex === 0 ? 1 : activeIndex == 1 ? 0 : 0,
//                   x:
//                     activeIndex === 0
//                       ? "0px"
//                       : activeIndex === 1
//                       ? "96px"
//                       : "96px",
//                   scale: activeIndex === 0 ? 1 : activeIndex === 1 ? 1.2 : 1.2,
//                 }}
//                 transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
//               >
//                 <Image
//                   src={featuredCareers[0].image}
//                   width="250"
//                   height="400"
//                   alt={featuredCareers[0].name}
//                   className="object-cover rounded-2xl border-10 border-blue-300 w-250"
//                 ></Image>
//               </motion.div>
//               <motion.div
//                 className="z-2 w-[250] absolute"
//                 animate={{
//                   opacity: activeIndex === 0 ? 0.66 : activeIndex == 1 ? 1 : 0,
//                   x:
//                     activeIndex === 0
//                       ? "-96px"
//                       : activeIndex === 1
//                       ? "0px"
//                       : "96px",
//                   scale: activeIndex === 0 ? 0.8 : activeIndex === 1 ? 1 : 1.2,
//                 }}
//                 transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
//               >
//                 <Image
//                   src={featuredCareers[1].image}
//                   width="250"
//                   height="400"
//                   alt={featuredCareers[1].name}
//                   className="object-cover rounded-2xl border-10 border-blue-300 w-[250]"
//                 ></Image>
//               </motion.div>
//               <motion.div
//                 className="z-1 w-[250] absolute"
//                 animate={{
//                   opacity:
//                     activeIndex === 0 ? 0.33 : activeIndex == 1 ? 0.66 : 1,
//                   x:
//                     activeIndex === 0
//                       ? "-192px"
//                       : activeIndex === 1
//                       ? "-96px"
//                       : "0px",
//                   scale: activeIndex === 0 ? 0.6 : activeIndex === 1 ? 0.8 : 1,
//                 }}
//                 transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
//               >
//                 <Image
//                   src={featuredCareers[2].image}
//                   width="250"
//                   height="400"
//                   alt={featuredCareers[2].name}
//                   className="object-cover rounded-2xl border-10 border-blue-300 w-[250]"
//                 ></Image>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <button
//             className={`border-3 w-15 h-15 rounded-full text-center mr-2 ${
//               activeIndex === 0 ? "text-gray-400" : ""
//             }`}
//             onClick={prevCareer}
//           >
//             &#x2190;
//           </button>
//           <button
//             className={`border-3 w-15 h-15 rounded-full text-center ml-2 ${
//               activeIndex === 2 ? "text-gray-400" : ""
//             }`}
//             onClick={nextCareer}
//           >
//             &#x2192;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Highlights2;
// "use client";
// import { useState } from "react";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Highlights2 = () => {
//   const featuredCareers = [
//     {
//       name: "Chester County Food Bank",
//       image: "/CCFBimg.jpg",
//       description:
//         "Providing food and essential supplies to families in need in Chester County",
//     },
//     {
//       name: "Downingtown Area School District",
//       image: "/dasdimg.jpg",
//       description:
//         "School district offering educational programs for students in Downingtown",
//     },
//     {
//       name: "Meals on Wheels of Chester County",
//       image: "/mowccimg.webp",
//       description:
//         "Delivers meals to seniors and homebound residents in Chester County",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   const nextCareer = () => {
//     setActiveIndex((prev) =>
//       prev === featuredCareers.length - 1 ? prev : prev + 1
//     );
//   };
//   const prevCareer = () => {
//     setActiveIndex((prev) => (prev === 0 ? prev : prev - 1));
//   };

//   const textVariants = {
//     hidden: {
//       opacity: 0,
//       x: 50,
//       transition: { duration: 0.5, ease: "easeInOut" },
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.5, ease: "easeInOut" },
//     },
//   };

//   return (
//     <div className="overflow-x-hidden bg-white py-10 px-4 sm:px-10">
//       {/* Text + Carousel */}
//       <div className="flex flex-col md:flex-row items-center md:justify-between max-w-6xl mx-auto gap-10">
//         {/* Text */}
//         <motion.div
//           key={activeIndex}
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: { transition: { staggerChildren: 0.1 } },
//           }}
//           className="flex flex-col flex-1 text-center md:text-left"
//         >
//           <motion.h2
//             variants={textVariants}
//             className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4"
//           >
//             {featuredCareers[activeIndex].name}
//           </motion.h2>
//           <motion.p
//             variants={textVariants}
//             className="text-base sm:text-lg md:text-xl mb-6"
//           >
//             {featuredCareers[activeIndex].description}
//           </motion.p>
//           <a
//             href="/exploreResources"
//             className="inline-block text-center py-2 px-6 border-2 rounded-2xl hover:bg-gray-200 transition-all duration-150"
//           >
//             Learn More
//           </a>
//         </motion.div>

//         {/* Carousel */}
//         <div className="relative flex-1 flex justify-center items-center w-full h-[300px] sm:h-[400px] md:h-[450px]">
//           {featuredCareers.map((career, index) => (
//             <motion.div
//               key={index}
//               className="absolute"
//               animate={{
//                 opacity: activeIndex === index ? 1 : 0,
//                 scale: activeIndex === index ? 1 : 0.8,
//                 x: 0,
//               }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//             >
//               <Image
//                 src={career.image}
//                 width={300}
//                 height={400}
//                 alt={career.name}
//                 className="rounded-2xl object-cover w-[200px] sm:w-[250px] md:w-[300px] h-auto border-4 border-blue-300"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-center mt-8 gap-4">
//         <button
//           className={`border-2 w-12 h-12 rounded-full text-xl ${
//             activeIndex === 0 ? "text-gray-400" : "text-gray-700"
//           }`}
//           onClick={prevCareer}
//         >
//           &#x2190;
//         </button>
//         <button
//           className={`border-2 w-12 h-12 rounded-full text-xl ${
//             activeIndex === featuredCareers.length - 1
//               ? "text-gray-400"
//               : "text-gray-700"
//           }`}
//           onClick={nextCareer}
//         >
//           &#x2192;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Highlights2;

"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Sigma = () => {
  const featuredCareers = [
    {
      name: "Chester County Food Bank",
      image: "/CCFBimg.jpg",
      description:
        "Providing food and essential supplies to families in need in Chester County",
    },
    {
      name: "Downingtown Area School District",
      image: "/dasdimg.jpg",
      description:
        "School district offering educational programs for students in Downingtown",
    },
    {
      name: "Meals on Wheels of Chester County",
      image: "/mowccimg.webp",
      description:
        "Delivers meals to seniors and homebound residents in Chester County",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextCareer = () => {
    setActiveIndex((prev) =>
      prev === featuredCareers.length - 1 ? prev : prev + 1
    );
  };
  const prevCareer = () => {
    setActiveIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="overflow-x-hidden bg-white py-10 px-4 sm:px-6 lg:px-10">
      {/* Text + Carousel */}
      <div className="flex flex-col md:flex-row items-center md:justify-between max-w-6xl mx-auto gap-10">
        {/* Text */}
        <motion.div
          key={activeIndex}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-col flex-1 text-center md:text-left"
        >
          <motion.h2
            variants={textVariants}
            className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4"
          >
            {featuredCareers[activeIndex].name}
          </motion.h2>
          <motion.p
            variants={textVariants}
            className="text-base sm:text-lg md:text-xl mb-6"
          >
            {featuredCareers[activeIndex].description}
          </motion.p>
          <a
            href="/exploreResources"
            className="inline-block text-center py-2 px-6 border-2 rounded-2xl hover:bg-gray-200 transition-all duration-150"
          >
            Learn More
          </a>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex-1 flex justify-center items-center w-full h-[250px] sm:h-[350px] md:h-[450px]">
          {featuredCareers.map((career, index) => (
            <motion.div
              key={index}
              className="absolute"
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                scale: activeIndex === index ? 1 : 0.8,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="relative w-[180px] sm:w-[250px] md:w-[300px] h-[220px] sm:h-[350px] md:h-[450px]">
                <Image
                  src={career.image}
                  alt={career.name}
                  fill
                  className="rounded-2xl object-cover border-4 border-blue-300"
                  priority
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          className={`border-2 w-12 h-12 rounded-full text-xl ${
            activeIndex === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700"
          }`}
          onClick={prevCareer}
          disabled={activeIndex === 0}
        >
          &#x2190;
        </button>
        <button
          className={`border-2 w-12 h-12 rounded-full text-xl ${
            activeIndex === featuredCareers.length - 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700"
          }`}
          onClick={nextCareer}
          disabled={activeIndex === featuredCareers.length - 1}
        >
          &#x2192;
        </button>
      </div>
    </div>
  );
};



const SmallScreenCarousel = ({
  featuredCareers,
  activeIndex,
  nextCareer,
  prevCareer,
}) => {
  const textVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex flex-col items-center gap-10">
      {/* Text */}
      <motion.div
        key={activeIndex}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="flex flex-col text-center"
      >
        <motion.h2
          variants={textVariants}
          className="font-bold text-2xl sm:text-3xl mb-4"
        >
          {featuredCareers[activeIndex].name}
        </motion.h2>
        <motion.p variants={textVariants} className="text-base sm:text-lg mb-6">
          {featuredCareers[activeIndex].description}
        </motion.p>
        <a
          href="/exploreResources"
          className="inline-block py-2 px-6 border-2 rounded-2xl hover:bg-white transition-all duration-150"
        >
          Learn More
        </a>
      </motion.div>

      {/* Carousel */}
      <div className="relative w-full flex justify-center items-center h-[250px] sm:h-[350px]">
        {featuredCareers.map((career, index) => (
          <motion.div
            key={index}
            className="absolute"
            animate={{
              opacity: activeIndex === index ? 1 : 0,
              scale: activeIndex === index ? 1 : 0.8,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative w-[180px] sm:w-[250px] h-[220px] sm:h-[350px]">
              <Image
                src={career.image}
                alt={career.name}
                fill
                className="rounded-2xl object-cover border-4 border-blue-300"
                priority
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-4 gap-4">
        <button
          className={`border-2 w-12 h-12 rounded-full text-xl ${
            activeIndex === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700"
          }`}
          onClick={prevCareer}
          disabled={activeIndex === 0}
        >
          &#x2190;
        </button>
        <button
          className={`border-2 w-12 h-12 rounded-full text-xl ${
            activeIndex === featuredCareers.length - 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700"
          }`}
          onClick={nextCareer}
          disabled={activeIndex === featuredCareers.length - 1}
        >
          &#x2192;
        </button>
      </div>
    </div>
  );
};

const MediumScreenLayout = ({ featuredCareers }) => {
  // Example layout for md+ screens: show all items side by side
  return (
    <div className="flex justify-between gap-6">
      {featuredCareers.map((career, index) => (
        <div key={index} className="flex-1 text-center">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src={career.image}
              alt={career.name}
              fill
              className="rounded-2xl object-cover border-4 border-blue-300"
              priority
            />
          </div>
          <h3 className="font-bold text-xl mt-4">{career.name}</h3>
          <p className="text-base mt-2">{career.description}</p>
          <a
            href="/exploreResources"
            className="inline-block mt-2 py-1 px-4 border-2 rounded-2xl hover:bg-white transition-all duration-150"
          >
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

const Highlights2 = () => {
  const featuredCareers = [
    {
      name: "Chester County Food Bank",
      image: "/CCFBimg.jpg",
      description:
        "Providing food and essential supplies to families in need in Chester County",
    },
    {
      name: "Downingtown Area School District",
      image: "/dasdimg.jpg",
      description:
        "School district offering educational programs for students in Downingtown",
    },
    {
      name: "Meals on Wheels of Chester County",
      image: "/mowccimg.webp",
      description:
        "Delivers meals to seniors and homebound residents in Chester County",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const nextCareer = () =>
    setActiveIndex((prev) =>
      prev === featuredCareers.length - 1 ? prev : prev + 1
    );
  const prevCareer = () =>
    setActiveIndex((prev) => (prev === 0 ? prev : prev - 1));

  return (
    <div className="overflow-x-hidden bg-white py-10 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
      {/* Small screens */}
      <div className="md:hidden">
        <SmallScreenCarousel
          featuredCareers={featuredCareers}
          activeIndex={activeIndex}
          nextCareer={nextCareer}
          prevCareer={prevCareer}
        />
      </div>

      {/* Medium screens and up */}
      <div className="hidden md:block">
        <Sigma />
      </div>
    </div>
  );
};

export default Highlights2;
