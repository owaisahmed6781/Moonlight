

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HowItWorks from "../HomeSection/Work";


// Import images
import image1 from "../../Media/Recruitment/Construction-Workforce.jpg";
import image2 from "../../Media/Recruitment/Hospitality & Hotel Staff.png";;
import image3 from "../../Media/Recruitment/Security & Facility Management.png";;
import image4 from "../../Media/Recruitment/Skilled & Unskilled Workers.png";;
import image5 from "../../Media/Recruitment/Technical & Non-Technical Staff.png";;
import image6 from "../../Media/Recruitment/Oil & Gas Workforce.png";;

// Map each department tag to its image
const tagImageMap: Record<string, string> = {
  "Construction Workforce":image1,
  "Hospitality & Hotel Staff":image2 ,
  "Security & Facility Management": image3,
  "Skilled & Unskilled Workers":image4 ,
  "Technical & Non-Technical Staff":image5 ,
  "Oil & Gas Workforce":image6 ,


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

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden
                 border border-slate-200 shadow-sm hover:shadow-2xl
                 hover:-translate-y-2 transition-all duration-300"
    >
      {/* Image */}
      <div
        className="h-52 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <span className={`text-xs font-semibold uppercase ${tagColor}`}>
          {tag}
        </span>

        <h3 className="text-xl font-bold text-slate-900 leading-snug">
          {title}
        </h3>

        <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
          {description}
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2
                     text-blue-600 font-medium text-sm
                     group-hover:gap-3 transition-all"
        >
          Read More <span className="text-lg">→</span>
        </a>
      </div>
    </div>
  );
};


const Recruitment: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromOurExpertise = location.state?.fromOurExpertise || false;
  const departments = [
    {
      tag: "Construction Workforce",
      title: "Skilled Professionals Powering Every Build",
      description:
        "Providing skilled and reliable construction professionals, including engineers, supervisors, technicians, and laborers to meet project demands efficiently and safely.",
      tagColor: "text-blue-600",
    },
    {
      tag: "Hospitality & Hotel Staff",
      title: "Reliable Hospitality & Hotel Staffing Solutions",
      description:
        "Providing well-trained hospitality and hotel staff to ensure exceptional guest experiences and service excellence.",
      tagColor: "text-green-600",
    },
    {
      tag: "Security & Facility Management",
      title: "24/7 Security & Facility Management Solutions",
      description:
        "End-to-end security and facility management solutions for safe and well-maintained environments.",
      tagColor: "text-orange-500",
    },
    {
      tag: "Technical & Non-Technical Staff",
      title: "Empowering Businesses with Diverse Talent",
      description:
        "Providing qualified technical and non-technical staff to support operations, administration, and specialized business functions across industries.",
      tagColor: "text-blue-600",
    },
    {
      tag: "Oil & Gas Workforce",
      title: "Expert Oil & Gas Workforce You Can Rely On",
      description:
        "Providing certified and experienced oil and gas professionals for upstream, midstream, and downstream operations with a strong focus on safety and compliance.",
      tagColor: "text-green-500",
    },
    {
      tag: "Skilled & Unskilled Workers",
      title: "Workforce Support for Every Industry",
      description:
        "Providing skilled and unskilled workers to support construction, manufacturing, logistics, and operational needs across multiple industries.",
      tagColor: "text-orange-500",
    },
  ];

  return (
    <section className="bg-gradient-to-br sticky from-slate-50 to-slate-100 py-14">
      <div className="max-w-7xl mx-auto px-6">

        <div className="w-full mb-16  ">

          <div className="flex justify-between w-full">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
              Manpower Recruitment
            </h2>
            {fromOurExpertise && (
              <button
                onClick={() => navigate(-1)}
                className="
    mb-6 inline-flex items-center gap-2 px-5 py-3 
    bg-gradient-to-r from-cyan-500 to-indigo-600 
    text-white font-semibold rounded-xl 
    shadow-lg hover:shadow-xl 
    transform hover:-translate-y-1 hover:scale-105 
    transition-all duration-300 ease-in-out
  "
              >
                ← Go Back
              </button>
            )}
          </div>
          <p className="text-slate-600">
            Explore our comprehensive manpower recruitment solutions, <br /> connecting skilled professionals with businesses across multiple industries.
          </p>


        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10   mb-10">
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

      {fromOurExpertise && (
        <HowItWorks />
      )}

    </section>
  );
};

export default Recruitment



