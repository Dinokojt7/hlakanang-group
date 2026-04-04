"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import data from "@/data/site-data.json";

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const avatarColors = ["bg-red", "bg-navy", "bg-charcoal"];

export default function Testimonials() {
  const reviews = data.testimonials;

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-surface">
      <div className="section-pad mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-red" />
            <span className="text-xs font-semibold tracking-widest uppercase text-red">
              Client Feedback
            </span>
            <span className="w-8 h-0.5 bg-red" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-charcoal mb-3">
            What Our Clients Say
          </h2>
          <p className="text-muted text-sm">Trusted by homeowners and businesses across Gauteng</p>
        </div>

        {/* 3-column card grid */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              variants={card}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-7 flex flex-col border border-gray-100 hover:border-red/20 hover:shadow-md transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="mb-5">
                <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center">
                  <Quote size={18} className="text-red" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={15} className="text-red fill-red" />
                ))}
              </div>

              {/* Headline */}
              <p className="text-xs font-bold tracking-widest text-charcoal uppercase mb-1">
                {r.headline}
              </p>
              <p className="text-xs text-muted mb-4">{r.subheadline}</p>

              {/* Quote */}
              <blockquote className="text-sm text-charcoal leading-relaxed flex-1 italic mb-6">
                "{r.quote}"
              </blockquote>

              {/* Author row */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {r.author[0]}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-charcoal text-sm truncate">{r.author}</p>
                  <p className="text-xs text-muted truncate">{r.role}</p>
                </div>
                <span className="ml-auto text-xs font-semibold text-red/80 border border-red/20 bg-red/5 px-2.5 py-0.5 rounded-full shrink-0">
                  {r.companyType}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
