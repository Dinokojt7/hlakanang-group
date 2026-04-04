"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import data from "@/data/site-data.json";

const highlights = [
  "All major gate motor & garage door brands supplied & serviced",
  "Battery back-up on every motor installation — load shedding ready",
  "Residential & commercial clients across Gauteng",
  "Free on-site quotations, no obligation",
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "Gauteng", label: "Service Area" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-surface">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-lg">
              <Image
                src="/images/hero-double-garage-dark.jpg"
                alt="Hlakanang Group installation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Red accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red" />
              {/* Dark overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-charcoal/60 to-transparent" />
            </div>

            {/* Floating secondary image — desktop only */}
            <div className="absolute -bottom-8 -right-6 w-2/5 aspect-square rounded-xl overflow-hidden border-4 border-surface shadow-xl hidden sm:block">
              <Image
                src="/images/gallery-installation-work.jpg"
                alt="Installation work"
                fill
                sizes="20vw"
                className="object-cover object-center"
              />
            </div>

            {/* Stats pill — floats over main image bottom */}
            <div className="absolute -bottom-5 left-5 right-5 sm:left-6 sm:right-auto bg-charcoal rounded-xl px-5 py-4 flex gap-6 sm:hidden">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center">
                  <span className="text-red font-bold text-lg">{s.value}</span>
                  <span className="text-white/55 text-xs">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mt-6 sm:mt-0"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-red" />
              <span className="text-xs font-semibold tracking-widest uppercase text-red">
                Unity in Diversity
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-5 leading-tight">
              About Hlakanang Group
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-7">
              {data.business.description} Based in Horizon View, Roodepoort, we bring professional-grade
              security and automation to homes and businesses throughout Gauteng — on time, on budget, every time.
            </p>

            {/* Highlights */}
            <ul className="space-y-3.5 mb-9">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-charcoal">
                  <CheckCircle2 size={18} className="text-red shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Stats row — desktop */}
            <div className="hidden sm:flex gap-8 mb-9 pb-9 border-b border-gray-200">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-red">{s.value}</span>
                  <span className="text-xs text-muted mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white font-semibold px-8 py-4 rounded-full transition-colors text-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
