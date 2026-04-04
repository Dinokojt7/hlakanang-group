"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import data from "@/data/site-data.json";

function AccordionItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-sm sm:text-base text-charcoal">
          {faq.question}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
          isOpen ? "bg-red border-red text-white" : "border-gray-200 text-muted"
        }`}>
          {isOpen ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted leading-relaxed pb-5 pr-10">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left — heading */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-0.5 bg-red" />
                <span className="text-xs font-semibold tracking-widest uppercase text-red">
                  Common Questions
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-5 leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-8">
                Can't find your answer? Call or WhatsApp us — we're always happy to help.
              </p>
              <a
                href={data.business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm"
              >
                Ask on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-3 bg-surface rounded-2xl px-6 sm:px-8 py-2 border border-gray-100"
          >
            {data.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
