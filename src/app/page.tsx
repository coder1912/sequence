"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#060a0e] text-white">
      {/* Sequence Asset Preloader */}
      <Preloader progress={loadingProgress} isLoaded={isLoaded} />

      {/* Subtle Desktop Cursor Follower */}
      <CustomCursor />

      {/* Minimal Navigation Header */}
      <Navbar />

      {/* 1. CINEMATIC HERO (HTML5 Canvas Scrollytelling Scrubbing) */}
      <ScrollyCanvas
        onLoadingProgress={(p) => setLoadingProgress(p)}
        onLoaded={() => setIsLoaded(true)}
      >
        {(scrollProgress) => <Overlay scrollProgress={scrollProgress} />}
      </ScrollyCanvas>

      {/* Portfolio Content Hierarchy */}
      <div className="relative z-20 bg-[#060a0e]">
        {/* 2. SHORT ABOUT / POSITIONING */}
        <AboutSection />

        {/* 3. FEATURED PROJECTS (EXACTLY THREE) */}
        <Projects />

        {/* 4. EXPERIENCE (CAREER TIMELINE) */}
        <Experience />

        {/* 5. EXPERTISE (EXACTLY THREE PILLAR CARDS) */}
        <Expertise />

        {/* 6. EDUCATION */}
        <Education />

        {/* 7. CERTIFICATIONS & CREDENTIALS */}
        <Certifications />

        {/* 8. ACHIEVEMENTS */}
        <Achievements />

        {/* 9. CONTACT */}
        <Contact />

        {/* 10. FOOTER */}
        <Footer />
      </div>
    </main>
  );
}
