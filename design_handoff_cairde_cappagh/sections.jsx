// sections.jsx — content sections for the Cairde Cappagh site
const { useState, useEffect, useRef } = React;

// reveal-on-scroll hook
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

function SectionTitle({ eyebrow, title, lead, center, light }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', maxWidth: center ? 720 : 'none', margin: center ? '0 auto' : 0 }}>
      <span className={"eyebrow" + (center ? " center" : "")}>{eyebrow}</span>
      <h2 className="sec-title" style={{ maxWidth: center ? '20ch' : undefined, marginLeft: center ? 'auto' : undefined, marginRight: center ? 'auto' : undefined, color: light ? '#fff' : undefined }}>{title}</h2>
      {lead && <p className="lead" style={{ marginTop: 18, maxWidth: center ? '60ch' : '52ch', marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}>{lead}</p>}
    </div>
  );
}

function WhatIs() {
  return (
    <section id="about" className="band band-cream">
      <div className="wrap">
        <div className="whatis-grid">
          <div className="reveal">
            <span className="eyebrow">Our Club · Our Future</span>
            <h2 className="sec-title">What is Cairde Cappagh?</h2>
            <div className="pull">
              <p>Cairde Cappagh is the latest fundraising effort by Killyclogher St&nbsp;Mary's&nbsp;/&nbsp;Cappagh GAA Club.</p>
            </div>
          </div>
          <div className="whatis-body reveal">
            <p>Cairde Cappagh — <em>Friends of Cappagh</em> — invites the people of the Parish and beyond to play a direct part in the progression and development of our Club.</p>
            <p>Every penny raised goes straight into our future: the best coaching for our youth and adult players, and first-class facilities for everyone who passes through our gates at Ballinamullan.</p>
            <p>It is, quite simply, a way of giving something back to your community — and of recognising that a strong GAA Club in the Parish enriches all our lives.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", h: "Choose your support", p: "Pledge £20 a month by Direct Debit, or make a single yearly payment of £240. Whatever suits you best." },
  { n: "02", h: "Every penny goes to the Club", p: "Your contribution funds coaching and facility development — not day-to-day running costs. This is for our future." },
  { n: "03", h: "Wear it with pride", p: "As a small token of our appreciation, every member receives official Cairde Cappagh apparel." },
];

function HowItWorks() {
  return (
    <section id="how" className="band">
      <div className="wrap">
        <div className="reveal">
          <SectionTitle eyebrow="How it works" title="Simple to join. Built to last." center
            lead="Members agree to support the Club in a way that works for them. There is no pressure to join — Cairde Cappagh is for those who believe in what we are building." />
        </div>
        <div className="steps reveal">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <div className="num">{s.n}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ALLOC = [
  { ic: "✦", h: "Coaching", p: "The best coaching available so our youth and adult members can fulfil their potential." },
  { ic: "◈", h: "Facilities", p: "Continually improving the grounds and amenities at our Ballinamullan complex." },
  { ic: "❖", h: "Development", p: "Major projects like our multi-functional, fully covered rebound ball wall." },
  { ic: "✚", h: "The Future", p: "Further development plans to complement our already excellent facilities." },
];

function MoneyGoes() {
  return (
    <section id="impact" className="band money">
      <div className="rays"></div>
      <div className="wrap">
        <div className="reveal">
          <SectionTitle eyebrow="Where the money goes" light
            title="Every penny, straight back into Cappagh."
            lead="Cairde Cappagh income is used completely for Club development. It is not a draw, and it does not replace our weekly Lotto — it is how we build for the generations to come." />
        </div>
        <div className="alloc reveal">
          {ALLOC.map((a) => (
            <div className="cell" key={a.h}>
              <div className="ic">{a.ic}</div>
              <h4>{a.h}</h4>
              <p>{a.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FACTS = [
  { k: "01", b: "Under-8s to Adult", s: "Teams fielded across every age grade in the Parish." },
  { k: "02", b: "Four codes", s: "Football, Ladies Football, Hurling and Handball." },
  { k: "03", b: "Scór na nÓg & Scór", s: "Participants renowned throughout the country for their success." },
  { k: "04", b: "Schools partnership", s: "Promoting our games and pastimes with the youth of the Parish." },
];

function WhatWeDo() {
  return (
    <section id="club" className="band band-cream">
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 44 }}>
          <SectionTitle eyebrow="What we do here"
            title="A modern home for a great tradition."
            lead="From the days of McCrossan's, McAleer's and McGrath's fields, we now find ourselves in a modern sporting complex at Ballinamullan — the result of a massive volunteer effort by our members." />
          <div className="codes">
            {["Football", "Ladies Football", "Hurling", "Handball", "Scór"].map((c) => (
              <span className="code-chip" key={c}><span className="dot"></span>{c}</span>
            ))}
          </div>
        </div>
        <div className="wwd-grid">
          <div className="reveal">
            <ul className="factlist">
              {FACTS.map((f) => (
                <li key={f.k}>
                  <span className="k">{f.k}</span>
                  <span className="v"><b>{f.b}</b><span>{f.s}</span></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="feature-card reveal">
            <div className="rays"></div>
            <div className="inner">
              <span className="tag">Latest Development</span>
              <h3>The Covered Ball Wall</h3>
              <p>Our newest project is a multi-functional, fully covered rebound ball wall — a year-round facility for skills, training and play, whatever the weather. It is exactly the kind of lasting investment Cairde Cappagh makes possible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "What do I get for donating?", a: "From a tangible point of view, nothing — the reason for donating is purely benevolent. You give because you believe a strong GAA Club enriches the whole Parish, and you recognise that first-class facilities and coaching cost money. As a small token of our appreciation, we supply official Cairde Cappagh apparel." },
  { q: "I already subscribe to the weekly Lotto. Is that not enough?", a: "Cairde Cappagh is not a replacement for our weekly Lotto — it is in addition to it. The Lotto funds the Club's day-to-day running costs, while Cairde Cappagh income is used completely for Club development. This is not a draw, and it does not guarantee you more Tyrone tickets." },
  { q: "Is now not a bad time to be asking for more?", a: "It is always a bad time to be asking for more. If we stopped fundraising whenever the economy was difficult, we would do nothing all year. That said, £20 a month is only the equivalent of a newspaper a day, or a few drinks at the weekend. We know many people have little excess cash, which is why we put no pressure on anyone to join — Cairde Cappagh will not be for everyone." },
  { q: "Can I give a single payment instead of monthly?", a: "Yes. Members can subscribe to a monthly Direct Debit of £20 per month (£240 per year), or make a single yearly payment of £240 to the Scheme — whichever is easier for you." },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="band">
      <div className="wrap">
        <div className="reveal">
          <SectionTitle eyebrow="Questions & answers" title="The honest answers" center
            lead="Everything you might be wondering about the Scheme, straight from the Club." />
        </div>
        <div className="faq reveal">
          {FAQS.map((f, i) => (
            <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="pm"></span>
              </button>
              <div className="faq-a" style={{ maxHeight: open === i ? 360 : 0 }}>
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { useReveal, SectionTitle, WhatIs, HowItWorks, MoneyGoes, WhatWeDo, FAQ });
