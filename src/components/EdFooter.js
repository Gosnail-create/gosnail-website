import Link from 'next/link'
import Image from 'next/image'

export default function EdFooter() {
  return (
    <footer className="ed-footer">
      <div className="ed-footer-inner">
        <div className="ed-footer-brand">
          <Image src="/assets/Gosnail-logo-white.svg" alt="Gosnail" width={150} height={35} />
          <p>Il partner strategico per la trasformazione digitale delle medie imprese italiane con l&apos;ecosistema Zoho.</p>
          <div className="ed-footer-zoho-logo">
            <img src="/assets/zoho-authorized-partner.svg" alt="Zoho Authorized Partner" />
          </div>
        </div>
        <div className="ed-footer-col">
          <h5>Suite</h5>
          <Link href="/zoho-one">Zoho One</Link>
          <Link href="/zoho-crm-plus">Zoho CRM Plus</Link>
        </div>
        <div className="ed-footer-col">
          <h5>Per dipartimento</h5>
          <Link href="/vendite">Vendite</Link>
          <Link href="/marketing">Marketing</Link>
          <Link href="/business-intelligence">Business Intelligence</Link>
          <Link href="/finanza">Finanza &amp; Contabilità</Link>
          <Link href="/customer-service">Customer Service</Link>
          <Link href="/operations">Operations</Link>
          <Link href="/risorse-umane">Risorse Umane</Link>
        </div>
        <div className="ed-footer-col">
          <h5>Studio</h5>
          <Link href="/il-metodo">Il Metodo</Link>
          <Link href="/chi-siamo">Chi Siamo</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contatti">Contatti</Link>
          <a href="mailto:info@gosnail.it">info@gosnail.it</a>
        </div>
      </div>
      <div className="ed-footer-bottom">
        <span>© 2025 Gosnail S.r.l. — P.IVA 03024380309</span>
        <span>Privacy · Cookie</span>
      </div>
    </footer>
  )
}
