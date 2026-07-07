import Link from 'next/link'
import EdNav from '@/components/EdNav'
import EdFooter from '@/components/EdFooter'
import EdEffects from '@/components/EdEffects'
import { CurveDivider } from '@/components/OrganicShapes'
import { BookOpen, Scale, Building2, Workflow } from 'lucide-react'

export const metadata = {
  title: 'Blog Gosnail — Case study, scenari e guide su Zoho',
  description: 'Case study di clienti reali, scenari d\'uso e approfondimenti su Zoho e la digitalizzazione delle PMI del Nord-Est.',
}

const C = { glacier: '#F0F4F8', linen: '#F6F3F0' }

const HERO_BG = 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&q=80&auto=format&fit=crop'

// Categorie blog (da strategy) — "Tutti" attiva di default
const CATEGORIES = ['Tutti', 'Zoho One', 'CRM & Vendite', 'Finanza', 'Business Intelligence', 'Processi & Metodo', 'Case Study']
// Colore palette per l'hover di ogni pillola filtro
const FILTER_COLORS = ['#FF6B6B', '#7A65CF', '#349ABA', '#1C318C', '#FF6B6B', '#7A65CF', '#349ABA']

// Articoli placeholder (mockup) — testi dal corpus fondativo della strategy
const POSTS = [
  { cat: 'Zoho One', title: "Zoho One: cos'è, quanto costa e come funziona per una PMI", img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop' },
  { cat: 'Zoho One', title: 'Zoho One vs Salesforce: confronto onesto per una PMI italiana', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop' },
  { cat: 'CRM & Vendite', title: 'Quanto costa implementare Zoho CRM: licenze, progetto e tempi reali', img: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80&auto=format&fit=crop' },
  { cat: 'Finanza', title: 'Zoho Books e fatturazione elettronica SDI: guida pratica per l\'Italia', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop' },
  { cat: 'Business Intelligence', title: 'Perché il tuo team perde ore a produrre report (e come uscirne)', img: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&q=80&auto=format&fit=crop' },
  { cat: 'Processi & Metodo', title: 'Digitalizzare i processi di una PMI: da dove iniziare', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop' },
]

const TOPICS = [
  { variant: '',         icon: <BookOpen size={22} color="#7A65CF" />,  title: 'Guide pratiche', text: 'Zoho spiegato in italiano semplice: cos\'è, quanto costa, come si implementa. Senza gergo.' },
  { variant: 'lavender', icon: <Scale size={22} color="#7A65CF" />,     title: 'Confronti onesti', text: 'Zoho vs Salesforce, vs HubSpot. Quando ha senso e quando no, anche se la risposta non siamo noi.' },
  { variant: 'night',    icon: <Building2 size={22} color="#FF6B6B" />, title: 'Case study reali', text: 'Aziende del Nord-Est: com\'era prima, cosa è cambiato, i numeri. Storie, non slogan.' },
  { variant: 'linen',    icon: <Workflow size={22} color="#FF6B6B" />,  title: 'Metodo e processi', text: 'Come mettere ordine nei processi prima del software. Il ragionamento dietro ogni progetto.' },
]

export default function BlogPage() {
  return (
    <>
      <EdEffects />
      <EdNav />

      {/* ═══════════ HERO con immagine di sfondo ═══════════ */}
      <section className="blog-hero">
        <div className="blog-hero-bg">
          <img src={HERO_BG} alt="" />
        </div>
        <div className="blog-hero-inner">
          <h1 className="ed-display ed-reveal ed-reveal-2">
            Storie, scenari, articoli. <em>In arrivo.</em>
          </h1>
          <p className="blog-hero-intro ed-reveal ed-reveal-3">
            Il blog di Gosnail raccoglie case study di clienti reali, scenari d&apos;uso e guide su Zoho e la digitalizzazione delle PMI. Stiamo preparando i primi contenuti.
          </p>
          <div className="ed-hero-cta-row blog-hero-cta ed-reveal ed-reveal-4" style={{ justifyContent: 'center' }}>
            <Link href="/contatti" className="btn-ed-primary">
              <span>Prenota una call</span>
              <span aria-hidden>→</span>
            </Link>
            <Link href="/contatti" className="btn-ed-outline btn-ed-outline--light">
              <span>Scrivici subito</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ ARCHIVIO: filtri + card + paginazione ═══════════ */}
      <section className="ed-section" style={{ background: 'var(--bg-glacier)' }}>
        <div className="ed-section-inner">
          <div className="blog-archive-head">
            <div>
              <h2 className="ed-h2 ed-reveal ed-reveal-1">Insights e case study</h2>
            </div>
            <p className="blog-archive-intro ed-reveal ed-reveal-2">
              Una selezione di temi che guideranno i prossimi approfondimenti su processi, dati e piattaforme Zoho.
            </p>
          </div>

          {/* Filtri categoria (mockup: "Tutti" attiva; il filtro diventa funzionale col componente) */}
          <div className="blog-filters ed-reveal ed-reveal-1">
            {CATEGORIES.map((cat, i) => (
              <span
                key={cat}
                className={`blog-filter ${i === 0 ? 'blog-filter--active' : ''}`}
                style={{ '--pill': FILTER_COLORS[i % FILTER_COLORS.length] }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Card articoli */}
          <div className="blog-grid">
            {POSTS.map((p, i) => (
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

          {/* Paginazione (mockup) */}
          <div className="blog-pagination">
            <span className="blog-page blog-page--active">1</span>
            <span className="blog-page">2</span>
            <span className="blog-page">3</span>
            <span className="blog-page blog-page--next">Avanti <span aria-hidden>→</span></span>
          </div>
        </div>
      </section>

      <CurveDivider from={C.glacier} to={C.linen} accent={C.linen} />

      {/* ═══════════ SEZIONE PRE-FOOTER: cosa troverai (card) ═══════════ */}
      <section className="ed-section" style={{ background: 'var(--bg-linen)' }}>
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Cosa troverai <em>qui</em>
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Contenuti pensati per chi deve prendere decisioni, non per gli addetti ai lavori. Problemi di business prima, strumenti dopo.
              </p>
            </div>
          </div>

          <div className="ed-targets-grid">
            {TOPICS.map((t, i) => (
              <div key={t.title} className={`ed-target-card ${t.variant ? `ed-target-card--${t.variant}` : ''} ed-reveal ed-reveal-${(i % 4) + 1}`}>
                <div className="ed-target-card-icon">{t.icon}</div>
                <div className="ed-target-card-text">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EdFooter />
    </>
  )
}
