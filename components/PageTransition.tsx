"use client";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export function PageTransition() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Ensure curtain starts off-screen on mount
    if (curtainRef.current) {
      gsap.set(curtainRef.current, { yPercent: 100 });
    }
  }, []);

  // Reset curtain when pathname changes (for future multi-page support)
  useEffect(() => {
    if (curtainRef.current) {
      setTimeout(() => {
        gsap.to(curtainRef.current, {
          yPercent: 100,
          duration: 0,
        });
      }, 50);
    }
  }, [pathname]);

  const triggerTransition = (callback?: () => void) => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!curtainRef.current) return;

    if (prefersReducedMotion) {
      // Skip animation, execute callback immediately
      callback?.();
      setTimeout(() => {
        if (curtainRef.current) {
          gsap.set(curtainRef.current, { yPercent: 100 });
        }
      }, 50);
      return;
    }

    const mainContent = document.querySelector("main");
    const navbarInner = document.querySelector(".navbar-transition-inner");
    const pageContent = mainContent?.querySelector<HTMLElement>(".page-content");

    // Create outgoing timeline
    const outgoingTl = gsap.timeline({
      onComplete: () => {
        // Scroll to top while curtain is covering
        window.scrollTo({ top: 0, behavior: "instant" });

        // Reset page content position.
        if (pageContent) {
          gsap.set(pageContent, { clearProps: "transform" });
        }

        // Reset navbar inner to normal state
        if (navbarInner) {
          gsap.set(navbarInner, { y: 0, opacity: 1, clearProps: "y,opacity,transform" });
        }

        // Execute callback (for animation reset)
        callback?.();

        // Create incoming timeline (curtain lowers, animations play)
        const incomingTl = gsap.timeline();

        // Lower curtain to reveal page
        incomingTl.to(curtainRef.current, {
          yPercent: 100,
          duration: 0.6,
          ease: "power3.inOut",
          delay: 0.1,
        });

        // Trigger navbar and hero animation reset via global events
        window.dispatchEvent(new CustomEvent("resetNavbarAnimation"));
        window.dispatchEvent(new CustomEvent("resetHeroAnimation"));
      },
    });

    // Outgoing: Subtle upward movement of current page content
    if (pageContent) {
      outgoingTl.to(
        pageContent,
        {
          y: -20,
          duration: 1.3,
          ease: "power3.inOut",
        },
        0
      );
    }

    // Outgoing: Navbar inner exits upward (not the header itself)
    if (navbarInner) {
      outgoingTl.to(
        navbarInner,
        {
          y: -100,
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
        },
        0.1
      );
    }

    // Outgoing: White curtain rises
    outgoingTl.to(
      curtainRef.current,
      {
        yPercent: 0,
        duration: 1.3,
        ease: "power3.inOut",
      },
      0
    );
  };

  // Expose the trigger function globally
  useEffect(() => {
    (window as any).__triggerPageTransition = triggerTransition;
    return () => {
      delete (window as any).__triggerPageTransition;
    };
  }, []);

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 bg-white pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
}
