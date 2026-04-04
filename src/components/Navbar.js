"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/site-data.json";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-navy text-white text-xs sm:text-sm py-2.5 px-5 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <a href={`tel:${data.business.phone}`} className="flex items-center gap-1.5 hover:text-white/80 transition-colors font-medium">
            <Phone size={13} />
            {data.business.phone}
          </a>
          <a href={`mailto:${data.business.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <Mail size={13} />
            {data.business.email}
          </a>
        </div>
        <a
          href={data.business.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] transition-colors px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm"
        >
          <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={13} height={13} className="object-contain" />
          WhatsApp Us
        </a>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled ? "bg-white shadow-md border-gray-200" : "bg-white border-gray-100"
        }`}
      >
        <div className="section-pad mx-auto max-w-7xl flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a href="/" className="shrink-0">
            <Image src="/logo.png" alt="Hlakanang Group" width={150} height={56} className="h-12 w-auto object-contain shrink-0" priority />
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-semibold text-charcoal hover:text-red transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-red group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
          >
            Get Free Quote
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <nav className="flex flex-col px-5 py-5 gap-4">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-semibold text-charcoal hover:text-red transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex justify-center items-center bg-red hover:bg-red-dark text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
                >
                  Get Free Quote
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
