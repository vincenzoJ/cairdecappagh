const items = [
  {
    q: "What is Cairde Cappagh?",
    a: "Cairde Cappagh is the fundraising scheme for Killyclogher St Mary's / Cappagh GAA Club. Every penny goes straight into the further progression and development of our club.",
  },
  {
    q: "How does it work?",
    a: "Members subscribe to a monthly payment of £20, equating to £240 per year. Alternatively, members can make a once-yearly payment of £240 to the scheme.",
  },
  {
    q: "Where does the money go?",
    a: "We aim to ensure that our youth and adult playing members receive the best coaching available so they can fulfil their potential. We also continuously strive to provide the best facilities, including our latest multi-functional fully covered rebound ball wall.",
  },
  {
    q: "What do I get for donating?",
    a: "From a tangible point of view; nothing. The reason for donating is purely benevolent — you agree that a strong GAA Club enriches all our lives, you support the work we do for the youth of the Parish, and you recognise that these things cost money. As a small token of appreciation, we will supply official Cairde Cappagh apparel.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy mb-4">
            About Cairde Cappagh
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </div>
        <div className="grid gap-8 sm:gap-10">
          {items.map(({ q, a }) => (
            <div key={q} className="flex gap-4 sm:gap-6">
              <div className="w-1 bg-gold rounded-full flex-shrink-0" />
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-navy mb-2">{q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
