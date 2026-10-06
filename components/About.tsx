import { TextReveal } from "./ui/TextReveal";

export function About() {
  return (
    <section id="about" className="py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <TextReveal as="h2" className="text-3xl font-medium mb-16">
          <span className="block overflow-hidden"><span className="reveal-line-inner block">[ About Me ]</span></span>
        </TextReveal>

        <div className="grid md:grid-cols-2 gap-16 text-lg text-muted leading-relaxed">
          <div>
            <p className="mb-6 text-foreground font-medium">
              <TextReveal as="span">
                <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">I'm Kiran, an engineer and designer crafting digital tools and web applications.</span></span>
              </TextReveal>
            </p>
            <p>
              <TextReveal as="span">
                <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">My background sits right at the intersection of deep systems logic and clean, intuitive interface craft. I focus on creating fast, scalable, and beautifully detailed digital experiences.</span></span>
              </TextReveal>
            </p>
          </div>
          <div>
            <p className="mb-6">
              <TextReveal as="span">
                <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">When I'm not coding or designing, I'm exploring new technologies, contributing to open-source systems, and diving into dynamic interaction design.</span></span>
              </TextReveal>
            </p>
            <p>
              <TextReveal as="span">
                <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">I partner with companies worldwide to build high-performance products that solve real problems.</span></span>
              </TextReveal>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
