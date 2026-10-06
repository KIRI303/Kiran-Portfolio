"use client";

import { useEffect } from "react";
import { TextReveal } from "./ui/TextReveal";

export function Hero() {
  useEffect(() => {
    // Listen for hero animation reset event
    const handleReset = () => {
      // Find all hero reveal elements
      const heroContainer = document.querySelector("h1");
      if (!heroContainer) return;

      const lines = heroContainer.querySelectorAll(".reveal-line-inner");
      if (!lines.length) return;

      // Import gsap dynamically to reset and replay animation
      import("gsap").then(({ default: gsap }) => {
        // Reset to initial state
        gsap.set(lines, { yPercent: 100, opacity: 0 });

        // Replay animation with same timing as initial load
        gsap.fromTo(
          lines,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.8,
            ease: "power3.out",
            stagger: 0.18,
            delay: 0.55, // 0.35s original + 0.2s navbar offset
          }
        );
      });
    };

    window.addEventListener("resetHeroAnimation", handleReset);
    return () => {
      window.removeEventListener("resetHeroAnimation", handleReset);
    };
  }, []);

  return (
    <section className="pt-48 pb-32 max-w-6xl mx-auto px-6">
      <div className="max-w-3xl">
          <TextReveal animateOnLoad as="h1" className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8" delay={0.35}>
            <span className="block overflow-hidden"><span className="reveal-line-inner block">Hey, I'm Kiran.</span></span>
            <span className="block overflow-hidden"><span className="reveal-line-inner block">I design websites and SaaS products</span></span>
            <span className="block overflow-hidden"><span className="reveal-line-inner block">that convert, simplify, and scale.</span></span>
          </TextReveal>
      </div>
      <div className="flex gap-16 mt-20 pt-8 border-t border-gray-200">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-2">
            <TextReveal as="span">
              <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">Experience</span></span>
            </TextReveal>
          </p>
          <p className="text-2xl font-medium">
            <TextReveal as="span">
              <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">10+ Years</span></span>
            </TextReveal>
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-2">
            <TextReveal as="span">
              <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">Projects</span></span>
            </TextReveal>
          </p>
          <p className="text-2xl font-medium">
            <TextReveal as="span">
              <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">100+ Shipped</span></span>
            </TextReveal>
          </p>
        </div>
      </div>
    </section>
  );
}
