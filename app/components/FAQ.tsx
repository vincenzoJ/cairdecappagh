"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  { q: "What do I get for donating?", a: "From a tangible point of view, nothing — the reason for donating is purely benevolent. You give because you believe a strong GAA Club enriches the whole Parish, and you recognise that first-class facilities and coaching cost money. As a small token of our appreciation, we supply official Cairde Cappagh apparel." },
  { q: "I already subscribe to the weekly Lotto. Is that not enough?", a: "Cairde Cappagh is not a replacement for our weekly Lotto — it is in addition to it. The Lotto funds the Club's day-to-day running costs, while Cairde Cappagh income is used completely for Club development. This is not a draw, and it does not guarantee you more Tyrone tickets." },
  { q: "Is now not a bad time to be asking for more?", a: "It is always a bad time to be asking for more. If we stopped fundraising whenever the economy was difficult, we would do nothing all year. That said, £20 a month is only the equivalent of a newspaper a day, or a few drinks at the weekend. We know many people have little excess cash, which is why we put no pressure on anyone to join — Cairde Cappagh will not be for everyone." },
  { q: "Can I give a single payment instead of monthly?", a: "Yes. Members can subscribe to a monthly Direct Debit of £20 per month (£240 per year), or make a single yearly payment of £240 to the Scheme — whichever is easier for you." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="band">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <span className="eyebrow center">Questions &amp; answers</span>
            <h2 className="sec-title" style={{ maxWidth: "20ch", margin: "18px auto 0" }}>Your questions answered</h2>
            <p className="lead" style={{ marginTop: 18, maxWidth: "60ch", margin: "18px auto 0" }}>
              Everything you might be wondering about the Scheme, straight from the Club.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="faq">
            {FAQS.map((f, i) => (
              <div className={`faq-item${open === i ? " open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="pm" />
                </button>
                <div className="faq-a" style={{ maxHeight: open === i ? 360 : 0 }}>
                  <div className="faq-a-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
