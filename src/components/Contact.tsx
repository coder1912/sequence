"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative z-20 py-24 md:py-32 px-6 sm:px-10 md:px-14 max-w-6xl mx-auto w-full"
    >
      <div className="minimal-card rounded-lg p-8 sm:p-12 md:p-16 border border-white/10 text-center max-w-3xl mx-auto">
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
          DIRECT ENGAGEMENT
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Let&apos;s Connect
        </h2>

        <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mb-8 max-w-xl mx-auto">
          Focused on Business &amp; Data Analytics, with strong capabilities and interests across Finance Analytics, Financial Modelling, and Banking &amp; Risk Analytics.
        </p>

        {/* Primary Contact Action: Email */}
        <div className="flex items-center justify-center mb-10">
          <div className="px-4 py-2.5 rounded bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3 w-full sm:w-auto font-mono text-xs sm:text-sm text-white">
            <Mail className="w-4 h-4 text-neutral-400" />
            <span className="select-all">{PROFILE.email}</span>
            <button
              onClick={handleCopyEmail}
              className="p-1 rounded hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              title="Copy email to clipboard"
              aria-label="Copy email"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Verified Professional Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/5 text-xs font-mono text-neutral-400">
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={PROFILE.links.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Credly</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={PROFILE.links.googleSkills}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Google Skills Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
