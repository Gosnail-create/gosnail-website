import Link from 'next/link'

/*
 * BlogTeaser — sezione "Dal blog" riutilizzabile sulle pagine core.
 * Props:
 *   - eyebrow, title, intro: testi dell'intestazione (hanno default)
 *   - posts: array di articoli { category, title, excerpt, href }
 *   - variant: variante di sfondo della sezione ('', 'lavender', 'linen', ...)
 *   - allHref: link "vedi tutti" (default /blog)
 */

const DEFAULT_POSTS = [
  {
    category: 'Processi',
    title: 'Perché il tuo team perde tempo a produrre report',
    excerpt: 'I dati ci sono, ma sono sparsi tra Excel, email e gestionali. Dove si blocca davvero l\'informazione, e cosa fare prima di comprare l\'ennesimo software.',
    href: '/blog',
  },
  {
    category: 'Organizzazione',
    title: 'Come capire se ti serve davvero un CRM',
    excerpt: 'Non è una questione di software. È quante volte al giorno cerchi un dato che dovrebbe essere già a portata di mano.',
    href: '/blog',
  },
  {
    category: 'Crescita',
    title: 'Crescere senza far crescere il caos',
    excerpt: 'Aumentare i volumi con gli stessi strumenti porta a colli di bottiglia. Da dove si comincia a mettere ordine nei processi tra reparti.',
    href: '/blog',
  },
]

export default function BlogTeaser({
  eyebrow = 'Dal blog',
  title = 'Storie, scenari e processi da mettere in ordine',
  intro = 'Spunti pratici per capire dove nascono gli attriti tra reparti e come un sistema unico può ridurli.',
  posts = DEFAULT_POSTS,
  variant = '',
  allHref = '/blog',
}) {
  return (
    <section className={`ed-section ${variant ? `ed-section--${variant}` : ''}`}>
      <div className="ed-section-inner">
        <div className="ed-blog-head">
          <span className="ed-eyebrow-mono ed-blog-eyebrow ed-reveal ed-reveal-1">{eyebrow}</span>
          <h2 className="ed-h2 ed-reveal ed-reveal-2">{title}</h2>
          <p className="ed-blog-intro ed-reveal ed-reveal-3">{intro}</p>
        </div>

        <div className="ed-blog-grid">
          {posts.map((p, i) => (
            <Link
              key={p.title}
              href={p.href || allHref}
              className={`ed-blog-card ed-reveal ed-reveal-${(i % 3) + 1}`}
            >
              {p.category && <span className="ed-blog-card-cat">{p.category}</span>}
              <h3>{p.title}</h3>
              {p.excerpt && <p>{p.excerpt}</p>}
              <span className="ed-blog-card-more">
                Leggi <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="ed-blog-all ed-reveal">
          <Link href={allHref} className="btn-ed-outline">
            <span>Vedi tutti gli articoli</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
