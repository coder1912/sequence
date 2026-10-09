import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akhil Ajith K C | Business Analyst",
  description:
    "Professional portfolio of Akhil Ajith K C — Business Analyst focused on business requirements, process improvement, and data-driven decisions.",
  keywords: [
    "Akhil Ajith K C",
    "Business Analyst",
    "Requirements Analysis",
    "Data Analytics",
    "MIS Reporting",
    "Financial Modeling",
    "Power BI",
    "SQL",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Akhil Ajith K C" }],
  openGraph: {
    title: "Akhil Ajith K C | Business Analyst",
    description:
      "Business Requirements · Process Improvement · Data-Driven Decisions. Explore portfolio case studies and expertise.",
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
        <Analytics />
      </body>
    </html>
  );
}
