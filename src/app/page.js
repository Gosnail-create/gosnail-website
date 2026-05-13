import Link from 'next/link'
import Image from 'next/image'
import EdNav from '@/components/EdNav'
import EdFooter from '@/components/EdFooter'
import EdEffects from '@/components/EdEffects'
import { CurveDivider, BlobDivider, BrushStroke } from '@/components/OrganicShapes'

// ── Unsplash stock placeholders (replace with client photos when ready) ──
const IMG = {
  heroTeam: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop',
  dashboard: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
  workspace: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80&auto=format&fit=crop',
  testimonialM: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80&auto=format&fit=crop&crop=faces',
  testimonialF: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80&auto=format&fit=crop&crop=faces',
}

// ── Color tokens used in section transitions ──
const C = {
  glacier:  '#EDF2F7',
  lavender: '#F1EEFA',
  ocean:    '#1C318C',
  night:    '#111D52',
  linen:    '#F6F3F0',
  coral:    '#FF5A4D',
  purple:   '#7A65CF',
  celestial:'#349ABA',
}

const problems = [
  { n: '01', title: 'Dati frammentati, decisioni cieche', text: 'I numeri non quadrano mai al primo colpo. Servono ore di confronto tra Excel, email e gestionali per arrivare a un dato affidabile.' },
  { n: '02', title: 'Processi manuali che drenano tempo', text: 'Il team spende troppo tempo in data entry e copia-incolla, distogliendosi dalle attività che generano valore reale per il business.' },
  { n: '03', title: 'Reparti che lavorano in parallelo', text: 'Vendite e amministrazione non parlano. Marketing non sa cosa fa il commerciale. I clienti aspettano, e qualcuno si stanca di aspettare.' },
  { n: '04', title: 'Management che naviga a vista', text: "Senza una visione d'insieme, la direzione reagisce alle urgenze invece di guidare l'azienda con strategia e dati." },
]

const pillars = [
  { n: '01', title: 'Analisi dei processi', text: 'Prima di installare qualsiasi software, studiamo come lavori per ottimizzare i flussi aziendali. La tecnologia viene dopo.' },
  { n: '02', title: 'Personalizzazione su misura', text: 'Adattiamo la piattaforma a come lavori tu, non il contrario, per modellare Zoho sui tuoi processi e sulla tua organizzazione.' },
  { n: '03', title: 'Cultura del dato', text: 'Formiamo le tue persone per renderle autonome. Il miglior software è inutile se non viene compreso e adottato.' },
  { n: '04', title: 'Supporto continuo', text: 'Dopo il go-live restiamo al tuo fianco. Ogni due o tre mesi facciamo il punto insieme: cosa funziona, cosa va aggiustato, dove possiamo migliorare.' },
]

const services = [
  { n: '01', name: 'Vendite & CRM', desc: 'Pipeline sempre aggiornate, lead scoring, automazioni commerciali.', tag: 'Zoho CRM' },
  { n: '02', name: 'Marketing Automation', desc: 'Lead qualificati, nurturing automatizzato, ROI misurabile su ogni campagna.', tag: 'Zoho Campaigns' },
  { n: '03', name: 'Customer Service', desc: 'Helpdesk multicanale, ticket tracciabili, knowledge base.', tag: 'Zoho Desk' },
  { n: '04', name: 'Business Intelligence', desc: 'Dashboard in tempo reale, KPI chiari, decisioni basate su dati certi.', tag: 'Zoho Analytics' },
  { n: '05', name: 'Contabilità & Finanza', desc: 'Fatturazione elettronica SDI, gestione spese, flussi finanziari automatizzati.', tag: 'Zoho Books' },
  { n: '06', name: 'Zoho One', desc: "L'intera suite Zoho — oltre 45 app integrate. Il sistema operativo della tua azienda.", tag: 'Zoho One', highlight: true },
]

export default function HomePage() {
  return (
    <>
      <EdEffects />
      <EdNav />

      {/* ════════════════════════ HERO ════════════════════════ */}
      <section className="ed-hero">
        {/* decorative blobs */}
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 300, height: 300, top: '10%', left: '-5%', opacity: 0.4 }}></div>
        <div className="ed-deco-blob ed-deco-blob--celestial" style={{ width: 240, height: 240, bottom: '5%', right: '40%', opacity: 0.3 }}></div>

        <div className="ed-hero-grid">
          <div className="ed-hero-left">
            <h1 className="ed-display ed-reveal ed-reveal-1">
              Tecnologia e processi unificati per la <em>crescita</em> della tua <strong>azienda</strong>.
            </h1>
            <p className="ed-hero-intro ed-reveal ed-reveal-2">
              Lavoriamo con aziende che vogliono mettere ordine nei dati e nei processi. Il nostro mestiere non è installare software: è ridisegnare il modo in cui le persone lavorano.
            </p>
            <div className="ed-hero-cta-row ed-reveal ed-reveal-3">
              <Link href="/contatti" className="btn-ed-primary">
                <span>Prenota una call</span>
                <span aria-hidden>→</span>
              </Link>
              <Link href="/il-metodo" className="btn-ed-outline">
                <span>Scopri il metodo</span>
              </Link>
            </div>
          </div>

          <div className="ed-hero-visual ed-reveal ed-reveal-2">
            <div className="ed-shape-blob-purple"></div>
            <div className="ed-shape-blob-celestial"></div>
            <div className="ed-hero-photo">
              <img
                src={IMG.heroTeam}
                alt="Team aziendale in riunione strategica"
                loading="eager"
              />
            </div>
            <BrushStroke className="ed-shape-brush-coral" color={C.coral} />
          </div>

          <div className="ed-stats">
            <div className="ed-reveal ed-reveal-4">
              <div className="ed-stat-num">
                <span className="js-ed-count" data-target="100" data-suffix="">0</span><small>%</small>
              </div>
              <div className="ed-stat-label">Specializzazione Zoho</div>
            </div>
            <div className="ed-reveal ed-reveal-5">
              <div className="ed-stat-num">
                <span className="js-ed-count" data-target="50" data-suffix="">0</span><small>+</small>
              </div>
              <div className="ed-stat-label">Aziende trasformate</div>
            </div>
            <div className="ed-reveal ed-reveal-6">
              <div className="ed-stat-num" style={{ fontStyle: 'italic' }}>Una<small>.</small></div>
              <div className="ed-stat-label">fonte di verità per ogni reparto</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition: glacier → lavender */}
      <CurveDivider from={C.glacier} to={C.lavender} accent={C.purple} />

      {/* ════════════════════════ PROBLEMS ════════════════════════ */}
      <section className="ed-section ed-section--lavender" id="problemi" style={{ padding: '120px 56px' }}>
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 360, height: 360, top: '-10%', right: '-8%', opacity: 0.35 }}></div>
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <div className="ed-section-header-num ed-reveal">N. 02 — Il Problema</div>
            <div className="ed-section-header-title">
              <h2 className="ed-h2 ed-reveal ed-reveal-1">
                La complessità tecnologica<br />è il <em>nemico nascosto</em> della crescita.
              </h2>
              <p className="ed-reveal ed-reveal-2">
                Aumentare i volumi senza aggiornare gli strumenti porta inevitabilmente a colli di bottiglia. Quattro ostacoli che riconosciamo in quasi ogni azienda italiana che cresce oltre i 30 dipendenti.
              </p>
            </div>
          </div>

          <div className="ed-problems">
            {problems.map((p, i) => (
              <div key={p.n} className={`ed-problem ed-reveal ed-reveal-${(i % 4) + 1}`}>
                <div className="ed-problem-num">{p.n}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition: lavender → ocean */}
      <BlobDivider from={C.lavender} to={C.ocean} />

      {/* ════════════════════════ PULL QUOTE ════════════════════════ */}
      <section className="ed-pullquote">
        <div className="ed-deco-blob ed-deco-blob--coral" style={{ width: 400, height: 400, top: '-20%', right: '-10%', opacity: 0.5 }}></div>
        <div className="ed-deco-blob ed-deco-blob--celestial" style={{ width: 300, height: 300, bottom: '-15%', left: '-5%', opacity: 0.4 }}></div>
        <div className="ed-pullquote-inner">
          <div className="ed-pullquote-mark ed-reveal">&ldquo;</div>
          <p className="ed-reveal ed-reveal-1">
            La tecnologia da sola non basta. Il nostro ruolo è colmare il divario tra gli strumenti digitali e i <em>tuoi obiettivi di business</em>.
          </p>
          <div className="ed-pullquote-attr ed-reveal ed-reveal-2">
            Il team Gosnail · Tavagnacco, UD
          </div>
        </div>
      </section>

      {/* Transition: ocean → night */}
      <CurveDivider from={C.ocean} to={C.night} />

      {/* ════════════════════════ APPROACH ════════════════════════ */}
      <section className="ed-section ed-section--night" id="approccio">
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 400, height: 400, top: '20%', left: '-10%', opacity: 0.35 }}></div>
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <div className="ed-section-header-num ed-reveal">N. 03 — L'Approccio</div>
            <div className="ed-section-header-title">
              <h2 className="ed-h2 ed-reveal ed-reveal-1">
                Un unico sistema operativo<br /><em>per tutta la tua azienda</em>.
              </h2>
              <p className="ed-reveal ed-reveal-2">
                Immagina ogni reparto sulla stessa piattaforma. I dati fluiscono automaticamente dal marketing alle vendite fino alla fatturazione. Una sola fonte di verità.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="ed-solution-split-wrapper">
            <div>
              {pillars.map((p, i) => (
                <div key={p.n} className={`ed-pillar ed-reveal ed-reveal-${i + 1}`}>
                  <div className="ed-pillar-num">{p.n}</div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ed-reveal ed-reveal-2" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', aspectRatio: '4 / 3', position: 'relative' }}>
                <img
                  src={IMG.dashboard}
                  alt="Dashboard analitica unificata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div className="ed-flow">
                <div className="ed-flow-label-top">Il flusso unificato</div>
                <div className="ed-flow-row">
                  <div className="ed-flow-step">01</div>
                  <div className="ed-flow-text">Marketing &amp; Campaigns</div>
                  <div className="ed-flow-arrow">↓</div>
                </div>
                <div className="ed-flow-row">
                  <div className="ed-flow-step">02</div>
                  <div className="ed-flow-text">Vendite &amp; CRM</div>
                  <div className="ed-flow-arrow">↓</div>
                </div>
                <div className="ed-flow-row">
                  <div className="ed-flow-step">03</div>
                  <div className="ed-flow-text">Customer Service</div>
                  <div className="ed-flow-arrow">↓</div>
                </div>
                <div className="ed-flow-row">
                  <div className="ed-flow-step">04</div>
                  <div className="ed-flow-text">Contabilità &amp; Finance</div>
                  <div className="ed-flow-arrow">↓</div>
                </div>
                <div className="ed-flow-row" style={{ borderTop: '1px solid var(--coral)', marginTop: 8, paddingTop: 20 }}>
                  <div className="ed-flow-step" style={{ color: 'var(--coral)' }}>★</div>
                  <div className="ed-flow-text" style={{ color: 'var(--coral)', fontWeight: 500 }}>Single Source of Truth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition: night → glacier */}
      <BlobDivider from={C.night} to={C.glacier} />

      {/* ════════════════════════ SERVICES ════════════════════════ */}
      <section className="ed-section" id="soluzioni">
        <div className="ed-deco-blob ed-deco-blob--celestial" style={{ width: 380, height: 380, bottom: '-12%', right: '-8%', opacity: 0.3 }}></div>
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <div className="ed-section-header-num ed-reveal">N. 04 — Aree di intervento</div>
            <div className="ed-section-header-title">
              <h2 className="ed-h2 ed-reveal ed-reveal-1">
                <em>Dove</em> facciamo<br />la differenza.
              </h2>
              <p className="ed-reveal ed-reveal-2">
                Sei aree in cui interveniamo. La piattaforma è Zoho, ma quello che cambia il lavoro quotidiano è come lo configuriamo intorno alla tua azienda.
              </p>
            </div>
          </div>

          <div className="ed-services-list">
            {services.map((s, i) => (
              <Link
                key={s.n}
                href={s.highlight ? '/zoho-one' : '#'}
                className={`ed-service-row ed-reveal ed-reveal-${(i % 4) + 1}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="ed-service-num">{s.n}</div>
                <div className="ed-service-name" style={s.highlight ? { color: 'var(--coral)', fontStyle: 'italic' } : {}}>
                  {s.name}
                </div>
                <div className="ed-service-desc">{s.desc}</div>
                <div className="ed-service-tag">
                  {s.tag}
                  <span className="ed-service-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Transition: glacier → lavender */}
      <CurveDivider from={C.glacier} to={C.lavender} accent={C.coral} />

      {/* ════════════════════════ TESTIMONIALS ════════════════════════ */}
      <section className="ed-testimonials">
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 340, height: 340, top: '10%', left: '-10%', opacity: 0.3 }}></div>
        <div className="ed-testimonials-inner">
          <div className="ed-testimonial-col">
            <div className="ed-pill ed-reveal" style={{ marginBottom: 24 }}>Le persone al centro</div>
            <h3 className="ed-reveal ed-reveal-1">
              Il software lo usiamo noi, ma lavora per <em>le tue persone</em>.
            </h3>
            <p className="ed-body ed-reveal ed-reveal-2" style={{ marginBottom: 32, color: 'var(--ink-soft)' }}>
              Il software è la parte facile. La parte difficile è far sì che tutte le persone adottino e sfruttino davvero la tecnologia. Per questo lavoriamo con il team intero, non solo con chi firma.
            </p>
            <div className="ed-principle ed-reveal ed-reveal-3">
              <div className="ed-principle-num">A.</div>
              <div>
                <h4>Ascolto prima di tutto</h4>
                <p>Ogni progetto inizia con sessioni di scoperta per capire le persone, non solo i processi.</p>
              </div>
            </div>
            <div className="ed-principle ed-reveal ed-reveal-4">
              <div className="ed-principle-num">B.</div>
              <div>
                <h4>Formazione continua</h4>
                <p>Non spariamo dopo il go-live. Costruiamo una cultura del dato che rende i team autonomi.</p>
              </div>
            </div>
            <div className="ed-principle ed-reveal ed-reveal-5">
              <div className="ed-principle-num">C.</div>
              <div>
                <h4>Risultati misurabili</h4>
                <p>Ogni intervento porta a un ROI calcolabile. Nei mesi successivi monitoriamo i numeri per capire cosa è davvero cambiato in azienda.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="ed-eyebrow-mono ed-reveal" style={{ marginBottom: 24, display: 'block' }}>
              Cosa dicono i clienti
            </div>
            <div className="ed-testimonial-card ed-reveal ed-reveal-1">
              <div className="ed-testimonial-card-mark">&ldquo;</div>
              <p className="ed-testimonial-card-text">
                Prima perdevamo ore a rincorrere i dati tra Excel e email. Oggi tutto è in un posto solo e il team lavora in modo completamente diverso.
              </p>
              <div className="ed-testimonial-card-attr">
                <div className="ed-testimonial-avatar">
                  <img src={IMG.testimonialM} alt="" />
                </div>
                <div className="ed-testimonial-card-attr-meta">
                  <strong>Marco R.</strong>
                  <span>Operations · Manifatturiero</span>
                </div>
              </div>
            </div>
            <div className="ed-testimonial-card ed-reveal ed-reveal-2">
              <div className="ed-testimonial-card-mark">&ldquo;</div>
              <p className="ed-testimonial-card-text">
                Il nostro reparto commerciale ha chiuso il 30% in più di contratti nel primo trimestre dopo l&apos;implementazione di Zoho CRM.
              </p>
              <div className="ed-testimonial-card-attr">
                <div className="ed-testimonial-avatar">
                  <img src={IMG.testimonialF} alt="" />
                </div>
                <div className="ed-testimonial-card-attr-meta">
                  <strong>Sara F.</strong>
                  <span>Sales Director · Servizi B2B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition: lavender → linen (warm finale) */}
      <CurveDivider from={C.lavender} to={C.linen} />

      {/* ════════════════════════ FINAL CTA ════════════════════════ */}
      <section className="ed-cta">
        <div className="ed-deco-blob ed-deco-blob--coral" style={{ width: 300, height: 300, top: '-5%', right: '10%', opacity: 0.25 }}></div>
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 280, height: 280, bottom: '5%', left: '8%', opacity: 0.25 }}></div>
        <div className="ed-cta-inner">
          <div className="ed-pill ed-reveal" style={{ marginBottom: 28 }}>
            N. 05 — Inizia qui
          </div>
          <h2 className="ed-reveal ed-reveal-1">
            Pronto a digitalizzare<br />i tuoi <em>processi</em>?
          </h2>
          <p className="ed-reveal ed-reveal-2">
            Parliamo dei tuoi obiettivi. Ci racconti dove sei, ti diciamo se possiamo davvero esserti utili.
          </p>
          <div className="ed-hero-cta-row ed-reveal ed-reveal-3" style={{ justifyContent: 'center' }}>
            <Link href="/contatti" className="btn-ed-primary">
              <span>Prenota una consulenza gratuita</span>
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
