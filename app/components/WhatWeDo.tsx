function FootballIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 mx-auto" aria-hidden>
      <circle cx="20" cy="20" r="18" stroke="#c9a52a" strokeWidth="1.5" />
      <polygon points="20,8 24,14 20,20 16,14" fill="none" stroke="#c9a52a" strokeWidth="1.2" />
      <line x1="20" y1="20" x2="20" y2="32" stroke="#c9a52a" strokeWidth="1.2" />
      <line x1="20" y1="20" x2="10" y2="27" stroke="#c9a52a" strokeWidth="1.2" />
      <line x1="20" y1="20" x2="30" y2="27" stroke="#c9a52a" strokeWidth="1.2" />
    </svg>
  );
}

function HurlingIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 mx-auto" aria-hidden>
      <path d="M8 34 Q14 22 28 8" stroke="#c9a52a" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 14 Q26 18 28 8 Q18 10 22 14Z" fill="none" stroke="#c9a52a" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="10" cy="32" r="3.5" stroke="#c9a52a" strokeWidth="1.4" />
    </svg>
  );
}

function HandballIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 mx-auto" aria-hidden>
      <circle cx="20" cy="20" r="10" stroke="#c9a52a" strokeWidth="1.5" />
      <path d="M12 14 Q20 10 28 14" stroke="#c9a52a" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M10 22 Q20 30 30 22" stroke="#c9a52a" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="10" x2="20" y2="30" stroke="#c9a52a" strokeWidth="1.2" />
    </svg>
  );
}

function ScorIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 mx-auto" aria-hidden>
      <path d="M20 6 L22.9 15.1 L32.4 15.1 L24.8 20.9 L27.6 30 L20 24.2 L12.4 30 L15.2 20.9 L7.6 15.1 L17.1 15.1 Z"
        stroke="#c9a52a" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function SchoolsIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 mx-auto" aria-hidden>
      <rect x="8" y="18" width="24" height="16" rx="1" stroke="#c9a52a" strokeWidth="1.4" />
      <path d="M6 18 L20 8 L34 18" stroke="#c9a52a" strokeWidth="1.4" strokeLinejoin="round" />
      <rect x="16" y="26" width="8" height="8" stroke="#c9a52a" strokeWidth="1.2" />
    </svg>
  );
}

const activities = [
  { Icon: FootballIcon, label: "Football", desc: "Teams from Under-8s to Senior Adult level" },
  { Icon: FootballIcon, label: "Ladies Football", desc: "Competitive ladies teams at all levels" },
  { Icon: HurlingIcon, label: "Hurling", desc: "Gaelic hurling with a proud tradition" },
  { Icon: HandballIcon, label: "Handball", desc: "A sport deeply rooted in our community" },
  { Icon: ScorIcon, label: "Scór na nÓg", desc: "Renowned nationally for cultural excellence" },
  { Icon: SchoolsIcon, label: "Schools Outreach", desc: "Promoting Gaelic games with our Parish youth" },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-navy py-16 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold mb-4">
            What We Do
          </h2>
          <div className="w-16 h-1 bg-sky mx-auto mb-6" />
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Thanks to our forefathers in the Parish, we carry on the great tradition of
            Gaelic Games and Culture in Cappagh. From the fields of old to our modern
            sporting complex at Ballinamullan — built by the volunteer effort of our members.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {activities.map(({ Icon, label, desc }) => (
            <div
              key={label}
              className="bg-navy-light border border-gold/20 rounded-2xl p-4 sm:p-6 text-center hover:border-gold/50 transition-colors"
            >
              <div className="mb-3 sm:mb-4">
                <Icon />
              </div>
              <h3 className="font-serif font-bold text-gold text-base sm:text-lg mb-1">{label}</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 sm:mt-14 bg-sky/10 border border-sky/30 rounded-2xl p-6 sm:p-8 text-center">
          <p className="font-serif text-lg sm:text-2xl text-white italic mb-2">
            &ldquo;Our main achievement is the massive number of people we cater for during a typical week.&rdquo;
          </p>
          <p className="text-white/50 text-xs sm:text-sm">
            This level of community participation has immeasurable social benefits. It makes Cappagh a better place for all of us to live in.
          </p>
        </div>
      </div>
    </section>
  );
}
