// import React from "react";

// const Footer = () => {
//   return (
//     <div className="flex justify-around bg-blue-950 h-85 py-10 px-5">
//       <div className="flex flex-col w-80 items-baseline">
//         <div className="flex items-center mb-4">
//           <div className="bg-blue-50 w-10 h-10 flex items-center justify-center mr-2 rounded-full">
//             <p className="text-xl text-blue-400">CC</p>
//           </div>
//           <h2 className="text-white">Chesco Connect</h2>
//         </div>
//         <p className="text-sm text-gray-200 mb-4">
//           Connecting Chester County residents with essential resources,
//           programs, and support.
//         </p>
//         <div className="flex gap-4">
//           <i className="bi bi-twitter-x bg-gray-400 p-2 rounded-full w-10 h-10 text-lg flex justify-center items-center"></i>
//           <i className="bi bi-instagram bg-gray-400 p-2 rounded-full text-lg flex justify-center items-center w-10 h-10"></i>
//           <i className="bi bi-facebook bg-gray-400 p-2 rounded-full text-lg flex justify-center items-center w-10 h-10"></i>
//         </div>
//       </div>
//       <div className="flex flex-col w-80 gap-2">
//         <h2 className="text-white mb-4">Quick Links</h2>
//         <p className="text-gray-200 font-semibold">
//           <span className="duration-100 hover:scale-110 inline-block transition-transform hover:skew-y-2 hover:skew-x-10">
//             Home
//           </span>
//         </p>
//         <p className="text-gray-200 font-semibold">
//           <span className="duration-100 hover:scale-110 inline-block transition-transform hover:skew-y-2 hover:skew-x-10">
//             Browse Resources
//           </span>
//         </p>
//         <p className="text-gray-200 font-semibold">
//           <span className="duration-100 hover:scale-110 inline-block transition-transform hover:skew-y-2 hover:skew-x-10">
//             Blog & News
//           </span>
//         </p>{" "}
//         <p className="text-gray-200 font-semibold">
//           <span className="duration-100 hover:scale-110 inline-block transition-transform hover:skew-y-2 hover:skew-x-10">
//             About Us
//           </span>
//         </p>{" "}
//         <p className="text-gray-200 font-semibold">
//           <span className="duration-100 hover:scale-110 inline-block transition-transform hover:skew-y-2 hover:skew-x-10">
//             Testimonials
//           </span>
//         </p>{" "}
//       </div>
//       <div className="flex flex-col w-80 gap-2">
//         <h2 className="text-white mb-4">Resources</h2>
//         <a className="text-gray-200 font-semibold" href='/suggest'>
//           <span className="duration-100 hover:scale-110 inline-block transition-transform hover:skew-y-2 hover:skew-x-10">
//             Add a Resource
//           </span>
//         </a>{" "}
//         <p className="text-gray-200 font-semibold">
//           <span className="duration-100 hover:scale-110 inline-block transition-transform hover:skew-y-2 hover:skew-x-10">
//             Quick Reference
//           </span>
//         </p>{" "}
//         <a className="text-gray-200 font-semibold" href="/#impact">
//           <span className="duration-100 hover:scale-110 inline-block transition-transform hover:skew-y-2 hover:skew-x-10">
//             Impact Dashboard
//           </span>
//         </a>{" "}
//         <p className="text-gray-200 font-semibold">
//           <span className="duration-100 hover:scale-110 inline-block transition-transform hover:skew-y-2 hover:skew-x-10">
//             Contact Us
//           </span>
//         </p>{" "}
//       </div>
//       <div className="flex flex-col w-80 gap-3">
//         <h2 className="mb-4 text-white">Contact</h2>
//         <p className="text-gray-200">
//           <i className="bi bi-geo-alt text-gray-200 mr-2"></i>Chester County, PA
//         </p>
//         <p className="text-gray-200">
//           <i className="bi bi-envelope text-gray-200 mr-2"></i>{" "}
//           info@chescoconnect.com
//         </p>
//         <p className="text-gray-200">
//           <i className="bi bi-telephone text-gray-200 mr-2"></i> XXX-XXX-XXXX
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

const links = ["/", "/exploreResources", "/blogs", "/about", "/references"];
import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-950 py-10 px-5 sm:px-10">
      <div className="flex flex-col md:flex-row flex-wrap justify-around gap-10 max-w-7xl mx-auto">
        {/* Logo & About */}
        <div className="flex flex-col items-start w-full sm:w-80">
          <div className="flex items-center mb-4">
            <div className="bg-blue-50 w-10 h-10 flex items-center justify-center mr-2 rounded-full">
              <p className="text-xl text-blue-400">CC</p>
            </div>
            <h2 className="text-white text-lg sm:text-xl font-bold">
              Chesco Connect
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-200 mb-4">
            Connecting Chester County residents with essential resources,
            programs, and support.
          </p>
          <div className="flex gap-4">
            <i className="bi bi-twitter-x bg-gray-400 p-2 rounded-full w-10 h-10 text-lg flex justify-center items-center"></i>
            <i className="bi bi-instagram bg-gray-400 p-2 rounded-full w-10 h-10 text-lg flex justify-center items-center"></i>
            <i className="bi bi-facebook bg-gray-400 p-2 rounded-full w-10 h-10 text-lg flex justify-center items-center"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col w-full sm:w-56 gap-2">
          <h2 className="text-white mb-4 text-lg sm:text-xl font-semibold">
            Quick Links
          </h2>
          {[
            "Home",
            "Browse Resources",
            "Blog & News",
            "About Us",
            "References",
          ].map((link, idx) => (
            <a
              key={idx}
              className="text-gray-200 font-semibold"
              href={links[idx]}
            >
              <span className="duration-100 hover:scale-110 inline-block transition-transform hover:skew-y-2 hover:skew-x-10 cursor-pointer">
                {link}
              </span>
            </a>
          ))}
        </div>

        {/* Resources */}
        <div className="flex flex-col w-full sm:w-56 gap-2">
          <h2 className="text-white mb-4 text-lg sm:text-xl font-semibold">
            Resources
          </h2>
          <a href="/suggest" className="text-gray-200 font-semibold">
            <span className="duration-100 hover:scale-110 inline-block transition-transform hover:skew-y-2 hover:skew-x-10 cursor-pointer">
              Add a Resource
            </span>
          </a>
          <p className="text-gray-200 font-semibold">
            <span className="duration-100 hover:scale-110 inline-block transition-transform hover:skew-y-2 hover:skew-x-10 cursor-pointer">
              Quick Reference
            </span>
          </p>
          <a href="/#impact" className="text-gray-200 font-semibold">
            <span className="duration-100 hover:scale-110 inline-block transition-transform hover:skew-y-2 hover:skew-x-10 cursor-pointer">
              Impact Dashboard
            </span>
          </a>
        </div>

        {/* Contact */}
        <div className="flex flex-col w-full sm:w-56 gap-2">
          <h2 className="text-white mb-4 text-lg sm:text-xl font-semibold">
            Contact
          </h2>
          <p className="text-gray-200 flex items-center gap-2">
            <i className="bi bi-geo-alt"></i>Chester County, PA
          </p>
          <p className="text-gray-200 flex items-center gap-2">
            <i className="bi bi-envelope"></i>info@chescoconnect.com
          </p>
          <p className="text-gray-200 flex items-center gap-2">
            <i className="bi bi-telephone"></i>XXX-XXX-XXXX
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
