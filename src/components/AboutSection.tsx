"use client";

import React from "react";
import { PROFILE } from "@/data/profile";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-20 py-16 md:py-24 px-6 sm:px-10 md:px-14 max-w-6xl mx-auto w-full border-b border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Label */}
        <div className="lg:col-span-4">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
            POSITIONING
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Engineering foundation. Analytical mindset. Business perspective.
          </h2>
        </div>

        {/* Narrative Paragraphs */}
        <div className="lg:col-span-8 space-y-5 text-neutral-300 text-sm sm:text-base font-normal leading-relaxed">
          <p className="text-lg sm:text-xl font-semibold text-white">
            I turn data into business decisions.
          </p>

          <p>
            I’m a Data &amp; Business Analyst focused on transforming complex business problems and raw data into actionable insights, dashboards, financial models, and strategic solutions. With a foundation in Computer Science &amp; Engineering and a completed MBA in Banking &amp; Financial Engineering, majoring in Financial Engineering with minors in Business Analytics and Digital Marketing, I bring a strong analytical and technical perspective to business decision-making.
          </p>

          <p className="text-white font-medium">
            My core focus is Business &amp; Data Analytics, complemented by a strong interest in Finance Analytics, Financial Modelling, and Banking &amp; Risk Analytics.
          </p>
        </div>
      </div>
    </section>
  );
}
