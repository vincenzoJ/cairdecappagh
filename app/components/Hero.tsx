import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-navy overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 px-6 py-24 w-full max-w-2xl mx-auto">
        <Image
          src="/cc-removebg-preview.png"
          alt="Cairde Cappagh — Friends of Cappagh"
          width={160}
          height={192}
          className="drop-shadow-2xl w-32 sm:w-44 h-auto"
          priority
        />
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-gold">
            CAIRDE CAPPAGH
          </h1>
          <p className="text-sky text-base sm:text-xl font-medium tracking-wider sm:tracking-widest uppercase">
            Friends of Cappagh
          </p>
          <p className="text-white/60 text-xs sm:text-sm tracking-widest uppercase mt-1">
            Killyclogher St Mary&apos;s / Cappagh GAA
          </p>
        </div>
        <div className="border-t border-gold/30 pt-5 flex flex-col items-center gap-1 w-full">
          <p className="font-serif text-xl sm:text-3xl text-gold italic">
            Ní neart go cur le chéile
          </p>
          <p className="text-white/70 text-xs sm:text-sm tracking-widest uppercase">
            There is no strength without unity
          </p>
        </div>
        <Link
          href="#join"
          className="mt-2 bg-gold text-navy font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-gold-light transition-colors shadow-lg"
        >
          Become a Member
        </Link>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 text-white/40 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
