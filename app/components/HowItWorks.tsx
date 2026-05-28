import Reveal from "./Reveal";

const STEPS = [
  { n: "01", h: "Choose your support", p: "Pledge £20 a month by Direct Debit, or make a single yearly payment of £240. Whatever suits you best." },
  { n: "02", h: "Every penny goes to the Club", p: "Your contribution funds coaching and facility development — not day-to-day running costs. This is for our future." },
  { n: "03", h: "Wear it with pride", p: "As a small token of our appreciation, every member receives official Cairde Cappagh apparel." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="band">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <span className="eyebrow center">How it works</span>
            <h2 className="sec-title" style={{ maxWidth: "20ch", margin: "18px auto 0" }}>How Cairde Cappagh works.</h2>
            <p className="lead" style={{ marginTop: 18, maxWidth: "60ch", margin: "18px auto 0" }}>
              Members agree to support the Club in a way that works for them.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="num">{s.n}</div>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
