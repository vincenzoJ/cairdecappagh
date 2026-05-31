import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-05-27.dahlia",
  });
}

export async function POST(req: NextRequest) {
  const { plan, email } = await req.json();

  if (plan !== "monthly" && plan !== "yearly") {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Online payments coming soon" },
      { status: 503 }
    );
  }

  const stripe = getStripe();
  const origin = req.headers.get("origin") ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: plan === "monthly" ? "subscription" : "payment",
    customer_email: email || undefined,
    line_items: [
      {
        price_data:
          plan === "monthly"
            ? {
                currency: "gbp",
                product_data: { name: "Cairde Cappagh — Monthly Membership" },
                unit_amount: 2000,
                recurring: { interval: "month" },
              }
            : {
                currency: "gbp",
                product_data: { name: "Cairde Cappagh — Annual Membership" },
                unit_amount: 24000,
              },
        quantity: 1,
      },
    ],
    metadata: { plan },
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/#join`,
  });

  return NextResponse.json({ url: session.url });
}
