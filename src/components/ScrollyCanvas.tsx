"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useSpring, MotionValue } from "framer-motion";

interface ScrollyCanvasProps {
  totalFrames?: number;
  onLoadingProgress?: (progress: number) => void;
  onLoaded?: () => void;
  children?: (scrollProgress: MotionValue<number>) => React.ReactNode;
}

const TOTAL_FRAMES = 60;

export default function ScrollyCanvas({
  totalFrames = TOTAL_FRAMES,
  onLoadingProgress,
  onLoaded,
  children,
}: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const [, setIsReady] = useState(false);

  // Track scroll progress through the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth physics spring to remove scroll wheel stutter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 36,
    restDelta: 0.0005,
  });

  // Draw image with exact object-fit: cover math and Retina high-DPI scaling
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    const targetWidth = Math.floor(displayWidth * dpr);
    const targetHeight = Math.floor(displayHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // object-fit: cover calculation
    const hRatio = targetWidth / imgWidth;
    const vRatio = targetHeight / imgHeight;
    const ratio = Math.max(hRatio, vRatio);

    const renderWidth = Math.ceil(imgWidth * ratio);
    const renderHeight = Math.ceil(imgHeight * ratio);

    const offsetX = Math.floor((targetWidth - renderWidth) / 2);
    const offsetY = Math.floor((targetHeight - renderHeight) / 2);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  }, []);

  // Intelligent preloader
  useEffect(() => {
    let isCancelled = false;
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    // Safety fallback: guaranteed ready after 1.2s max
    const safetyTimeout = setTimeout(() => {
      if (!isCancelled) {
        setIsReady(true);
        onLoaded?.();
        drawFrame(0);
      }
    }, 1200);

    const handleSingleLoad = () => {
      if (isCancelled) return;
      loadedCount++;
      const progress = Math.round((loadedCount / totalFrames) * 100);
      onLoadingProgress?.(progress);

      if (loadedCount === 1 && canvasRef.current) {
        drawFrame(0);
      }

      if (loadedCount >= totalFrames) {
        clearTimeout(safetyTimeout);
        setIsReady(true);
        onLoaded?.();
        drawFrame(0);
      }
    };

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const padded = i.toString().padStart(2, "0");

      // Direct, existing paths to prevent 404s
      const primaryPath = `/sequence/frame_${padded}.webp`;
      const fallbackPath = `/sequence/frame_${padded}_delay-0.083s.webp`;
      const pngFallback = `/sequence/frame_${padded}_delay-0.083s.png`;

      img.src = primaryPath;
      img.onload = handleSingleLoad;

      img.onerror = () => {
        if (img.src.includes(primaryPath)) {
          img.src = fallbackPath;
        } else if (img.src.includes(fallbackPath)) {
          img.src = pngFallback;
        } else {
          handleSingleLoad();
        }
      };

      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      isCancelled = true;
      clearTimeout(safetyTimeout);
    };
  }, [totalFrames, onLoadingProgress, onLoaded, drawFrame]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      if (imagesRef.current.length > 0) {
        drawFrame(currentFrameRef.current);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  // Scrub frames on spring progress update
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const clamped = Math.min(Math.max(latest, 0), 1);
      const targetFrame = Math.min(
        Math.floor(clamped * totalFrames),
        totalFrames - 1
      );

      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        requestAnimationFrame(() => {
          drawFrame(targetFrame);
        });
      }
    });

    return () => unsubscribe();
  }, [smoothProgress, totalFrames, drawFrame]);

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative h-[500vh] w-full bg-[#060a0e]"
    >
      {/* Sticky full-screen viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Canvas element */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "transform" }}
        />

        {/* Subtle radial vignette for seamless page edge blending */}
        <div
          className="absolute inset-0 vignette-radial pointer-events-none"
          aria-hidden="true"
        />

        {/* Top and bottom subtle masks */}
        <div
          className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#060a0e] via-[#060a0e]/50 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060a0e] via-[#060a0e]/70 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Grain texture */}
        <div className="absolute inset-0 bg-noise pointer-events-none" aria-hidden="true" />

        {/* Parallax Overlay */}
        {children && children(smoothProgress)}
      </div>
    </div>
  );
}
