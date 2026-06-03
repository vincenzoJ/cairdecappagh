import Image from "next/image";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "10vh" }}>
      <Image
        src="/cc-removebg-preview.png"
        alt="Cairde Cappagh crest"
        width={440}
        height={520}
        style={{ height: "min(440px, 60vw)", width: "auto" }}
        priority
      />
      <p style={{ marginTop: 24, fontSize: "1.5rem", fontWeight: 600 }}>Coming soon...</p>
    </main>
  );
}
