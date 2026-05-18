'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const SUITE = [
  { href: '/zoho-one',      label: 'Zoho One',      desc: 'L\'intera suite, 45+ app integrate' },
  { href: '/zoho-crm-plus', label: 'Zoho CRM Plus', desc: 'La piattaforma per le vendite e l\'esperienza cliente' },
]

const DEPARTMENTS = [
  { href: '/vendite',               label: 'Vendite',              tag: 'Zoho CRM' },
  { href: '/marketing',             label: 'Marketing',            tag: 'Marketing Automation' },
  { href: '/business-intelligence', label: 'Business Intelligence', tag: 'Zoho Analytics' },
  { href: '/finanza',               label: 'Finanza & Contabilità', tag: 'Zoho Books' },
  { href: '/customer-service',      label: 'Customer Service',     tag: 'Zoho Desk' },
  { href: '/operations',            label: 'Operations',           tag: 'Zoho Projects' },
  { href: '/risorse-umane',         label: 'Risorse Umane',        tag: 'Zoho People' },
]

export default function EdNav() {
  const navRef = useRef(null)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Chiude menu su cambio rotta
  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
  }, [pathname])

  // Chiude mega menu su Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMegaOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav className="ed-nav" ref={navRef}>
        <div className="ed-nav-logo">
          <Link href="/">
            <Image src="/assets/Gosnail-logo-default.svg" alt="Gosnail" width={120} height={28} priority />
          </Link>
        </div>

        <div className="ed-nav-links">
          <div
            className={`ed-nav-mega-wrap ${megaOpen ? 'open' : ''}`}
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              className="ed-nav-mega-trigger"
              onClick={() => setMegaOpen((v) => !v)}
              aria-expanded={megaOpen}
            >
              Soluzioni
              <span className="ed-nav-mega-caret" aria-hidden>▾</span>
            </button>
            <div className="ed-nav-mega" role="menu">
              <div className="ed-nav-mega-grid">
                <div className="ed-nav-mega-col">
                  <h6>Suite complete</h6>
                  {SUITE.map((s) => (
                    <Link key={s.href} href={s.href} className="ed-nav-mega-item ed-nav-mega-item-large">
                      <div className="ed-nav-mega-item-title">{s.label}</div>
                      <div className="ed-nav-mega-item-desc">{s.desc}</div>
                    </Link>
                  ))}
                </div>
                <div className="ed-nav-mega-col">
                  <h6>Per dipartimento</h6>
                  <div className="ed-nav-mega-dept">
                    {DEPARTMENTS.map((d) => (
                      <Link key={d.href} href={d.href} className="ed-nav-mega-item">
                        <div className="ed-nav-mega-item-title">{d.label}</div>
                        <div className="ed-nav-mega-item-tag">{d.tag}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/il-metodo">Il Metodo</Link>
          <Link href="/chi-siamo">Chi Siamo</Link>
          <Link href="/blog">Blog</Link>
        </div>

        <div className="ed-nav-right">
          <Link href="/contatti" className="ed-nav-cta">
            Prenota una call <span aria-hidden>→</span>
          </Link>
          <button
            className="ed-nav-burger"
            aria-label="Apri menu"
            onClick={() => setMobileOpen(true)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE PANEL */}
      <div className={`ed-mobile ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="ed-mobile-inner">
          <div className="ed-mobile-header">
            <Image src="/assets/Gosnail-logo-default.svg" alt="Gosnail" width={120} height={28} />
            <button className="ed-mobile-close" aria-label="Chiudi" onClick={() => setMobileOpen(false)}>×</button>
          </div>

          <div className="ed-mobile-section">
            <div className="ed-mobile-label">Soluzioni — Suite</div>
            {SUITE.map((s) => (
              <Link key={s.href} href={s.href} className="ed-mobile-link">
                {s.label}
              </Link>
            ))}
          </div>

          <div className="ed-mobile-section">
            <div className="ed-mobile-label">Per dipartimento</div>
            {DEPARTMENTS.map((d) => (
              <Link key={d.href} href={d.href} className="ed-mobile-link ed-mobile-link-sub">
                {d.label}
              </Link>
            ))}
          </div>

          <div className="ed-mobile-section">
            <Link href="/il-metodo" className="ed-mobile-link">Il Metodo</Link>
            <Link href="/chi-siamo" className="ed-mobile-link">Chi Siamo</Link>
            <Link href="/blog" className="ed-mobile-link">Blog</Link>
          </div>

          <div className="ed-mobile-footer">
            <Link href="/contatti" className="btn-ed-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <span>Prenota una call</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
