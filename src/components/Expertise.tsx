"use client";

import React from "react";
import { EXPERTISE_PILLARS } from "@/data/expertise";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative z-20 py-20 md:py-28 px-6 sm:px-10 md:px-14 max-w-6xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
          CORE CAPABILITIES
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          Areas of Expertise
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
          Three interconnected domains forming a cohesive professional discipline: hardware engineering rigor, financial acumen, and data-driven business analytics.
        </p>
      </div>

      {/* Exactly Three Major Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {EXPERTISE_PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            className="minimal-card rounded-lg p-6 sm:p-7 border border-white/10 flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-neutral-500">
                  {pillar.number}
                </span>
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                  PILLAR {pillar.number}
                </span>
              </div>

              {/* Title (Solid White) */}
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                {pillar.title}
              </h3>

              <p className="text-xs font-mono text-neutral-400 mb-4">
                {pillar.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed mb-6">
                {pillar.description}
              </p>
            </div>

            {/* Skills / Technologies List */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-3 border-t border-white/5 pt-4">
                Core Competencies
              </div>
              <div className="flex flex-wrap gap-1.5">
                {pillar.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs font-mono bg-white/[0.03] border border-white/10 text-white rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
