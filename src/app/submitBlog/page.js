"use client";
import React, { useState } from "react";
import Navbar from "../components/LayoutComps/Navbar";
import Footer from "../components/LayoutComps/Footer";
import { motion } from "framer-motion";

const page = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-24 px-4"
      >
        <div className="bg-white p-10">
          {!submitted ? (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Submit a Blog
              </h1>
              <p className="text-gray-600 text-center mb-10">
                Have a story, resource, or insight that could help the Chester
                County community? Share it with us below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your blog title"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Blog Content
                  </label>
                  <textarea
                    required
                    rows={8}
                    placeholder="Write your blog content here..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Relevant Category
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a category</option>
                    <option>Health and Wellness</option>
                    <option>Education and Youth</option>
                    <option>Basic Needs and Support</option>
                    <option>Community Engagement</option>
                    <option>Environment and Sustainability</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-4 bg-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200"
                >
                  Submit Blog
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-16 h-screen">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You for Your Submission!
              </h2>
              <p className="text-gray-600 mb-8">
                We’ve received your blog and will review it shortly. If approved,
                it will be published on Chesco Connect.
              </p>
              <a
                href="/blogs"
                className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200"
              >
                Back to Blogs
              </a>
            </div>
          )}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default page;
