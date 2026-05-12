'use client'
import { useEffect } from 'react'

export default function ClientEffects({ counters = false }) {
  useEffect(() => {
    // Scroll reveal via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!counters) return

    const animateCounters = () => {
      document.querySelectorAll('.js-count').forEach((el) => {
        const target = parseInt(el.dataset.target)
        const suffix = el.dataset.suffix || ''
        let start = 0
        const step = Math.ceil(target / 40)
        const timer = setInterval(() => {
          start = Math.min(start + step, target)
          el.textContent = start + suffix
          if (start >= target) clearInterval(timer)
        }, 30)
      })
    }

    const timeout = setTimeout(animateCounters, 800)
    return () => clearTimeout(timeout)
  }, [counters])

  return null
}
