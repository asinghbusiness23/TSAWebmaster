// import React from "react";
// import Link from "next/link";

// const Navbar = () => (
//   <nav className="w-full flex items-center justify-between border-b-2 border-gray-200 h-18 text-gray-700 bg-white sticky  top-0 z-5000">
//     <div className="flex items-center">
//       <div className="flex items-center">
//         <div className="bg-blue-50 w-10 h-10 ml-10 flex items-center justify-center mr-2 rounded-xl">
//           <p className="text-xl text-blue-400">CC</p>
//         </div>
//         <h1 className="text-xl ml-0.5 font-bold text-black">
//           Chester County Hub
//         </h1>
//       </div>
//     </div>
//     <div className="flex">
//       <div className="flex text-lg gap-10 mr-10 ml-9">
//         <NavbarItem name="Home" link="/" />
//         <NavbarItem name="Resources" link="/exploreResources" />
//         <NavbarItem name="About" link="/about" />
//         <NavbarItem name="Blog" link="/blogs" />
//         <NavbarItem name="References" link="" />
//       </div>
//       <a className="bg-blue-950 text-white mr-4 py-2 px-6 rounded-2xl relative group flex items-center overflow-hidden duration-150" href = '/suggest'>
//         <span className="block transition-transform duration-300 group-hover:-translate-x-14/10">
//           Submit A Resource
//         </span>
//         <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold translate-x-full transition-transform duration-300 group-hover:translate-x-0">
//           +
//         </span>
//       </a>
//     </div>
//   </nav>
// );

// const NavbarItem = (props) => {
//   const { name, link } = props;
//   return (
//     <Link href={link}>
//       <div className="relative overflow-hidden group flex items-center justify-center backface-hidden ">
//         {" "}
//         <p className="hover:text-black group-hover:-translate-y-full duration-300 py-2 cursor-pointer rounded-xl backface-hidden">
//           {name}
//         </p>
//         <p className="absolute text-black group-hover:-translate-y-0 translate-y-full duration-300 py-2 cursor-pointer rounded-xl backface-hidden">
//           {name}
//         </p>
//       </div>
//     </Link>
//   );
// };

// export default Navbar;
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { HiOutlineMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white border-b-2 border-gray-200 sticky top-0 z-50">
//       <div className="flex items-center justify-between h-18 px-6 md:px-10">
//         {/* Logo */}
//         <div className="flex items-center">
//           <div className="bg-blue-50 w-10 h-10 flex items-center justify-center mr-2 rounded-xl">
//             <p className="text-xl text-blue-400">CC</p>
//           </div>
//           <h1 className="text-xl font-bold text-black">
//             Chester County Hub
//           </h1>
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-10">
//           <div className="flex text-lg gap-10">
//             <NavbarItem name="Home" link="/" />
//             <NavbarItem name="Resources" link="/exploreResources" />
//             <NavbarItem name="About" link="/about" />
//             <NavbarItem name="Blog" link="/blogs" />
//             <NavbarItem name="References" link="" />
//           </div>

//           <a
//             href="/suggest"
//             className="bg-blue-950 text-white py-2 px-6 rounded-2xl relative group flex items-center overflow-hidden duration-150"
//           >
//             <span className="block transition-transform duration-300 group-hover:-translate-x-14/10">
//               Submit A Resource
//             </span>
//             <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold translate-x-full transition-transform duration-300 group-hover:translate-x-0">
//               +
//             </span>
//           </a>
//         </div>

//         {/* Hamburger */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-3xl text-gray-700"
//         >
//           {open ? <HiX /> : <HiOutlineMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden flex flex-col items-center gap-6 py-6 border-t bg-white">
//           <NavbarItem name="Home" link="/" onClick={() => setOpen(false)} />
//           <NavbarItem
//             name="Resources"
//             link="/exploreResources"
//             onClick={() => setOpen(false)}
//           />
//           <NavbarItem name="About" link="/about" onClick={() => setOpen(false)} />
//           <NavbarItem name="Blog" link="/blogs" onClick={() => setOpen(false)} />
//           <NavbarItem
//             name="References"
//             link=""
//             onClick={() => setOpen(false)}
//           />

//           <a
//             href="/suggest"
//             onClick={() => setOpen(false)}
//             className="bg-blue-950 text-white py-2 px-8 rounded-2xl"
//           >
//             Submit A Resource
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// const NavbarItem = ({ name, link, onClick }) => {
//   return (
//     <Link href={link} onClick={onClick}>
//       <div className="relative overflow-hidden group cursor-pointer">
//         <p className="text-lg hover:text-black group-hover:-translate-y-full duration-300 py-2">
//           {name}
//         </p>
//         <p className="absolute inset-0 text-black translate-y-full group-hover:translate-y-0 duration-300 py-2">
//           {name}
//         </p>
//       </div>
//     </Link>
//   );
// };

// export default Navbar;
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

/* =======================
   Animation Variants
======================= */
const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

/* =======================
   Navbar Component
======================= */
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b-2 border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between h-18 px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-blue-50 w-10 h-10 flex items-center justify-center mr-2 rounded-xl">
            <p className="text-xl text-blue-400">CC</p>
          </div>
          <h1 className="text-lg min-[900]:text-xl font-bold text-black">Chester County Hub</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden min-[850]:flex items-center gap-10">
          <div className="flex text-lg gap-10">
            <NavbarItem name="Home" link="/" />
            <NavbarItem name="Resources" link="/exploreResources" />
            <NavbarItem name="About" link="/about" />
            <NavbarItem name="Blog" link="/blogs" />
            <NavbarItem name="References" link="/references" />
          </div>

          <a
            href="/suggest"
            className="bg-blue-950 text-white py-2 px-6 rounded-2xl relative text-center group flex items-center overflow-hidden duration-150 text-sm lg:text-lg"
          >
            <span className="block transition-transform duration-300 group-hover:-translate-x-14/10">
              Submit A Resource
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold translate-x-full transition-transform duration-300 group-hover:translate-x-0">
              +
            </span>
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="min-[850]:hidden text-3xl text-gray-700"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="min-[850]:hidden overflow-hidden border-t bg-white"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              <NavbarItem2 name="Home" link="/" onClick={() => setOpen(false)} />
              <NavbarItem2
                name="Resources"
                link="/exploreResources"
                onClick={() => setOpen(false)}
              />
              <NavbarItem2
                name="About"
                link="/about"
                onClick={() => setOpen(false)}
              />
              <NavbarItem2
                name="Blog"
                link="/blogs"
                onClick={() => setOpen(false)}
              />
              <NavbarItem2
                name="References"
                link=""
                onClick={() => setOpen(false)}
              />

              <a
                href="/suggest"
                onClick={() => setOpen(false)}
                className="bg-blue-950 text-white py-2 px-8 rounded-2xl"
              >
                Submit A Resource
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* =======================
   Navbar Item
======================= */
const NavbarItem = ({ name, link, onClick }) => {
  return (
    <Link href={link} onClick={onClick}>
      <div className="relative overflow-hidden group cursor-pointer">
        <p className=" lg:text-lg text-sm hover:text-black group-hover:-translate-y-full duration-300 py-2">
          {name}
        </p>
        <p className="absolute inset-0 text-black text-lg translate-y-full group-hover:translate-y-0 duration-300 py-2">
          {name}
        </p>
      </div>
    </Link>
  );
};
const NavbarItem2 = ({ name, link, onClick }) => {
  return (
    <Link href={link} onClick={onClick}>
      <div className="relative overflow-hidden group cursor-pointer">
        <p className=" lg:text-lg text-sm duration-300 py-2">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default Navbar;
