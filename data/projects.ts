export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Project Obsidian",
    description:
      "A high-performance asynchronous data pipeline built for real-time stream processing and distributed task scheduling.",
    tags: ["Rust", "Tokio", "WebSockets", "TimescaleDB"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Aether UI",
    description:
      "A lightweight, highly customizable design system and component library built with accessibility and zero-runtime CSS in mind.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    link: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Chronos Engine",
    description:
      "An experimental state-driven simulation engine for modeling complex dynamic networks and interactive systems.",
    tags: ["TypeScript", "Canvas API", "WebGL", "Algorithms"],
    link: "https://example.com",
    github: "https://github.com",
  },
];
