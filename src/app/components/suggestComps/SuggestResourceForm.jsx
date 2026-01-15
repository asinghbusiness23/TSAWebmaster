"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allCategories = [
  "Health and Wellness",
  "Education and Youth",
  "Environment and Sustainability",
  "Art, Culture, and Recreation",
  "Basic Needs and Support",
  "Civic Engagement and Volunteering",
  "Family and Senior Services",
  "Community Events and Programs",
  "Nonprofits and Charitable Organizations",
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const SuggestResourceForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    personName: "",
    email: "",
    phone: "",
    resourceName: "",
    website: "",
    categories: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (category) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Suggested Resource:", formData);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      personName: "",
      email: "",
      phone: "",
      resourceName: "",
      website: "",
      categories: [],
    });
    setSubmitted(false);
  };

  return (
    <section className="py-32 flex justify-center bg-white">
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="p-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl mb-6 font-bold text-center text-black"
              >
                Suggest a New Resource
              </motion.h2>

              {/* Personal Info */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6"
              >
                <input
                  type="text"
                  name="personName"
                  value={formData.personName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>

              {/* Resource Info */}
              <motion.div variants={itemVariants} className="mb-6">
                <input
                  type="text"
                  name="resourceName"
                  value={formData.resourceName}
                  onChange={handleChange}
                  placeholder="Resource Name"
                  required
                  className="w-full border rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Website URL"
                  required
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>

              {/* Categories */}
              <motion.div variants={itemVariants} className="mb-8">
                <p className="mb-3 font-medium text-gray-700">
                  Categories (select all that apply)
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {allCategories.map((cat) => (
                    <motion.label
                      key={cat}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-3 border rounded-xl px-4 py-2 cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={formData.categories.includes(cat)}
                        onChange={() => handleCategoryChange(cat)}
                        className="accent-blue-600"
                      />
                      <span>{cat}</span>
                    </motion.label>
                  ))}
                </div>
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800 transition"
              >
                Submit Resource Suggestion
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="thankyou"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-3xl p-10 shadow-md border text-center"
            >
              <h2 className="text-2xl text-green-600 mb-4">
                Thank you for submitting a suggestion!
              </h2>
              <p className="text-gray-700 mb-8">
                We appreciate you helping strengthen the community. We’ll reach
                out if we need more info.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetForm}
                className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
              >
                Submit Another Suggestion
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SuggestResourceForm;

// "use client";
// import React, { useState } from "react";

// const allCategories = [
//   "Health and Wellness",
//   "Education and Youth",
//   "Environment and Sustainability",
//   "Art, Culture, and Recreation",
//   "Basic Needs and Support",
//   "Civic Engagement and Volunteering",
//   "Family and Senior Services",
//   "Community Events and Programs",
//   "Nonprofits and Charitable Organizations",
// ];

// const SuggestResourceForm = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//     personName: "",
//     email: "",
//     phone: "",
//     resourceName: "",
//     website: "",
//     categories: [],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCategoryChange = (category) => {
//     setFormData((prev) => ({
//       ...prev,
//       categories: prev.categories.includes(category)
//         ? prev.categories.filter((c) => c !== category)
//         : [...prev.categories, category],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Suggested Resource:", formData);

//     setSubmitted(true);
//   };

//   const resetForm = () => {
//     setFormData({
//       personName: "",
//       email: "",
//       phone: "",
//       resourceName: "",
//       website: "",
//       categories: [],
//     });
//     setSubmitted(false);
//   };

//   return (
//     <section className="py-32 flex justify-center bg-white">
//       <div className="w-full">
//         {!submitted ? (
//           /* ================= FORM ================= */
//           <form
//             onSubmit={handleSubmit}
//             className="p-8"
//           >
//             <h2 className="text-3xl mb-6 font-bold text-center text-black">
//               Suggest a New Resource
//             </h2>

//             {/* Personal Info */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
//               <input
//                 type="text"
//                 name="personName"
//                 value={formData.personName}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 required
//                 className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your Email"
//                 required
//                 className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Resource Info */}
//             <div className="mb-6">
//               <input
//                 type="text"
//                 name="resourceName"
//                 value={formData.resourceName}
//                 onChange={handleChange}
//                 placeholder="Resource Name"
//                 required
//                 className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//               />

//               <input
//                 type="url"
//                 name="website"
//                 value={formData.website}
//                 onChange={handleChange}
//                 placeholder="Website URL"
//                 required
//                 className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Categories */}
//             <div className="mb-8">
//               <p className="mb-3 font-medium text-gray-700">
//                 Categories (select all that apply)
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {allCategories.map((cat) => (
//                   <label
//                     key={cat}
//                     className="flex items-center gap-3 border rounded-xl px-4 py-2 cursor-pointer hover:bg-gray-50"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={formData.categories.includes(cat)}
//                       onChange={() => handleCategoryChange(cat)}
//                       className="accent-blue-600"
//                     />
//                     <span>{cat}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800 transition"
//             >
//               Submit Resource Suggestion
//             </button>
//           </form>
//         ) : (
//           /* ================= THANK YOU STATE ================= */
//           <div className="bg-white rounded-3xl p-10 shadow-md border text-center">
//             <h2 className="text-2xl text-green-600 mb-4">
//               Thank you for submitting a suggestion!
//             </h2>
//             <p className="text-gray-700 mb-8">
//               We appreciate you taking the time to help improve our community.
//               We will be in touch soon if we need more information.
//             </p>

//             <button
//               onClick={resetForm}
//               className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
//             >
//               Submit Another Suggestion
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default SuggestResourceForm;
