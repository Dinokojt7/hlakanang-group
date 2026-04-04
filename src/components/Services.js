"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Gate & Garage Automation",
    description: "All brands — ET, Centurion, DC Blue. Battery back-up included.",
    image: "/images/product-centurion-gate-motor.webp",
  },
  {
    title: "Garage Doors",
    description: "Roll-up, sectional, aluminium, steel, aluzinc & wooden doors.",
    image: "/images/hero-wooden-garage-double.webp",
  },
  {
    title: "CCTV & Alarm Systems",
    description: "Box, dome, PTZ & IP cameras. Monitored & standalone alarms.",
    image: "/images/gallery-installation-work.webp",
  },
  {
    title: "Electric Fencing",
    description: "Residential & commercial perimeter fencing, installed right.",
    image: "/images/hero-electric-fence-house.webp",
  },
  {
    title: "Intercoms",
    description: "Entry intercom systems for homes and businesses.",
    image: "/images/gallery-wooden-garage-single.webp",
  },
  {
    title: "Smart WiFi Control",
    description: "Control your gate or garage from your phone, anywhere.",
    image: "/images/hero-double-garage-dark.webp",
  },
];

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

/* Long-tail arrow — wider than lucide ArrowRight */
const LongArrow = ({ className }) => (
  <svg
    width="28"
    height="10"
    viewBox="0 0 28 10"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M0 5H25M21 1L26 5L21 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="section-pad mx-auto max-w-7xl">

        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-red" />
            <span className="text-xs font-semibold tracking-widest uppercase text-red">
              What We Do
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-charcoal leading-tight max-w-md">
              Our Security &amp; Automation Services
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red hover:text-red-dark transition-colors shrink-0"
            >
              Get a free quote
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={card}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
            >
              {/* Background image — 16:9 shows full landscape scene */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
              />

              {/* Base dark overlay — always on for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10" />

              {/* Red overlay — hover only */}
              <div className="absolute inset-0 bg-linear-to-t from-red/85 via-red/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Red left bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-red" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <h3 className="text-white font-bold text-sm sm:text-base leading-snug mb-1">
                  {s.title}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed mb-3 line-clamp-2">
                  {s.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 group-hover:text-white transition-colors"
                >
                  Get a Quote
                  <LongArrow className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
