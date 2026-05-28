"use client";

import { useState } from "react";

type Plan = "monthly" | "annual";

export default function JoinSection() {
  const [plan, setPlan] = useState<Plan>("monthly");
  const [giftAid, setGiftAid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, giftAid }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <section id="join" className="bg-navy py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold mb-4">
            Become a Member
          </h2>
          <div className="w-16 h-1 bg-sky mx-auto mb-6" />
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base">
            Choose how you&apos;d like to support Cairde Cappagh. Every penny goes directly
            to club development.
          </p>
        </div>

        <div className="bg-white/5 border border-gold/20 rounded-2xl p-5 sm:p-8 flex flex-col gap-6 sm:gap-8">
          {/* Plan selection */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <button
              onClick={() => setPlan("monthly")}
              className={`rounded-xl border-2 p-4 sm:p-6 text-left transition-all ${
                plan === "monthly"
                  ? "border-gold bg-gold/10"
                  : "border-white/20 hover:border-white/40"
              }`}
            >
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Monthly</p>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-gold">£20</p>
              <p className="text-white/50 text-xs mt-1">per month · cancel anytime</p>
            </button>
            <button
              onClick={() => setPlan("annual")}
              className={`rounded-xl border-2 p-4 sm:p-6 text-left transition-all ${
                plan === "annual"
                  ? "border-gold bg-gold/10"
                  : "border-white/20 hover:border-white/40"
              }`}
            >
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Annual</p>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-gold">£240</p>
              <p className="text-white/50 text-xs mt-1">one payment · full year</p>
            </button>
          </div>

          {/* Gift Aid */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5 flex-shrink-0">
              <input
                type="checkbox"
                checked={giftAid}
                onChange={(e) => setGiftAid(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  giftAid ? "bg-gold border-gold" : "border-white/40 group-hover:border-gold/60"
                }`}
              >
                {giftAid && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#0d1b4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
            <div>
              <p className="text-white font-medium text-sm sm:text-base">Claim Gift Aid</p>
              <p className="text-white/50 text-xs sm:text-sm mt-0.5 leading-relaxed">
                I am a UK taxpayer and understand that if I pay less Income Tax and/or Capital
                Gains Tax than the amount of Gift Aid claimed on all my donations, it is my
                responsibility to pay any difference. Gift Aid lets the club reclaim 25p for every
                £1 donated at no extra cost to you.
              </p>
            </div>
          </label>

          {/* CTA */}
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full bg-gold text-navy font-bold py-4 rounded-full text-base sm:text-lg hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
          >
            {loading ? "Redirecting…" : `Join for ${plan === "monthly" ? "£20/month" : "£240/year"}`}
          </button>
          <p className="text-center text-white/40 text-xs">
            Secure payment via Stripe. You will be redirected to complete your payment.
          </p>
        </div>

        {/* Bank transfer alternative */}
        <div className="mt-6 sm:mt-8 border border-white/10 rounded-2xl p-5 sm:p-6">
          <h3 className="font-serif text-gold font-bold text-lg mb-3 sm:mb-4">
            Prefer a Standing Order?
          </h3>
          <p className="text-white/60 text-sm mb-4">
            Set up a standing order directly from your bank using the details below:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-8 sm:gap-y-2 text-sm">
            {[
              ["Beneficiary", "Killyclogher GFC"],
              ["Bank", "AIB"],
              ["Sort Code", "93-81-30"],
              ["Account", "16881876"],
              ["Amount", "£20.00 / month"],
              ["Reference", "Cairde Cappagh"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between sm:block border-b border-white/5 sm:border-0 pb-2 sm:pb-0">
                <span className="text-white/40">{label}</span>
                <p className="text-white font-medium sm:mt-0">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
