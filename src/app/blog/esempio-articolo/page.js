import Link from 'next/link'
import EdNav from '@/components/EdNav'
import EdFooter from '@/components/EdFooter'
import EdEffects from '@/components/EdEffects'
import { CurveDivider } from '@/components/OrganicShapes'

export const metadata = {
  title: 'Digitalizzare i processi di una PMI: da dove iniziare | Blog Gosnail',
  description: 'Mockup articolo — layout della pagina di singolo post del blog Gosnail.',
  robots: { index: false, follow: false },
}

const C = { glacier: '#F0F4F8', linen: '#F6F3F0' }

const COVER = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80&auto=format&fit=crop'

const RELATED = [
  { cat: 'Processi & Metodo', title: 'Reparti che non si parlano: quanto costa il disallineamento', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop' },
  { cat: 'Zoho One', title: "Zoho One: cos'è, quanto costa e come funziona per una PMI", img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop' },
  { cat: 'Business Intelligence', title: 'Perché il tuo team perde ore a produrre report', img: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&q=80&auto=format&fit=crop' },
]

export default function ArticoloEsempioPage() {
  return (
    <>
      <EdEffects />
      <EdNav />

      <article>
        {/* ── Intestazione articolo ── */}
        <div className="article-wrap">
          <Link href="/blog" className="article-back"><span aria-hidden>←</span> Torna al blog</Link>
          <span className="article-cat">Processi &amp; Metodo</span>
          <h1 className="article-title">
            Digitalizzare i processi di una PMI: <em>da dove iniziare</em>
          </h1>
          <div className="article-meta">
            <div className="article-meta-avatar">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=80&auto=format&fit=crop&crop=faces" alt="" />
            </div>
            <span><strong>Team Gosnail</strong> · 12 giugno 2026 · 6 min di lettura</span>
          </div>
        </div>

        {/* ── Cover ── */}
        <div className="article-cover">
          <div className="article-cover-inner">
            <img src={COVER} alt="" />
          </div>
        </div>

        {/* ── Corpo (mockup) ── */}
        <div className="article-body">
          <p>
            La maggior parte dei progetti di digitalizzazione parte dal posto sbagliato: lo strumento. Si compra un software, si cerca di far entrare l&apos;azienda dentro quel software, e dopo qualche mese il team è tornato ai vecchi Excel. Il problema non era il software. Era che nessuno aveva guardato come si lavora davvero, prima di automatizzarlo.
          </p>
          <p>
            Digitalizzare un processo che non funziona significa solo renderlo più veloce a fare la cosa sbagliata. Ecco perché il primo passo non è tecnologico.
          </p>

          <h2>Prima mappare, poi automatizzare</h2>
          <p>
            Prendi un processo che ti fa perdere tempo — un ordine che passa dal commerciale all&apos;amministrazione, per esempio — e segui cosa succede davvero, passo per passo. Dove si ferma? Chi aspetta cosa? Quante volte lo stesso dato viene reinserito a mano?
          </p>
          <blockquote>
            Un software che rispecchia i tuoi processi viene adottato. Uno che li ignora resta un costo.
          </blockquote>
          <p>
            Quasi sempre, mappando un processo si scopre che metà degli attriti si risolvono senza tecnologia: eliminando un passaggio inutile, definendo chi fa cosa, mettendo d&apos;accordo due reparti su una regola. Il software serve dopo, per rendere solido quello che hai già rimesso in ordine.
          </p>

          <figure className="article-figure">
            <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80&auto=format&fit=crop" alt="" />
            <figcaption>Mappare un flusso prima di automatizzarlo: dove si ferma il lavoro e chi aspetta cosa.</figcaption>
          </figure>

          <h2>Da dove partire concretamente</h2>
          <p>
            Non serve digitalizzare tutta l&apos;azienda in una volta. Si parte dal punto dove il dolore è più evidente e il ritorno più rapido:
          </p>
          <ul>
            <li>Il processo che genera più lamentele interne.</li>
            <li>Il dato che chiedi più spesso e che nessuno ha mai pronto.</li>
            <li>Il passaggio tra due reparti dove le cose si perdono.</li>
          </ul>
          <p>
            Da lì si costruisce, un pezzo alla volta, con le persone che quel processo lo vivono ogni giorno. È il modo più lento di partire e il più veloce di arrivare.
          </p>
        </div>
      </article>

      <div style={{ height: 80 }} />
      <CurveDivider from={C.glacier} to={C.linen} accent={C.linen} />

      {/* ── Articoli correlati ── */}
      <section className="ed-section" style={{ background: 'var(--bg-linen)' }}>
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">Continua a <em>leggere</em></h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">Altri articoli sullo stesso tema, per andare più a fondo.</p>
            </div>
          </div>

          <div className="blog-grid">
            {RELATED.map((p, i) => (
              <Link key={p.title} href="/blog/esempio-articolo" className={`blog-card ed-reveal ed-reveal-${(i % 3) + 1}`}>
                <span className="blog-card-cat">{p.cat}</span>
                <h3 className="blog-card-title">{p.title}</h3>
                <div className="blog-card-img">
                  <img src={p.img} alt="" />
                </div>
                <span className="blog-card-more">Leggi di più <span aria-hidden>→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA finale ── */}
      <section className="ed-cta">
        <div className="ed-cta-inner">
          <h2 className="ed-reveal ed-reveal-1">
            Vuoi mettere ordine nei tuoi <em>processi</em>?
          </h2>
          <p className="ed-reveal ed-reveal-2">
            La prima sessione di analisi è gratuita e senza impegno.
          </p>
          <div className="ed-hero-cta-row ed-reveal ed-reveal-3" style={{ justifyContent: 'center' }}>
            <Link href="/contatti" className="btn-ed-primary">
              <span>Prenota una consulenza</span>
              <span aria-hidden>→</span>
            </Link>
            <Link href="/il-metodo" className="btn-ed-outline">
              <span>Scopri il metodo</span>
            </Link>
          </div>
        </div>
      </section>

      <EdFooter />
    </>
  )
}
