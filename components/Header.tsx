"use client";

import { useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Header() {
  const links = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Archive", href: "#archive" },
    { name: "Let's Talk", href: "#contact" },
  ];

  const headerRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const playEntranceAnimation = useCallback(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    if (!headerRef.current) return;

    const logo = headerRef.current.querySelector(".nav-logo");
    const navLinks = headerRef.current.querySelectorAll(".nav-link");

    if (!logo && !navLinks.length) return;

    // Animate logo first
    if (logo) {
      gsap.fromTo(
        logo,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power4.out",
          delay: 0.2,
          clearProps: "transform,opacity"
        }
      );
    }

    // Stagger nav links with slight delay after logo starts
    if (navLinks.length) {
      gsap.fromTo(
        navLinks,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power4.out",
          stagger: 0.08,
          delay: 0.28,
          clearProps: "transform,opacity"
        }
      );
    }
  }, []);

  // Initial entrance animation on mount
  useGSAP(
    () => {
      playEntranceAnimation();
    },
    { scope: headerRef }
  );

  // Listen for reset event from PageTransition
  useEffect(() => {
    const handleReset = () => {
      playEntranceAnimation();
    };

    window.addEventListener("resetNavbarAnimation", handleReset);
    return () => {
      window.removeEventListener("resetNavbarAnimation", handleReset);
    };
  }, [playEntranceAnimation]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Trigger page transition if available
    const triggerTransition = (window as any).__triggerPageTransition;
    if (triggerTransition) {
      triggerTransition();
    } else {
      // Fallback: scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md py-6"
    >
      <div className="navbar-transition-inner">
        <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm font-medium">
          <div className="overflow-hidden">
            <a
              href="/"
              onClick={handleLogoClick}
              className="nav-logo block text-xl font-bold"
            >
              Kiran
            </a>
          </div>
          <div className="flex gap-8">
            {links.map((link) => (
              <div key={link.name} className="overflow-hidden">
                <a
                  href={link.href}
                  className="nav-link block hover:text-muted transition-colors"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
