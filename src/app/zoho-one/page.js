import Link from 'next/link'
import EdNav from '@/components/EdNav'
import EdFooter from '@/components/EdFooter'
import EdEffects from '@/components/EdEffects'
import { CurveDivider, BlobDivider, BrushStroke } from '@/components/OrganicShapes'
import {
  Briefcase, Megaphone, BarChart3, FolderKanban, Headphones, Receipt, Users,
} from 'lucide-react'

const IMG = {
  hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop',
  dashboard: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop',
}

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
        priceSpecification: { '@type': 'PriceSpecification', price: '34', priceCurrency: 'EUR', description: 'Prezzo indicativo per dipendente al mese, fatturazione annuale' },
        seller: { '@type': 'Organization', name: 'Gosnail S.r.l.' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Cos\'è Zoho One?', acceptedAnswer: { '@type': 'Answer', text: 'Zoho One è la suite aziendale di Zoho Corporation: oltre 45 applicazioni integrate in un\'unica piattaforma per gestire vendite, marketing, finanza, risorse umane, assistenza clienti e operazioni. Sostituisce decine di software separati con una soluzione unificata dove ogni dato e processo fluisce tra i reparti senza interruzioni.' }},
        { '@type': 'Question', name: 'Quanto costa Zoho One in Italia?', acceptedAnswer: { '@type': 'Answer', text: 'Zoho One ha due piani. Il piano "Tutti i Dipendenti" parte da circa €34/dipendente/mese con fatturazione annuale e richiede la licenza per tutti i dipendenti dell\'azienda. Il piano "Utenti Flessibili" parte da circa €83/utente/mese e permette di licenziare solo gli utenti effettivi. Per il prezzo aggiornato in EUR contatta Gosnail.' }},
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
  { eyebrow: '01', title: 'Imprese in crescita', text: 'Hanno bisogno di strumenti che crescano con loro, invece di doverli cambiare ogni due anni.' },
  { eyebrow: '02', title: 'Chi vuole decidere sui numeri', text: 'Stanco di incrociare tre file Excel ogni volta che serve un dato affidabile per una riunione.' },
  { eyebrow: '03', title: 'Team che devono parlarsi', text: 'Vendite, marketing e amministrazione che oggi vivono in mondi separati e perdono opportunità.' },
  { eyebrow: '04', title: 'Aziende stanche degli sprechi', text: 'Basta data entry manuale e abbonamenti software che si moltiplicano senza che nessuno sappia bene perché.' },
]

const benefits = [
  { n: '01', title: 'Una visione unica del business', text: 'I dati di vendite, marketing, finanza e assistenza in un\'unica dashboard. Vedi cosa succede in azienda in tempo reale, senza dover rincorrere report da chissà chi.' },
  { n: '02', title: 'Automazione che attraversa i reparti', text: 'Un ordine chiuso nel CRM genera la fattura in Books e apre il progetto in Projects. Senza copia-incolla, senza email tra colleghi per chiedersi le cose.' },
  { n: '03', title: 'Reparti che si parlano sul serio', text: 'L\'assistenza vede cosa il cliente ha comprato. Il commerciale vede i ticket aperti. Tutti lavorano sugli stessi dati, in tempo reale.' },
  { n: '04', title: 'Un solo abbonamento per tutto', text: 'Sostituisci decine di abbonamenti software con un\'unica licenza per dipendente. Sai esattamente quanto spendi, come scalerà se assumi, niente sorprese alla scadenza.' },
]

const apps = [
  { icon: <Briefcase size={22} color="#7A65CF" />, bg: '#EDE9FB', title: 'Vendite & Marketing', desc: 'CRM, Marketing Automation, Campagne Email, Social Media, Sondaggi' },
  { icon: <Users size={22} color="#349ABA" />, bg: '#DFF1F7', title: 'Risorse Umane', desc: 'Gestione dipendenti, recruitment, presenze' },
  { icon: <BarChart3 size={22} color="#FF6B6B" />, bg: '#FFE4E4', title: 'Analytics & Sviluppo', desc: 'Analisi avanzata dei dati, sviluppo di app personalizzate' },
  { icon: <FolderKanban size={22} color="#7A65CF" />, bg: '#EDE9FB', title: 'Produttività & Collaborazione', desc: 'Progetti, cloud storage, chat, email e calendario' },
  { icon: <Headphones size={22} color="#349ABA" />, bg: '#DFF1F7', title: 'Assistenza Clienti', desc: 'Helpdesk multicanale, chat dal vivo, accesso remoto' },
  { icon: <Receipt size={22} color="#FF6B6B" />, bg: '#FFE4E4', title: 'Finanza & Operations', desc: 'Contabilità, fatturazione SDI, gestione spese, inventario' },
]

const faqs = [
  { q: "Cos'è esattamente Zoho One?", a: 'Zoho One è la suite aziendale di Zoho Corporation: oltre 45 applicazioni integrate in un\'unica piattaforma. Sostituisce decine di software separati con una soluzione dove vendite, marketing, finanza, HR, assistenza e operazioni condividono nativamente gli stessi dati. Un solo login, un solo abbonamento per dipendente.' },
  { q: 'Quanto costa Zoho One in Italia?', a: 'Esistono due piani. Il piano "Tutti i Dipendenti" è il più conveniente: circa €34 a dipendente al mese con fatturazione annuale, ma richiede di licenziare l\'intero organico. Il piano "Utenti Flessibili" parte da circa €83 a utente al mese e permette di pagare solo per chi effettivamente usa la piattaforma. Per il prezzo aggiornato in EUR contattaci.' },
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
      <section className="ed-hero">
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 320, height: 320, top: '10%', left: '-5%', opacity: 0.35 }}></div>
        <div className="ed-deco-blob ed-deco-blob--celestial" style={{ width: 260, height: 260, bottom: '5%', right: '40%', opacity: 0.3 }}></div>

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

          <div className="ed-hero-visual ed-reveal ed-reveal-2">
            <div className="ed-shape-blob-purple"></div>
            <div className="ed-shape-blob-celestial"></div>
            <div className="ed-hero-photo">
              <img src={IMG.hero} alt="Team aziendale che lavora su Zoho One" loading="eager" />
            </div>
            <BrushStroke className="ed-shape-brush-coral" color={C.coral} />
          </div>

          <div className="ed-stats">
            <div className="ed-reveal ed-reveal-4">
              <div className="ed-stat-num">45<small>+</small></div>
              <div className="ed-stat-label">App incluse</div>
            </div>
            <div className="ed-reveal ed-reveal-5">
              <div className="ed-stat-num">75<small>k+</small></div>
              <div className="ed-stat-label">Aziende nel mondo</div>
            </div>
            <div className="ed-reveal ed-reveal-6">
              <div className="ed-stat-num" style={{ fontStyle: 'italic' }}>Una<small>.</small></div>
              <div className="ed-stat-label">Licenza per tutto</div>
            </div>
          </div>
        </div>
      </section>

      <CurveDivider from={C.glacier} to={C.lavender} accent={C.purple} />

      {/* ═══════════ PROBLEMA ═══════════ */}
      <section className="ed-section ed-section--lavender">
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 360, height: 360, top: '-10%', right: '-8%', opacity: 0.3 }}></div>
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <div className="ed-section-header-num ed-reveal">N. 02 — Il Problema</div>
            <div className="ed-section-header-title">
              <h2 className="ed-h2 ed-reveal ed-reveal-1">
                La frammentazione tecnologica<br />è il <em>nemico nascosto</em> della crescita.
              </h2>
              <p className="ed-reveal ed-reveal-2">
                La tua azienda probabilmente usa già diverse applicazioni cloud: una per il CRM, una per la contabilità, una per i progetti — e decine di fogli Excel a colmare i buchi.
              </p>
              <p className="ed-reveal ed-reveal-3" style={{ marginTop: 16, fontFamily: 'var(--font-body)', fontSize: 'clamp(1.05rem,1.3vw,1.2rem)', lineHeight: 1.7, color: 'var(--ink-soft)' }}>
                Ogni sistema ha i suoi costi, le sue password, i suoi dati isolati. Questo mosaico di strumenti che non si parlano crea inefficienze, rallenta le decisioni e impedisce al management di avere una visione affidabile dell&apos;azienda.
              </p>
              <div className="ed-problem-highlight ed-reveal ed-reveal-4">
                <p>È un costo operativo nascosto che frena il potenziale della tua azienda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CurveDivider from={C.lavender} to={C.glacier} />

      {/* ═══════════ SOLUZIONE ═══════════ */}
      <section className="ed-section">
        <div className="ed-deco-blob ed-deco-blob--celestial" style={{ width: 340, height: 340, top: '20%', right: '-8%', opacity: 0.25 }}></div>
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <div className="ed-section-header-num ed-reveal">N. 03 — La Soluzione</div>
            <div className="ed-section-header-title">
              <h2 className="ed-h2 ed-reveal ed-reveal-1">
                Zoho One, il sistema operativo<br /><em>unico</em> del tuo business.
              </h2>
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

      <CurveDivider from={C.glacier} to={C.lavender} accent={C.coral} />

      {/* ═══════════ A CHI È RIVOLTO ═══════════ */}
      <section className="ed-section ed-section--lavender">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <div className="ed-section-header-num ed-reveal">N. 04 — A chi è rivolto</div>
            <div className="ed-section-header-title">
              <h2 className="ed-h2 ed-reveal ed-reveal-1">
                È la scelta giusta se ti riconosci<br />in <em>una di queste situazioni</em>.
              </h2>
              <p className="ed-reveal ed-reveal-2">
                Zoho One è pensato per aziende che hanno superato la fase di startup ma vogliono evitare di costruire un&apos;infrastruttura tecnologica frammentata e costosa.
              </p>
            </div>
          </div>

          <div className="ed-targets-grid">
            {targets.map((t, i) => (
              <div key={t.eyebrow} className={`ed-target-card ed-reveal ed-reveal-${(i % 4) + 1}`}>
                <div className="ed-target-card-eyebrow">{t.eyebrow}</div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurveDivider from={C.lavender} to={C.glacier} />

      {/* ═══════════ 4 BENEFICI ═══════════ */}
      <section id="benefici" className="ed-section">
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 320, height: 320, bottom: '-10%', left: '-5%', opacity: 0.25 }}></div>
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <div className="ed-section-header-num ed-reveal">N. 05 — Il Valore</div>
            <div className="ed-section-header-title">
              <h2 className="ed-h2 ed-reveal ed-reveal-1">
                Cosa cambia davvero quando<br /><em>tutto è in un unico posto</em>.
              </h2>
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

      <CurveDivider from={C.glacier} to={C.lavender} />

      {/* ═══════════ ECOSISTEMA 45+ APP ═══════════ */}
      <section className="ed-section ed-section--lavender">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <div className="ed-section-header-num ed-reveal">N. 06 — L'ecosistema</div>
            <div className="ed-section-header-title">
              <h2 className="ed-h2 ed-reveal ed-reveal-1">
                Oltre 45 applicazioni per<br /><em>ogni esigenza aziendale</em>.
              </h2>
              <p className="ed-reveal ed-reveal-2">
                Sei aree funzionali, oltre quarantacinque app integrate nativamente, un solo abbonamento per dipendente.
              </p>
            </div>
          </div>

          <div className="ed-apps-grid">
            {apps.map((a, i) => (
              <div key={a.title} className={`ed-app-card ed-reveal ed-reveal-${(i % 3) + 1}`}>
                <div className="ed-app-card-icon" style={{ background: a.bg }}>{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlobDivider from={C.lavender} to={C.ocean} />

      {/* ═══════════ PARTNERSHIP QUOTE ═══════════ */}
      <section className="ed-pullquote">
        <div className="ed-deco-blob ed-deco-blob--coral" style={{ width: 380, height: 380, top: '-15%', right: '-10%', opacity: 0.45 }}></div>
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 300, height: 300, bottom: '-15%', left: '-5%', opacity: 0.35 }}></div>
        <div className="ed-pullquote-inner">
          <div className="ed-pullquote-mark ed-reveal">&ldquo;</div>
          <p className="ed-reveal ed-reveal-1">
            Una licenza Zoho One è uno strumento.<br />La nostra <em>partnership</em> è la strategia.
          </p>
          <p className="ed-reveal ed-reveal-2" style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.78)', marginTop: 36, maxWidth: 760, fontStyle: 'normal' }}>
            Avere accesso a oltre 45 applicazioni è solo il primo passo. Il vero successo di un progetto Zoho One dipende da come la piattaforma viene configurata, personalizzata e integrata nei tuoi processi.
          </p>
          <p className="ed-reveal ed-reveal-3" style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.78)', marginTop: 16, maxWidth: 760, fontStyle: 'normal' }}>
            Il nostro ruolo come partner è proprio questo: analizziamo il modo in cui lavori, disegniamo la soluzione su misura per la tua azienda e formiamo il tuo team. Non ti vendiamo software, ti guidiamo in una trasformazione.
          </p>
          <div className="ed-pullquote-attr ed-reveal ed-reveal-4">
            Il team Gosnail · Zoho Authorized Partner
          </div>
        </div>
      </section>

      <BlobDivider from={C.ocean} to={C.glacier} />

      {/* ═══════════ PRICING ═══════════ */}
      <section className="ed-section">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <div className="ed-section-header-num ed-reveal">N. 07 — Pricing</div>
            <div className="ed-section-header-title">
              <h2 className="ed-h2 ed-reveal ed-reveal-1">
                Un prezzo. Tutto incluso.<br /><em>Nessuna sorpresa</em>.
              </h2>
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
                <span className="ed-pricing-amount">~€34</span>
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
                <span className="ed-pricing-amount">~€83</span>
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
              <strong>Confronto:</strong> una PMI da 20 persone che usa HubSpot, QuickBooks, Slack, BambooHR e altri tool spende mediamente €2.500–€4.000/mese. Con Zoho One (piano dipendenti) la stessa copertura costa circa <strong>€680/mese</strong>, tutto integrato e in italiano.
            </p>
          </div>
        </div>
      </section>

      <CurveDivider from={C.glacier} to={C.lavender} />

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section className="ed-section ed-section--lavender">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <div className="ed-section-header-num ed-reveal">N. 08 — Zoho One vs il mercato</div>
            <div className="ed-section-header-title">
              <h2 className="ed-h2 ed-reveal ed-reveal-1">
                Perché le PMI scelgono<br /><em>Zoho One</em> rispetto agli altri.
              </h2>
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
                  ['Nessuna pubblicità sui dati',     '✓ Zero ads, zero data selling',   '⚠ Dati usati per ads',           '✓ No ads'],
                  ['Stima (20 utenti)',               '~€680/mese (tutto incluso)',      '~€2.800/mese (equivalente)',     '~€3.500/mese (equivalente)'],
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

      <CurveDivider from={C.lavender} to={C.glacier} />

      {/* ═══════════ FAQ ═══════════ */}
      <section className="ed-section">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <div className="ed-section-header-num ed-reveal">N. 09 — Domande frequenti</div>
            <div className="ed-section-header-title">
              <h2 className="ed-h2 ed-reveal ed-reveal-1">
                Le cose che ti starai chiedendo<br /><em>su Zoho One</em>.
              </h2>
            </div>
          </div>

          <div className="ed-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`ed-faq-item ed-reveal ed-reveal-${(i % 3) + 1}`}>
                <div className="ed-faq-q">{faq.q}</div>
                <div className="ed-faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurveDivider from={C.glacier} to={C.linen} />

      {/* ═══════════ CTA FINALE ═══════════ */}
      <section className="ed-cta">
        <div className="ed-deco-blob ed-deco-blob--coral" style={{ width: 320, height: 320, top: '-5%', right: '10%', opacity: 0.25 }}></div>
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 280, height: 280, bottom: '5%', left: '8%', opacity: 0.25 }}></div>
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
