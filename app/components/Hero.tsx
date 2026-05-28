import Image from "next/image";

export default function Hero() {
  return (
    <header id="top" className="hero hero-split">
      <div className="hero-bg"><div className="rays" /></div>
      <div className="hero-vignette" />
      <div className="wrap hero-split-grid" style={{ paddingTop: 40, paddingBottom: 120 }}>
        <div style={{ minWidth: 0 }}>
          <div className="hero-motto">
            <span className="motto-ga">Ní neart go cur le chéile</span>
            <span className="motto-en">There is no strength without unity</span>
          </div>
          <h1 style={{ marginTop: 26 }}>Build the future of Cappagh GAA.</h1>
          <p className="hero-sub" style={{ marginTop: 22 }}>
            Cairde Cappagh is how the Parish invests directly in coaching, facilities and the next generation of players. Stand with us.
          </p>
          <div className="hero-cta" style={{ marginTop: 34 }}>
            <a href="#join" className="btn btn-gold">Become a Friend</a>
            <a href="#about" className="btn btn-ghost-light">Read our story</a>
          </div>
          <div style={{ marginTop: 40 }}>
            <div className="hero-stats">
              <div className="st"><b>£20</b><span>per month</span></div>
              <div className="st"><b>100%</b><span>to club development</span></div>
            </div>
          </div>
        </div>
        <div className="hero-visual" style={{ alignSelf: "start", marginTop: 25 }}>
          <Image
            src="/cc-removebg-preview.png"
            alt="Cairde Cappagh crest"
            width={440}
            height={520}
            className="hero-shield"
            style={{ height: "min(440px, 46vw)", width: "auto", margin: "0 auto" }}
            priority
          />
        </div>
      </div>
    </header>
  );
}
