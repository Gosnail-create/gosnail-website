import Link from 'next/link'
import EdNav from '@/components/EdNav'
import EdFooter from '@/components/EdFooter'
import EdEffects from '@/components/EdEffects'
import BlogTeaser from '@/components/BlogTeaser'
import { CurveDivider, BlobDivider } from '@/components/OrganicShapes'

const C = {
  glacier:  '#F0F4F8',
  lavender: '#F5F4FA',
  ocean:    '#1C318C',
  night:    '#111D52',
  linen:    '#F6F3F0',
  coral:    '#FF6B6B',
  purple:   '#7A65CF',
  celestial:'#349ABA',
}

const IMG = {
  hero: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1100&q=80&auto=format&fit=crop',
}

export const metadata = {
  title: 'Il nostro metodo: prima i processi, poi il software | Gosnail',
  description:
    'Il valore di Gosnail sta prima della tecnologia: ascolto, analisi dei processi e ridisegno dei flussi. Scopri il metodo in cinque fasi, dall\'analisi al supporto continuo.',
  keywords: [
    'consulenza digitalizzazione processi', 'reingegnerizzazione processi aziendali',
    'come scegliere partner Zoho', 'metodo implementazione Zoho',
  ],
}

const steps = [
  { n: '01', title: 'Ascolto e Diagnosi',
    text: 'Sessioni di scoperta per capire come lavori, dove nascono i colli di bottiglia e quali sono i tuoi obiettivi di business.' },
  { n: '02', title: 'Mappatura dei Processi',
    text: 'Documentiamo e ridisegniamo i flussi di lavoro prima di toccare qualsiasi software: prima si ottimizza, poi si automatizza.' },
  { n: '03', title: 'Configurazione su Misura',
    text: 'Implementiamo la suite Zoho adattandola alla tua realtà. Ogni campo, automazione e dashboard risponde a un\'esigenza reale.' },
  { n: '04', title: 'Formazione e Adozione',
    text: 'Formiamo i tuoi team con percorsi pratici e costruiamo una cultura del dato che rende l\'organizzazione autonoma.' },
  { n: '05', title: 'Supporto Continuo e Misurazione',
    text: 'Il nostro lavoro non finisce con il go-live. Monitoriamo i KPI e restiamo al tuo fianco per sostenere la crescita nel tempo.' },
]

export default function IlMetodoPage() {
  return (
    <>
      <EdEffects />
      <EdNav />

      {/* ═══════════ HERO ═══════════ */}
      <section className="ed-hero">
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 320, height: 320, top: '8%', left: '-6%', opacity: 0.4 }}></div>
        <div className="ed-deco-blob ed-deco-blob--celestial" style={{ width: 240, height: 240, bottom: '8%', right: '38%', opacity: 0.28 }}></div>

        <div className="ed-hero-grid">
          <div className="ed-hero-left">
            <h1 className="ed-display ed-reveal ed-reveal-2">
              Strategia <em>prima</em> della tecnologia
            </h1>
            <p className="ed-hero-intro ed-reveal ed-reveal-3">
              Il software è solo l&apos;ultimo miglio. Il valore di Gosnail sta prima: nell&apos;ascolto, nell&apos;analisi dei processi e nel ridisegno dei flussi di lavoro. La tecnologia arriva dopo, quando sappiamo esattamente cosa deve fare.
            </p>
            <div className="ed-hero-cta-row ed-reveal ed-reveal-4">
              <Link href="/contatti" className="btn-ed-primary">
                <span>Prenota una consulenza</span>
                <span aria-hidden>→</span>
              </Link>
              <a href="#fasi" className="btn-ed-outline">
                <span>Guarda le fasi</span>
              </a>
            </div>
          </div>

          <div className="ed-hero-visual ed-reveal ed-reveal-2">
            <div className="ed-shape-blob-purple"></div>
            <div className="ed-shape-blob-celestial"></div>
            <div className="ed-hero-photo">
              <img src={IMG.hero} alt="Sessione di analisi dei processi con il team" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <CurveDivider from={C.glacier} to={C.lavender} accent={C.purple} />

      {/* ═══════════ PERCHÉ DAI PROCESSI ═══════════ */}
      <section className="ed-section ed-section--lavender">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Perché partiamo dai <em>processi</em>,<br />non dal software
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                La maggior parte dei progetti digitali fallisce per lo stesso motivo: si compra lo strumento prima di aver capito come lavora l&apos;azienda. Il risultato lo conosci: licenze pagate e usate a metà, software che il team abbandona dopo due mesi, automazioni costruite su processi che nessuno aveva mai messo in ordine.
              </p>
              <p className="ed-reveal ed-reveal-3">
                Noi partiamo dall&apos;altra parte. Prima capiamo come lavori davvero, dove si perde tempo e perché. Poi, e solo poi, scegliamo e configuriamo gli strumenti. Un software che rispecchia i tuoi processi viene adottato. Uno che li ignora resta un costo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BlobDivider from={C.lavender} to={C.night} />

      {/* ═══════════ LE 5 FASI ═══════════ */}
      <section id="fasi" className="ed-section ed-section--night">
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 380, height: 380, top: '18%', left: '-10%', opacity: 0.3 }}></div>
        <div className="ed-section-inner">
          <div className="ed-section-header ed-section-header--centered">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Come lavoriamo, <em>passo per passo</em>
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Un percorso in cinque fasi. Nessuna installazione prima di aver capito e ridisegnato come lavori.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: 780, margin: '56px auto 0' }}>
            {steps.map((s, i) => (
              <div key={s.n} className={`ed-pillar ed-reveal ed-reveal-${(i % 5) + 1}`}>
                <div className="ed-pillar-num">{s.n}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlobDivider from={C.night} to={C.glacier} />

      {/* ═══════════ COSA CAMBIA ALLA FINE ═══════════ */}
      <section className="ed-section">
        <div className="ed-section-inner">
          <div className="ed-section-header ed-section-header--centered">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Cosa cambia, <em>alla fine</em>
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Alla fine di questo percorso quello che ottieni è soprattutto chiarezza. La direzione vede cosa succede in tempo reale. I reparti lavorano sugli stessi dati. Le persone sanno come muoversi, senza dipendere da chi tiene insieme i pezzi a mano.
              </p>
            </div>
          </div>

          <p
            className="ed-reveal ed-reveal-3"
            style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)', lineHeight: 1.3,
              color: 'var(--ink)', textAlign: 'center',
              maxWidth: 680, margin: '40px auto 0',
              fontVariationSettings: "'opsz' 96, 'SOFT' 80, 'WONK' 1",
            }}
          >
            La tecnologia, a quel punto, non è più qualcosa da gestire: è una <em style={{ color: 'var(--coral)' }}>leva per crescere</em>.
          </p>
        </div>
      </section>

      <CurveDivider from={C.glacier} to={C.lavender} accent={C.celestial} />

      {/* ═══════════ DAL BLOG ═══════════ */}
      <BlogTeaser variant="lavender" />

      <CurveDivider from={C.lavender} to={C.linen} accent={C.coral} />

      {/* ═══════════ CTA FINALE ═══════════ */}
      <section className="ed-cta">
        <div className="ed-deco-blob ed-deco-blob--coral" style={{ width: 300, height: 300, top: '-5%', right: '10%', opacity: 0.25 }}></div>
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 280, height: 280, bottom: '5%', left: '8%', opacity: 0.25 }}></div>
        <div className="ed-cta-inner">
          <h2 className="ed-reveal ed-reveal-1">
            Partiamo dai tuoi <em>processi</em>?
          </h2>
          <p className="ed-reveal ed-reveal-2">
            La prima sessione di analisi è gratuita e senza impegno. Ci racconti come lavori oggi e noi ti diciamo con onestà se e come possiamo aiutarti. Niente preventivi al buio, niente promesse che non possiamo mantenere.
          </p>
          <div className="ed-hero-cta-row ed-reveal ed-reveal-3" style={{ justifyContent: 'center' }}>
            <Link href="/contatti" className="btn-ed-primary">
              <span>Prenota una consulenza gratuita</span>
              <span aria-hidden>→</span>
            </Link>
            <Link href="/zoho-one" className="btn-ed-outline">
              <span>Scopri Zoho One</span>
            </Link>
          </div>
        </div>
      </section>

      <EdFooter />
    </>
  )
}
