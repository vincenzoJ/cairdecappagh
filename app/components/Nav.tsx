"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}${open ? " nav-open" : ""}`}>
      <a href="#top" className="nav-brand" onClick={close}>
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
      <button className="nav-burger" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
        <span /><span /><span />
      </button>
      {open && (
        <div className="nav-mobile">
          <a href="#about" onClick={close}>About</a>
          <a href="#how" onClick={close}>How it works</a>
          <a href="#impact" onClick={close}>Your impact</a>
          <a href="#club" onClick={close}>Our Club</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <a href="#join" className="btn btn-gold" onClick={close}>Join the Scheme</a>
        </div>
      )}
    </nav>
  );
}
