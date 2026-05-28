import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="#hero" className="flex items-center gap-3 min-w-0">
          <Image src="/cc-removebg-preview.png" alt="Cairde Cappagh" width={36} height={36} className="flex-shrink-0" />
          <span className="font-serif font-bold text-gold text-lg hidden sm:block truncate">Cairde Cappagh</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6 text-sm font-medium text-white/80">
          <Link href="#about" className="hover:text-gold transition-colors hidden sm:block">About</Link>
          <Link href="#what-we-do" className="hover:text-gold transition-colors hidden md:block">What We Do</Link>
          <Link href="#faq" className="hover:text-gold transition-colors hidden sm:block">FAQ</Link>
          <Link
            href="#join"
            className="bg-gold text-navy px-4 py-2 rounded-full font-semibold hover:bg-gold-light transition-colors whitespace-nowrap"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
