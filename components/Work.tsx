"use client";

import { projects } from "../data/projects";
import { TextReveal } from "./ui/TextReveal";

export function Work() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <div className="flex items-end justify-between mb-16">
        <TextReveal as="h2" className="text-3xl font-medium">
          <span className="block overflow-hidden"><span className="reveal-line-inner block">[ Case Studies ]</span></span>
        </TextReveal>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="border-t border-gray-200 py-10 transition-colors group-hover:bg-gray-50 flex justify-between items-center -mx-6 px-6">
              <div className="flex-1">
                <p className="text-sm text-muted mb-3 font-mono">{String(index + 1).padStart(2, 'O')} // {project.tags.join(", ")}</p>
                <h3 className="text-2xl font-medium group-hover:underline decoration-2 underline-offset-4">
                  <TextReveal duration={0.6} stagger={0.05} as="span">
                    <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">{project.title}</span></span>
                  </TextReveal>
                </h3>
                <p className="mt-4 text-muted max-w-xl text-lg leading-relaxed">
                  <TextReveal duration={0.6} stagger={0.05} as="span">
                    <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">{project.description}</span></span>
                  </TextReveal>
                </p>
              </div>
              <div className="hidden md:block text-right">
                <span className="text-sm uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity">View Project →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
