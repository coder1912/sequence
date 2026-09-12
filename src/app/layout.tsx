import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akhil Ajith K C | Data & Business Analyst",
  description:
    "Professional portfolio of Akhil Ajith K C — Data & Business Analyst combining a computer science and embedded systems engineering foundation with an MBA in Banking & Financial Engineering.",
  keywords: [
    "Akhil Ajith K C",
    "Data Analyst",
    "Business Analyst",
    "Financial Modeling",
    "Power BI",
    "SQL",
    "Python",
    "Embedded Systems",
    "IoT",
    "Portfolio",
  ],
  authors: [{ name: "Akhil Ajith K C" }],
  openGraph: {
    title: "Akhil Ajith K C | Data & Business Analyst",
    description:
      "Engineering foundation. Analytical mindset. Business perspective. Explore featured case studies in banking risk, financial modeling, and embedded telemetry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="bg-[#060a0e] text-neutral-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
