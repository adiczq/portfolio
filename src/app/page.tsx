import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Stack from "@/components/home/Stack";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

        <Reveal>
          <Stack />
        </Reveal>

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}