


// import { useNavigate, useLocation } from "react-router-dom";
// import React, { useState } from "react";
// import image1 from "../../Media/AirLine/Air-India.jpg"
// import image2 from "../../Media/AirLine/Spicejet.jpg"
// import image3 from "../../Media/AirLine/emirates.jpg"
// import image4 from "../../Media/AirLine/etihad.jpg"
// import image5 from "../../Media/AirLine/fa958172-33c2-4949-ac79-b7d60983f1a0.jpg"
// import image6 from "../../Media/AirLine/indigo.jfif"




// const tagImageMap: Record<string, string> = {
//     "Air India": image1,
//     "SpiceJet": image2,
//     "Saudia Airlines": image5,
//     "Emirates": image3,
//     "Etihad": image4,
//     "IndiGo": image6,
// };

// // Card Props
// type CardProps = {
//     tag: string;
//     title: string;
//     description: string;
//     tagColor?: string;
// };

// const Card: React.FC<CardProps> = ({ tag, title, description, tagColor = "text-blue-600" }) => {
//     const imageUrl = tagImageMap[tag] || "/images/default.jpg";
//    const [loading, setLoading] = useState(true)
//     return (
//         <div
//             className="group bg-white rounded-2xl overflow-hidden
//                  border border-slate-200 shadow-sm hover:shadow-2xl
//                  hover:-translate-y-2 transition-all duration-300"
//         >
//             {/* Image */}
//             <div
//                 className="h-52 bg-cover bg-center relative"
//                 style={{ backgroundImage: `url(${imageUrl})` }}
//             >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//             </div>

//             {/* Content */}
//             <div className="p-6 space-y-4">
//                 <span className={`text-xs font-semibold uppercase ${tagColor}`}>
//                     {tag}
//                 </span>

//                 <h3 className="text-xl font-bold text-slate-900 leading-snug">
//                     {title}
//                 </h3>

//                 <p className="text-slate-600 text-sm leading-relaxed">
//                     {description}
//                 </p>

//                 <a
//                     href="#"
//                     className="inline-flex items-center gap-2
//                      text-blue-600 font-medium text-sm
//                      group-hover:gap-3 transition-all"
//                 >
//                     {/* Read More <span className="text-lg">→</span> */}
//                 </a>
//             </div>
//         </div>
//     );
// };

// const Ticket: React.FC = () => {


//     const navigate = useNavigate();
//     const location = useLocation();
//     const fromOurExpertise = location.state?.fromOurExpertise || false;



//     const departments = [
//         {
//             tag: "Air India",
//             title: "Experience World-Class Flying with Air India",
//             description:
//                 "From smooth check-ins to attentive in-flight service, Air India ensures a memorable travel experience.",
//         },
//         {
//             tag: "SpiceJet",
//             title: "✈️Your Everyday Airline",
//             description:
//                 "Fly smart, fly easy, and enjoy on-time service with SpiceJet.",
//             tagColor: "text-green-600",
//         },
//         {
//             tag: "IndiGo",
//             title: "India’s Most Trusted Airline",
//             description:
//                 "Experience safe, reliable, and convenient flights for every journey.",
//             tagColor: "text-orange-500",
//         },
//         {
//             tag: "Emirates",
//             title: "Fly Better with World-Class Luxury",
//             description:
//                 "Where every flight is a premium experience, connecting you to the world in style.",
//             tagColor: "text-blue-600",
//         },
//         {
//             tag: "Saudia Airlines",
//             title: "Fly the Saudi Way",
//             description:
//                 "Enjoy comfortable journeys, attentive service, and a truly welcoming flying experience with Saudia Airlines.",
//             tagColor: "text-green-500",
//         },
//         {
//             tag: "Etihad",
//             title: "World-Class Luxury in the Skies",
//             description:
//                 "Experience refined comfort, exceptional service, and seamless global travel with Etihad Airways.",
//             tagColor: "text-orange-500",
//         },
//     ];

//     return (
//         <section className="bg-gradient-to-br sticky from-slate-50 to-slate-100 py-14">
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Section Header */}
//                 <div className="w-full mb-16">

//                     <div className="flex justify-between w-full">
//                         <h2 className="text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">


//                             Air Ticket

//                         </h2>
//                         {fromOurExpertise && (
//                             <button
//                                 onClick={() => navigate(-1)}
//                                 className="
//     mb-6 inline-flex items-center gap-2 px-5 py-3 
//     bg-gradient-to-r from-cyan-500 to-indigo-600 
//     text-white font-semibold rounded-xl 
//     shadow-lg hover:shadow-xl 
//     transform hover:-translate-y-1 hover:scale-105 
//     transition-all duration-300 ease-in-out
//   "
//                             >
//                                 ← Go Back
//                             </button>
//                         )}
//                     </div>
//                     <p className="text-slate-600">
//                         Explore the full range of our healthcare services and expert
//                         departments.
//                     </p>
//                 </div>

//                 {/* Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                     {departments.map((dept) => (
//                         <Card
//                             key={dept.tag}
//                             tag={dept.tag}
//                             title={dept.title}
//                             description={dept.description}
//                             tagColor={dept.tagColor}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Ticket;




import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Import images
import image1 from "../../Media/Ticket/Air-India.jpg";
import image2 from "../../Media/Ticket/Spicejet.jpg";
import image3 from "../../Media/Ticket/emirates.jpg";
import image4 from "../../Media/Ticket/etihad.jpg";
import image5 from "../../Media/Ticket/fa958172-33c2-4949-ac79-b7d60983f1a0.jpg";
import image6 from "../../Media/Ticket/indigo.jfif";

// Map each tag to its image
const tagImageMap: Record<string, string> = {
  "Air India": image1,
  "SpiceJet": image2,
  "Saudia Airlines": image5,
  "Emirates": image3,
  "Etihad": image4,
  "IndiGo": image6,
};

// Card Props
type CardProps = {
  tag: string;
  title: string;
  description: string;
  tagColor?: string;
};

const Card: React.FC<CardProps> = ({ tag, title, description, tagColor = "text-blue-600" }) => {
  const imageUrl = tagImageMap[tag] || "/images/default.jpg";
  const [loading, setLoading] = useState(true);

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden
                 border border-slate-200 shadow-sm hover:shadow-2xl
                 hover:-translate-y-2 transition-all duration-300"
    >
      {/* Image */}
      <div className="h-52 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
          </div>
        )}
        <img
          src={imageUrl}
          alt={tag}
          className={`h-52 w-full object-cover ${loading ? "hidden" : "block"}`}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <span className={`text-xs font-semibold uppercase ${tagColor}`}>{tag}</span>
        <h3 className="text-xl font-bold text-slate-900 leading-snug">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Ticket: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromOurExpertise = location.state?.fromOurExpertise || false;

  const departments = [
    {
      tag: "Air India",
      title: "Experience World-Class Flying with Air India",
      description:
        "From smooth check-ins to attentive in-flight service, Air India ensures a memorable travel experience.",
    },
    {
      tag: "SpiceJet",
      title: "✈️Your Everyday Airline",
      description: "Fly smart, fly easy, and enjoy on-time service with SpiceJet.",
      tagColor: "text-green-600",
    },
    {
      tag: "IndiGo",
      title: "India’s Most Trusted Airline",
      description: "Experience safe, reliable, and convenient flights for every journey.",
      tagColor: "text-orange-500",
    },
    {
      tag: "Emirates",
      title: "Fly Better with World-Class Luxury",
      description: "Where every flight is a premium experience, connecting you to the world in style.",
      tagColor: "text-blue-600",
    },
    {
      tag: "Saudia Airlines",
      title: "Fly the Saudi Way",
      description:
        "Enjoy comfortable journeys, attentive service, and a truly welcoming flying experience with Saudia Airlines.",
      tagColor: "text-green-500",
    },
    {
      tag: "Etihad",
      title: "World-Class Luxury in the Skies",
      description:
        "Experience refined comfort, exceptional service, and seamless global travel with Etihad Airways.",
      tagColor: "text-orange-500",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="w-full mb-16">
          <div className="flex justify-between w-full">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
              Air Ticket
            </h2>
            {fromOurExpertise && (
              <button
                onClick={() => navigate(-1)}
                className="mb-6 inline-flex items-center gap-2 px-5 py-3 
                  bg-gradient-to-r from-cyan-500 to-indigo-600 
                  text-white font-semibold rounded-xl 
                  shadow-lg hover:shadow-xl 
                  transform hover:-translate-y-1 hover:scale-105 
                  transition-all duration-300 ease-in-out"
              >
                ← Go Back
              </button>
            )}
          </div>
          <p className="text-slate-600">
            Explore the full range of our airline services and expert departments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {departments.map((dept) => (
            <Card
              key={dept.tag}
              tag={dept.tag}
              title={dept.title}
              description={dept.description}
              tagColor={dept.tagColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ticket;
