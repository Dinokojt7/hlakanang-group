"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const tabs = [
  {
    label: "Gate Motors",
    image: "/images/product-centurion-gate-motor.jpg",
    eyebrow: "All Brands & Types",
    heading: "Sliding & Swing Gate Automation",
    description:
      "We supply, install, and repair all major gate motor brands for both sliding and swing gates. Every installation includes battery back-up — so your gate works even during load shedding.",
    features: [
      "ET 500 & ET Turbo range",
      "Centurion D5 & D10 motors",
      "DC Blue Advanced",
      "Anti-theft rack kits included",
      "Battery back-up standard",
      "All makes serviced & repaired",
    ],
    cta: "Get a Motor Quote",
  },
  {
    label: "Garage Doors",
    image: "/images/hero-wooden-garage-double.jpg",
    eyebrow: "All Makes & Materials",
    heading: "Garage Doors at Affordable Prices",
    description:
      "From roll-up to sectional, aluminium to solid wood — we install, repair and maintain all types of garage doors for single and double garages. Professional finish, every time.",
    features: [
      "Roll-up garage doors",
      "Sectional panel doors",
      "Aluminium & steel doors",
      "Wooden & aluzinc doors",
      "Single & double widths",
      "Motorisation available",
    ],
    cta: "Get a Door Quote",
  },
  {
    label: "CCTV & Alarms",
    image: "/images/gallery-installation-work.jpg",
    eyebrow: "Full Security Packages",
    heading: "CCTV Cameras & Alarm Systems",
    description:
      "Protect your property with professional-grade CCTV cameras and alarm systems. We install box, dome, PTZ and IP cameras alongside monitored and standalone alarm systems.",
    features: [
      "Box & bullet cameras",
      "Dome & PTZ cameras",
      "IP & day/night cameras",
      "Wide dynamic range cameras",
      "Monitored alarm systems",
      "Standalone alarm systems",
    ],
    cta: "Get a Security Quote",
  },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="section-pad mx-auto max-w-7xl">

        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-red" />
            <span className="text-xs font-semibold tracking-widest uppercase text-red">
              Featured
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Explore Our Range
          </h2>
        </div>

        {/* Tab bar — scrollable on mobile */}
        <div className="overflow-x-auto pb-1 mb-10 -mx-5 px-5 sm:mx-0 sm:px-0">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-200 gap-1 min-w-max">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  active === i
                    ? "bg-red text-white shadow-sm"
                    : "text-muted hover:text-charcoal"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-center"
          >
            {/* Image — 16:9 ratio shows full landscape scene without heavy crop */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md">
              <Image
                src={tabs[active].image}
                alt={tabs[active].heading}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red" />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/30 to-transparent" />
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-0.5 bg-red" />
                <span className="text-xs font-semibold tracking-widest uppercase text-red">
                  {tabs[active].eyebrow}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4 leading-tight">
                {tabs[active].heading}
              </h3>
              <p className="text-sm sm:text-base text-muted mb-7 leading-relaxed">
                {tabs[active].description}
              </p>

              {/* Feature list */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-9">
                {tabs[active].features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-charcoal">
                    <Check size={15} className="text-red shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white font-semibold px-8 py-4 rounded-full transition-colors text-sm"
              >
                {tabs[active].cta}
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
