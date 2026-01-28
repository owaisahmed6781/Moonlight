import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


import image1 from "../../Media/Offer/Dubai(UAE).jpg"
import image2 from "../../Media/Offer/Thailand.jpg"
import image3 from "../../Media/Offer/Bali.jpg"
import image4 from "../../Media/Offer/Singapore.png"
import image5 from "../../Media/Offer/Maldives-Couples-45.jpg"
import image6 from "../../Media/Offer/Switzerland.png"

const destinations = [
  {
    name: "Dubai",
    price: "₹28,999",
    tag: "Best Seller",
    image: image1,
  },
  {
    name: "Thailand",
    price: "₹24,999",
    tag: "Hot Deal",
    image: image2,
  },
  {
    name: "Bali",
    price: "₹39,999",
    tag: "Trending",
    image: image3,
  },
  {
    name: "Singapore",
    price: "₹45,999",
    tag: "City Life",
    image: image4,
  },
  {
    name: "Maldives",
    price: "₹55,999",
    tag: "Honeymoon",
    image: image5,
  },
  {
    name: "Switzerland",
    price: "₹95,999",
    tag: "Premium",
    image: image6,
  },
];

/* ================= DESTINATION CARD ================= */
const DestinationCard = ({ name, price, tag, image }: any) => {
  const tagColor =
    tag === "Best Seller"
      ? "from-amber-500 to-orange-600"
      : tag === "Visa Free"
      ? "from-emerald-500 to-teal-600"
      : tag === "Trending"
      ? "from-purple-500 to-pink-600"
      : "from-blue-500 to-indigo-600";

  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="group relative h-[400px] overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      {/* Tag */}
      <span
        className={`absolute top-6 left-6 px-5 py-2 bg-gradient-to-r ${tagColor} text-white text-xs font-bold rounded-full shadow-lg`}
      >
        {tag}
      </span>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-4xl font-extrabold text-white mb-2">
              {name}
            </h3>
            <p className="text-2xl font-bold text-white">
              {price}{" "}
              <span className="text-lg font-normal text-white/70">
                onwards
              </span>
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-gradient-to-br group-hover:from-slate-900 group-hover:to-slate-800 group-hover:text-white transition-all"
          >
            <ArrowUpRight className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/* ================= TRENDING DESTINATIONS ================= */
const TrendingDestinations = () => {
  return (
    <section className="relative py-24 pt-8 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 ">
        <h2
        className="text-4xl py-10  md:text-6xl text-center font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
          Trending Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-10 ">
          {destinations.map((d) => (
            <DestinationCard key={d.name} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;

