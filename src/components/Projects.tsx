"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { PROFILE } from "@/data/profile";

export default function Projects() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <section
      id="featured-projects"
      className="relative z-20 py-20 md:py-28 px-6 sm:px-10 md:px-14 max-w-6xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
          SELECTED WORK
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
          Featured Projects
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
          Three focal case studies representing the core pillars: Business &amp; Data Analytics, Financial Modeling, and Embedded Systems.
        </p>
      </div>

      {/* Featured Projects List (3 Distinct Editorial Layouts) */}
      <div className="space-y-12 sm:space-y-16">
        {featuredProjects.map((project, index) => {
          const numberStr = (index + 1).toString().padStart(2, "0");
          const hasImageFailed = imageErrors[project.id];

          return (
            <article
              key={project.id}
              className="minimal-card rounded-lg p-6 sm:p-8 md:p-10 border border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Content */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Header Row: Pillar & Number */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        {project.pillarLabel}
                      </span>
                      <span className="text-xs font-mono text-neutral-500">
                        {numberStr} / 03
                      </span>
                    </div>

                    {/* Solid White Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:underline underline-offset-4"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    {/* Subtitle / Tagline */}
                    <p className="text-xs sm:text-sm font-mono text-neutral-300 mb-4">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono bg-white/[0.03] border border-white/10 text-neutral-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Key Metrics / Scale */}
                    <div className="p-3.5 rounded bg-white/[0.02] border border-white/5 mb-6 text-xs font-mono text-neutral-300">
                      <span className="text-neutral-500 uppercase tracking-wider block mb-1">
                        Scope &amp; Impact
                      </span>
                      {project.metrics}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn-minimal"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Visual Container (Handles real image or elegant technical placeholder) */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="lg:col-span-5 h-64 sm:h-72 md:h-80 w-full rounded border border-white/10 bg-[#0a1017] relative overflow-hidden flex flex-col justify-between p-6 block group hover:border-white/25 transition-all cursor-pointer"
                >
                  {project.coverImage && !hasImageFailed ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      onError={() =>
                        setImageErrors((prev) => ({ ...prev, [project.id]: true }))
                      }
                    />
                  ) : project.colabLinks && project.colabLinks.length > 0 ? (
                    <>
                      <div className="flex justify-between items-start text-xs font-mono text-neutral-400">
                        <span>RESEARCH REPOSITORY</span>
                        <span>{project.category}</span>
                      </div>

                      <div className="my-auto text-center px-4">
                        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                          GOOGLE COLAB NOTEBOOKS
                        </div>
                        <p className="text-sm text-white font-mono leading-relaxed mb-2 group-hover:underline underline-offset-4">
                          Interactive AML &amp; Risk Analytics
                        </p>
                        <span className="text-[11px] font-mono text-neutral-400">
                          2 Executable Python Notebooks Available
                        </span>
                      </div>

                      <div className="flex justify-between items-end text-[11px] font-mono text-neutral-500 border-t border-white/5 pt-3">
                        <span>NO SCREENSHOTS · LIVE COLAB CODE</span>
                        <span>VERIFIED</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Editorial Dark Blueprint Placeholder */}
                      <div className="flex justify-between items-start text-xs font-mono text-neutral-500">
                        <span>PROJECT VISUAL</span>
                        <span>{project.category}</span>
                      </div>

                      <div className="my-auto text-center px-4">
                        <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                          PRIMARY FOCUS
                        </div>
                        <p className="text-sm text-neutral-300 font-mono leading-relaxed">
                          {project.focus[0]} · {project.focus[1]}
                        </p>
                      </div>

                      <div className="flex justify-between items-end text-[11px] font-mono text-neutral-500 border-t border-white/5 pt-3">
                        <span>ASSET: {project.folderPath}</span>
                        <span>CONFIDENTIAL</span>
                      </div>
                    </>
                  )}
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Homepage Project CTAs */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/projects"
          className="btn-minimal-primary w-full sm:w-auto"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href={PROFILE.links.googleDriveProjects}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>View Full Project Portfolio (Google Drive)</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
