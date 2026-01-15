"use client";
import React from "react";
import { useParams } from "next/navigation";
import { blogs } from "../blogsData";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";


const BlogPage = () => {
  const params = useParams();
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Blog not found.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-50 min-h-screen py-20 px-4"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-2xl w-full h-64 object-cover mb-6"
          />
        )}

        <h1 className="text-4xl font-bold text-gray-900 mb-2">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-6 font-semibold">
          {blog.date} • by {blog.author}
        </p>

        <div className="text-gray-700 leading-relaxed space-y-4">
          {blog.content.split("\n\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        <a
          href="/blogs"
          className="mt-8 inline-block px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:scale-105 hover:shadow-lg transition-transform duration-200"
        >
          ← Back to Blogs
        </a>
      </div>
    </motion.div>
  );
};

export default BlogPage;
