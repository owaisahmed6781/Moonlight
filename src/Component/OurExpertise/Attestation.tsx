

// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import image1 from "../../Media/Attestation/Dubai Embassy.png"
// import image2 from "../../Media/Attestation/Saudi embassy,.png"
// import image3 from "../../Media/Attestation/Qatar Embassy.png"
// import image4 from "../../Media/Attestation/Kuwait Embassy.png"
// import image5 from "../../Media/Attestation/Bahrain Embassy.png"
// import image6 from "../../Media/Attestation/MEA.png"
// const tagImageMap: Record<string, string> = {
//     "Dubai embassy": image1,
//     "Saudi embassy": image2,
//     "Qatar embassy": image3,
//     "Kuwait embassy": image4,
//     "Bahrain embassy": image5,
//     "MEA/apostille": image6,

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

//                 <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
//                     {description}
//                 </p>

//                 <a
//                     href="#"
//                     className="inline-flex items-center gap-2
//                      text-blue-600 font-medium text-sm
//                      group-hover:gap-3 transition-all"
//                 >
//                     Read More <span className="text-lg">→</span>
//                 </a>
//             </div>
//         </div>
//     );
// };

// const Attestation: React.FC = () => {

//     const navigate = useNavigate();
//     const location = useLocation();
//     const fromOurExpertise = location.state?.fromOurExpertise || false;


//     const departments = [
//         {
//             tag: "Dubai embassy",
//             title: "Dubai Embassy Attestation Services",
//             description:
//                 "End-to-end document attestation services for Dubai, ensuring legal compliance for employment, education, and residency purposes.",
//             tagColor: "text-blue-600",
//         },
//         {
//             tag: "Saudi embassy",
//             title: "Trusted Saudi Embassy Documentation Support",
//             description:
//                 "Expert handling of Saudi embassy attestation with accuracy, compliance, and timely processing.",
//             tagColor: "text-green-600",
//         },
//         {
//             tag: "Qatar embassy",
//             title: "Fast Qatar Embassy Attestation",
//             description:
//                 "Secure attestation of educational, personal, and commercial documents for Qatar employment and residency.",
//             tagColor: "text-orange-500",
//         },
//         {
//             tag: "Kuwait embassy",
//             title: "Kuwait Embassy Attestation Services",
//             description:
//                 "Expert handling of Kuwait embassy attestation with accuracy, transparency, and timely processing.",
//             tagColor: "text-blue-600",
//         },
//         {
//             tag: "Bahrain embassy",
//             title: "Trusted Bahrain Embassy Documentation Support",
//             description:
//                 "Secure attestation of educational, personal, and commercial documents for Bahrain employment and residency.",
//             tagColor: "text-green-500",
//         },
//         {
//             tag: "MEA/apostille",
//             title: "MEA Apostille & Attestation Services",
//             description:
//                 "Fast and secure apostille services from the Ministry of External Affairs for global acceptance.",
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
//                             Document Attestation
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

// export default Attestation;



//  import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import image1 from "../../Media/Attestation/Dubai Embassy.png"
// import image2 from "../../Media/Attestation/Saudi embassy,.png"
// import image3 from "../../Media/Attestation/Qatar Embassy.png"
// import image4 from "../../Media/Attestation/Kuwait Embassy.png"
// import image5 from "../../Media/Attestation/Bahrain Embassy.png"
// import image6 from "../../Media/Attestation/MEA.png"

// const tagImageMap: Record<string, string> = {
//     "General Medicine": image1,
//     "General Surgery": image2,
//     "Emergency & Trauma": image3,
//     "Anesthesiology": image4,
//     "Pediatrics": image5,
//     "Obstetrics & Gynecology": image6,
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

//     // Helper: Determine the hover border color based on the tag color text
//     const getHoverBorderColor = (textColor: string) => {
//         if (textColor.includes("green-600")) return "hover:border-green-600";
//         if (textColor.includes("green-500")) return "hover:border-green-500";
//         if (textColor.includes("orange")) return "hover:border-orange-500";
//         if (textColor.includes("red")) return "hover:border-red-600";
//         // Default
//         return "hover:border-blue-600";
//     };

//     const hoverBorderClass = getHoverBorderColor(tagColor);

//     return (
//         <div
//             className={`group bg-white rounded-2xl overflow-hidden
//                  border-2 border-slate-100 shadow-sm
//                  ${hoverBorderClass}
//                  hover:shadow-2xl hover:-translate-y-2
//                  transition-all duration-300`}
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

//                 <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
//                     {description}
//                 </p>

//                 <a
//                     href="#"
//                     className="inline-flex items-center gap-2
//                      text-blue-600 font-medium text-sm
//                      group-hover:gap-3 transition-all"
//                 >
//                     Read More <span className="text-lg">→</span>
//                 </a>
//             </div>
//         </div>
//     );
// };

// const Attestation: React.FC = () => {

//     const navigate = useNavigate();
//     const location = useLocation();
//     const fromOurExpertise = location.state?.fromOurExpertise || false;

//     const departments = [
//         {
//             tag: "General Medicine",
//             title: "Trusted Physicians for Lifelong Wellness",
//             description: "Diagnosis and management of acute and chronic adult medical conditions with holistic, patient-centered care.",
//             tagColor: "text-blue-600",
//         },
//         {
//             tag: "General Surgery",
//             title: "Safe, Precise & Patient-Focused Surgery",
//             description: "Surgical management of abdominal, soft tissue, and emergency conditions with expert care.",
//             tagColor: "text-green-600",
//         },
//         {
//             tag: "Emergency & Trauma",
//             title: "24/7 Critical & Life-Saving Care",
//             description: "The Emergency & Trauma department provides round-the-clock care for accidents, injuries, and critical illnesses.",
//             tagColor: "text-orange-500",
//         },
//         {
//             tag: "Anesthesiology",
//             title: "Expert Anesthetic Care",
//             description: "Providing safe anesthesia and perioperative care for all surgical procedures.",
//             tagColor: "text-blue-600",
//         },
//         {
//             tag: "Pediatrics",
//             title: "Comprehensive Child Healthcare",
//             description: "Dedicated care for infants, children, and adolescents to support healthy growth and development.",
//             tagColor: "text-green-500",
//         },
//         {
//             tag: "Obstetrics & Gynecology",
//             title: "Women’s Health & Maternity Care",
//             description: "Comprehensive care for pregnancy, childbirth, and women’s reproductive health.",
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
//                             Document Attestation
//                         </h2>

//                         {fromOurExpertise && (
//                             <button
//                                 onClick={() => navigate(-1)}
//                                 className="mb-6 inline-flex items-center gap-2 px-5 py-3
//                                 bg-gradient-to-r from-cyan-500 to-indigo-600
//                                 text-white font-semibold rounded-xl
//                                 shadow-lg hover:shadow-xl
//                                 transform hover:-translate-y-1 hover:scale-105
//                                 transition-all duration-300 ease-in-out"
//                             >
//                                 ← Go Back
//                             </button>
//                         )}
//                     </div>
//                     <p className="text-slate-600">
//                         Explore the full range of our healthcare services and expert departments.
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

// export default Attestation;








import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import image1 from "../../Media/Attestation/Dubai Embassy.png";
import image2 from "../../Media/Attestation/Saudi embassy,.png";
import image3 from "../../Media/Attestation/Qatar Embassy.png";
import image4 from "../../Media/Attestation/Kuwait Embassy.png";
import image5 from "../../Media/Attestation/Bahrain Embassy.png";
import image6 from "../../Media/Attestation/MEA.png";

/* ---------------- IMAGE MAP ---------------- */
const tagImageMap: Record<string, string> = {
    "Dubai Embassy": image1,
    "Saudi Embassy": image2,
    "Kuwait Embassy": image4,
    "Qatar Embassy": image3,
    "Bahrain Embassy": image5,
    "MEA and apostille": image6,
};

/* ---------------- CARD COMPONENT ---------------- */
type CardProps = {
  tag: string;
  title: string;
  description: string;
  tagColor?: string;
  onReadMore: () => void;
};

const Card: React.FC<CardProps> = ({
  tag,
  title,
  description,
  tagColor = "text-blue-600",
  onReadMore,
}) => {
  const imageUrl = tagImageMap[tag];

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden
      border-2 border-slate-100 shadow-sm
       hover:shadow-2xl hover:-translate-y-2
      transition-all duration-300  cursor-pointer"
        onClick={onReadMore}
    >
      {/* Image */}
      <div
        className="h-52 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 ">
        <span className={`text-xs font-semibold uppercase ${tagColor}`}>
          {tag}
        </span>

        <h3 className="text-xl font-bold text-slate-900 leading-snug">
          {title}
        </h3>

        <p className="text-slate-600 text-sm line-clamp-2">
          {description}
        </p>

        <button
          onClick={onReadMore}
          className="inline-flex items-center gap-2
          text-blue-600 font-medium text-sm
          group-hover:gap-3 transition-all cursor-pointer"
        >
          Read More <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

/* ---------------- MAIN PAGE ---------------- */
const Attestation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromOurExpertise = location.state?.fromOurExpertise || false;

  const [selectedDept, setSelectedDept] = useState<any>(null);


    const departments = [
        {
            tag: "Dubai Embassy",
            title: "Dubai Embassy Attestation Services",
            description:
                "End-to-end document attestation services for Dubai, ensuring legal compliance.",
            tagColor: "text-blue-600",
        },
        {
            tag: "Saudi Embassy",
            title: "Saudi Embassy Attestation",
            description:
                "Accurate and compliant Saudi embassy documentation support.",
            tagColor: "text-green-600",
        },
        {
            tag: "Kuwait Embassy",
            title: "Kuwait Embassy Attestation",
            description:
                "Professional Kuwait embassy documentation handling.",
            tagColor: "text-blue-600",
        },
        {
            tag: "Qatar Embassy",
            title: "Qatar Embassy Attestation",
            description:
                "Fast and secure document attestation for Qatar employment.",
            tagColor: "text-orange-500",
        },

        {
            tag: "Bahrain Embassy",
            title: "Bahrain Embassy Attestation",
            description:
                "Trusted Bahrain embassy document attestation services.",
            tagColor: "text-green-500",
        },
        {
            tag: "MEA and apostille",
            title: "MEA and Apostille Services",
            description:
                "MEA and apostille attestation for international use.",
            tagColor: "text-orange-500",
        },
    ];


    return (
        <section className="bg-gradient-to-br from-slate-50 to-slate-100  py-4">
            <div className="max-w-7xl mx-auto px-6">


                <div className="mb-16">

                    <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                        Document Attestation
                    </h2>
                    <div className="w-full flex gap-2  justify-end">
                        {fromOurExpertise && (
                            <button
                                onClick={() => navigate(-1)}
                                className="px-6 py-2 bg-slate-600 text-white rounded-xl  "
                            >
                                Back
                            </button>
                        )}
                    </div>

                    <p className="text-slate-600 mt-2 text-center">
                        Fast, secure and reliable document attestation services.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {departments.map((dept) => (
                        <Card
                            key={dept.tag}
                            {...dept}
                            onReadMore={() => setSelectedDept(dept)}
                        />
                    ))}
                </div>
            </div>

            {/* ---------------- MODAL ---------------- */}
            {selectedDept && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setSelectedDept(null)}>
                    <div className="bg-white max-w-xl w-full mx-4 rounded-3xl shadow-2xl p-8 relative animate-fadeIn">

                        {/* Close */}
                        <button
                            onClick={() => setSelectedDept(null)}
                            className="absolute top-4 right-4 cursor-pointer text-red-400 hover:text-red-700 text-xl"
                        >
                            ✕
                        </button>

                        {/* Image */}
                        <div
                            className="h-56 rounded-2xl bg-cover bg-center mb-6"
                            style={{
                                backgroundImage: `url(${tagImageMap[selectedDept.tag]})`,
                            }}
                        />

                        <span className={`text-sm font-semibold ${selectedDept.tagColor}`}>
                            {selectedDept.tag}
                        </span>

                        <h3 className="text-2xl font-bold mt-2">
                            {selectedDept.title}
                        </h3>

                        <p className="text-slate-600 mt-4 leading-relaxed">
                            {selectedDept.description}
                        </p>

                        <div className="mt-6 text-right">
                            {/* <button
                onClick={() => setSelectedDept(null)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600
                text-white font-semibold hover:shadow-lg transition"
              >
                Close
              </button> */}
                        </div>
                    </div>
                </div>
      )}
    </section>
  );
};

export default Attestation;







