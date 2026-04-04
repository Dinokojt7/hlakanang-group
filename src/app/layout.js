import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import data from "@/data/site-data.json";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Hlakanang Group | Gate Automation, Garage Doors & Security",
  description:
    "Hlakanang Group supplies, installs, and maintains gate motors, garage doors, CCTV cameras, electric fencing, and intercom systems across Gauteng. Call +27 61 429 0734 for a free quote.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth h-full`}>
      <body className="font-poppins antialiased min-h-full flex flex-col">
        {children}
        <WhatsAppButton whatsapp={data.business.whatsapp} />
      </body>
    </html>
  );
}
