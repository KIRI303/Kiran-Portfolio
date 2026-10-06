"use client";

import { useState } from "react";
import { TextReveal } from "./ui/TextReveal";

export function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "kiran@example.com";
  const phone = "+1 (555) 019-2834";

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <footer id="contact" className="py-24 border-t border-gray-200 bg-neutral-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
          <div>
            <TextReveal as="h2" className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
              <span className="block overflow-hidden"><span className="reveal-line-inner block">Let's build something together.</span></span>
            </TextReveal>
            <p className="text-muted text-lg">
              <TextReveal as="span">
                <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">Ready to start? Get in touch directly.</span></span>
              </TextReveal>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => copyToClipboard(email, "email")}
              className="px-6 py-3 border border-neutral-300 rounded-full text-sm font-medium hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200"
            >
              {copiedEmail ? "Copied Email!" : email}
            </button>

            <button
              onClick={() => copyToClipboard(phone, "phone")}
              className="px-6 py-3 border border-neutral-300 rounded-full text-sm font-medium hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200"
            >
              {copiedPhone ? "Copied Phone!" : phone}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200 text-sm">
          <div>
            <p className="font-semibold uppercase tracking-wider text-xs text-muted mb-4">Navigation</p>
            <ul className="space-y-2">
              <li><a href="#projects" className="hover:text-muted transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-muted transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-muted transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-wider text-xs text-muted mb-4">Social</p>
            <ul className="space-y-2">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div className="col-span-2 flex flex-col justify-between items-start md:items-end">
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              <TextReveal as="span">
                <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">PIXELS ARE SMALL // DETAILS ARE NOT</span></span>
              </TextReveal>
            </p>
            <p className="text-xs text-muted mt-4">
              © {new Date().getFullYear()} Kiran. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
