"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaSchool,
  FaHandsHelping,
  FaUserFriends,
} from "react-icons/fa";

const audiences = [
  {
    title: "Residents & Families",
    description:
      "People looking for everyday support such as food assistance, healthcare services, housing help, and family programs.",
    icon: <FaUsers />,
  },
  {
    title: "Students & Youth",
    description:
      "Young people seeking educational resources, enrichment programs, extracurriculars, and youth-focused opportunities.",
    icon: <FaSchool />,
  },
  {
    title: "Nonprofits & Organizations",
    description:
      "Local organizations that want to share their programs, services, and events with the wider Chester County community.",
    icon: <FaHandsHelping />,
  },
  {
    title: "Volunteers & Advocates",
    description:
      "Community members eager to give back, attend events, and support causes that strengthen local connections.",
    icon: <FaUserFriends />,
  },
];

const WhoItsFor = () => {
  return (
    <section className="py-28 bg-white flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Who It’s For
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Chesco Connect is designed for everyone in Chester County. Whether
            you’re searching for help, offering support, or simply looking to
            stay informed, this platform brings people and resources together in
            one place.
          </p>
        </motion.div>

        {/* Audience Rows */}
        <div className="space-y-14">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 border-l-4 border-blue-100 pl-6 py-4 rounded-2xl "
            >
              <div className="text-blue-600 text-3xl mt-1">{item.icon}</div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
