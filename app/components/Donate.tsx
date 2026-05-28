"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Plan = "monthly" | "yearly";

const PLANS = {
  monthly: { name: "Monthly", amt: "£20", per: "/ month", note: "£240 per year · Direct Debit", badge: "Most popular" },
  yearly: { name: "Yearly", amt: "£240", per: "/ year", note: "A single annual payment", badge: "Save the admin" },
};

const PERKS = [
  { b: "100% to development", s: "Your money funds coaching and facilities, never running costs." },
  { b: "No pressure, ever", s: "Cancel or change your support whenever you wish." },
  { b: "Official club apparel", s: "A small token of appreciation for every member." },
  { b: "Secure payments", s: "Card details are processed securely by Stripe." },
];

export default function Donate() {
  const [plan, setPlan] = useState<Plan>("monthly");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setEmailErr("Enter a valid email address.");
      return;
    }
    setEmailErr("");
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, email }),
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
    <section id="join" className="band donate">
      <div className="wrap">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 50px" }}>
            <span className="eyebrow center">Become a Friend of Cappagh</span>
            <h2 className="sec-title" style={{ maxWidth: "20ch", margin: "18px auto 0" }}>Join Cairde Cappagh</h2>
            <p className="lead" style={{ marginTop: 18, maxWidth: "60ch", margin: "18px auto 0" }}>
              Set up your support in under a minute. Choose the plan that suits you — every contribution goes straight into the future of our Club.
            </p>
          </div>
        </Reveal>
        <div className="donate-grid">
          <Reveal className="donate-left">
            <h3>Ní neart go cur le chéile</h3>
            <p>There is no strength without unity. When you join, you stand alongside everyone who is building a stronger Cappagh.</p>
            {PERKS.map((x) => (
              <div className="perk" key={x.b}>
                <span className="ck">✓</span>
                <div><b>{x.b}</b><span>{x.s}</span></div>
              </div>
            ))}
            <div className="standing-alt">
              <h5>Prefer a Standing Order?</h5>
              {[
                ["Beneficiary", "Killyclogher GFC"],
                ["Bank", "AIB"],
                ["Sort Code", "93-81-30"],
                ["Account", "16881876"],
                ["Amount", "£20.00 / month"],
                ["Reference", "Cairde Cappagh"],
              ].map(([label, value]) => (
                <div className="standing-row" key={label}>
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="checkout">
            <form onSubmit={handleSubmit} noValidate>
              <div className="plan-toggle">
                {(Object.entries(PLANS) as [Plan, typeof PLANS[Plan]][]).map(([k, v]) => (
                  <button
                    type="button"
                    key={k}
                    className={`plan${plan === k ? " active" : ""}`}
                    onClick={() => setPlan(k)}
                  >
                    <span className="pl-radio" />
                    <div className="pl-name">{v.name}</div>
                    <span className="pl-badge">{v.badge}</span>
                    <div className="pl-amt">{v.amt}<small> {v.per}</small></div>
                    <div className="pl-note">{v.note}</div>
                  </button>
                ))}
              </div>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  className="inp"
                  type="email"
                  placeholder="you@example.com"
                  inputMode="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (emailErr) setEmailErr(""); }}
                />
                {emailErr && <div className="errmsg">⚠ {emailErr}</div>}
              </div>
              {error && <div className="errmsg" style={{ marginTop: 12 }}>⚠ {error}</div>}
              <button type="submit" className="btn btn-gold pay-btn" disabled={loading}>
                {loading ? "Redirecting…" : plan === "monthly" ? "Subscribe · £20 / month" : "Pay £240 now"}
              </button>
              <div className="secured">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
                Secured by Stripe · 256-bit encryption
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
