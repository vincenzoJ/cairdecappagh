"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is Cairde Cappagh a replacement for the weekly Lotto?",
    a: "No. Cairde Cappagh is in addition to the Lotto. The Lotto funds our Club's day-to-day running costs. Cairde Cappagh income is used completely for Club Development. This is not a draw, nor does it replace our Lotto. It does not guarantee you more Tyrone tickets.",
  },
  {
    q: "Is now not a bad time to be asking for more?",
    a: "It is always a bad time to be asking for more. If we stopped fundraising because the economy is bad then we would have done nothing all year. However, £20 per month is only the equivalent of a newspaper a day or a few drinks at the weekend. We accept that many people have very little excess cash and that is why we put no pressure on anyone to join. Cairde Cappagh will not be for everyone.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. Monthly subscribers can cancel their standing order or online subscription at any time. We ask for no minimum commitment and appreciate whatever support you can give.",
  },
  {
    q: "What is Gift Aid?",
    a: "If you are a UK taxpayer, the club can reclaim 25p of tax on every £1 you donate through Gift Aid at no extra cost to you. When joining online, simply tick the Gift Aid declaration box. This can significantly boost the value of your contribution.",
  },
  {
    q: "Can I pay annually instead of monthly?",
    a: "Yes. Rather than £20 per month, you can make a single payment of £240 for the full year. Both options are available when you join online.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-16 sm:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy mb-4">
            Questions & Answers
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex justify-between items-start text-left px-4 sm:px-6 py-4 sm:py-5 hover:bg-gray-50 transition-colors gap-3"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-serif font-semibold text-navy text-sm sm:text-base">{q}</span>
                <span className="text-gold flex-shrink-0 text-xl leading-none mt-0.5">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-600 leading-relaxed border-t border-gray-100 text-sm sm:text-base">
                  <p className="pt-4">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
