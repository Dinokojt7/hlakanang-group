import { Poppins } from "next/font/google";
import "./globals.css";
import data from "@/data/site-data.json";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.hlakananggroup.co.za"),
  title: {
    default: "Hlakanang Group | Gate Automation, Garage Doors & Security — Gauteng",
    template: "%s | Hlakanang Group",
  },
  description:
    "Hlakanang Group supplies, installs, and maintains gate motors, garage doors, CCTV cameras, electric fencing, and intercom systems across Gauteng. Call +27 61 429 0734 for a free quote.",
  keywords: [
    "gate motor installation Gauteng",
    "garage door installation Roodepoort",
    "CCTV camera installation Gauteng",
    "electric fencing Gauteng",
    "intercom installation",
    "Centurion gate motor",
    "Hlakanang Group",
    "security installation Gauteng",
  ],
  authors: [{ name: "Hlakanang Group" }],
  creator: "Hlakanang Group",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.hlakananggroup.co.za",
    siteName: "Hlakanang Group",
    title: "Hlakanang Group | Gate Automation, Garage Doors & Security",
    description:
      "Professional gate motors, garage doors, CCTV, electric fencing & intercom installations across Gauteng. Free on-site quotes.",
    images: [
      {
        url: "/images/hero-electric-fence-house.webp",
        width: 1200,
        height: 630,
        alt: "Hlakanang Group — Security & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hlakanang Group | Gate Automation & Security — Gauteng",
    description:
      "Professional gate motors, garage doors, CCTV, electric fencing & intercom installations across Gauteng.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth h-full`}>
      <body className="font-poppins antialiased min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
