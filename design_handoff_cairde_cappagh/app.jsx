// app.jsx — nav, hero (3 variants), footer, tweaks, assembly
const { useState: useS, useEffect: useE } = React;

const CREST = "assets/cc-crest.png";
const SHIELD = "assets/cc-shield.png";

const FONT_PAIRS = {
  heritage:  { display: "'Marcellus', serif",            body: "'Source Sans 3', sans-serif", label: "Heritage" },
  editorial: { display: "'Cormorant Garamond', serif",   body: "'Mulish', sans-serif",        label: "Editorial" },
  modern:    { display: "'Archivo', sans-serif",         body: "'Public Sans', sans-serif",   label: "Modern" },
};

const NAV_LINKS = [
  { href: "#about", t: "About" },
  { href: "#how", t: "How it works" },
  { href: "#impact", t: "Your impact" },
  { href: "#club", t: "Our Club" },
  { href: "#faq", t: "FAQ" },
];

function Nav() {
  const [scrolled, setScrolled] = useS(false);
  useE(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on(); window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <a href="#top" className="nav-brand">
        <img src={SHIELD} alt="Cairde Cappagh crest" />
        <span className="bn"><b>CAIRDE CAPPAGH</b><span>Friends of Cappagh</span></span>
      </a>
      <div className="nav-links">
        {NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.t}</a>)}
      </div>
      <a href="#join" className="btn btn-gold nav-cta">Join the Scheme</a>
    </nav>
  );
}

function HeroStats() {
  return (
    <div className="hero-stats">
      <div className="st"><b>£20</b><span>per month</span></div>
      <div className="st"><b>100%</b><span>to club development</span></div>
    </div>
  );
}

function Hero({ layout }) {
  const motto = (
    <div className="hero-motto">
      <span className="motto-ga">Ní neart go cur le chéile</span>
      <span className="motto-en">There is no strength without unity</span>
    </div>
  );
  const cta = (
    <div className="hero-cta">
      <a href="#join" className="btn btn-gold">Become a Friend</a>
      <a href="#about" className="btn btn-ghost-light">Read our story</a>
    </div>
  );

  let inner;
  if (layout === "split") {
    inner = (
      <div className="wrap hero-split-grid">
        <div>
          {motto}
          <h1 style={{ marginTop: 26 }}>Build the future of Cappagh GAA.</h1>
          <p className="hero-sub">Cairde Cappagh is how the Parish invests directly in coaching, facilities and the next generation of players. Stand with us.</p>
          {cta}
          <div style={{ marginTop: 40 }}><HeroStats /></div>
        </div>
        <div className="hero-visual">
          <img className="hero-shield" src={SHIELD} alt="Cairde Cappagh crest" />
        </div>
      </div>
    );
  } else if (layout === "banner") {
    inner = (
      <React.Fragment>
        <img className="hero-banner-watermark" src={SHIELD} alt="" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-banner-inner">
            {motto}
            <h1 style={{ marginTop: 24 }}>Friends of Cappagh</h1>
            <p className="hero-sub">A fundraising effort by Killyclogher St&nbsp;Mary's&nbsp;/&nbsp;Cappagh GAA — building first-class facilities and coaching for every member of the Parish.</p>
            {cta}
            <div style={{ marginTop: 44 }}><HeroStats /></div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    inner = (
      <div className="wrap">
        <img className="hero-shield" src={SHIELD} alt="Cairde Cappagh crest" />
        {motto}
        <h1 style={{ marginTop: 28 }}>Build the future of Cappagh GAA.</h1>
        <p className="hero-sub">Cairde Cappagh — Friends of Cappagh — is how the Parish invests directly in the coaching, facilities and players of tomorrow.</p>
        {cta}
        <div style={{ marginTop: 48 }}><HeroStats /></div>
      </div>
    );
  }

  const cls = "hero hero-" + layout + (layout === "centered" ? " hero-centered" : layout === "split" ? " hero-split" : " hero-banner");
  return (
    <header id="top" className={cls}>
      <div className="hero-bg"><div className="rays"></div></div>
      <div className="hero-vignette"></div>
      {inner}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="rays"></div>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={CREST} alt="Cairde Cappagh — Friends of Cappagh" />
            <div className="footer-ga">Ní neart go cur le chéile</div>
            <div className="footer-en">There is no strength without unity</div>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h5>The Scheme</h5>
              {NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.t}</a>)}
              <a href="#join">Join now</a>
            </div>
            <div className="footer-col">
              <h5>The Club</h5>
              <a href="#club">Killyclogher St Mary's</a>
              <a href="#club">Cappagh GAA</a>
              <a href="#club">Ballinamullan complex</a>
              <a href="#impact">Our developments</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Killyclogher St Mary's / Cappagh GAA · CLG Coill an Chlochair N. Mhuire / Ceapach</span>
          <span>Cairde Cappagh · Friends of Cappagh</span>
        </div>
      </div>
    </footer>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroLayout": "split",
  "fontPair": "heritage"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  useE(() => {
    const fp = FONT_PAIRS[t.fontPair] || FONT_PAIRS.heritage;
    document.documentElement.style.setProperty("--font-display", fp.display);
    document.documentElement.style.setProperty("--font-body", fp.body);
  }, [t.fontPair]);

  return (
    <React.Fragment>
      <Nav />
      <Hero layout={t.heroLayout} />
      <WhatIs />
      <HowItWorks />
      <MoneyGoes />
      <WhatWeDo />
      <FAQ />
      <Donate />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio label="Layout" value={t.heroLayout}
          options={["centered", "split", "banner"]}
          onChange={(v) => setTweak("heroLayout", v)} />
        <TweakSection label="Typography" />
        <TweakSelect label="Font pairing" value={t.fontPair}
          options={Object.keys(FONT_PAIRS).map((k) => ({ value: k, label: FONT_PAIRS[k].label }))}
          onChange={(v) => setTweak("fontPair", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
