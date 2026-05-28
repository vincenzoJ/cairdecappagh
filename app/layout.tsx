import type { Metadata } from "next";
import { Marcellus, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Cairde Cappagh — Friends of Cappagh GAA",
  description:
    "Support Killyclogher St Mary's / Cappagh GAA. Join Cairde Cappagh and help develop our club and community.",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${marcellus.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
