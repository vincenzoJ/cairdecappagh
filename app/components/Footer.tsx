import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="rays" />
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/cc-removebg-preview.png" alt="Cairde Cappagh — Friends of Cappagh" width={84} height={100} style={{ height: 84, width: "auto" }} />
            <div className="footer-ga">Ní neart go cur le chéile</div>
            <div className="footer-en">There is no strength without unity</div>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h5>The Scheme</h5>
              <a href="#about">About</a>
              <a href="#how">How it works</a>
              <a href="#impact">Your impact</a>
              <a href="#club">Our Club</a>
              <a href="#faq">FAQ</a>
              <a href="#join">Join now</a>
            </div>
            <div className="footer-col">
              <h5>The Club</h5>
              <a href="#club">Killyclogher St Mary&apos;s</a>
              <a href="#club">Cappagh GAA</a>
              <a href="#club">Ballinamullan complex</a>
              <a href="#impact">Our developments</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Killyclogher St Mary&apos;s / Cappagh GAA · CLG Coill an Chlochair N. Mhuire / Ceapach</span>
          <span>Cairde Cappagh · Friends of Cappagh</span>
        </div>
      </div>
    </footer>
  );
}
