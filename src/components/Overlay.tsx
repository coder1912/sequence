"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

interface OverlayProps {
  scrollProgress: MotionValue<number>;
}

export default function Overlay({ scrollProgress }: OverlayProps) {
  // -------------------------------------------------------------
  // STAGE 1: (0% - 20% scroll) - Center Hero
  // AKHIL AJITH K C | ANALYTICS & BUSINESS PROFESSIONAL
  // Hidden at 0% initial scroll (only face visible); smoothly reveals on scroll
  // -------------------------------------------------------------
  const stage1Opacity = useTransform(
    scrollProgress,
    [0, 0.03, 0.14, 0.22],
    [0, 1, 1, 0]
  );
  const stage1Y = useTransform(
    scrollProgress,
    [0, 0.03, 0.14, 0.22],
    [24, 0, 0, -60]
  );
  const stage1Scale = useTransform(
    scrollProgress,
    [0, 0.03, 0.14, 0.22],
    [0.98, 1, 1, 0.96]
  );
  const stage1PointerEvents = useTransform(scrollProgress, (p) =>
    p > 0.015 ? "auto" : "none"
  );

  // -------------------------------------------------------------
  // STAGE 2: (24% - 50% scroll) - Left-aligned
  // Turning data into decisions (Analytics + Finance)
  // -------------------------------------------------------------
  const stage2Opacity = useTransform(
    scrollProgress,
    [0.22, 0.30, 0.42, 0.50],
    [0, 1, 1, 0]
  );
  const stage2Y = useTransform(scrollProgress, [0.22, 0.34, 0.50], [40, 0, -40]);

  // -------------------------------------------------------------
  // STAGE 3: (52% - 80% scroll) - Right-aligned
  // Engineering foundation. Driven by data, finance and business.
  // -------------------------------------------------------------
  const stage3Opacity = useTransform(
    scrollProgress,
    [0.52, 0.60, 0.72, 0.80],
    [0, 1, 1, 0]
  );
  const stage3Y = useTransform(scrollProgress, [0.52, 0.64, 0.80], [40, 0, -40]);

  // -------------------------------------------------------------
  // STAGE 4: (84% - 100% scroll) - Center bottom transition to Featured Projects
  // -------------------------------------------------------------
  const stage4Opacity = useTransform(scrollProgress, [0.82, 0.90, 1.0], [0, 1, 1]);
  const stage4Y = useTransform(scrollProgress, [0.82, 1.0], [30, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6 sm:p-10 md:p-14 max-w-6xl mx-auto w-full">
      {/* STAGE 1: HERO (0% SCROLL) */}
      <motion.div
        style={{
          opacity: stage1Opacity,
          y: stage1Y,
          scale: stage1Scale,
          pointerEvents: stage1PointerEvents,
        }}
        className="my-auto flex flex-col items-center text-center justify-center min-h-[70vh]"
      >
        {/* Minimal pill label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-neutral-300 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span>PORTFOLIO & CASE STUDIES</span>
        </div>

        {/* Solid White Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
          AKHIL AJITH K C
        </h1>

        {/* Solid White Professional Title */}
        <p className="text-base sm:text-xl md:text-2xl font-medium text-white/90 tracking-wide uppercase mb-6">
          ANALYTICS &amp; BUSINESS PROFESSIONAL
        </p>

        {/* Concise Supporting Pitch */}
        <p className="max-w-xl text-sm sm:text-base text-white/85 font-normal leading-relaxed mb-8">
          Engineering foundation. Analytical mindset. Business perspective. Turning complex operational and financial data into actionable executive insights.
        </p>

        {/* Minimal Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 pointer-events-auto">
          <a href="#featured-projects" className="btn-minimal-primary">
            <span>Featured Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <Link href="/projects" className="btn-minimal">
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Subtle scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 text-[11px] font-mono tracking-widest">
          <span>SCROLL TO EXPLORE</span>
          <div className="w-3.5 h-6 rounded-full border border-neutral-700 flex justify-center p-0.5">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-white"
            />
          </div>
        </div>
      </motion.div>

      {/* STAGE 2: ANALYTICS & FINANCE (30% SCROLL - LEFT ALIGNED) */}
      <motion.div
        style={{ opacity: stage2Opacity, y: stage2Y }}
        className="absolute top-[32%] left-6 sm:left-10 md:left-14 max-w-lg text-left"
      >
        <div className="text-xs font-mono text-neutral-400 tracking-wider mb-2">
          01 / ANALYTICAL MINDSET
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Turning data into decisions.
        </h2>

        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4 font-normal">
          From streamlining ETL pipelines (cutting prep time by 30%) to evaluating AML and fraud risk patterns across 10,000+ banking records. Transforming raw datasets into executive KPI dashboards.
        </p>

        <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
          <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-white">Power BI &amp; DAX</span>
          <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-white">SQL &amp; Python</span>
          <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-white">Financial Modelling</span>
        </div>
      </motion.div>

      {/* STAGE 3: ENGINEERING FOUNDATION (60% SCROLL - RIGHT ALIGNED) */}
      <motion.div
        style={{ opacity: stage3Opacity, y: stage3Y }}
        className="absolute top-[35%] right-6 sm:right-10 md:right-14 max-w-lg text-right ml-auto flex flex-col items-end"
      >
        <div className="text-xs font-mono text-neutral-400 tracking-wider mb-2">
          02 / TECHNICAL FOUNDATION
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Built on engineering. Driven by business.
        </h2>

        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4 font-normal">
          A Computer Science degree and embedded systems background inform a deep technical rigor. Experienced in deploying 500+ IoT telemetry units and translating complex engineering specifications into strategic executive plans.
        </p>

        <div className="flex flex-wrap justify-end gap-2 text-xs font-mono text-neutral-400">
          <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-white">C / C++ &amp; Embedded</span>
          <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-white">IoT Telemetry</span>
          <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-white">Agile &amp; Scrum Delivery</span>
        </div>
      </motion.div>

      {/* STAGE 4: TRANSITION (90% SCROLL - CENTER BOTTOM) */}
      <motion.div
        style={{ opacity: stage4Opacity, y: stage4Y }}
        className="absolute bottom-10 inset-x-0 mx-auto text-center w-full max-w-xl px-4 pointer-events-none"
      >
        <div className="text-xs font-mono text-neutral-400 tracking-wider mb-1">
          FEATURED WORK
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Three Pillars of Work
        </h3>
        <p className="text-neutral-400 text-xs mt-1 font-mono">
          Data Analytics · Financial Analysis · Embedded Systems
        </p>
      </motion.div>
    </div>
  );
}
