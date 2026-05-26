import Link from 'next/link'
import EdNav from '@/components/EdNav'
import EdFooter from '@/components/EdFooter'
import EdEffects from '@/components/EdEffects'
import EcosystemTabs from '@/components/EcosystemTabs'
import { CurveDivider, BlobDivider, BrushStroke } from '@/components/OrganicShapes'
import { TrendingUp, BarChart3, Network, Zap } from 'lucide-react'

const IMG = {
  hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop',
  dashboard: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop',
}

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

export const metadata = {
  title: 'Zoho One Italia — Il Sistema Operativo per la Tua Azienda | Gosnail',
  description:
    'Zoho One sostituisce decine di applicazioni con un\'unica suite integrata di oltre 45 strumenti. Gosnail è il partner italiano autorizzato per implementazione, configurazione e formazione.',
  keywords: [
    'Zoho One Italia', 'partner Zoho certificato', 'implementazione Zoho One',
    'sistema operativo aziendale', 'suite gestionale PMI', 'frammentazione tecnologica',
  ],
  openGraph: {
    title: 'Zoho One Italia — Gosnail, Partner Autorizzato',
    description: 'Una licenza Zoho One è uno strumento. La nostra partnership è la strategia.',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Gosnail S.r.l.', url: 'https://gosnail.it',
      description: 'Partner autorizzato Zoho in Italia. Implementazione, formazione e supporto dell\'ecosistema Zoho per medie imprese italiane.',
      address: { '@type': 'PostalAddress', streetAddress: 'Via Nazionale, 40', addressLocality: 'Tavagnacco', addressRegion: 'UD', postalCode: '33010', addressCountry: 'IT' },
      contactPoint: { '@type': 'ContactPoint', email: 'info@gosnail.it', contactType: 'customer service', availableLanguage: 'Italian' },
    },
    {
      '@type': 'Product', name: 'Zoho One',
      description: 'Suite aziendale con oltre 45 applicazioni enterprise integrate: CRM, marketing, finanza, HR, helpdesk, analytics e collaborazione.',
      brand: { '@type': 'Brand', name: 'Zoho Corporation' },
      offers: { '@type': 'Offer', priceCurrency: 'EUR',
        priceSpecification: { '@type': 'PriceSpecification', price: '37', priceCurrency: 'EUR', description: 'Prezzo per dipendente al mese, fatturazione annuale (piano Tutti i Dipendenti)' },
        seller: { '@type': 'Organization', name: 'Gosnail S.r.l.' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Cos\'è Zoho One?', acceptedAnswer: { '@type': 'Answer', text: 'Zoho One è la suite aziendale di Zoho Corporation: oltre 45 applicazioni integrate in un\'unica piattaforma per gestire vendite, marketing, finanza, risorse umane, assistenza clienti e operazioni. Sostituisce decine di software separati con una soluzione unificata dove ogni dato e processo fluisce tra i reparti senza interruzioni.' }},
        { '@type': 'Question', name: 'Quanto costa Zoho One in Italia?', acceptedAnswer: { '@type': 'Answer', text: 'Zoho One ha due piani. Il piano "Tutti i Dipendenti" costa €37/dipendente/mese con fatturazione annuale e richiede la licenza per tutti i dipendenti dell\'azienda. Il piano "Utenti Flessibili" costa €90/utente/mese e permette di licenziare solo gli utenti effettivi. Per dettagli sul piano più adatto contatta Gosnail.' }},
        { '@type': 'Question', name: 'Quante app include Zoho One?', acceptedAnswer: { '@type': 'Answer', text: 'Oltre 45 applicazioni organizzate in 6 aree: CRM e marketing, risorse umane, analytics e sviluppo, produttività e collaborazione, assistenza clienti, finanza e contabilità.' }},
        { '@type': 'Question', name: 'Zoho One è conforme al GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. Zoho ha data center in Europa (Paesi Bassi), non vende mai i dati degli utenti, non include pubblicità e ha nominato un Data Protection Officer. Per le aziende italiane, Gosnail configura Zoho One con residenza dei dati esclusivamente in EU.' }},
        { '@type': 'Question', name: 'Cosa differenzia Gosnail da altri partner Zoho?', acceptedAnswer: { '@type': 'Answer', text: 'Gosnail è partner autorizzato Zoho in Italia e adotta un approccio consulenziale. Analizziamo i processi del cliente, disegniamo la soluzione su misura e formiamo il team per garantire un\'adozione completa. Il successo di un progetto Zoho One dipende dalla configurazione personalizzata, non dalla licenza.' }},
        { '@type': 'Question', name: 'Qual è la differenza tra Zoho CRM e Zoho One?', acceptedAnswer: { '@type': 'Answer', text: 'Zoho CRM è una singola applicazione per le vendite. Zoho One include Zoho CRM più altre 44 applicazioni per coprire ogni funzione aziendale. Il costo di Zoho One è inferiore alla somma dei singoli moduli, e tutti i dati fluiscono automaticamente tra le applicazioni.' }},
        { '@type': 'Question', name: 'Quanto dura un\'implementazione Zoho One?', acceptedAnswer: { '@type': 'Answer', text: 'Dipende dalla complessità. Un\'implementazione base (CRM più contabilità) richiede 4–8 settimane. Un progetto multi-reparto completo può richiedere 3–6 mesi. Gosnail segue un percorso in 5 fasi: analisi dei processi, mappatura dei flussi, configurazione su misura, formazione dei team e supporto post go-live.' }},
      ],
    },
  ],
}

const targets = [
  { variant: '',         icon: <TrendingUp size={22} color="#7A65CF" />, title: 'Imprese in crescita', text: 'Hanno bisogno di strumenti che crescano con loro, invece di doverli cambiare ogni due anni.' },
  { variant: 'lavender', icon: <BarChart3 size={22} color="#7A65CF" />, title: 'Chi vuole decidere sui numeri', text: 'Stanco di incrociare tre file Excel ogni volta che serve un dato affidabile per una riunione.' },
  { variant: 'night',    icon: <Network size={22} color="#FF6B6B" />, title: 'Team che devono parlarsi', text: 'Vendite, marketing e amministrazione che oggi vivono in mondi separati e perdono opportunità.' },
  { variant: 'linen',    icon: <Zap size={22} color="#FF6B6B" />, title: 'Aziende stanche degli sprechi', text: 'Basta data entry manuale e abbonamenti software che si moltiplicano senza che nessuno sappia bene perché.' },
]

const benefits = [
  { n: '01', title: 'Una visione unica del business', text: 'I dati di vendite, marketing, finanza e assistenza in un\'unica dashboard. Vedi cosa succede in azienda in tempo reale, senza dover rincorrere report da chissà chi.' },
  { n: '02', title: 'Automazione che attraversa i reparti', text: 'Un ordine chiuso nel CRM genera la fattura in Books e apre il progetto in Projects. Senza copia-incolla, senza email tra colleghi per chiedersi le cose.' },
  { n: '03', title: 'Reparti che si parlano sul serio', text: 'L\'assistenza vede cosa il cliente ha comprato. Il commerciale vede i ticket aperti. Tutti lavorano sugli stessi dati, in tempo reale.' },
  { n: '04', title: 'Un solo abbonamento per tutto', text: 'Sostituisci decine di abbonamenti software con un\'unica licenza per dipendente. Sai esattamente quanto spendi, come scalerà se assumi, niente sorprese alla scadenza.' },
]

const faqs = [
  { q: "Cos'è esattamente Zoho One?", a: 'Zoho One è la suite aziendale di Zoho Corporation: oltre 45 applicazioni integrate in un\'unica piattaforma. Sostituisce decine di software separati con una soluzione dove vendite, marketing, finanza, HR, assistenza e operazioni condividono nativamente gli stessi dati. Un solo login, un solo abbonamento per dipendente.' },
  { q: 'Quanto costa Zoho One in Italia?', a: 'Esistono due piani. Il piano "Tutti i Dipendenti" è il più conveniente: €37 a dipendente al mese con fatturazione annuale, ma richiede di licenziare l\'intero organico. Il piano "Utenti Flessibili" costa €90 a utente al mese e permette di pagare solo per chi effettivamente usa la piattaforma.' },
  { q: 'Quante e quali app sono incluse?', a: 'Oltre 45 applicazioni che coprono ogni area aziendale: CRM e marketing automation (Zoho CRM, Campaigns, Social, Survey), risorse umane (People, Recruit, Shifts), analytics (Analytics, DataPrep), produttività e collaborazione (Projects, WorkDrive, Mail, Cliq, Meeting), assistenza clienti (Desk, SalesIQ, Assist), finanza e contabilità (Books, Expense, Inventory). Ogni app è integrata nativamente con le altre.' },
  { q: 'Zoho One è conforme al GDPR e alle normative italiane?', a: 'Sì, pienamente. Zoho ha data center in Europa (Paesi Bassi), non vende mai i dati degli utenti, non include pubblicità e ha nominato un Data Protection Officer. Per le aziende italiane configuriamo la residenza dei dati esclusivamente in EU. Zoho Books supporta la fatturazione elettronica europea: per l\'integrazione con il Sistema di Interscambio italiano forniamo configurazione e supporto specializzato.' },
  { q: "Perché scegliere Gosnail per l'implementazione?", a: 'Una licenza Zoho One è solo lo strumento. Il successo dipende da come la piattaforma viene configurata, personalizzata e integrata nei processi della tua azienda. Come Zoho Authorized Partner italiano, analizziamo il tuo modo di lavorare, disegniamo la soluzione su misura e formiamo il tuo team. Non ti vendiamo software, ti guidiamo in una trasformazione con ROI misurabile.' },
  { q: 'Qual è la differenza tra Zoho CRM e Zoho One?', a: 'Zoho CRM è una singola applicazione per le vendite. Zoho One include Zoho CRM più altre 44 applicazioni per coprire ogni funzione aziendale: marketing, finanza, HR, support, collaborazione e analytics. Il costo di Zoho One è significativamente inferiore alla somma dei singoli moduli, e tutti i dati fluiscono automaticamente tra le applicazioni.' },
  { q: "Quanto tempo richiede un'implementazione?", a: 'Dipende dalla complessità. Un\'implementazione base (CRM più contabilità) può richiedere 4–8 settimane. Un progetto multi-reparto completo può estendersi a 3–6 mesi. Gosnail segue un percorso in 5 fasi: analisi dei processi, mappatura dei flussi, configurazione su misura, formazione dei team e supporto post go-live.' },
]

export default function ZohoOnePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EdEffects />
      <EdNav />

      {/* ═══════════ HERO ═══════════ */}
      <section className="ed-hero ed-hero--pillar" style={{ background: 'var(--bg-lavender)' }}>
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 360, height: 360, top: '5%', left: '-8%', opacity: 0.4 }}></div>
        <div className="ed-deco-blob ed-deco-blob--coral" style={{ width: 240, height: 240, top: '40%', right: '-5%', opacity: 0.25 }}></div>
        <div className="ed-deco-blob ed-deco-blob--celestial" style={{ width: 200, height: 200, bottom: '5%', left: '35%', opacity: 0.2 }}></div>

        <div className="ed-hero-grid">
          <div className="ed-hero-left">
            <h1 className="ed-display ed-reveal ed-reveal-1">
              Un unico <em>sistema operativo</em> per gestire e far crescere la tua azienda.
            </h1>
            <p className="ed-hero-intro ed-reveal ed-reveal-2">
              La soluzione per superare la frammentazione tecnologica. Unifica vendite, marketing, finanza, HR e operations in una sola piattaforma integrata, intelligente, pronta per il futuro.
            </p>
            <div className="ed-hero-cta-row ed-reveal ed-reveal-3">
              <Link href="/contatti" className="btn-ed-primary">
                <span>Prenota una demo</span>
                <span aria-hidden>→</span>
              </Link>
              <a href="#benefici" className="btn-ed-outline">
                <span>Scopri il valore</span>
              </a>
            </div>
          </div>

          {/* Product diorama: central wordmark + orbiting app icons + partner stamp */}
          <div className="ed-diorama ed-reveal ed-reveal-2">
            <div className="ed-diorama-glow"></div>

            <div className="ed-diorama-center">
              <div className="ed-diorama-zoho-text">Zoho</div>
              <div className="ed-diorama-one-text"><em>One</em></div>
            </div>

            <div className="ed-diorama-icons">
              <div className="ed-diorama-icon ed-diorama-icon--1"><img src="/assets/zoho-products/icons/crm.svg" alt="Zoho CRM" /></div>
              <div className="ed-diorama-icon ed-diorama-icon--2"><img src="/assets/zoho-products/icons/campaigns.svg" alt="Zoho Campaigns" /></div>
              <div className="ed-diorama-icon ed-diorama-icon--3"><img src="/assets/zoho-products/icons/books.svg" alt="Zoho Books" /></div>
              <div className="ed-diorama-icon ed-diorama-icon--4"><img src="/assets/zoho-products/icons/desk.svg" alt="Zoho Desk" /></div>
              <div className="ed-diorama-icon ed-diorama-icon--5"><img src="/assets/zoho-products/icons/analytics.svg" alt="Zoho Analytics" /></div>
              <div className="ed-diorama-icon ed-diorama-icon--6"><img src="/assets/zoho-products/icons/people.svg" alt="Zoho People" /></div>
              <div className="ed-diorama-icon ed-diorama-icon--7"><img src="/assets/zoho-products/icons/projects.svg" alt="Zoho Projects" /></div>
              <div className="ed-diorama-icon ed-diorama-icon--8"><img src="/assets/zoho-products/icons/workplace.svg" alt="Zoho Workplace" /></div>
            </div>

            <div className="ed-diorama-stamp">
              <img src="/assets/zoho-authorized-partner.svg" alt="Zoho Authorized Partner" />
              <div className="ed-diorama-stamp-text">
                <span className="ed-diorama-stamp-label">Implementato da</span>
                <span className="ed-diorama-stamp-name">Gosnail</span>
              </div>
            </div>
          </div>

          <div className="ed-stats">
            <div className="ed-reveal ed-reveal-4">
              <div className="ed-stat-num">45<small>+</small></div>
              <div className="ed-stat-label">App incluse nella suite</div>
            </div>
            <div className="ed-reveal ed-reveal-5">
              <div className="ed-stat-num">75<small>k+</small></div>
              <div className="ed-stat-label">Aziende nel mondo</div>
            </div>
            <div className="ed-reveal ed-reveal-6">
              <div className="ed-stat-num" style={{ fontStyle: 'italic' }}>Una<small>.</small></div>
              <div className="ed-stat-label">Licenza, tutta l'azienda</div>
            </div>
          </div>
        </div>
      </section>

      <CurveDivider from={C.lavender} to={C.glacier} accent={C.purple} />

      {/* ═══════════ PROBLEMA ═══════════ */}
      <section className="ed-section">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              La frammentazione tecnologica<br />è il <em>nemico nascosto</em> della crescita.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                La tua azienda probabilmente usa già diverse applicazioni cloud: una per il CRM, una per la contabilità, una per i progetti — e decine di fogli Excel a colmare i buchi.
              </p>
              <p className="ed-reveal ed-reveal-3">
                Ogni sistema ha i suoi costi, le sue password, i suoi dati isolati. Questo mosaico di strumenti che non si parlano crea inefficienze, rallenta le decisioni e impedisce al management di avere una visione affidabile dell&apos;azienda.
              </p>
              <div className="ed-problem-highlight ed-reveal ed-reveal-4">
                <p>È un costo operativo nascosto che frena il potenziale della tua azienda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CurveDivider from={C.glacier} to={C.lavender} />

      {/* ═══════════ SOLUZIONE ═══════════ */}
      <section className="ed-section ed-section--lavender">
        <div className="ed-deco-blob ed-deco-blob--celestial" style={{ width: 340, height: 340, top: '20%', right: '-8%', opacity: 0.25 }}></div>
        <div className="ed-section-inner">
          <div className="ed-section-header ed-section-header--centered">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Zoho One, il sistema operativo<br /><em>unico</em> del tuo business.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Zoho One sostituisce decine di applicazioni con un&apos;unica suite integrata di oltre 45 strumenti che coprono ogni area aziendale. Dal primo contatto con un cliente alla fatturazione e al supporto post-vendita, ogni dato e ogni processo fluisce senza interruzioni tra i reparti.
              </p>
            </div>
          </div>

          <div className="ed-split">
            <div className="ed-split-image ed-reveal ed-reveal-1">
              <img src={IMG.dashboard} alt="Dashboard unificata Zoho One" />
            </div>
            <div className="ed-flow-visual ed-reveal ed-reveal-2">
              <div className="ed-flow-visual-label">Il flusso unificato</div>
              {[
                { step: '01', text: 'Lead dal marketing' },
                { step: '02', text: 'Opportunità in CRM' },
                { step: '03', text: 'Proposta &amp; firma digitale' },
                { step: '04', text: 'Fattura in Books' },
                { step: '05', text: 'Report in Analytics', highlight: true },
              ].map((r, i, arr) => (
                <div key={i} className="ed-flow-visual-row" style={r.highlight ? { borderTop: '1px solid var(--coral)', marginTop: 8, paddingTop: 18 } : {}}>
                  <div className="ed-flow-visual-step">{r.step}</div>
                  <div className="ed-flow-visual-text" style={r.highlight ? { color: 'var(--coral)' } : {}} dangerouslySetInnerHTML={{ __html: r.text }}></div>
                  {i < arr.length - 1 && <div className="ed-flow-visual-arrow">↓</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CurveDivider from={C.lavender} to={C.glacier} accent={C.coral} />

      {/* ═══════════ A CHI È RIVOLTO ═══════════ */}
      <section className="ed-section">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              È la scelta giusta se ti riconosci<br />in <em>una di queste situazioni</em>.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Zoho One è pensato per aziende che hanno superato la fase di startup ma vogliono evitare di costruire un&apos;infrastruttura tecnologica frammentata e costosa.
              </p>
            </div>
          </div>

          <div className="ed-targets-grid">
            {targets.map((t, i) => (
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

      <CurveDivider from={C.glacier} to={C.linen} />

      {/* ═══════════ 4 BENEFICI ═══════════ */}
      <section id="benefici" className="ed-section" style={{ background: 'var(--bg-linen)' }}>
        <div className="ed-section-inner">
          <div className="ed-section-header ed-section-header--centered">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Cosa cambia davvero quando<br /><em>tutto è in un unico posto</em>.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Unificare dati e processi, vendite e marketing, finanza e supporto vuol dire lavorare come un&apos;unica organizzazione efficiente.
              </p>
            </div>
          </div>

          <div className="ed-benefits">
            {benefits.map((b, i) => (
              <div key={b.n} className={`ed-benefit ed-reveal ed-reveal-${(i % 4) + 1}`}>
                <div className="ed-benefit-num">{b.n}</div>
                <div className="ed-benefit-body">
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurveDivider from={C.linen} to={C.glacier} />

      {/* ═══════════ ECOSISTEMA 45+ APP — interactive tabs ═══════════ */}
      <section className="ed-section">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Tutti i team. <em>Insieme</em>.<br />Meglio di prima.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Sette aree funzionali, oltre quarantacinque app integrate nativamente. Esplora ogni reparto per scoprire gli strumenti inclusi nella suite.
              </p>
            </div>
          </div>

          <EcosystemTabs />
        </div>
      </section>

      <BlobDivider from={C.glacier} to={C.ocean} />

      {/* ═══════════ PARTNERSHIP QUOTE ═══════════ */}
      <section className="ed-pullquote">
        <div className="ed-deco-blob ed-deco-blob--coral" style={{ width: 380, height: 380, top: '-15%', right: '-10%', opacity: 0.45 }}></div>
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 300, height: 300, bottom: '-15%', left: '-5%', opacity: 0.35 }}></div>
        <div className="ed-pullquote-inner">
          <div className="ed-pullquote-mark ed-reveal">&ldquo;</div>
          <p className="ed-reveal ed-reveal-1">
            Una licenza Zoho One è uno strumento.<br />La nostra <em>partnership</em> è la strategia.
          </p>
          <p className="ed-pullquote-body ed-reveal ed-reveal-2">
            Avere accesso a oltre 45 applicazioni è solo il primo passo. Il vero successo di un progetto Zoho One dipende da come la piattaforma viene configurata, personalizzata e integrata nei tuoi processi.
          </p>
          <p className="ed-pullquote-body ed-reveal ed-reveal-3">
            Il nostro ruolo come partner è proprio questo: analizziamo il modo in cui lavori, disegniamo la soluzione su misura per la tua azienda e formiamo il tuo team. Non ti vendiamo software, ti guidiamo in una trasformazione.
          </p>
          <div className="ed-pullquote-signature ed-reveal ed-reveal-4">
            <div className="ed-pullquote-signature-logo">
              <img src="/assets/zoho-authorized-partner.svg" alt="Zoho Authorized Partner" />
            </div>
            <div className="ed-pullquote-attr">
              Il team Gosnail
            </div>
          </div>
        </div>
      </section>

      <BlobDivider from={C.ocean} to={C.lavender} />

      {/* ═══════════ PRICING ═══════════ */}
      <section className="ed-section ed-section--lavender">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Un prezzo. Tutto incluso.<br /><em>Nessuna sorpresa</em>.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Zoho One ha due piani. Entrambi includono le stesse 45+ app. La differenza riguarda solo quanti utenti licenziare.
              </p>
            </div>
          </div>

          <div className="ed-pricing-grid">
            <div className="ed-pricing-card ed-pricing-card--featured ed-reveal ed-reveal-1">
              <div className="ed-pricing-badge">Più conveniente</div>
              <div className="ed-pricing-plan">Tutti i dipendenti</div>
              <div className="ed-pricing-price">
                <span className="ed-pricing-amount">€37</span>
                <span className="ed-pricing-unit">/dipendente/mese</span>
              </div>
              <div className="ed-pricing-note">Fatturazione annuale · Licenza per tutti i dipendenti</div>
              <p className="ed-pricing-desc">Il piano più conveniente per azienda. Prezzo più basso per utente, ma vanno licenziati tutti i dipendenti — anche chi usa solo Zoho Mail.</p>
              <ul className="ed-pricing-features">
                <li>45+ app enterprise incluse</li>
                <li>Single Sign-On su tutte le app</li>
                <li>AI assistant Ask Zia</li>
                <li>Pannello admin centralizzato</li>
                <li>Data center EU (GDPR)</li>
                <li>Supporto tecnico incluso</li>
              </ul>
              <Link href="/contatti" className="ed-pricing-cta ed-pricing-cta--primary">Richiedi una demo</Link>
            </div>

            <div className="ed-pricing-card ed-reveal ed-reveal-2">
              <div className="ed-pricing-plan">Utenti flessibili</div>
              <div className="ed-pricing-price">
                <span className="ed-pricing-amount">€90</span>
                <span className="ed-pricing-unit">/utente/mese</span>
              </div>
              <div className="ed-pricing-note">Fatturazione annuale · Licenza per gli utenti effettivi</div>
              <p className="ed-pricing-desc">Quando solo alcune funzioni hanno bisogno di Zoho One. Paghi solo per chi lo usa davvero, senza vincoli sull&apos;organico.</p>
              <ul className="ed-pricing-features">
                <li>Stesse 45+ app del piano precedente</li>
                <li>Nessun vincolo sul numero di dipendenti</li>
                <li>Flessibilità su chi licenziare</li>
                <li>Ideale per implementazioni graduali</li>
                <li>Upgrade in qualsiasi momento</li>
                <li>30 giorni di prova gratuita</li>
              </ul>
              <Link href="/contatti" className="ed-pricing-cta ed-pricing-cta--ghost">Scopri qual è il tuo piano</Link>
            </div>
          </div>

          <div className="ed-pricing-callout ed-reveal">
            <p>
              <strong>Confronto:</strong> una PMI da 20 persone che usa HubSpot, QuickBooks, Slack, BambooHR e altri tool spende mediamente €2.500–€4.000/mese. Con Zoho One (piano dipendenti) la stessa copertura costa <strong>€740/mese</strong>, tutto integrato e in italiano.
            </p>
          </div>
        </div>
      </section>

      <CurveDivider from={C.lavender} to={C.glacier} />

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section className="ed-section">
        <div className="ed-section-inner">
          <div className="ed-section-header ed-section-header--centered">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Perché le PMI scelgono<br /><em>Zoho One</em> rispetto agli altri.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Confronto tra le principali alternative sul mercato per una PMI italiana da circa 20 utenti.
              </p>
            </div>
          </div>

          <div className="ed-comparison-wrap ed-reveal ed-reveal-1">
            <table className="ed-comparison-table">
              <thead>
                <tr>
                  <th>Caratteristica</th>
                  <th>Zoho One</th>
                  <th>Microsoft 365 + altri</th>
                  <th>Salesforce + altri</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['CRM completo',                    '✓ Incluso',                       '✗ Non incluso',                  '✓ Solo CRM (~€80/u)'],
                  ['Contabilità',                     '✓ Zoho Books incluso',            '✗ Serve QuickBooks/SAP',         '✗ Non incluso'],
                  ['Marketing automation',            '✓ Incluso',                       '✗ Serve HubSpot/Mailchimp',      '✗ Marketing Cloud a parte'],
                  ['HR & Paghe',                      '✓ Zoho People incluso',           '✗ Serve BambooHR/Personio',      '✗ Non incluso'],
                  ['Business Intelligence',           '✓ Zoho Analytics incluso',        '✗ Power BI a parte',             '✗ Tableau a parte'],
                  ['Integrazioni native',             '✓ Tutte le app si parlano',       '⚠ Richiedono Zapier/API',        '⚠ API costose e complesse'],
                  ['Dati in EU (GDPR)',               '✓ Data center NL',                '⚠ Opzionale a pagamento',        '⚠ Opzionale a pagamento'],
                  ['Privacy e ads',                   '✓ Zero ads, zero data selling',   '⚠ Dati usati per ads',           '✓ No ads'],
                  ['Stima (20 utenti)',               '~€740/mese (tutto incluso)',      '~€2.800/mese (equivalente)',     '~€3.500/mese (equivalente)'],
                ].map(([feature, zoho, ms, sf], i) => (
                  <tr key={i}>
                    <td>{feature}</td>
                    <td className="ed-comp-good">{zoho}</td>
                    <td className="ed-comp-meh">{ms}</td>
                    <td className="ed-comp-meh">{sf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CurveDivider from={C.glacier} to={C.lavender} />

      {/* ═══════════ FAQ ═══════════ */}
      <section className="ed-section ed-section--lavender">
        <div className="ed-section-inner">
          <div className="ed-section-header ed-section-header--centered">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Le cose che ti starai chiedendo<br /><em>su Zoho One</em>.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Le risposte alle domande più comuni che riceviamo da chi sta valutando Zoho One. Clicca su una domanda per leggere la risposta.
              </p>
            </div>
          </div>

          <div className="ed-faq-list">
            {faqs.map((faq, i) => (
              <details key={i} className={`ed-faq-item ed-reveal ed-reveal-${(i % 3) + 1}`}>
                <summary>
                  <span className="ed-faq-q">{faq.q}</span>
                  <span className="ed-faq-icon" aria-hidden>+</span>
                </summary>
                <div className="ed-faq-a">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CurveDivider from={C.lavender} to={C.linen} />

      {/* ═══════════ CTA FINALE ═══════════ */}
      <section className="ed-cta">
        <div className="ed-cta-inner">
          <h2 className="ed-reveal ed-reveal-1">
            Pronto a vedere come<br />Zoho One può <em>unificare</em><br />la tua azienda?
          </h2>
          <p className="ed-reveal ed-reveal-2">
            Parlaci del tuo progetto: ti mostreremo come Zoho One può risolvere le tue sfide specifiche e potenziare i tuoi processi.
          </p>
          <div className="ed-hero-cta-row ed-reveal ed-reveal-3" style={{ justifyContent: 'center' }}>
            <Link href="/contatti" className="btn-ed-primary">
              <span>Prenota una consulenza</span>
              <span aria-hidden>→</span>
            </Link>
            <Link href="/zoho-crm-plus" className="btn-ed-outline">
              <span>Vedi anche Zoho CRM Plus</span>
            </Link>
          </div>
        </div>
      </section>

      <EdFooter />
    </>
  )
}
