"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  progress: number;
  isLoaded: boolean;
}

export default function Preloader({ progress, isLoaded }: PreloaderProps) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Guaranteed safety timeout: dismiss preloader after 1.8s max under all circumstances
    const safetyTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1800);

    if (isLoaded) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 400);
      return () => {
        clearTimeout(timer);
        clearTimeout(safetyTimer);
      };
    }

    return () => clearTimeout(safetyTimer);
  }, [isLoaded]);

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between p-8 md:p-12 bg-[#060a0e] text-white select-none pointer-events-none"
        >
          {/* Header Monogram */}
          <div className="w-full flex items-center justify-between text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>AKHIL AJITH K C</span>
            </div>
            <span>PORTFOLIO SYSTEM</span>
          </div>

          {/* Center Counter */}
          <div className="flex flex-col items-center text-center">
            <div className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-white font-mono flex items-baseline">
              <span>{Math.min(progress, 100)}</span>
              <span className="text-2xl sm:text-4xl text-neutral-400 ml-1">%</span>
            </div>

            <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-4 tracking-widest uppercase">
              {progress < 50
                ? "Loading Canvas Frames..."
                : progress < 100
                ? "Preparing Interactive Telemetry..."
                : "Ready"}
            </p>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full max-w-md">
            <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-neutral-500 mt-2">
              <span>SYSTEM INITIALIZATION</span>
              <span>{progress}/100</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
