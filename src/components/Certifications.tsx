"use client";

import React from "react";
import { CERTIFICATIONS_LIST } from "@/data/credentials";
import { PROFILE } from "@/data/profile";
import { ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section
      id="credentials"
      className="relative z-20 py-20 md:py-28 px-6 sm:px-10 md:px-14 max-w-6xl mx-auto w-full"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
            INDUSTRY VALIDATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Certifications &amp; Credentials
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
            Formal professional development covering banking operations, credit risk, data analytics simulations, machine learning, and project governance.
          </p>
        </div>

        {/* Links to Credly & Google Skills */}
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.links.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-minimal text-xs"
          >
            <span>Credly Badges</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={PROFILE.links.googleSkills}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-minimal text-xs"
          >
            <span>Google Skills</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Certification Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTIFICATIONS_LIST.map((cert) => (
          <div
            key={cert.id}
            className="minimal-card rounded-lg p-5 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2">
                <span>{cert.issuer}</span>
                {cert.period && <span>{cert.period}</span>}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                {cert.name}
              </h3>
            </div>

            <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Verified Credential</span>
              <span>Formal Coursework</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
