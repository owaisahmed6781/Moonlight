


// import React, { useEffect, useState } from "react";
// import image1 from "../assets/doctor.jpg";
// import image2 from"../assets/construction-site-safety-1024x512.jpg"
// import image3 from "../assets/Visa.png"
// import image4 from"../assets/tour-packages-banner.jpg"
// import image5 from "../assets/Embassy-Attestation-1024x1024.png";
// import image6 from "../assets/tawaf_history2-1024x576.jpg"
// import image7 from "../assets/air-ticket-booking.jpg"
// import image8 from "../assets/travel-insurance.jpg"

// import { ChevronLeft, ChevronRight } from "lucide-react";


// const slides = [
//   {
//     image: image1,
//     subtitle: "Healthcare Opportunities ",
//     title: "Healthcare Recruitment ",
//     button: "READ MORE",
//   },
//     {
//     image: image2,
//     subtitle: "Build Your Career Overseas",
//     title: "Manpower Recruitment",
//     button: "GET STARTED",
//   },
//    {
//     image: image3,
//     subtitle: "Expert consultation and end-to-end support for visa",
//     title: "Visa Services",
//     button: "APPLY NOW",
//   },
//       {
//     image: image4,
//     subtitle: "Memorable trips for families, couples, and groups",
//     title: "Holiday Tour Package",
//     button: "APPLY NOW",
//   },
//   {
//     image: image5,
//     subtitle: "Trusted & Fast Processing",
//     title: "Document Attestation",
//     button: "VIEW DETAILS",
//   },
//   {
//     image: image6,
//     subtitle: "Spiritual Journey Made Easy",
//     title: "Hajj & Umrah Package",
//     button: "APPLY NOW",
//   },
  
//     {
//     image: image7,
//     subtitle: "Reliable, Affordable & On-Time Flight Bookings",
//     title: "Air Ticketing",
//     button: "APPLY NOW",
//   },
//     {
//     image: image8,
//     subtitle: "Reliable Coverage for a Safe & Worry-Free Trip",
//     title: "Travel Insurance",
//     button: "APPLY NOW",
//   },
  


// ];

// const HomePage: React.FC = () => {

//     const images = [image1, image2, image3,image5,image6,image7,image8];
//     const [index, setIndex] = useState(0);

//     const prevSlide = () => {
//         setIndex((prev) => (prev - 1 + slides.length) % slides.length);
//     };

//     const nextSlide = () => {
//         setIndex((prev) => (prev + 1) % slides.length);
//     };

//     useEffect(() => {
//         const timer = setInterval(nextSlide, 6000);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div className=" h-screen w-full overflow-hidden mt-0 sticky ">
      
//             <div
//                 className="flex h-full transition-transform duration-700 ease-in-out"
//                 style={{ transform: `translateX(-${index * 100}%)` }}
//             >
//                 {slides.map((slide, i) => (
//                     <div
//                         key={i}
//                         className="relative min-w-full h-full bg-cover bg-center"
//                         style={{ backgroundImage: `url(${slide.image})` }}
//                     >
//                         <div className="absolute inset-0 bg-black/30" />
//                     </div>
//                 ))}
//             </div>

        
//             <div className="absolute inset-0 z-10">
     


//                 <div className="px-12 pt-32 text-white max-w-xl mt-20">
//                     <p className="uppercase tracking-widest text-sm mb-3 mt-38">
//                            {slides[index].subtitle}
//                     </p>

//                     <h1 className="text-4xl font-extrabold font-sans  ">
//                               {slides[index].title}
//                     </h1>

//                     <button  className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/30 transition mt-18">
//                           {slides[index].button}
//                     </button>
//                 </div>
//             </div>

//             <button
//                 onClick={prevSlide}
//                 className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 p-3 rounded-full text-white"
//             >
//                 <ChevronLeft size={28} />
//             </button>

//             <button
//                 onClick={nextSlide}
//                 className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 p-3 rounded-full text-white"
//             >
//                 <ChevronRight size={28} />
//             </button>



//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//                 {images.map((_, i) => (
//                     <button
//                         key={i}
//                         onClick={() => setIndex(i)}
//                         className={`w-3 h-3 rounded-full ${index === i ? "bg-white" : "bg-white/40"
//                             }`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default HomePage;




// import React, { useEffect, useState } from "react";
// import image1 from "../assets/doctor.jpg";
// import image2 from "../assets/construction-site-safety-1024x512.jpg";
// import image3 from "../assets/Visa.png";
// import image4 from "../assets/tour-packages-banner.jpg";
// import image5 from "../assets/Embassy-Attestation-1024x1024.png";
// import image6 from "../assets/tawaf_history2-1024x576.jpg";
// import image7 from "../assets/air-ticket-booking.jpg";
// import image8 from "../assets/travel-insurance.jpg";

// import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// const slides = [
//   {
//     image: image1,
//     subtitle: "Healthcare Opportunities",
//     title: "Healthcare Recruitment",
//     button: "READ MORE",
//   },
//   {
//     image: image2,
//     subtitle: "Build Your Career Overseas",
//     title: "Manpower Recruitment",
//     button: "GET STARTED",
//   },
//   {
//     image: image3,
//     subtitle: "Expert consultation and support",
//     title: "Visa Services",
//     button: "APPLY NOW",
//   },
//   {
//     image: image4,
//     subtitle: "Memorable trips for families & groups",
//     title: "Holiday Tour Package",
//     button: "EXPLORE NOW",
//   },
//   {
//     image: image5,
//     subtitle: "Trusted & Fast Processing",
//     title: "Document Attestation",
//     button: "VIEW DETAILS",
//   },
//   {
//     image: image6,
//     subtitle: "Spiritual Journey Made Easy",
//     title: "Hajj & Umrah Package",
//     button: "BOOK NOW",
//   },
//   {
//     image: image7,
//     subtitle: "Reliable & Affordable Bookings",
//     title: "Air Ticketing",
//     button: "SEARCH FLIGHTS",
//   },
//   {
//     image: image8,
//     subtitle: "Safe & Worry-Free Trips",
//     title: "Travel Insurance",
//     button: "GET QUOTE",
//   },
// ];

// const HomePage: React.FC = () => {
  
//   const [index, setIndex] = useState(0);

//   const prevSlide = () => {
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % slides.length);
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="group  sticky h-screen w-full overflow-hidden bg-slate-900">
      
//       {/* --- SLIDESHOW WRAPPER --- */}
//       <div
//         className="flex h-full transition-transform duration-1000 ease-in-out"
//         style={{ transform: `translateX(-${index * 100}%)` }}
//       >
//         {slides.map((slide, i) => (
//           <div
//             key={i}
//             className="relative min-w-full h-full bg-cover bg-center"
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             {/* Modern Gradient Overlay: darker on left for text readability */}
//             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//           </div>
//         ))}
//       </div>

//       {/* --- CONTENT LAYER --- */}
//       <div className="absolute inset-0 z-10 flex items-center">
//         <div className="container mx-auto px-6 md:px-12">
          
//           {/* Using key={index} forces the text to re-render and animate on slide change */}
//           <div key={index} className="max-w-3xl space-y-6 animate-fade-in-up">
            
//             {/* Subtitle with accent color line */}
//             <div className="flex items-center gap-4 animate-[fadeIn_0.8s_ease-out]">
//               <div className="h-0.5 w-12 bg-cyan-400"></div>
//               <p className="uppercase tracking-[0.2em] text-cyan-400 font-bold text-sm md:text-base">
//                 {slides[index].subtitle}
//               </p>
//             </div>

//             {/* Main Title */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight drop-shadow-lg animate-[slideUp_0.8s_ease-out_0.2s_both]">
//               {slides[index].title.split(" ").map((word, i) => (
//                  <span key={i} className="block">{word}</span>
//               ))}
//             </h1>

//             {/* CTA Button */}
//             <div className="pt-4 animate-[fadeIn_1s_ease-out_0.5s_both]">
//                 <button className="group relative overflow-hidden rounded-full bg-white/10 backdrop-blur-md border border-white/30 px-10 py-5 text-white transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]">
//                     <span className="relative z-10 flex items-center gap-3 font-bold tracking-wider">
//                     {slides[index].button} <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
//                     </span>
//                 </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- NAVIGATION ARROWS --- */}
//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-110 active:scale-95 hidden md:block"
//       >
//         <ChevronLeft size={32} />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black hover:scale-110 active:scale-95 hidden md:block"
//       >
//         <ChevronRight size={32} />
//       </button>

//       {/* --- PAGINATION (Modern Bars) --- */}
//       <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`h-1.5 rounded-full transition-all duration-500 ${
//               index === i 
//                 ? "w-12 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" 
//                 : "w-3 bg-white/30 hover:bg-white/60"
//             }`}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>

//       {/* Tailwind Custom Animation Styles (Inline for simple copy-paste) */}
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;



// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Sparkles } from "lucide-react";

// /* ================= SLIDES ================= */
// const slides = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600",
//     title: "Explore the World with Confidence",
//     subtitle: "Travel & Tours",
//     button: "Discover Now",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600",
//     title: "Visa & Immigration Made Easy",
//     subtitle: "Visa Services",
//     button: "Apply Today",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600",
//     title: "Dream Holidays, Best Prices",
//     subtitle: "Holiday Packages",
//     button: "View Packages",
//   },
// ];

// /* ================= OFFERS ================= */
// const offers = [
//   {
//     title: "Dubai Visa + Flight",
//     price: "₹28,999",
//     tag: "Best Seller",
//     details: ["✔ 14 Days Tourist Visa", "✔ Return Flight", "✔ Airport Assistance"],
//   },
//   {
//     title: "Thailand Visa Free",
//     price: "₹24,999",
//     tag: "Hot Deal",
//     details: ["✔ Visa Free Entry", "✔ 4N / 5D Stay", "✔ Airport Transfers"],
//   },
//   {
//     title: "Maldives Honeymoon",
//     price: "₹52,999",
//     tag: "20% OFF",
//     details: ["✔ 3N Beach Villa", "✔ Candlelight Dinner", "✔ Speed Boat Transfer"],
//   },
//   {
//     title: "Hajj & Umrah 2025",
//     price: "₹1,35,000",
//     tag: "Limited Seats",
//     details: ["✔ Visa Processing", "✔ Hotel Near Haram", "✔ Guided Tour"],
//   },
// ];

// const HomePage: React.FC = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(
//       () => setIndex((prev) => (prev + 1) % slides.length),
//       5000
//     );
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-[65%_35%]">

//       {/* ================= LEFT IMAGE SLIDER ================= */}
//       <div className="relative overflow-hidden">
//         <div
//           className="flex h-full transition-transform duration-1000"
//           style={{ transform: `translateX(-${index * 100}%)` }}
//         >
//           {slides.map((slide, i) => (
//             <div
//               key={i}
//               className="min-w-full h-full bg-cover bg-center relative"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               {/* Overlays */}
//               <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
//             </div>
//           ))}
//         </div>

//         {/* TEXT CONTENT ON IMAGE */}
//         <div className="absolute inset-0 flex items-center px-10 z-10">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-xl space-y-6 text-white"
//           >
//             <p className="uppercase tracking-widest text-cyan-400 font-semibold">
//               {slides[index].subtitle}
//             </p>

//             <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
//               {slides[index].title}
//             </h1>

//             <button className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-600 transition">
//               {slides[index].button}
//               <ArrowRight />
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       {/* ================= RIGHT OFFERS PANEL ================= */}
//       <div className="bg-slate-950 px-8 py-10 hidden lg:block pt-18">
//         <h3 className="text-white text-2xl font-bold mb-8 flex items-center gap-3">
//           <Sparkles className="text-cyan-400" />
//           Special Offers
//         </h3>

//         <div className="space-y-5">
//           {offers.map((offer, i) => (
//             <motion.div
//               key={i}
//               initial={{ x: 40, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: i * 0.15 }}
//               className="bg-white/10 border border-white/20 rounded-xl p-5 hover:border-cyan-400 transition"
//             >
//               <div className="flex justify-between">
//                 <div>
//                   <p className="text-white font-semibold">{offer.title}</p>
//                   <p className="text-2xl font-bold text-cyan-400">
//                     {offer.price}
//                   </p>
//                 </div>
//                 <span className="text-xs font-bold bg-cyan-500 px-3 py-1 rounded-full">
//                   {offer.tag}
//                 </span>
//               </div>

//               <div className="mt-4 text-sm text-white/80 space-y-1">
//                 {offer.details.map((d, idx) => (
//                   <p key={idx}>{d}</p>
//                 ))}
//               </div>

//               <button className="mt-4 w-full rounded-lg bg-cyan-500 py-2 font-semibold hover:bg-cyan-600 transition">
//                 Book Now
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;





// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Sparkles } from "lucide-react";

// /* ================= SLIDES ================= */
// const slides = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600",
//     title: "Explore the World with Confidence",
//     subtitle: "Travel & Tours",
//     button: "Discover Now",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600",
//     title: "Visa & Immigration Made Easy",
//     subtitle: "Visa Services",
//     button: "Apply Today",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600",
//     title: "Dream Holidays, Best Prices",
//     subtitle: "Holiday Packages",
//     button: "View Packages",
//   },
// ];

// /* ================= OFFERS ================= */
// const offers = [
//   {
//     title: "Dubai Visa + Flight",
//     price: "₹28,999",
//     tag: "Best Seller",
//     details: [
//       "✔ 14 Days Tourist Visa",
//       "✔ Return Flight",
//       "✔ Airport Assistance",
//     ],
//   },
//   {
//     title: "Thailand Visa Free",
//     price: "₹24,999",
//     tag: "Hot Deal",
//     details: [
//       "✔ Visa Free Entry",
//       "✔ 4N / 5D Stay",
//       "✔ Airport Transfers",
//     ],
//   },
//   {
//     title: "Maldives Honeymoon",
//     price: "₹52,999",
//     tag: "20% OFF",
//     details: [
//       "✔ 3N Beach Villa",
//       "✔ Candlelight Dinner",
//       "✔ Speed Boat Transfer",
//     ],
//   },
//   {
//     title: "Hajj & Umrah 2026",
//     price: "₹1,35,000",
//     tag: "Limited Seats",
//     details: [
//       "✔ Visa Processing",
//       "✔ Hotel Near Haram",
//       "✔ Guided Tour",
//     ],
//   },
// ];

// const HomePage: React.FC = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[65%_35%]">
//       {/* ================= LEFT IMAGE SLIDER ================= */}
//       <div className="relative h-screen overflow-hidden">
//         <div
//           className="flex h-full transition-transform duration-1000"
//           style={{ transform: `translateX(-${index * 100}%)` }}
//         >
//           {slides.map((slide, i) => (
//             <div
//               key={i}
//               className="min-w-full h-full bg-cover bg-center relative"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
//             </div>
//           ))}
//         </div>

//         {/* TEXT ON IMAGE */}
//         <div className="absolute inset-0 flex items-center px-10 z-10">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-xl space-y-6 text-white"
//           >
//             <p className="uppercase tracking-widest text-cyan-400 font-semibold">
//               {slides[index].subtitle}
//             </p>

//             <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
//               {slides[index].title}
//             </h1>

//             <button className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-600 transition">
//               {slides[index].button}
//               <ArrowRight />
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       {/* ================= RIGHT OFFERS PANEL ================= */}
//       {/* <div className="hidden lg:flex flex-col h-screen pt-16 overflow-y-auto bg-slate-950 px-8 py-10">
//         <h3 className="text-white text-2xl font-bold mb-8 flex items-center gap-3 sticky top-0 bg-slate-950 py-4 z-10">
//           <Sparkles className="text-cyan-400" />
//           Special Offers
//         </h3>

//         <div className="space-y-5 pb-10">
//           {offers.map((offer, i) => (
//             <motion.div
//               key={i}
//               initial={{ x: 40, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: i * 0.15 }}
//               className="bg-white/10 border border-white/20 rounded-xl p-5 hover:border-cyan-400 transition"
//             >
//               <div className="flex justify-between">
//                 <div>
//                   <p className="text-white font-semibold">{offer.title}</p>
//                   <p className="text-2xl font-bold text-cyan-400">
//                     {offer.price}
//                   </p>
//                 </div>
//                 <span className="text-xs font-bold bg-cyan-500 px-3 py-1 rounded-full">
//                   {offer.tag}
//                 </span>
//               </div>

//               <div className="mt-4 text-sm text-white/80 space-y-1">
//                 {offer.details.map((d, idx) => (
//                   <p key={idx}>{d}</p>
//                 ))}
//               </div>

//               <button className="mt-4 w-full rounded-lg bg-cyan-500 py-2 font-semibold hover:bg-cyan-600 transition">
//                 Book Now
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div> */}


//       {/* ================= RIGHT OFFERS PANEL ================= */}
// <div className="hidden lg:flex flex-col h-screen bg-slate-950 px-8 py-10 overflow-hidden pt-18">

//   <h3 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
//     <Sparkles className="text-cyan-400" />
//     Special Offers
//   </h3>

//   {/* AUTO SCROLL CONTAINER */}
//   <div className="relative flex-1 overflow-hidden">

//     <motion.div
//       className="space-y-5"
//       animate={{ y: ["0%", "-50%"] }}
//       transition={{
//         duration: 25,          // speed (increase = slower)
//         ease: "linear",
//         repeat: Infinity,
//       }}
//       whileHover={{ animationPlayState: "paused" }} // pause on hover
//     >
//       {/* DOUBLE LIST FOR INFINITE LOOP */}
//       {[...offers, ...offers].map((offer, i) => (
//         <div
//           key={i}
//           className="bg-white/10 border border-white/20 rounded-xl p-5 hover:border-cyan-400 transition"
//         >
//           <div className="flex justify-between">
//             <div>
//               <p className="text-white font-semibold">{offer.title}</p>
//               <p className="text-2xl font-bold text-cyan-400">
//                 {/* {offer.price} */}  Comming soon
//               </p>
//             </div>
//             <span className="text-xs font-bold bg-cyan-500 px-3 py-1 rounded-full">
//               {offer.tag}
//             </span>
//           </div>

//           <div className="mt-4 text-sm text-white/80 space-y-1">
//             {offer.details.map((d, idx) => (
//               <p key={idx}>{d}</p>
//             ))}
//           </div>

//           <button className="mt-4 w-full rounded-lg bg-cyan-500 py-2 font-semibold hover:bg-cyan-600 transition">
//             Book Now
//           </button>
//         </div>
//       ))}
//     </motion.div>

//   </div>
// </div>

//     </div>
//   );
// };

// export default HomePage;




import LeftImageSlider from "./LeftImageSlider "
import RightOffersPanel from "./RightOffersPanel"

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen mt-28 w-full grid grid-cols-1 lg:grid-cols-[65%_35%]">
      {/* LEFT SLIDER */}
      <LeftImageSlider />

      {/* RIGHT OFFERS PANEL */}
      <RightOffersPanel />
    </div>
  );
};

export default HomePage;
