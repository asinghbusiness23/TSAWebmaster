// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// // Expanded blog data
// const blogs = [
//   {
//     title: "Local Food Assistance Programs You Can Access",
//     excerpt:
//       "Discover local programs that provide food to families and individuals in Chester County. Learn how to access them quickly and efficiently.",
//     date: "Jan 10, 2026",
//     url: "/blogs/food-assistance",
//   },
//   {
//     title: "Volunteer Opportunities in Chester County",
//     excerpt:
//       "Learn how you can get involved with nonprofits and community programs to make a difference in your local community.",
//     date: "Jan 5, 2026",
//     url: "/blogs/volunteer-opportunities",
//   },
//   {
//     title: "How to Suggest a Resource",
//     excerpt:
//       "Step-by-step guide to submitting organizations, programs, and services to Chesco Connect to help grow the community network.",
//     date: "Dec 28, 2025",
//     url: "/blogs/suggest-resource",
//   },
//   {
//     title: "Affordable Healthcare Services in Chester County",
//     excerpt:
//       "Explore free and low-cost clinics, community health centers, and hospital programs that can provide essential care for residents.",
//     date: "Dec 20, 2025",
//     url: "/blogs/affordable-healthcare",
//   },
//   {
//     title: "Supporting Local Arts and Culture",
//     excerpt:
//       "Check out events, classes, and institutions promoting arts, theater, and music in Chester County for all ages.",
//     date: "Dec 15, 2025",
//     url: "/blogs/local-arts-culture",
//   },
//   {
//     title: "Environment & Sustainability Initiatives",
//     excerpt:
//       "Learn about local environmental groups, conservation efforts, and ways you can help protect Chester County’s natural resources.",
//     date: "Dec 10, 2025",
//     url: "/blogs/environment-sustainability",
//   },
//   {
//     title: "Family & Senior Services You Should Know",
//     excerpt:
//       "An overview of senior care, childcare, and family support programs available in Chester County to help your loved ones thrive.",
//     date: "Dec 5, 2025",
//     url: "/blogs/family-senior-services",
//   },
//   {
//     title: "Community Events and Programs to Attend",
//     excerpt:
//       "Stay updated on community gatherings, workshops, and volunteer events happening across Chester County each month.",
//     date: "Dec 1, 2025",
//     url: "/blogs/community-events",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// };

// const Blogs = () => {
//   return (
//     <section className="bg-gray-50 min-h-screen py-20">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-12">
//           Latest Blogs
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {blogs.map((blog, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               initial="hidden"
//               animate="show"
//               transition={{ delay: index * 0.1 }}
//               className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {blog.title}
//               </h3>
//               <p className="text-gray-600 mb-4 flex-1">{blog.excerpt}</p>
//               <p className="text-gray-400 text-sm mb-4">{blog.date}</p>
//               <a
//                 href={blog.url}
//                 className="inline-block mt-auto px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold hover:scale-105 hover:shadow-xl transition-transform duration-200"
//               >
//                 Read More
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blogs;
"use client";
import React from "react";
import { useParams } from "next/navigation";
import { blogs } from "./blogsData";
import { motion } from "framer-motion";



const Blogs = () => {
  return (
    <div className="py-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-800 text-center">Our Blogs</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-3xl shadow-md overflow-hidden">
              {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{blog.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
                <p className="text-gray-700 mb-4">{blog.content.substring(0, 120)}...</p>
                <a
                  href={`/blogComponents/${blog.id}`}
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
  );
};

export default Blogs;
