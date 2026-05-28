import Reveal from "./Reveal";

const FACTS = [
  { k: "01", b: "Under-8s to Adult", s: "Teams fielded across every age grade in the Parish." },
  { k: "02", b: "Four codes", s: "Football, Ladies Football, Hurling and Handball." },
  { k: "03", b: "Scór na nÓg & Scór", s: "Participants renowned throughout the country for their success." },
  { k: "04", b: "Schools partnership", s: "Promoting our games and pastimes with the youth of the Parish." },
];

export default function WhatWeDo() {
  return (
    <section id="club" className="band band-cream">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">What we do here</span>
          <h2 className="sec-title">A modern home for a great tradition.</h2>
          <p className="lead" style={{ marginTop: 18, maxWidth: "52ch" }}>
            From the days of McCrossan&apos;s, McAleer&apos;s and McGrath&apos;s fields, we now find ourselves in a modern sporting complex at Ballinamullan — the result of a massive volunteer effort by our members.
          </p>
          <div className="codes">
            {["Football", "Ladies Football", "Hurling", "Handball", "Scór"].map((c) => (
              <span className="code-chip" key={c}>
                <span className="dot" />
                {c}
              </span>
            ))}
          </div>
        </Reveal>
        <div className="wwd-grid">
          <Reveal>
            <ul className="factlist">
              {FACTS.map((f) => (
                <li key={f.k}>
                  <span className="k">{f.k}</span>
                  <span className="v"><b>{f.b}</b><span>{f.s}</span></span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="feature-card">
            <div className="rays" />
            <div className="inner">
              <span className="tag">Latest Development</span>
              <h3>The Covered Ball Wall</h3>
              <p>Our newest project is a multi-functional, fully covered rebound ball wall — a year-round facility for skills, training and play, whatever the weather. It is exactly the kind of lasting investment Cairde Cappagh makes possible.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
