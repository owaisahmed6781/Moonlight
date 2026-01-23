// import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 stickey">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


//         <div className="max-w-md">
//   <h2 className="text-3xl font-bold text-white mb-3">
//     Moonlight<span className="text-yellow-400"> Overseas </span>
//   </h2>

//   <h3 className="text-xl font-semibold  mb-2">
//     Tour & Travel Company
//   </h3>

//   <p className="text-sm text-gray-300 mb-3">
//     Your trusted partner for global travel experiences
//   </p>

//   <p className="text-sm text-gray-400 leading-relaxed">
//     {/* Moonlight Overseas offers complete tour and air travel solutions, designed
//     to make your journey smooth, comfortable, and memorable. Whether you are
//     planning a family vacation, business trip, pilgrimage, or international
//     tour, we take care of every detail from start to finish. */}

//     We have been established popular company with an excellent track record for the best customer satisfaction.
//      We have never compromised on the quality of the services provided to the customers.
//   </p>
// </div>



//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">
//             Contact Us
//           </h3>
//           <ul className="space-y-3 text-sm">
//             <li className="flex items-start gap-3">
//               <FaMapMarkerAlt className="mt-1 text-blue-400" />
//               <span>
//                 H-45/B, Abul Fazal Enclave-1,<br />
//                Jamia Nagar, New Delhi  110025, India
//               </span>
//             </li>
//             <li className="flex items-center gap-3">
//               <FaPhoneAlt className="text-green-400" />
//               +91 8587860420
//             </li>
//             <li className="flex items-center gap-3">
//               <FaEnvelope className="text-yellow-400" />
//            Shail.moonlight@gmail.com
//             </li>
//           </ul>
//         </div>


//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">
//             Follow Us
//           </h3>
//           <div className="flex gap-4">
//             <a className="social-icon bg-blue-600">
//               <FaFacebookF />
//             </a>
//             <a className="social-icon bg-pink-600">
//               <FaInstagram />
//             </a>
//             <a className="social-icon bg-blue-500">
//               <FaLinkedinIn />
//             </a>
//             <a className="social-icon bg-sky-500">
//               <FaTwitter />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
//         © 2022-{new Date().getFullYear()} Moonlight Overseas ...
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaArrowRight,
// } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-slate-950 sticky text-slate-300 font-sans border-t border-slate-900">
//       <div className="max-w-7xl mx-auto px-6 pt-4 pb-8">

//         {/* Top Section: Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">

//           {/* Column 1: Brand & About */}
//           <div className="space-y-6">
//             <div>
//               <h2 className="text-3xl font-extrabold tracking-tight text-white">
//                 Moonlight  <span className="text-slate-500"> Overseas</span>
//               </h2>
//               <span className="text-xs font-semibold tracking-widest text-slate-200 uppercase">
//                 Tour & Travel Company
//               </span>
//             </div>

//             <p className="text-slate-200 text-sm leading-relaxed pr-4">
//               We are an established company with an excellent track record for customer satisfaction. 
//               We never compromise on the quality of services provided to our customers.
//             </p>

//             {/* Social Icons - Modern Style */}
//             <div className="flex gap-3">
//               {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center 
//                     text-slate-400 transition-all duration-300
//                     hover:bg-blue-600 hover:text-white hover:-translate-y-1"
//                 >
//                   <Icon size={14} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h3 className="text-white font-bold text-lg mb-6 ml-2">Company</h3>
//             <ul className="space-y-4 text-sm ">
//               {['About Us', 'Our Expertise', 'Careers', 'Privacy Policy'].map((item) => (
//                 <li key={item}>
//                   <a href="About" className="flex items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors group">
//                     <FaArrowRight className="text-[10px] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Services */}
//           {/* <div className=" ">
//             <h3 className="text-white font-bold text-lg mb-6 ml-4">Services</h3>
//             <ul className="space-y-4 text-sm ">
//               {['Visa Assistance', 'Manpower Recruitment', 'Holiday Packages', 'Air Ticketing', 'Document Attestation',"Hajj & Umrah Packages","Travel Insurance"].map((item) => (
//                 <li key={item}>
//                   <a href="#" className="flex items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors group">
//                     <FaArrowRight className="text-[10px] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div> */}

//           {/* Column 4: Contact Info */}
//           <div>
//             <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
//             <ul className="space-y-6 text-sm">
//               <li className="flex items-start gap-4 group">
//                 <div className="w-10 h-10 rounded-lg bg-slate-900 flex flex-shrink-0 items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
//                   <FaMapMarkerAlt />
//                 </div>
//                 <div className="space-y-1">
//                   <p className="text-white font-medium">Head Office</p>
//                   <p className="text-slate-200 text-xs leading-relaxed">
//                     H-45/B, Abul Fazal Enclave-1,<br />
//                     Jamia Nagar, New Delhi 110025
//                   </p>
//                 </div>
//               </li>

//               <li className="flex items-center gap-4 group">
//                 <div className="w-10 h-10 rounded-lg bg-slate-900 flex flex-shrink-0 items-center justify-center text-green-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
//                   <FaPhoneAlt size={14} />
//                 </div>
//                 <div>
//                   <p className="text-white font-medium">Phone</p>
//                   <p className="text-slate-200 text-xs">+91 8587860420</p>
//                 </div>
//               </li>

//               <li className="flex items-center gap-4 group">
//                 <div className="w-10 h-10 rounded-lg bg-slate-900 flex flex-shrink-0 items-center justify-center text-yellow-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
//                   <FaEnvelope size={14} />
//                 </div>
//                 <div>
//                   <p className="text-white font-medium">Email</p>
//                   <p className="text-slate-200 text-xs break-all">Shail.moonlight@gmail.com</p>
//                 </div>
//               </li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-slate-500 text-center md:text-left">
//             © {new Date().getFullYear()} Moonlight Overseas. All rights reserved.
//           </p>
//           <div className="flex gap-6 text-sm font-medium text-slate-500">
//             <a href="#" className="hover:text-white transition-colors">Privacy</a>
//             <a href="#" className="hover:text-white transition-colors">Terms</a>
//             <a href="#" className="hover:text-white transition-colors">Sitemap</a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import {
  // FaFacebookF,
  // FaInstagram,
  // FaLinkedinIn,
  // FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">
                Moonlight <span className="text-slate-500">Overseas</span>
              </h2>
              <span className="text-xs font-semibold tracking-widest text-slate-200 uppercase">
                Tour & Travel Company
              </span>
            </div>

            <p className="text-slate-200 text-sm leading-relaxed pr-4">
              We are an established company with an excellent track record for customer satisfaction.
              We never compromise on the quality of services provided to our customers.
            </p>

            {/* Social Icons */}
            {/* <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center
                    text-slate-400 transition-all duration-300
                    hover:bg-blue-600 hover:text-white hover:-translate-y-1"
                  >
                    <Icon size={14} />
                  </a>
                )
              )}
            </div> */}
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 ml-2">Company</h3>
            <ul className="space-y-4 text-sm">
              {["About Us", "Our Expertise", "Careers", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="/about"
                      className="flex items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors group"
                    >
                      <FaArrowRight
                        className="text-[10px] opacity-0 -translate-x-2 transition-all duration-300
                        group-hover:opacity-100 group-hover:translate-x-0"
                      />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-6 text-sm">


              <div className="flex flex-wrap gap-6">
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-green-500
                  group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FaPhoneAlt size={14} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-slate-200 text-xs">+91 8587860420</p>
                  </div>

                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-yellow-500
                  group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FaEnvelope size={14} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-slate-200 text-xs break-all">
                      Shail.moonlight@gmail.com
                    </p>
                  </div>
                </li>

              </div>


        
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-blue-500
                  group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-white font-medium">Head Office</p>
                  <p className="text-slate-200 text-xs leading-relaxed">
                    H-45/B, Abul Fazal Enclave-1,<br />
                    Jamia Nagar, New Delhi 110025
                  </p>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col md:flex-row
          justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Moonlight Overseas. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
