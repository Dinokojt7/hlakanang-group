import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import data from "@/data/site-data.json";

const { business, footer } = data;

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const IconWhatsapp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-footer text-white">
      {/* Red top accent */}
      <div className="h-1.5 bg-red" />

      <div className="section-pad mx-auto max-w-7xl pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Dark-bg logo — bg matches footer exactly so it blends in */}
            <Image
              src="/logo-dark.png"
              alt="Hlakanang Group"
              width={160}
              height={60}
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {business.description}
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-red hover:bg-red transition-all duration-200"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-red hover:bg-red transition-all duration-200"
                aria-label="Facebook"
              >
                <IconFacebook />
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-red hover:bg-red transition-all duration-200"
                aria-label="WhatsApp"
              >
                <IconWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm mb-5 tracking-wide text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/50 text-sm hover:text-red transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-5 tracking-wide text-white">Our Services</h4>
            <ul className="space-y-3">
              {["Gate & Garage Automation", "Garage Doors", "CCTV & Alarm Systems", "Electric Fencing", "Intercoms", "Smart WiFi Control"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/50 text-sm hover:text-red transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-5 tracking-wide text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${business.phone}`} className="flex items-start gap-3 text-white/50 hover:text-white transition-colors text-sm">
                  <Phone size={15} className="mt-0.5 shrink-0 text-red" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="flex items-start gap-3 text-white/50 hover:text-white transition-colors text-sm">
                  <Mail size={15} className="mt-0.5 shrink-0 text-red" />
                  {business.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-white/50 text-sm">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-red" />
                  {business.address}
                </span>
              </li>
            </ul>

            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1db954] text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.22)]"
            >
              <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={16} height={16} className="object-contain shrink-0" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="section-pad mx-auto max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {year} {business.name}. All rights reserved.</p>
          <div className="flex gap-5">
            {footer.legal.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-white/60 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
