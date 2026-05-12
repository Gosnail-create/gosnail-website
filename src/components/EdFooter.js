import Link from 'next/link'
import Image from 'next/image'

export default function EdFooter() {
  return (
    <footer className="ed-footer">
      <div className="ed-footer-inner">
        <div className="ed-footer-brand">
          <Image src="/assets/Gosnail-logo-white.svg" alt="Gosnail" width={120} height={28} />
          <p>Il partner strategico per la trasformazione digitale delle medie imprese italiane con l&apos;ecosistema Zoho.</p>
          <div className="ed-footer-zoho">Zoho Authorized Partner</div>
        </div>
        <div className="ed-footer-col">
          <h5>Studio</h5>
          <Link href="/il-metodo">Il Nostro Metodo</Link>
          <Link href="/#approccio">Perché Sceglierci</Link>
        </div>
        <div className="ed-footer-col">
          <h5>Soluzioni</h5>
          <Link href="/zoho-one">Zoho One</Link>
          <Link href="#">Zoho CRM Plus</Link>
          <Link href="#">Area Vendite</Link>
          <Link href="#">Marketing</Link>
        </div>
        <div className="ed-footer-col">
          <h5>Contatti</h5>
          <Link href="/contatti">Prenota una demo</Link>
          <a href="mailto:info@gosnail.it">info@gosnail.it</a>
          <a href="#">Via Nazionale, 40 — Tavagnacco UD</a>
        </div>
      </div>
      <div className="ed-footer-bottom">
        <span>© 2025 Gosnail S.r.l. — P.IVA 03024380309</span>
        <span>Privacy · Cookie</span>
      </div>
    </footer>
  )
}
