"use client";

import React from "react";
import { Compass, Trophy, CheckCircle2, Flame, HeartHandshake } from "lucide-react";

export default function About() {
  const STATS = [
    { value: "05+", label: "Years Creative Engineering", detail: "Specializing in Next.js & Motion" },
    { value: "40+", label: "Completed Projects", detail: "Global clients & high-growth brands" },
    { value: "100%", label: "Lighthouse Performance", detail: "Obsessed with frame times & speed" },
    { value: "04", label: "Industry Recognitions", detail: "Awwwards, FWA, CSS Design Awards" },
  ];

  const AWARDS = [
    { title: "Site of the Day (SOTD)", org: "Awwwards", year: "2024", work: "Aetheria OS" },
    { title: "FWA of the Day (FOTD)", org: "FWA", year: "2024", work: "Chronos Scrollytelling" },
    { title: "Developer Award", org: "Awwwards", year: "2023", work: "Veloce Design System" },
    { title: "Best UI / UX / Innovation", org: "CSSDA", year: "2023", work: "Luminary Synth" },
  ];

  return (
    <section
      id="about"
      className="relative z-20 py-24 md:py-32 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full"
    >
      {/* Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-400 font-mono text-xs uppercase tracking-wider mb-4">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>05 / Philosophy & Recognition</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          The Craft Behind <span className="text-gradient-amber">The Motion</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Manifesto & Narrative */}
        <div className="lg:col-span-7 space-y-6 text-neutral-300 font-light text-base sm:text-lg leading-relaxed">
          <p className="text-xl sm:text-2xl font-normal text-white leading-snug">
            “The most memorable digital products aren&apos;t just functional utilities—they are sensory
            experiences that evoke wonder and effortless clarity.”
          </p>

          <p>
            As a Creative Developer, I stand at the intersection of design intuition and rigorous computer
            science. I treat web development like haute horlogerie: every gear, animation curve, and
            render frame is fine-tuned so interactions feel physically weighted, responsive, and organic.
          </p>

          <p>
            Whether building Apple-inspired canvas scrub animations, WebGL 3D spatial environments, or
            enterprise design systems, my focus remains steady: zero jank, tactile delight, and
            bulletproof cross-device performance.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="glass-panel p-4 rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-gradient-dual">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-neutral-200 mt-1">{stat.label}</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Awards & Honors */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-7 md:p-8 border border-white/10">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider mb-6">
            <Trophy className="w-4 h-4" />
            <span>Honors & Accolades</span>
          </div>

          <div className="space-y-4">
            {AWARDS.map((award) => (
              <div
                key={award.title}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{award.title}</span>
                    <span className="text-[11px] font-mono text-neutral-400">({award.year})</span>
                  </div>
                  <div className="text-xs text-neutral-400 mt-1 font-mono">
                    Project: <span className="text-neutral-300">{award.work}</span>
                  </div>
                </div>

                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  {award.org}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-neutral-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Verified Jury Submissions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
