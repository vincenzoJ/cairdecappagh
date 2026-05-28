import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 text-center">
      <Image src="/cc-removebg-preview.png" alt="Cairde Cappagh" width={120} height={144} className="mb-8" />
      <div className="w-16 h-16 bg-gold/20 border-2 border-gold rounded-full flex items-center justify-center mb-6">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a52a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h1 className="font-serif text-4xl font-bold text-gold mb-3">Go raibh maith agat!</h1>
      <p className="text-white/60 text-lg mb-2">Thank you for joining Cairde Cappagh.</p>
      <p className="text-white/50 text-sm max-w-md mb-10">
        Your support goes directly to developing our club and community. You will receive a
        confirmation email shortly. Official Cairde Cappagh apparel will be in touch.
      </p>
      <p className="font-serif text-xl text-gold italic mb-1">Ní neart go cur le chéile</p>
      <p className="text-white/40 text-xs tracking-widest uppercase mb-10">There is no strength without unity</p>
      <Link href="/" className="text-sky hover:text-white transition-colors text-sm">
        ← Back to home
      </Link>
    </main>
  );
}
