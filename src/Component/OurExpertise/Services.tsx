

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import image1 from "../../Media/Services/Business Visa.jpg"
import image2 from "../../Media/Services/Tourist Visa.png"
import image3 from "../../Media/Services/Work Visa.png"
import image4 from "../../Media/Services/Student Visa.png"
import image5 from "../../Media/Services/Transit Visa.png"
import image6 from "../../Media/Services/Medical  Visa.jpg"


const tagImageMap: Record<string, string> = {
    "Business Visa":image1 ,
    "Tourist Visa":image2,
    "Work Visa":image3 ,
    "Student Visa":image4,
    "Transit Visa":image5,
    "Medical  Visa":image6 ,

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

const Services:React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const fromOurExpertise = location.state?.fromOurExpertise || false;

    const departments = [
        {
            tag: "Business Visa",
            title: " Business Travel Solutions",
            description:
                "Complete Business Visa assistance ensuring smooth documentation, compliance, and timely approvals for international business engagements.",
            tagColor: "text-blue-600",
        },
        {
            tag: "Tourist Visa",
            title: "Explore the World with Ease",
            description:
                "Complete Tourist Visa assistance ensuring smooth documentation, compliance, and hassle-free approvals for international travel.",
            tagColor: "text-green-600",
        },
        {
            tag: "Work Visa",
            title: "Work Abroad with Confidence",
            description:
                "Complete Work Visa assistance helping professionals navigate eligibility, documentation, and approvals for a successful international career.",
            tagColor: "text-orange-500",
        },
        {
            tag: "Student Visa",
            title: "Study Abroad Made Simple",
            description:
                "Complete Student Visa assistance helping students navigate admissions, documentation, and approvals for a successful international education journey.",
            tagColor: "text-blue-600",
        },
        {
            tag: "Transit Visa",
            title: "Seamless Transit Visa Assistance",
            description:
                "Reliable Transit Visa services to ensure smooth layovers with proper documentation, compliance, and hassle-free approvals.",
            tagColor: "text-green-500",
        },
        {
            tag: "Medical  Visa",
            title: "Bringing Families Together for Care & Healing",
            description:
                "Our medical visa services help patients and their loved ones travel safely and smoothly for timely treatment and compassionate care abroad.",
            tagColor: "text-orange-500",
        },
    ];

    return (
        <section className="bg-gradient-to-br sticky from-slate-50 to-slate-100 py-14">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="w-full mb-16">
                    <div className="flex justify-between w-full">
                        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">

                            Visa Services
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
                        Reliable visa assistance services designed to simplify documentation and approval processes for major <br />
                        Asian countries including UAE, Saudi Arabia, Qatar, Malaysia, Singapore, Thailand, and Japan.
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

export default Services
    ;


