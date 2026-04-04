"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import data from "@/data/site-data.json";

export default function CTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-electric-fence-house.webp')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/82" />

      {/* Red top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-red" />
      {/* Red bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red/40" />

      {/* Content */}
      <div className="relative z-10 section-pad mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-red" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/60">
              No Obligation · Free On-Site Assessment
            </span>
            <span className="w-8 h-0.5 bg-red" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Need a Free Estimate?
          </h2>
          <p className="text-white/65 text-sm sm:text-base max-w-xl mx-auto mb-11 leading-relaxed">
            We offer free, no-obligation quotes for all our services across Gauteng. Call, WhatsApp or send us a message — we'll come to you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-red hover:bg-red-dark text-white font-semibold px-9 py-4 rounded-full transition-colors text-sm"
            >
              <MessageCircle size={17} />
              Contact Us
            </a>
            <a
              href={`tel:${data.business.phone}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-9 py-4 rounded-full transition-all text-sm"
            >
              <Phone size={17} />
              {data.business.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
