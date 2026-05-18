import Link from 'next/link'
import EdNav from '@/components/EdNav'
import EdFooter from '@/components/EdFooter'

/**
 * Pagina "in costruzione" usata per i placeholder di tutte le voci di menu
 * non ancora sviluppate. Mantiene la coerenza visiva del sito.
 */
export default function PlaceholderPage({
  eyebrow,
  title,
  titleEm,
  description,
  relatedLink,
  relatedLabel,
}) {
  return (
    <>
      <EdNav />
      <section className="ed-placeholder">
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 320, height: 320, top: '10%', right: '-8%', opacity: 0.3 }}></div>
        <div className="ed-deco-blob ed-deco-blob--celestial" style={{ width: 260, height: 260, bottom: '10%', left: '-5%', opacity: 0.25 }}></div>

        <div className="ed-placeholder-inner">
          <div className="ed-pill">In costruzione</div>
          {eyebrow && <div className="ed-eyebrow" style={{ marginTop: 24 }}>{eyebrow}</div>}
          <h1 className="ed-display ed-placeholder-title">
            {title} {titleEm && <em>{titleEm}</em>}
          </h1>
          {description && (
            <p className="ed-placeholder-desc">{description}</p>
          )}

          <div className="ed-placeholder-cta">
            <Link href="/contatti" className="btn-ed-primary">
              <span>Parliamone subito</span>
              <span aria-hidden>→</span>
            </Link>
            {relatedLink && relatedLabel && (
              <Link href={relatedLink} className="btn-ed-outline">
                <span>{relatedLabel}</span>
              </Link>
            )}
          </div>
        </div>
      </section>
      <EdFooter />
    </>
  )
}
