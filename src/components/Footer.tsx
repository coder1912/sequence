"use client";

import React from "react";
import { PROFILE } from "@/data/profile";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 border-t border-white/10 bg-[#060a0e] py-12 px-6 sm:px-10 md:px-14 text-neutral-400 text-xs font-mono">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identity & Subtitle */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="text-white font-semibold tracking-wider">
            {PROFILE.name}
          </span>
          <span className="hidden sm:inline text-neutral-600">/</span>
          <span className="text-neutral-300">
            {PROFILE.title}
          </span>
          <span className="hidden sm:inline text-neutral-600">/</span>
          <span>Finance · Analytics · Embedded Systems</span>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE.links.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Credly
          </a>
          <a
            href={PROFILE.links.googleSkills}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Google Skills
          </a>
          <span>© {new Date().getFullYear()} {PROFILE.name}</span>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded border border-white/10 hover:border-white/30 text-white transition-colors ml-2"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
