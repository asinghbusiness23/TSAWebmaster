"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import { FaHandsHelping } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const item3 = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const item4 = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Offers = () => {
  const [activeOffer, setActiveOffer] = useState(null);

  const offerItems = [
    {
      title: "Explore Resources",
      description:
        "Find programs, events, and support services across Chester County quickly and easily.",
      icon: <IoIosSearch className="text-4xl text-white" />,
      bgColor: "bg-blue-600",
      expanded:
        "Browse a curated directory of programs, events, nonprofits, and essential services available throughout Chester County. Whether you’re looking for food assistance, educational opportunities, healthcare support, or community events, our platform helps you discover the right resources quickly and without confusion.",
    },
    {
      title: "Suggest a Resource",
      description:
        "Help grow the directory by submitting organizations and programs that serve the community.",
      icon: <CiSquarePlus className="text-4xl text-white" />,
      bgColor: "bg-green-600",
      expanded:
        "Know an organization, program, or service that supports the community but isn’t listed yet? Help expand our network by submitting trusted resources. Your contribution ensures more people can find the help, opportunities, and support they need when they need it most.",
    },
    {
      title: "Get Involved",
      description:
        "Volunteer, attend events, or support nonprofits to strengthen our community connections.",
      icon: <FaHandsHelping className="text-4xl text-white" />,
      bgColor: "bg-purple-600",
      expanded:
        "Take an active role in strengthening Chester County by volunteering, attending local events, or supporting nonprofit initiatives. Getting involved not only helps organizations thrive but also builds meaningful connections that make our community stronger and more united.",
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {offerItems.map((item, index) => (
            <motion.div
              key={index}
              className="
                bg-white rounded-3xl shadow-md p-8
                flex flex-col items-center text-center
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-2
              "
              variants={item4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${item.bgColor}`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.description}</p>

              <button
                onClick={() => setActiveOffer(item)}
                className="
                  mt-6 px-6 py-3
                  bg-blue-500 rounded-full
                  text-white font-semibold
                  transition-all duration-200
                  hover:scale-110 hover:shadow-2xl
                  active:scale-105
                "
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {activeOffer && (
          <motion.div
            variants={item3}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: 60 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
      relative w-full max-w-md
      rounded-3xl p-10
      bg-white/90 backdrop-blur-xl
      shadow-[0_20px_60px_rgba(0,0,0,0.25)]
    "
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveOffer(null)}
                className="
        absolute top-4 right-4
        w-9 h-9 rounded-full
        flex items-center justify-center
        text-gray-500 hover:text-gray-800
        hover:bg-gray-200/60
        transition
      "
              >
                ✕
              </button>

              {/* Icon with glow */}
              <div className="relative flex justify-center mb-6">
                <div
                  className={`
          absolute -inset-2 rounded-full blur-xl opacity-40
          ${activeOffer.bgColor}
        `}
                />
                <div
                  className={`
          relative w-20 h-20 rounded-2xl
          flex items-center justify-center
          ${activeOffer.bgColor}
        `}
                >
                  {activeOffer.icon}
                </div>
              </div>

              {/* Content */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-3xl font-bold text-center mb-4 text-gray-900"
              >
                {activeOffer.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-gray-700 text-center leading-relaxed"
              >
                {activeOffer.expanded}
              </motion.p>

              {/* CTA */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={
                  activeOffer.title == "Suggest a Resource"
                    ? "/suggest"
                    : "/exploreResources"
                }
                className="mt-8 mx-auto block w-fit px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semiboldshadow-lg"
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Offers;
