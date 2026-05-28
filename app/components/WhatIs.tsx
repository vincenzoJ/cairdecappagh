import Reveal from "./Reveal";

export default function WhatIs() {
  return (
    <section id="about" className="band band-cream">
      <div className="wrap">
        <div className="whatis-grid">
          <Reveal>
            <span className="eyebrow">Our Club · Our Future</span>
            <h2 className="sec-title">What is Cairde Cappagh?</h2>
            <div className="pull">
              <p>Cairde Cappagh is the latest fundraising effort by Killyclogher St&nbsp;Mary&apos;s&nbsp;/&nbsp;Cappagh GAA Club.</p>
            </div>
          </Reveal>
          <Reveal className="whatis-body">
            <p>Cairde Cappagh — <em>Friends of Cappagh</em> — invites the people of the Parish and beyond to play a direct part in the progression and development of our Club.</p>
            <p>Every penny raised goes straight into our future: the best coaching for our youth and adult players, and first-class facilities for everyone who passes through our gates at Ballinamullan.</p>
            <p>It is, quite simply, a way of giving something back to your community — and of recognising that a strong GAA Club in the Parish enriches all our lives.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
