import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import FAQ from "./components/FAQ";
import JoinSection from "./components/JoinSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <FAQ />
        <JoinSection />
      </main>
      <footer className="bg-navy border-t border-gold/20 py-8 px-6 text-center text-white/30 text-sm">
        <p>© {new Date().getFullYear()} Cairde Cappagh · Killyclogher St Mary&apos;s / Cappagh GAA</p>
        <p className="mt-1 font-serif italic text-white/20">Ní neart go cur le chéile</p>
      </footer>
    </>
  );
}
