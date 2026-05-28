import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhatIs from "./components/WhatIs";
import HowItWorks from "./components/HowItWorks";
import MoneyGoes from "./components/MoneyGoes";
import WhatWeDo from "./components/WhatWeDo";
import FAQ from "./components/FAQ";
import Donate from "./components/Donate";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatIs />
        <HowItWorks />
        <MoneyGoes />
        <WhatWeDo />
        <FAQ />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
