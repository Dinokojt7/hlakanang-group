"use client";

import Image from "next/image";

export default function WhatsAppButton({ whatsapp }) {
  const handleClick = () => {
    window.open(whatsapp, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
        className="bg-[#25D366] text-white px-5 py-3 rounded-full cursor-pointer shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.22)] transition-shadow duration-200 flex items-center gap-3"
      >
        <div className="w-5 h-5 relative shrink-0">
          <Image
            src="/images/whatsapp-icon.png"
            alt="WhatsApp"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
        <span className="text-sm font-semibold">WhatsApp Us</span>
      </button>
    </div>
  );
}
