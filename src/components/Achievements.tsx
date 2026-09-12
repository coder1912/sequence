"use client";

import React from "react";
import { ACHIEVEMENTS_LIST } from "@/data/credentials";
import { ExternalLink } from "lucide-react";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative z-20 py-16 md:py-24 px-6 sm:px-10 md:px-14 max-w-6xl mx-auto w-full"
    >
      <div className="mb-10">
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
          RECOGNITION
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Achievements &amp; Honors
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ACHIEVEMENTS_LIST.map((item) => (
          <div
            key={item.id}
            className="minimal-card rounded-lg p-5 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono text-neutral-400 mb-2">
                {item.organization}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                {item.description}
              </p>
            </div>

            {item.link && (
              <div className="mt-4 pt-3 border-t border-white/5">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-white hover:underline flex items-center gap-1"
                >
                  <span>View Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
