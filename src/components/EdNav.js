'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function EdNav() {
  const navRef = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="ed-nav" ref={navRef}>
      <div className="ed-nav-logo">
        <Link href="/">
          <Image src="/assets/Gosnail-logo-default.svg" alt="Gosnail" width={120} height={28} priority />
        </Link>
      </div>
      <div className="ed-nav-links">
        <Link href="/il-metodo">Il Metodo</Link>
        <Link href="/zoho-one">Zoho One</Link>
        <Link href="/#approccio">Approccio</Link>
      </div>
      <Link href="/contatti" className="ed-nav-cta">
        Prenota una call <span aria-hidden>→</span>
      </Link>
    </nav>
  )
}
