"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaMapMarkedAlt,
  FaBalanceScale,
  FaUsers,
} from "react-icons/fa";

const values = [
  {
    title: "Community First",
    description:
      "Every decision we make is guided by the real needs of people who live, work, and grow in Chester County.",
    icon: <FaUsers />,
  },
  {
    title: "Accessibility",
    description:
      "Information should be easy to find, easy to understand, and available to everyone without barriers.",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Trust & Transparency",
    description:
      "We prioritize accuracy, clarity, and honesty so users can rely on the resources they discover.",
    icon: <FaBalanceScale />,
  },
  {
    title: "Collaboration",
    description:
      "Strong communities are built together. We believe in partnerships with nonprofits, volunteers, and residents.",
    icon: <FaHandsHelping />,
  },
];

const Values = () => {
  return (
    <section className="py-28 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className= "mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Values</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Chesco Connect is built on principles that put people first. These
            values guide how we design, curate, and grow this platform.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 items-start"
            >
              <div className="text-blue-600 text-3xl mt-1">{value.icon}</div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
