

import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import HowItWorks from "../HomeSection/Work";
import image1 from "../../Media/Medical/General Medicine.png"
import image2 from "../../Media/Medical/Nursing Services.png"
import image3 from "../../Media/Medical/emergengcy.jpg"
import image4 from "../../Media/Medical/Anesthesiology.jpg"
import image5 from "../../Media/Medical/Pediatrics.jpg"
import image6 from "../../Media/Medical/Obstetrics & Gynecology.jpg"

// Map each department tag to its image
const tagImageMap: Record<string, string> = {
  "Nursing Services":image2 ,
  "General Medicine":image1 ,
  "Emergency & Trauma": image3,
   "Anesthesiology":image4, 
   "Pediatrics":image5,
  "Obstetrics & Gynecology":image6 ,
  "Orthopedics": "/images/orthopedics.jpg",
  "Cardiology": "/images/cardiology.jpg",
  "Neurology": "/images/neurology.jpg",
  "Oncology (Cancer Care)": "/images/oncology.jpg",
  "Nephrology": "/images/nephrology.jpg",
  "Gastroenterology": "/images/gastroenterology.jpg",
  "Pulmonology (Chest Medicine)": "/images/pulmonology.jpg",
  "Endocrinology": "/images/endocrinology.jpg",
  "Rheumatology": "/images/rheumatology.jpg",
  "Dermatology": "/images/dermatology.jpg",
  "Psychiatry": "/images/psychiatry.jpg",
  "Urology": "/images/urology.jpg",
  "Ophthalmology (Eye Care)": "/images/ophthalmology.jpg",
  "ENT (Ear, Nose & Throat)": "/images/ent.jpg",
  "Radiology & Imaging": "/images/radiology.jpg",
  "Pathology & Laboratory Medicine": "/images/pathology.jpg",
  "Nuclear Medicine": "/images/nuclear.jpg",
  "Microbiology": "/images/microbiology.jpg",
  "Biochemistry": "/images/biochemistry.jpg",
  "Cardiothoracic Surgery": "/images/cardiothoracic.jpg",
  "Neurosurgery": "/images/neurosurgery.jpg",
  "Plastic & Reconstructive Surgery": "/images/plastic-surgery.jpg",
  "Pediatric Surgery": "/images/pediatric-surgery.jpg",
  "Vascular Surgery": "/images/vascular-surgery.jpg",
  "Laparoscopic Surgery": "/images/laparoscopic.jpg",

  "Physiotherapy & Rehabilitation": "/images/physiotherapy.jpg",
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

const Medical: React.FC = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const fromOurExpertise = location.state?.fromOurExpertise || false;


  const departments = [
    {
      tag: "General Medicine",
      title: "Trusted Physicians for Lifelong Wellness",
      description:
        "Diagnosis and management of acute and chronic adult medical conditions with holistic, patient-centered care.",
      tagColor: "text-blue-600",
    },
    {
      tag: "Nursing Services",
      title: "Professional Nursing Services You Can Trust",
      description:
        "Comprehensive nursing care delivered by trained professionals, ensuring patient comfort, safety, and recovery at every stage.",
      tagColor: "text-green-600",
    },
    {
      tag: "Emergency & Trauma",
      title: "24/7 Critical & Life-Saving Care",
      description:
        "The Emergency & Trauma department provides round-the-clock care for accidents, injuries, and critical illnesses.",
      tagColor: "text-orange-500",
    },
    {
      tag: "Anesthesiology",
      title: "Expert Anesthetic Care",
      description:
        "Providing safe anesthesia and perioperative care for all surgical procedures.",
      tagColor: "text-blue-600",
    },
    {
      tag: "Pediatrics",
      title: "Comprehensive Child Healthcare",
      description:
        "Dedicated care for infants, children, and adolescents to support healthy growth and development.",
      tagColor: "text-green-500",
    },
    {
      tag: "Obstetrics & Gynecology",
      title: "Women’s Health & Maternity Care",
      description:
        "Comprehensive care for pregnancy, childbirth, and women’s reproductive health.",
      tagColor: "text-orange-500",
    },
  ];

  return (
    <section className="bg-gradient-to-br sticky from-slate-50 to-slate-100 py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="w-full mb-16">

          <div className="flex justify-between w-full ">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
              Medical Departments
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
            Explore the full range of our healthcare services and expert
            departments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
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

        <HowItWorks/>
      )}
    </section>
  );
};

export default Medical;


