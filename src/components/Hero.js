"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import data from "@/data/site-data.json";

const slides = [
  {
    video: "/videos/hero-vid.mp4",
    label: "Gate & Garage Automation",
    heading: "Secure Your Home,\nAutomate Your Life",
    sub: "Professional installation of gate motors, garage doors & security systems across Gauteng.",
  },
  {
    video: "/videos/hero-vid-2.mp4",
    label: "CCTV · Electric Fencing · Intercoms",
    heading: "Complete Security\nSolutions for Gauteng",
    sub: "All brands. All makes. Installations, repairs & maintenance — with battery back-up for load shedding.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = (idx) => setCurrent(idx);
  const next = () => go((current + 1) % slides.length);
  const back = () => go((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 8000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  return (
    <section className="relative h-[92vh] min-h-145 max-h-230 overflow-hidden bg-charcoal">
      {/* Video layers */}
      {slides.map((s, i) => (
        <AnimatePresence key={i}>
          {i === current && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <video
                src={s.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-linear-to-r from-charcoal/90 via-charcoal/65 to-charcoal/20" />
      <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-charcoal/20" />

     
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center section-pad mx-auto max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Eyebrow label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-0.5 bg-red" />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                {slides[current].label}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 whitespace-pre-line">
              {slides[current].heading}
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-white/75 mb-10 max-w-lg leading-relaxed">
              {slides[current].sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-red hover:bg-red-dark text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
              >
                Get a Free Quote
              </a>
              
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide dots */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                i === current ? "w-10 bg-red" : "w-2.5 bg-white/35"
              }`}
            />
          ))}
        </div>

        {/* Slide prev/next */}
        <div className="absolute right-6 sm:right-10 bottom-8 flex gap-2">
          <button
            onClick={back}
            className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white/10 transition-colors text-lg font-light"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-white/10 transition-colors text-lg font-light"
          >
            ›
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 mb-[-2px] hidden sm:flex flex-col items-center gap-1 text-white/40"
      >
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
