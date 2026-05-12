'use client'
import { useEffect } from 'react'

export default function EdEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -80px 0px' }
    )
    document.querySelectorAll('.ed-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const animateCounters = () => {
      document.querySelectorAll('.js-ed-count').forEach((el) => {
        const target = parseFloat(el.dataset.target)
        const suffix = el.dataset.suffix || ''
        const isDecimal = target % 1 !== 0
        const duration = 1600
        const startTime = performance.now()
        const tick = (now) => {
          const elapsed = now - startTime
          const t = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          const value = target * eased
          el.textContent = isDecimal ? value.toFixed(1) + suffix : Math.floor(value) + suffix
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      })
    }

    const trigger = () => {
      animateCounters()
      window.removeEventListener('scroll', onScroll)
    }
    const onScroll = () => {
      if (window.scrollY < 200) trigger()
    }
    const t = setTimeout(trigger, 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
