import Reveal from "./Reveal";

const ALLOC = [
  { ic: "✦", h: "Coaching", p: "The best coaching available so our youth and adult members can fulfil their potential." },
  { ic: "◈", h: "Facilities", p: "Continually improving the grounds and amenities at our Ballinamullan complex." },
  { ic: "❖", h: "Development", p: "Major projects like our multi-functional, fully covered rebound ball wall." },
  { ic: "✚", h: "The Future", p: "Further development plans to complement our already excellent facilities." },
];

export default function MoneyGoes() {
  return (
    <section id="impact" className="band money">
      <div className="rays" />
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Where the money goes</span>
          <h2 className="sec-title" style={{ color: "#fff" }}>Every penny, straight back into Cappagh.</h2>
          <p className="lead" style={{ marginTop: 18, maxWidth: "52ch", color: "rgba(255,255,255,.74)" }}>
            Cairde Cappagh income is used completely for Club development. It is not a draw, and it does not replace our weekly Lotto — it is how we build for the generations to come.
          </p>
        </Reveal>
        <Reveal>
          <div className="alloc">
            {ALLOC.map((a) => (
              <div className="cell" key={a.h}>
                <div className="ic">{a.ic}</div>
                <h4>{a.h}</h4>
                <p>{a.p}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
