"use client";

import React from "react";
import { EXPERIENCES } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-20 py-20 md:py-28 px-6 sm:px-10 md:px-14 max-w-6xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
          CAREER TRAJECTORY
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          Professional Experience
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
          From hands-on IoT firmware engineering and startup venture leadership to enterprise data analytics and executive KPI reporting.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-white/10 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
        {EXPERIENCES.map((exp) => {
          const isEntrepreneurial = exp.badge !== undefined;

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full border transition-colors ${
                  isEntrepreneurial
                    ? "bg-white border-white"
                    : "bg-[#060a0e] border-neutral-600 group-hover:border-white"
                }`}
              />

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  {exp.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-white/20 bg-white/10 text-white">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  {exp.period}
                </div>
              </div>

              {/* Company & Location */}
              <div className="text-xs sm:text-sm font-mono text-neutral-300 mb-3">
                {exp.company} {exp.location && `· ${exp.location}`}
              </div>

              {/* Summary Description */}
              <p className="text-sm text-neutral-400 font-normal leading-relaxed mb-4 max-w-3xl">
                {exp.description}
              </p>

              {/* Bullet Contributions */}
              <ul className="space-y-2 mb-4 max-w-3xl">
                {exp.contributions.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="text-xs sm:text-sm text-neutral-400 leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="text-neutral-600 mt-1">―</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[11px] font-mono bg-white/[0.02] border border-white/5 text-neutral-400 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
