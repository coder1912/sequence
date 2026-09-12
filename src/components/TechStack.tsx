"use client";

import React from "react";
import { Layers, Monitor, Cpu, Sparkles, Box, ShieldCheck } from "lucide-react";

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: "cyan" | "amber" | "teal";
  skills: { name: string; level: string; note: string }[];
}

const CAPABILITIES: SkillCategory[] = [
  {
    title: "Creative Frontend & Motion",
    subtitle: "High-frame-rate web experiences and physics-based interactions",
    icon: <Sparkles className="w-5 h-5" />,
    accent: "cyan",
    skills: [
      { name: "Next.js 14 App Router", level: "Core", note: "Server components, streaming, optimization" },
      { name: "Framer Motion", level: "Mastery", note: "Spring physics, layout animations, scroll scrub" },
      { name: "HTML5 Canvas API", level: "Advanced", note: "Custom pixel buffers, high-DPI scaling, 60fps" },
      { name: "Tailwind CSS", level: "Expert", note: "Design tokens, glassmorphic themes, responsive" },
    ],
  },
  {
    title: "3D & Spatial Computing",
    subtitle: "Real-time graphics and mathematical visual shaders",
    icon: <Box className="w-5 h-5" />,
    accent: "amber",
    skills: [
      { name: "WebGL & Three.js", level: "Advanced", note: "PBR materials, custom geometry, lighting" },
      { name: "GLSL Shaders", level: "Proficient", note: "Fragment / vertex displacement, refractions" },
      { name: "React Three Fiber", level: "Advanced", note: "Declarative spatial ecosystems" },
      { name: "Post-Processing", level: "Expert", note: "Chromatic aberration, bloom, film grain" },
    ],
  },
  {
    title: "Architecture & Engineering",
    subtitle: "Bulletproof scalability, speed, and accessibility standards",
    icon: <Cpu className="w-5 h-5" />,
    accent: "teal",
    skills: [
      { name: "TypeScript Strict Mode", level: "Mastery", note: "Type-safe interfaces, generics, tooling" },
      { name: "Web Audio API", level: "Creative", note: "Procedural sound synthesis, frequency analysis" },
      { name: "Performance Profiling", level: "Obsessive", note: "Chrome DevTools, 0ms Jank, 100 Lighthouse" },
      { name: "Accessible ARIA", level: "Core", note: "Keyboard navigation, screen readers, semantic HTML" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="capabilities"
      className="relative z-20 py-24 md:py-32 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-400 font-mono text-xs uppercase tracking-wider mb-4">
          <Monitor className="w-3.5 h-3.5 text-amber-400" />
          <span>04 / Technical Capabilities</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Engineered for <span className="text-gradient-dual">Excellence</span>
        </h2>
        <p className="text-neutral-400 text-base md:text-lg max-w-2xl mt-3 font-light">
          A full-spectrum creative engineering stack developed to turn ambitious design concepts
          into production-grade web reality.
        </p>
      </div>

      {/* Capability Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CAPABILITIES.map((category) => {
          const isAmber = category.accent === "amber";
          const isTeal = category.accent === "teal";

          return (
            <div
              key={category.title}
              className="glass-panel rounded-2xl p-7 md:p-8 border border-white/10 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      isAmber
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : isTeal
                        ? "bg-teal-500/10 text-teal-400 border border-teal-500/20"
                        : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    }`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {category.subtitle}
                </p>

                {/* Skill Items */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-neutral-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 font-mono">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-neutral-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production Tested · 0ms Jank</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
