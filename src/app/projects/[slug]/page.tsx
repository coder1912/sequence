import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/data/projects";
import { PROFILE } from "@/data/profile";
import type { Metadata } from "next";

interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectDetailProps): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} | Akhil Ajith K C`,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#060a0e] text-white flex flex-col justify-between">
      <Navbar />

      <div className="pt-28 pb-20 px-6 sm:px-10 md:px-14 max-w-4xl mx-auto w-full flex-grow">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="border-b border-white/10 pb-8 mb-10">
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-3">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
              {project.category}
            </span>
            <span>·</span>
            <span>{project.pillarLabel}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg font-mono text-neutral-300 leading-relaxed mb-6">
            {project.tagline}
          </p>

          {/* Quick Metrics Bar */}
          <div className="p-4 rounded bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
            <div>
              <span className="text-neutral-500 uppercase block mb-0.5">Primary Metrics</span>
              <span className="text-white font-semibold">{project.metrics}</span>
            </div>
            {project.scale && (
              <div className="sm:text-right">
                <span className="text-neutral-500 uppercase block mb-0.5">Scale</span>
                <span className="text-neutral-300">{project.scale}</span>
              </div>
            )}
          </div>
        </header>

        {/* Technologies List */}
        <section className="mb-10">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
            Tools &amp; Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-white/[0.03] border border-white/10 text-white rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Project Overview */}
        <section className="mb-10">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
            Project Overview
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Key Focus Points */}
        {project.focus && project.focus.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Core Focus Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.focus.map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Problem Statement (if available) */}
        {project.problem && (
          <section className="mb-10">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              The Business Problem
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
              {project.problem}
            </p>
          </section>
        )}

        {/* Approach (if available) */}
        {project.approach && (
          <section className="mb-10">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Technical &amp; Analytical Approach
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
              {project.approach}
            </p>
          </section>
        )}

        {/* Results / Insights (if available) */}
        {project.results && (
          <section className="mb-10">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Results &amp; Business Insights
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
              {project.results}
            </p>
          </section>
        )}

        {/* Project Visuals & Screenshots */}
        {project.images && project.images.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
              Project Visuals &amp; Documentation ({project.images.length})
            </h2>
            <div
              className={`grid gap-5 ${
                project.images.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="rounded border border-white/10 overflow-hidden bg-[#0a1017] flex items-center justify-center p-2"
                >
                  <img
                    src={img}
                    alt={`${project.title} visual ${i + 1}`}
                    className="w-full h-auto object-contain max-h-[500px] rounded"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Interactive Google Colab Notebooks */}
        {project.colabLinks && project.colabLinks.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
              Interactive Google Colab Notebooks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.colabLinks.map((colab, i) => (
                <a
                  key={i}
                  href={colab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded bg-white/[0.02] border border-white/10 hover:border-white/25 transition-all text-xs font-mono text-white flex items-center justify-between gap-3"
                >
                  <div>
                    <span className="text-neutral-400 uppercase text-[10px] block mb-1">
                      Execution Environment
                    </span>
                    <span className="font-semibold text-white">{colab.label}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Supporting Documentation & Drive Link */}
        <section className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/projects"
            className="btn-minimal text-xs w-full sm:w-auto"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Project Index</span>
          </Link>

          <a
            href={PROFILE.links.googleDriveProjects}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-minimal-primary text-xs w-full sm:w-auto"
          >
            <span>Full Project Repository (Drive)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </section>
      </div>

      <Footer />
    </main>
  );
}
