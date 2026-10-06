"use client";

import React, { useRef, ReactNode, ElementType } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface TextRevealProps {
  children: ReactNode | string;
  className?: string;
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
  triggerStart?: string;
  as?: ElementType;
  animateOnLoad?: boolean;
}

export function TextReveal({
  children,
  className = "",
  duration = 1.8,
  stagger = 0.18,
  delay = 0,
  ease = "power3.out",
  triggerStart = "top 85%",
  as: Component = "div",
  animateOnLoad = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Check for reduced motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) return;

      if (!containerRef.current) return;

      const lines = containerRef.current.querySelectorAll(
        ".reveal-line-inner, .reveal-block-inner",
      );
      if (!lines.length) return;

      if (animateOnLoad) {
        // Hero behavior: runs immediately
        gsap.to(containerRef.current, { opacity: 1, duration: 0 });
        gsap.fromTo(
          lines,
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: duration,
            ease: ease,
            stagger: stagger,
            delay: delay,
          },
        );
      } else {
        // Scroll behavior: trigger when entering viewport
        // Set container visible immediately (mask should be visible)
        gsap.set(containerRef.current, { opacity: 1 });

        gsap.fromTo(
          lines,
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: duration,
            ease: ease,
            stagger: stagger,
            delay: delay,
            scrollTrigger: {
              trigger: containerRef.current,
              start: triggerStart,
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <Component
      ref={containerRef as any}
      className={className}
      style={{ opacity: animateOnLoad ? 1 : 0 }}
    >
      {children}
    </Component>
  );
}
