'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-logo">
        <Link href="/">
          <Image src="/assets/Gosnail-logo-default.svg" alt="Gosnail" width={120} height={32} priority />
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/#chi-siamo">Chi Siamo</Link>
        <Link href="/#soluzioni">Soluzioni</Link>
        <Link href="/il-metodo">Il Nostro Metodo</Link>
      </div>
      <Link href="/contatti" className="nav-cta">Contattaci</Link>
    </nav>
  )
}
