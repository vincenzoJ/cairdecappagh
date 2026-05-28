// donate.jsx — Donate / Join section with a validating Stripe-style card form
const { useState: useStateD } = React;

const PLANS = {
  monthly: { name: "Monthly", amt: "£20", per: "/ month", note: "£240 per year · Direct Debit", badge: "Most popular", stripe: "£20.00 GBP / month" },
  yearly:  { name: "Yearly",  amt: "£240", per: "/ year",  note: "A single annual payment", badge: "Save the admin", stripe: "£240.00 GBP / year" },
};

// ---- card helpers ----
function luhn(num) {
  let sum = 0, alt = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let d = parseInt(num[i], 10);
    if (alt) { d *= 2; if (d > 9) d -= 9; }
    sum += d; alt = !alt;
  }
  return sum % 10 === 0;
}
function cardBrand(num) {
  if (/^4/.test(num)) return { name: "VISA", color: "#1a1f71" };
  if (/^(5[1-5]|2[2-7])/.test(num)) return { name: "MC", color: "#eb001b" };
  if (/^3[47]/.test(num)) return { name: "AMEX", color: "#2e77bb" };
  if (/^6(011|5)/.test(num)) return { name: "DISC", color: "#f76b1c" };
  return null;
}
function fmtCard(v) {
  const d = v.replace(/\D/g, "").slice(0, 16);
  return d.replace(/(.{4})/g, "$1 ").trim();
}
function fmtExp(v) {
  const d = v.replace(/\D/g, "").slice(0, 4);
  if (d.length >= 3) return d.slice(0, 2) + " / " + d.slice(2);
  return d;
}

function Field({ label, children, error }) {
  return (
    <div className="field">
      <label>{label}</label>
      {children}
      {error && <div className="errmsg">⚠ {error}</div>}
    </div>
  );
}

function Donate() {
  const [plan, setPlan] = useStateD("monthly");
  const [f, setF] = useStateD({ name: "", email: "", card: "", exp: "", cvc: "" });
  const [err, setErr] = useStateD({});
  const [touched, setTouched] = useStateD({});
  const [status, setStatus] = useStateD("idle"); // idle | processing | done

  const brand = cardBrand(f.card.replace(/\s/g, ""));
  const set = (k, v) => { setF((p) => ({ ...p, [k]: v })); if (err[k]) setErr((p) => ({ ...p, [k]: null })); };

  function validate() {
    const e = {};
    const cardDigits = f.card.replace(/\s/g, "");
    if (!f.name.trim()) e.name = "Please enter the cardholder name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) e.email = "Enter a valid email address.";
    if (cardDigits.length < 15 || !luhn(cardDigits)) e.card = "Enter a valid card number.";
    const m = f.exp.replace(/\D/g, "");
    if (m.length < 4) e.exp = "Invalid expiry.";
    else {
      const mm = +m.slice(0, 2), yy = +m.slice(2);
      const now = new Date(); const cy = now.getFullYear() % 100; const cm = now.getMonth() + 1;
      if (mm < 1 || mm > 12) e.exp = "Invalid month.";
      else if (yy < cy || (yy === cy && mm < cm)) e.exp = "Card has expired.";
    }
    if (f.cvc.replace(/\D/g, "").length < 3) e.cvc = "Invalid CVC.";
    return e;
  }

  function submit(ev) {
    ev.preventDefault();
    const e = validate();
    setErr(e);
    setTouched({ name: 1, email: 1, card: 1, exp: 1, cvc: 1 });
    if (Object.keys(e).length) return;
    setStatus("processing");
    setTimeout(() => setStatus("done"), 1500);
  }

  const p = PLANS[plan];

  return (
    <section id="join" className="band donate">
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: 50 }}>
          <SectionTitle eyebrow="Become a Friend of Cappagh" center
            title="Join Cairde Cappagh"
            lead="Set up your support in under a minute. Choose the plan that suits you — every contribution goes straight into the future of our Club." />
        </div>
        <div className="donate-grid">
          {/* left: why join */}
          <div className="donate-left reveal">
            <h3 style={{ fontSize: 26, color: "var(--navy-900)", marginBottom: 8 }}>Ní neart go cur le chéile</h3>
            <p style={{ color: "var(--muted)", marginBottom: 22 }}>There is no strength without unity. When you join, you stand alongside everyone who is building a stronger Cappagh.</p>
            {[
              { b: "100% to development", s: "Your money funds coaching and facilities, never running costs." },
              { b: "No pressure, ever", s: "Cancel or change your support whenever you wish." },
              { b: "Official club apparel", s: "A small token of appreciation for every member." },
              { b: "Secure payments", s: "Card details are processed securely by Stripe." },
            ].map((x) => (
              <div className="perk" key={x.b}>
                <span className="ck">✓</span>
                <div><b>{x.b}</b><span>{x.s}</span></div>
              </div>
            ))}
          </div>

          {/* right: checkout */}
          <div className="checkout reveal">
            {status === "done" ? (
              <div className="success">
                <div className="badge">✓</div>
                <h3>Go raibh maith agat!</h3>
                <p>Thank you, {f.name.split(" ")[0] || "friend"}. Your {plan === "monthly" ? "monthly" : "yearly"} support of {p.amt} is set up. A confirmation is on its way to {f.email}.</p>
                <button className="btn btn-ghost" style={{ marginTop: 22 }} onClick={() => { setStatus("idle"); setF({ name: "", email: "", card: "", exp: "", cvc: "" }); setErr({}); setTouched({}); }}>Make another pledge</button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="plan-toggle">
                  {Object.entries(PLANS).map(([k, v]) => (
                    <button type="button" key={k} className={"plan" + (plan === k ? " active" : "")} onClick={() => setPlan(k)}>
                      <span className="pl-radio"></span>
                      <div className="pl-top"><span className="pl-name">{v.name}</span></div>
                      <span className="pl-badge">{v.badge}</span>
                      <div className="pl-amt">{v.amt}<small> {v.per}</small></div>
                      <div className="pl-note">{v.note}</div>
                    </button>
                  ))}
                </div>

                <Field label="Cardholder name" error={touched.name && err.name}>
                  <input className={"inp" + (touched.name && err.name ? " err" : "")} placeholder="Séamus Ó Néill"
                    value={f.name} onChange={(e) => set("name", e.target.value)} onBlur={() => setTouched((t) => ({ ...t, name: 1 }))} />
                </Field>

                <Field label="Email" error={touched.email && err.email}>
                  <input className={"inp" + (touched.email && err.email ? " err" : "")} placeholder="you@example.com" inputMode="email"
                    value={f.email} onChange={(e) => set("email", e.target.value)} onBlur={() => setTouched((t) => ({ ...t, email: 1 }))} />
                </Field>

                <Field label="Card details" error={touched.card && (err.card || err.exp || err.cvc)}>
                  <div className={"card-box" + (touched.card && (err.card || err.exp || err.cvc) ? " err" : "")}>
                    <input className="cc-num" placeholder="1234 1234 1234 1234" inputMode="numeric"
                      value={f.card} onChange={(e) => set("card", fmtCard(e.target.value))} onBlur={() => setTouched((t) => ({ ...t, card: 1 }))} />
                    {brand
                      ? <span className="card-brand" style={{ background: brand.color }}>{brand.name}</span>
                      : <span className="card-brand" style={{ background: "#cdd3e0", color: "#6b7390" }}>▢</span>}
                    <input className="cc-exp" placeholder="MM / YY" inputMode="numeric"
                      value={f.exp} onChange={(e) => set("exp", fmtExp(e.target.value))} onBlur={() => setTouched((t) => ({ ...t, card: 1 }))} />
                    <input className="cc-cvc" placeholder="CVC" inputMode="numeric"
                      value={f.cvc} onChange={(e) => set("cvc", e.target.value.replace(/\D/g, "").slice(0, 4))} onBlur={() => setTouched((t) => ({ ...t, card: 1 }))} />
                  </div>
                </Field>

                <button type="submit" className="btn btn-gold pay-btn" disabled={status === "processing"}>
                  {status === "processing"
                    ? <span>Processing…</span>
                    : <span>{plan === "monthly" ? `Subscribe · ${p.amt} / month` : `Pay ${p.amt} now`}</span>}
                </button>

                <div className="secured">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="10" width="16" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg>
                  Secured by Stripe · 256-bit encryption
                </div>
                <div className="stripe-note">This is a demonstration form, ready to connect to your live Stripe account.</div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Donate });
