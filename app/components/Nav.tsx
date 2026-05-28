"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a href="#top" className="nav-brand">
        <Image src="/cc-shield.png" alt="Cairde Cappagh" width={46} height={46} style={{ height: 46, width: "auto" }} />
        <span className="bn">
          <b>CAIRDE CAPPAGH</b>
          <span>Friends of Cappagh</span>
        </span>
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#how">How it works</a>
        <a href="#impact">Your impact</a>
        <a href="#club">Our Club</a>
        <a href="#faq">FAQ</a>
      </div>
      <a href="#join" className="btn btn-gold nav-cta">Join the Scheme</a>
    </nav>
  );
}
