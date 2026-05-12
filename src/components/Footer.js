import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Image src="/assets/Gosnail-logo-white.svg" alt="Gosnail" width={120} height={28} />
          <p>Il partner strategico per la trasformazione digitale delle medie imprese italiane con l&apos;ecosistema Zoho.</p>
          <div className="zoho-badge">
            <div className="zoho-dot"></div>Zoho Authorized Partner
          </div>
        </div>
        <div className="footer-col">
          <h4>Chi Siamo</h4>
          <Link href="/il-metodo">Il Nostro Metodo</Link>
          <Link href="/#chi-siamo">Perché Sceglierci</Link>
        </div>
        <div className="footer-col">
          <h4>Soluzioni</h4>
          <Link href="#">Zoho One</Link>
          <Link href="#">Zoho CRM Plus</Link>
          <Link href="/#soluzioni">Area Vendite</Link>
          <Link href="/#soluzioni">Marketing</Link>
        </div>
        <div className="footer-col">
          <h4>Contatti</h4>
          <Link href="/contatti">Prenota una demo</Link>
          <a href="mailto:info@gosnail.it">info@gosnail.it</a>
          <a href="#">Via Nazionale, 40 — Tavagnacco UD</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Gosnail S.r.l. — P.IVA 03024380309</span>
        <span>Privacy Policy · Cookie Policy</span>
      </div>
    </footer>
  )
}
