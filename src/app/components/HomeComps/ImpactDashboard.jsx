"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaHandsHelping,
  FaSchool,
  FaCalendarAlt,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    label: "People Served",
    value: 12000,
    icon: <FaUsers className="text-4xl text-white" />,
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    label: "Volunteers Engaged",
    value: 850,
    icon: <FaHandsHelping className="text-4xl text-white" />,
    bgColor: "bg-green-500",
  },
  {
    id: 3,
    label: "Resources Available",
    value: 96,
    icon: <FaSchool className="text-4xl text-white" />,
    bgColor: "bg-purple-500",
  },
  {
    id: 4,
    label: "Suggestions Received",
    value: 20,
    icon: <FaCalendarAlt className="text-4xl text-white" />,
    bgColor: "bg-yellow-500",
  },
];

const ImpactDashboard = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((count, idx) => {
          const target = stats[idx].value;
          if (count < target) {
            return Math.min(count + Math.ceil(target / 100), target);
          }
          return count;
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white" id="impact">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center"
            >
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full mb-4 ${stat.bgColor}`}
              >
                {stat.icon}
              </div>
              <p className="text-4xl font-bold text-gray-800 mb-2">
                {counters[index].toLocaleString()}
              </p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;
