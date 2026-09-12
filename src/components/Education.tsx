"use client";

import React from "react";
import { EDUCATION_LIST } from "@/data/credentials";

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-20 py-16 md:py-24 px-6 sm:px-10 md:px-14 max-w-6xl mx-auto w-full"
    >
      <div className="mb-10">
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
          ACADEMIC QUALIFICATIONS
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Education
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EDUCATION_LIST.map((edu, idx) => (
          <div
            key={idx}
            className="minimal-card rounded-lg p-6 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono text-neutral-400 mb-2">
                {edu.period}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                {edu.degree}
              </h3>
              <div className="text-xs sm:text-sm font-mono text-neutral-300 mb-3">
                {edu.institution} {edu.location && `· ${edu.location}`}
              </div>
            </div>

            {edu.details && (
              <p className="text-xs text-neutral-400 font-normal leading-relaxed border-t border-white/5 pt-3">
                {edu.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
