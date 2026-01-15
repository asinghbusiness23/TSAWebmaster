'use client'
import React from "react";
import BlogHero from "../components/blogComponents/BlogHero";
import Navbar from "../components/LayoutComps/Navbar";
import Footer from "../components/LayoutComps/Footer";
import { blogs } from "./blogsData";
import "bootstrap-icons/font/bootstrap-icons.css";


const page = () => {
  return (
    <div>
      <Navbar />
      <BlogHero />
      <div className="py-20 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-gray-800 text-center">
            Our Blogs
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-3xl shadow-md overflow-hidden"
              >
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">
                    {blog.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
                  <p className="text-gray-700 mb-4">
                    {blog.content.substring(0, 120)}...
                  </p>
                  <a
                    href={`/blogs/${blog.id}`}
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
