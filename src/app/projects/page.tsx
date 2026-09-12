"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS, Project } from "@/data/projects";
import { PROFILE } from "@/data/profile";

const CATEGORIES = ["ALL", "BUSINESS / DATA", "FINANCE", "EMBEDDED / IoT"] as const;
type Category = (typeof CATEGORIES)[number];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("ALL");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredProjects: Project[] =
    selectedCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#060a0e] text-white flex flex-col justify-between">
      <Navbar />

      <div className="pt-28 pb-20 px-6 sm:px-10 md:px-14 max-w-6xl mx-auto w-full flex-grow">
        {/* Breadcrumb / Back to Home */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Overview</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
            COMPLETE ARCHIVE ({PROJECTS.length} PROJECTS)
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
            PROJECTS
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 font-normal max-w-xl leading-relaxed">
            A collection of work across data, finance, embedded systems and IoT.
          </p>
        </div>

        {/* Filters — Projects Page Only */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-white/10 pb-4">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                  isSelected
                    ? "bg-white text-neutral-950 font-bold"
                    : "bg-white/[0.03] text-neutral-400 border border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Framer Motion layout transitions */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const hasImageFailed = imageErrors[project.id];
              const displayIndex = (idx + 1).toString().padStart(2, "0");

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="minimal-card rounded-lg p-6 sm:p-7 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Meta */}
                    <div className="flex items-center justify-between gap-2 mb-4 text-xs font-mono">
                      <span className="text-neutral-400">{project.category}</span>
                      <span className="text-neutral-500">#{displayIndex}</span>
                    </div>

                    {/* Visual / Blueprint Placeholder */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="h-44 w-full rounded border border-white/5 bg-[#0a1017] relative overflow-hidden mb-5 flex flex-col justify-between p-4 block group hover:border-white/20 transition-all cursor-pointer"
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
                          <div className="flex justify-between text-[11px] font-mono text-neutral-400">
                            <span>COLAB RESEARCH</span>
                            <span>{project.category}</span>
                          </div>
                          <div className="text-center px-2">
                            <span className="text-xs font-mono text-white block mb-1 group-hover:underline underline-offset-4">
                              Google Colab Notebooks
                            </span>
                            <span className="text-[11px] font-mono text-neutral-400">
                              2 Executable Notebooks
                            </span>
                          </div>
                          <div className="text-[10px] font-mono text-neutral-500 truncate">
                            REF: {project.slug}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-between text-[11px] font-mono text-neutral-500">
                            <span>TECHNICAL RECORD</span>
                            <span>{project.category}</span>
                          </div>
                          <div className="text-center px-2">
                            <span className="text-xs font-mono text-neutral-400 block mb-1">
                              PRIMARY METRIC
                            </span>
                            <span className="text-xs font-mono text-neutral-200">
                              {project.metrics}
                            </span>
                          </div>
                          <div className="text-[10px] font-mono text-neutral-600 truncate">
                            REF: {project.slug}
                          </div>
                        </>
                      )}
                    </Link>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-white tracking-tight mb-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:underline underline-offset-4"
                      >
                        {project.title}
                      </Link>
                    </h2>

                    {/* Tagline */}
                    <p className="text-xs font-mono text-neutral-300 mb-3">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-mono bg-white/[0.03] border border-white/5 text-neutral-300 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-mono text-white hover:underline flex items-center gap-1.5"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.featured && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-white border border-white/10">
                        Featured Case
                      </span>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dedicated Google Drive CTA at Bottom */}
        <section className="minimal-card rounded-lg p-8 sm:p-12 border border-white/10 text-center max-w-2xl mx-auto">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
            COMPLETE PROJECT PORTFOLIO
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Want to explore complete project documents and supporting material?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed mb-6">
            Access raw dataset samples, SQL query scripts, Power BI templates, financial modeling workbooks, and embedded schematics hosted on Google Drive.
          </p>
          <a
            href={PROFILE.links.googleDriveProjects}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-minimal-primary inline-flex text-xs"
          >
            <span>View Full Project Portfolio</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </section>
      </div>

      <Footer />
    </main>
  );
}
