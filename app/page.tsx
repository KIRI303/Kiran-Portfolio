import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <>
      <PageTransition />
      <Header />
      <main className="min-h-screen bg-background text-foreground selection:bg-neutral-900 selection:text-white">
        <div className="page-content">
          <Hero />
          <Work />
          <Testimonials />
          <About />
          <Footer />
        </div>
      </main>
    </>
  );
}
