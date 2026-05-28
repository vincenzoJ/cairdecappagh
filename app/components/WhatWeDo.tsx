const activities = [
  { icon: "⚽", label: "Football", desc: "Teams from Under-8s to Senior Adult level" },
  { icon: "👩‍⚽", label: "Ladies Football", desc: "Competitive ladies teams at all levels" },
  { icon: "🏑", label: "Hurling", desc: "Gaelic hurling with a proud tradition" },
  { icon: "🤾", label: "Handball", desc: "A sport deeply rooted in our community" },
  { icon: "🎭", label: "Scór na nÓg", desc: "Renowned nationally for cultural excellence" },
  { icon: "🏫", label: "Schools Outreach", desc: "Promoting Gaelic games with our Parish youth" },
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
          {activities.map(({ icon, label, desc }) => (
            <div
              key={label}
              className="bg-navy-light border border-gold/20 rounded-2xl p-4 sm:p-6 text-center hover:border-gold/50 transition-colors"
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{icon}</div>
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
