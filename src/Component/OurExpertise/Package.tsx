

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import image1 from "../../Media/Package/Rajasthan.jpg"
import image2 from  "../../Media/Package/Goa.jpg"
import image3 from  "../../Media/Package/Russia.jpg"
import image4 from  "../../Media/Package/Malaysia.png"
import image5 from  "../../Media/Package/Japan.jpg"
import image6 from  "../../Media/Package/Kashmir.jpg"
const tagImageMap: Record<string, string> = {
    "Rajasthan": image1,
    "Goa": image2,
    "Russia":image3 ,
    "Malaysia":image4 ,
    "Japan":image5,
    "Kashmir": image6,
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

const Package: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const fromOurExpertise = location.state?.fromOurExpertise || false;

    const departments = [
        {
            tag: "Rajasthan",
            title: "Royal Rajasthan: A Journey Through Heritage",
            description: "Experience majestic palaces, vibrant culture, desert safaris, and timeless traditions with our expertly crafted Rajasthan tours.",
            tagColor: "text-blue-600",
        },
        {
            tag: "Goa",
            title: "Love, Luxury & Beaches in Goa",
            description:
                "Celebrate your love with serene beaches, candlelight dinners, luxury resorts, and unforgettable sunset moments in Goa.", tagColor: "text-green-600",
        },
        {
            tag: "Kashmir",
            title: "Explore the Beauty of Kashmir",
            description:
                "Snowy peaks, green valleys, and timeless charm—Kashmir awaits your next adventure.",
            tagColor: "text-orange-500",
        },
        {
            tag: "Malaysia",
            title: "Explore Malaysia’s Modern Wonders",
            description:
                "Experience vibrant cities, tropical islands, cultural heritage, and world-class attractions across Malaysia.",
            tagColor: "text-blue-600",
        },
        {
            tag: "Japan",
            title: "Timeless Traditions & Futuristic Cities",
            description:
                "Experience ancient temples, cherry blossoms, bullet trains, and cutting-edge city life across Japan.",
            tagColor: "text-green-500",
        },
        {
            tag: "Russia",
            title: "Explore Russia’s Rich History & Culture",
            description:
                "From Moscow’s Red Square to Saint Petersburg’s royal palaces, experience Russia’s unforgettable charm.",
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

                            Holiday Tour Package

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
                        Experience the world with thoughtfully curated holiday tours. <br />
                        Luxury, adventure, and comfort—perfectly blended for you.
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

export default Package;



