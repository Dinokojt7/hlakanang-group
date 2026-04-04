"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Roll-Up Garage Door",
    price: "R3 200",
    note: "incl. installation",
    badge: null,
    description: "Supply and professional installation of a roll-up garage door with motor.",
    features: [
      "Full supply & installation",
      "DC Blue motor included",
      "Battery back-up ready",
      "Remote controls included",
      "All standard sizes",
    ],
  },
  {
    name: "Sectional Garage Door",
    price: "R4 500",
    note: "incl. installation",
    badge: "Most Popular",
    description: "Sectional garage door with motor, ideal for single and double garages.",
    features: [
      "Full supply & installation",
      "Centurion motor included",
      "Battery back-up standard",
      "2× remote controls",
      "Aluminium, steel or wooden",
    ],
  },
  {
    name: "Gate Motor Package",
    price: "R14 900",
    note: "double Chromadek + motor",
    badge: null,
    description: "Double Chromadek gate with motor and complete professional installation.",
    features: [
      "Double Chromadek gate",
      "Motor & installation",
      "Anti-theft rack kit",
      "Battery back-up",
      "All brands available",
    ],
  },
];

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-charcoal">
      <div className="section-pad mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-red" />
            <span className="text-xs font-semibold tracking-widest uppercase text-red">
              Transparent Pricing
            </span>
            <span className="w-8 h-0.5 bg-red" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white mb-4">
            Affordable Packages
          </h2>
          <p className="text-white/55 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Honest pricing, no surprises. All packages include professional installation — call us for a custom quote tailored to your property.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={card}
              transition={{ duration: 0.5 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                pkg.badge
                  ? "bg-red ring-2 ring-red/60"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-red text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow">
                  <Star size={11} fill="currentColor" />
                  {pkg.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-bold text-lg text-white mb-1">{pkg.name}</h3>
                <p className={`text-xs leading-relaxed ${pkg.badge ? "text-white/70" : "text-white/45"}`}>
                  {pkg.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-white/15">
                <span className="text-4xl font-bold text-white">{pkg.price}</span>
                <span className={`text-xs ml-2 ${pkg.badge ? "text-white/70" : "text-white/45"}`}>
                  {pkg.note}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/80">
                    <Check
                      size={14}
                      className={pkg.badge ? "text-white" : "text-red shrink-0"}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-full text-sm transition-colors ${
                  pkg.badge
                    ? "bg-white text-red hover:bg-white/90"
                    : "border border-white/20 text-white hover:border-white/50"
                }`}
              >
                Get This Package
                <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-white/30 text-xs mt-10">
          Prices are indicative. Contact us for a free on-site assessment tailored to your property.
        </p>
      </div>
    </section>
  );
}
