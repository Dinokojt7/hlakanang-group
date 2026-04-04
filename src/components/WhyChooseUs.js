"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wrench, BatteryCharging, MessageSquare } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "All Major Brands",
    description: "We supply and service every major gate motor and garage door brand — ET, Centurion, DC Blue, and more.",
  },
  {
    icon: Wrench,
    title: "Expert Installations",
    description: "From new installs to repairs and full maintenance — professional workmanship guaranteed every time.",
  },
  {
    icon: BatteryCharging,
    title: "Load Shedding Ready",
    description: "Battery back-up is standard on all motor installations — your access keeps working no matter what.",
  },
  {
    icon: MessageSquare,
    title: "Free Quotations",
    description: "No-obligation on-site quotes, at no cost. Call or WhatsApp and we'll come to you.",
  },
];

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-pad mx-auto max-w-7xl">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-red" />
              <span className="text-xs font-semibold tracking-widest uppercase text-red">
                Our Promise
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-charcoal leading-tight max-w-lg">
              Why Choose Hlakanang Group?
            </h2>
          </div>
          <p className="text-sm text-muted max-w-sm leading-relaxed lg:text-right">
            Trusted by homeowners and businesses across Gauteng for reliable, professional security and automation.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                variants={card}
                transition={{ duration: 0.5 }}
                className="bg-surface rounded-2xl p-7 border border-gray-100 hover:border-red/30 hover:shadow-md transition-all duration-300 group"
              >
                {/* Icon container */}
                <div className="w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center mb-5 group-hover:bg-red/15 transition-colors">
                  <Icon size={22} className="text-red" />
                </div>

                {/* Number badge */}
                <span className="text-xs font-bold text-red/40 mb-2 block">0{i + 1}</span>

                <h3 className="font-bold text-base text-charcoal mb-2 leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {r.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
