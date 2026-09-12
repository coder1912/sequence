"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-3.5 flex justify-center pointer-events-none">
        <nav
          className={`w-full max-w-6xl pointer-events-auto transition-all duration-300 rounded-lg px-4 sm:px-6 py-2.5 flex items-center justify-between ${
            isScrolled
              ? "bg-[#060a0e]/85 backdrop-blur-md border border-white/10"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo / Identity */}
          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold tracking-wider text-white hover:text-neutral-300 transition-colors"
          >
            {PROFILE.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-[12px] font-mono uppercase tracking-wider text-neutral-400">
            <a href="/#featured-projects" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="/#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="/#expertise" className="hover:text-white transition-colors">
              Expertise
            </a>
            <a href="/#credentials" className="hover:text-white transition-colors">
              Credentials
            </a>
            <Link href="/projects" className="hover:text-white text-neutral-200 transition-colors">
              Projects
            </Link>
            <a href="/#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Minimal Right CTA */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.links.googleDriveProjects}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-mono border border-white/10 text-neutral-300 hover:text-white hover:border-white/25 transition-all bg-white/[0.02]"
            >
              <span>Drive Portfolio ↗</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 rounded text-white border border-white/10 hover:bg-white/5"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-[#060a0e]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-6 md:hidden px-6">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-bold text-white mb-4"
          >
            {PROFILE.name}
          </Link>
          <a
            href="/#featured-projects"
            onClick={() => setMobileOpen(false)}
            className="text-base font-mono uppercase tracking-wider text-neutral-300 hover:text-white"
          >
            Work
          </a>
          <a
            href="/#experience"
            onClick={() => setMobileOpen(false)}
            className="text-base font-mono uppercase tracking-wider text-neutral-300 hover:text-white"
          >
            Experience
          </a>
          <a
            href="/#expertise"
            onClick={() => setMobileOpen(false)}
            className="text-base font-mono uppercase tracking-wider text-neutral-300 hover:text-white"
          >
            Expertise
          </a>
          <a
            href="/#credentials"
            onClick={() => setMobileOpen(false)}
            className="text-base font-mono uppercase tracking-wider text-neutral-300 hover:text-white"
          >
            Credentials
          </a>
          <Link
            href="/projects"
            onClick={() => setMobileOpen(false)}
            className="text-base font-mono uppercase tracking-wider text-white"
          >
            All Projects →
          </Link>
          <a
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="text-base font-mono uppercase tracking-wider text-neutral-300 hover:text-white"
          >
            Contact
          </a>

          <button
            onClick={() => setMobileOpen(false)}
            className="mt-6 px-4 py-1.5 text-xs font-mono border border-white/20 text-neutral-400 rounded"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
