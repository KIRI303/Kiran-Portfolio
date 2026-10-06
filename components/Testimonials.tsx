import { TextReveal } from "./ui/TextReveal";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Kiran consistently delivers exceptional software architecture and frontend craft that perfectly aligns with our business goals, while maintaining reliable communication and hitting tight deadlines.",
      author: "Alex Rivera",
      role: "VP of Engineering at CloudScale",
    },
    {
      quote:
        "He takes highly complex distributed systems data and turns it into interfaces that feel simple, fast, and obvious. Never afraid to push back with a significantly better solution.",
      author: "Sarah Chen",
      role: "CTO at Nexus Platforms",
    },
  ];

  return (
    <section className="py-24 border-t border-gray-200 bg-neutral-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-muted mb-3">
            <TextReveal as="span">
              <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">[ Testimonials ]</span></span>
            </TextReveal>
          </p>
          <TextReveal as="h2" className="text-3xl md:text-4xl font-medium tracking-tight">
            <span className="block overflow-hidden"><span className="reveal-line-inner block">Results speak louder.</span></span>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="border-l-2 border-neutral-900 pl-6 py-2">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6 italic">
                <TextReveal as="span">
                  <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">"{t.quote}"</span></span>
                </TextReveal>
              </p>
              <div>
                <p className="font-semibold text-foreground">
                  <TextReveal as="span">
                    <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">{t.author}</span></span>
                  </TextReveal>
                </p>
                <p className="text-sm text-muted">
                   <TextReveal as="span">
                    <span className="overflow-hidden inline-block"><span className="reveal-line-inner inline-block">{t.role}</span></span>
                  </TextReveal>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
