import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'
import {
  Users, Megaphone, Receipt, HeadphonesIcon,
  BarChart3, FolderKanban, Mail, Shield,
  CheckCircle2, ArrowRight, Star, Building2,
  Globe, Lock, Zap, Award,
} from 'lucide-react'

export const metadata = {
  title: 'Zoho One Italia — Partner Autorizzato | Gosnail',
  description:
    'Gosnail è il partner autorizzato Zoho in Italia. Implementiamo Zoho One: 45+ app integrate in un\'unica piattaforma per gestire vendite, marketing, finanza, HR e operazioni. Consulenza gratuita.',
  keywords: [
    'Zoho One Italia', 'partner Zoho certificato', 'implementazione Zoho One',
    'suite gestionale cloud PMI', 'CRM italiano', 'gestionale aziendale',
    'alternativa Salesforce Italia', 'alternativa Microsoft 365',
  ],
  openGraph: {
    title: 'Zoho One Italia — Gosnail, Partner Autorizzato',
    description: 'L\'unica suite che gestisce tutta la tua azienda. 45+ app integrate, un unico prezzo. Implementazione e supporto in italiano.',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Gosnail S.r.l.',
      url: 'https://gosnail.it',
      description: 'Partner autorizzato Zoho in Italia. Implementazione, formazione e supporto dell\'ecosistema Zoho per PMI italiane.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Nazionale, 40',
        addressLocality: 'Tavagnacco',
        addressRegion: 'UD',
        postalCode: '33010',
        addressCountry: 'IT',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@gosnail.it',
        contactType: 'customer service',
        availableLanguage: 'Italian',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Cos\'è Zoho One?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zoho One è la suite aziendale all-in-one di Zoho Corporation: oltre 45 applicazioni enterprise integrate in un\'unica piattaforma per gestire vendite, marketing, finanza, risorse umane, assistenza clienti e operazioni. È definito "il sistema operativo per le aziende" perché unifica ogni funzione aziendale in un\'unica soluzione con un solo login, un solo abbonamento e dati condivisi tra tutti i moduli.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto costa Zoho One in Italia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zoho One ha due piani di abbonamento. Il piano "Tutti i Dipendenti" parte da circa €34/dipendente/mese (fatturazione annuale) e richiede la licenza per tutti i dipendenti dell\'azienda. Il piano "Utenti Flessibili" parte da circa €83/utente/mese (fatturazione annuale) e permette di licenziare solo gli utenti che utilizzano la piattaforma. Per il prezzo esatto in Euro e per un\'analisi del piano più adatto alla tua azienda, contatta Gosnail per una consulenza gratuita.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quante app include Zoho One?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zoho One include oltre 45 applicazioni enterprise che coprono vendite e CRM (Zoho CRM, SalesIQ), marketing (Campaigns, Social, Marketing Automation), finanza e contabilità (Books, Expense, Inventory), risorse umane (People, Recruit), assistenza clienti (Desk, Assist), collaborazione (Mail, Cliq, Meeting, WorkDrive), analytics (Analytics, DataPrep), gestione progetti (Projects, Flow) e molto altro.',
          },
        },
        {
          '@type': 'Question',
          name: 'Zoho One è conforme al GDPR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sì, Zoho One è pienamente conforme al GDPR. Zoho Corporation dispone di data center in Europa (Paesi Bassi) con residenza dei dati in EU, ha nominato un Data Protection Officer, non vende i dati degli utenti e non include pubblicità in nessun prodotto. Ogni cliente può scegliere la residenza dei dati esclusivamente in Europa.',
          },
        },
        {
          '@type': 'Question',
          name: 'Zoho Books supporta la fatturazione elettronica italiana (SDI)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zoho Books supporta la fatturazione elettronica e le normative fiscali europee. Per la conformità specifica al Sistema di Interscambio (SDI) italiano e alle normative Agenzia delle Entrate, Gosnail fornisce supporto specializzato nell\'implementazione e configurazione per il mercato italiano.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual è la differenza tra Zoho CRM e Zoho One?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zoho CRM è una singola applicazione focalizzata sulla gestione delle vendite e dei clienti. Zoho One è la suite completa che include Zoho CRM più altre 44+ applicazioni per marketing, finanza, HR, support, collaborazione e analytics. Con Zoho One si ottiene l\'intera azienda su un\'unica piattaforma a un prezzo inferiore rispetto all\'acquisto dei singoli moduli.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto tempo richiede l\'implementazione di Zoho One?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Il tempo di implementazione di Zoho One dipende dalla complessità aziendale e dai moduli attivati. Gosnail segue un percorso strutturato in 5 fasi: analisi dei processi, mappatura dei flussi, configurazione su misura, formazione dei team e supporto post go-live. Un\'implementazione base può richiedere 4-8 settimane; progetti complessi multi-reparto possono estendersi fino a 3-6 mesi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Gosnail è un partner certificato Zoho?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sì, Gosnail S.r.l. è un partner autorizzato Zoho in Italia. Questo significa che il team è certificato da Zoho Corporation, ha accesso diretto al supporto tecnico Zoho, può fornire licenze ufficiali ai clienti italiani e ha esperienza verificata nell\'implementazione dell\'ecosistema Zoho per PMI italiane.',
          },
        },
      ],
    },
  ],
}

const appCategories = [
  {
    icon: <Users size={22} color="#7A65CF" />,
    bg: '#EDE9FB',
    title: 'Vendite & CRM',
    apps: ['Zoho CRM', 'Zoho SalesIQ', 'Zoho Bookings', 'Zoho Bigin'],
    total: 5,
  },
  {
    icon: <Megaphone size={22} color="#349ABA" />,
    bg: '#DFF1F7',
    title: 'Marketing',
    apps: ['Zoho Campaigns', 'Zoho Social', 'Marketing Automation', 'Zoho Forms'],
    total: 8,
  },
  {
    icon: <Receipt size={22} color="#FF6B6B" />,
    bg: '#FFE4E4',
    title: 'Finanza & Contabilità',
    apps: ['Zoho Books', 'Zoho Expense', 'Zoho Inventory', 'Zoho Subscriptions'],
    total: 6,
  },
  {
    icon: <Users size={22} color="#7A65CF" />,
    bg: '#EDE9FB',
    title: 'Risorse Umane',
    apps: ['Zoho People', 'Zoho Recruit', 'Zoho Learn', 'Zoho Shifts'],
    total: 4,
  },
  {
    icon: <HeadphonesIcon size={22} color="#349ABA" />,
    bg: '#DFF1F7',
    title: 'Assistenza Clienti',
    apps: ['Zoho Desk', 'Zoho Assist', 'Zoho SalesIQ'],
    total: 3,
  },
  {
    icon: <Mail size={22} color="#FF6B6B" />,
    bg: '#FFE4E4',
    title: 'Collaborazione',
    apps: ['Zoho Mail', 'Zoho Cliq', 'Zoho Meeting', 'Zoho WorkDrive'],
    total: 9,
  },
  {
    icon: <BarChart3 size={22} color="#7A65CF" />,
    bg: '#EDE9FB',
    title: 'Analytics & BI',
    apps: ['Zoho Analytics', 'Zoho DataPrep', 'Dashboard unificata'],
    total: 2,
  },
  {
    icon: <FolderKanban size={22} color="#349ABA" />,
    bg: '#DFF1F7',
    title: 'Progetti & Operazioni',
    apps: ['Zoho Projects', 'Zoho Sprints', 'Zoho Flow', 'Zoho Creator'],
    total: 5,
  },
]

const faqs = [
  {
    q: "Cos'è Zoho One?",
    a: "Zoho One è la suite aziendale all-in-one di Zoho: oltre 45 applicazioni enterprise in un'unica piattaforma. Vendite, marketing, finanza, HR, assistenza clienti e operazioni — tutto integrato nativamente, con un solo login e un solo abbonamento. Zoho lo chiama \"il sistema operativo per le aziende\".",
  },
  {
    q: 'Quanto costa Zoho One in Italia?',
    a: 'Zoho One ha due piani. Il piano "Tutti i Dipendenti" parte da circa €34/dipendente/mese (annuale) con licenza obbligatoria per tutta l\'azienda — il più conveniente. Il piano "Utenti Flessibili" parte da circa €83/utente/mese (annuale) senza vincoli sul numero. Contattaci per un\'analisi del piano più adatto e per il prezzo aggiornato in EUR.',
  },
  {
    q: 'Quante app sono incluse in Zoho One?',
    a: 'Oltre 45 applicazioni enterprise: CRM, marketing automation, contabilità, gestione HR, helpdesk, email aziendale, videochiamate, gestione progetti, BI e analytics, firma digitale, password manager e molto altro. Ogni app è integrata nativamente con le altre — nessuna API da configurare, nessun costo aggiuntivo.',
  },
  {
    q: 'Zoho One è conforme al GDPR?',
    a: "Sì, pienamente. Zoho ha data center in Europa (Paesi Bassi), non vende mai i dati degli utenti, non ha pubblicità in nessun prodotto e ha nominato un Data Protection Officer. Per le aziende italiane, Gosnail configura Zoho One con residenza dei dati esclusivamente in EU.",
  },
  {
    q: 'Zoho Books supporta la fatturazione elettronica italiana?',
    a: "Zoho Books supporta la fatturazione elettronica europea. Per l'integrazione completa con il Sistema di Interscambio (SDI) italiano e la conformità Agenzia delle Entrate, Gosnail fornisce configurazione e supporto specializzato per il mercato italiano.",
  },
  {
    q: 'Qual è la differenza tra Zoho CRM e Zoho One?',
    a: 'Zoho CRM è una singola applicazione per le vendite. Zoho One è la suite completa: include Zoho CRM più altre 44+ applicazioni per coprire ogni funzione aziendale. Il costo di Zoho One è inferiore all\'acquisto combinato dei singoli moduli, e i dati fluiscono automaticamente tra tutte le app.',
  },
  {
    q: 'Quanto dura un progetto di implementazione?',
    a: "Dipende dalla complessità. Un'implementazione base (CRM + contabilità) richiede 4–8 settimane. Un progetto multi-reparto completo può richiedere 3–6 mesi. Gosnail segue un percorso strutturato in 5 fasi: analisi, mappatura processi, configurazione, formazione e supporto post go-live.",
  },
  {
    q: 'Gosnail è un partner certificato Zoho?',
    a: "Sì. Gosnail S.r.l. è Zoho Authorized Partner in Italia. Il nostro team è certificato da Zoho Corporation, con accesso diretto al supporto tecnico Zoho e esperienza verificata su decine di implementazioni per PMI italiane.",
  },
]

export default function ZohoOnePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientEffects />
      <Nav />

      {/* ── HERO ── */}
      <section className="hero" style={{ minHeight: '80vh' }}>
        <div className="hero-dots"></div>
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-inner" style={{ maxWidth: 820 }}>
          <div className="partner-badge">
            <span className="partner-badge-dot"></span>
            Zoho Authorized Partner — Italia
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
            Il <em>sistema operativo</em> per la tua azienda
          </h1>
          <p style={{ maxWidth: 620 }}>
            Zoho One unisce oltre 45 applicazioni enterprise in un'unica piattaforma integrata. Vendite, marketing, finanza, HR, assistenza e analytics — tutto connesso, un solo prezzo.
          </p>
          <div className="hero-actions">
            <Link href="/contatti" className="btn-hero-primary">
              Prenota una Demo Gratuita
            </Link>
            <a href="#app-suite" className="btn-hero-ghost">
              Scopri le app incluse <ArrowRight size={16} />
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-val">45<span>+</span></div>
              <div className="stat-label">App enterprise incluse</div>
            </div>
            <div>
              <div className="stat-val">75<span>k+</span></div>
              <div className="stat-label">Aziende nel mondo</div>
            </div>
            <div>
              <div className="stat-val">1</div>
              <div className="stat-label">Abbonamento per tutto</div>
            </div>
            <div>
              <div className="stat-val">30<span>+</span></div>
              <div className="stat-label">Anni di sviluppo</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM: TOOL SPRAWL ── */}
      <section className="problems">
        <div className="section-inner">
          <div className="section-overline reveal">Il problema che Zoho One risolve</div>
          <h2 className="section-title reveal reveal-delay-1">
            Stai pagando per 10 strumenti che non si parlano?
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            La maggior parte delle PMI italiane usa in media 8–15 software separati. Il risultato: dati frammentati, integrazioni rotte e costi mensili che si sommano silenziosamente.
          </p>
          <div className="problems-grid" style={{ marginTop: 48 }}>
            <div className="problem-card reveal reveal-delay-1">
              <div className="problem-icon" style={{ background: '#FFE4E4' }}>
                <Receipt size={20} color="#FF6B6B" />
              </div>
              <h3>Costi nascosti che crescono</h3>
              <p>HubSpot + QuickBooks + Slack + BambooHR + altri: si arriva facilmente a €500–€2.000/mese per una PMI da 20 persone. Zoho One riduce questo costo del 40–60%.</p>
            </div>
            <div className="problem-card reveal reveal-delay-2">
              <div className="problem-icon" style={{ background: '#EDE9FB' }}>
                <BarChart3 size={20} color="#7A65CF" />
              </div>
              <h3>Dati che non si parlano</h3>
              <p>Il CRM non sa cosa fa la contabilità. Il marketing non vede i ticket di support. Ogni sistema ha la sua "verità". Decisioni prese su dati parziali e spesso sbagliati.</p>
            </div>
            <div className="problem-card reveal reveal-delay-3">
              <div className="problem-icon" style={{ background: '#DFF1F7' }}>
                <Zap size={20} color="#349ABA" />
              </div>
              <h3>Integrazioni fragili</h3>
              <p>Zapier, webhook, API custom: ogni connessione tra tool è un punto di fallimento. Si rompe un'integrazione, si perde dati. E qualcuno deve mantenerle nel tempo.</p>
            </div>
            <div className="problem-card reveal reveal-delay-4">
              <div className="problem-icon" style={{ background: '#EDE9FB' }}>
                <Lock size={20} color="#7A65CF" />
              </div>
              <h3>Troppi accessi da gestire</h3>
              <p>Ogni tool ha la sua password, le sue policy, i suoi permessi. Onboarding e offboarding dei dipendenti diventano operazioni lunghe e rischiose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="solution">
        <div className="section-inner">
          <div className="section-overline reveal">Zoho One — The Operating System for Business</div>
          <h2 className="section-title reveal reveal-delay-1">Un'unica piattaforma. Tutta la tua azienda.</h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Con Zoho One non compri una raccolta di app separate. Ottieni una piattaforma unificata dove ogni dato fluisce automaticamente da un reparto all'altro, con un solo login e un'unica fonte di verità.
          </p>
          <div className="solution-split" style={{ marginTop: 56 }}>
            <div className="solution-points">
              {[
                { icon: <CheckCircle2 size={18} color="#349ABA" />, title: 'Dati condivisi nativamente', text: 'Tutte le app condividono lo stesso modello dati. Un lead dal marketing diventa automaticamente un contatto CRM, poi un cliente in contabilità — senza copiaincolla.' },
                { icon: <CheckCircle2 size={18} color="#349ABA" />, title: 'Un solo login per tutto', text: 'Single Sign-On su tutte le 45+ app. Aggiungi o rimuovi un dipendente da un solo pannello: l\'accesso si propaga ovunque in automatico.' },
                { icon: <CheckCircle2 size={18} color="#349ABA" />, title: 'AI cross-funzionale con Zia', text: 'L\'assistente AI Ask Zia vede i dati di tutte le app contemporaneamente. Può mostrarti il calendario, i task aperti e i contratti da firmare in un\'unica risposta.' },
                { icon: <CheckCircle2 size={18} color="#349ABA" />, title: 'Privacy-first, dati in Europa', text: 'Zoho non vende i tuoi dati, non ha pubblicità. Data center in Europa (Paesi Bassi). GDPR-compliant by default. Ideale per aziende italiane.' },
              ].map((point, i) => (
                <div key={i} className={`solution-point reveal reveal-delay-${i + 1}`}>
                  <div className="solution-point-icon">{point.icon}</div>
                  <div className="solution-point-text">
                    <h4>{point.title}</h4>
                    <p>{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="solution-visual reveal reveal-delay-2">
              {[
                { color: '#FF6B6B', label: 'Lead dal marketing', arrow: true },
                { color: '#7A65CF', label: 'Opportunità in CRM', arrow: true },
                { color: '#349ABA', label: 'Proposta & firma digitale', arrow: true },
                { color: '#C8CCDF', label: 'Fattura in Books', arrow: true },
                { color: '#F6F3F0', label: 'Report in Analytics', highlight: true },
              ].map((row, i) => (
                <div key={i} className={`flow-row${row.highlight ? ' flow-row-highlight' : ''}`}>
                  <div className="flow-dot" style={{ background: row.color }}></div>
                  <div className="flow-label">{row.label}</div>
                  {row.arrow && <span className="flow-arrow">↓</span>}
                </div>
              ))}
              <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(52,154,186,0.1)', borderRadius: 8, border: '1px solid rgba(52,154,186,0.3)' }}>
                <div style={{ fontSize: 11, color: '#349ABA', fontWeight: 700, marginBottom: 4 }}>ZERO integrazioni manuali</div>
                <div style={{ fontSize: 12, color: 'rgba(200,204,223,0.8)' }}>Tutti i passaggi avvengono in automatico all&apos;interno della stessa piattaforma.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APP CATEGORIES ── */}
      <section id="app-suite" className="app-section">
        <div className="section-inner">
          <div className="section-overline reveal">La suite completa</div>
          <h2 className="section-title reveal reveal-delay-1">45+ app. 8 aree aziendali. Un unico abbonamento.</h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Dalla prima email di marketing alla nota spese del dipendente — ogni processo della tua azienda ha la sua app in Zoho One.
          </p>
          <div className="app-categories">
            {appCategories.map((cat, i) => (
              <div key={i} className={`app-category reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="app-category-icon" style={{ background: cat.bg }}>
                  {cat.icon}
                </div>
                <h3>{cat.title}</h3>
                <ul className="app-list">
                  {cat.apps.map((app) => (
                    <li key={app}>{app}</li>
                  ))}
                </ul>
                <div className="app-count">+{cat.total} app incluse</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div className="stats-band">
        <div className="stats-band-inner">
          {[
            { val: '75.000', suffix: '+', label: 'Aziende nel mondo usano Zoho One' },
            { val: '40', suffix: '%', label: 'Risparmio medio rispetto ai tool separati' },
            { val: '30', suffix: 'anni', label: 'Di sviluppo software indipendente' },
            { val: '150M', suffix: '', label: 'Utenti nell\'ecosistema Zoho' },
          ].map((stat, i) => (
            <div key={i} className="reveal">
              <div className="stats-band-val">{stat.val}<em>{stat.suffix}</em></div>
              <div className="stats-band-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PRICING ── */}
      <section className="pricing-section">
        <div className="section-inner">
          <div className="section-overline reveal">Trasparenza totale</div>
          <h2 className="section-title reveal reveal-delay-1">Un prezzo. Tutto incluso. Nessuna sorpresa.</h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Zoho One ha due piani. Entrambi includono le stesse 45+ app. La differenza è solo su quanti utenti licenziare.
          </p>
          <div className="pricing-grid">
            {/* Plan A */}
            <div className="pricing-card pricing-card-featured reveal reveal-delay-1">
              <div className="pricing-badge">Più conveniente</div>
              <div className="pricing-plan">Tutti i dipendenti</div>
              <div className="pricing-price">
                <span className="pricing-amount">~€34</span>
                <span className="pricing-unit">/dipendente/mese</span>
              </div>
              <p className="pricing-note">Fatturazione annuale · Licenza obbligatoria per tutti i dipendenti</p>
              <p className="pricing-desc">Il piano più conveniente per azienda. Prezzo più basso per utente, ma tutti i dipendenti devono essere licenziati — anche chi usa solo Zoho Mail o Cliq.</p>
              <ul className="pricing-features">
                <li>45+ app enterprise incluse</li>
                <li>Single Sign-On su tutte le app</li>
                <li>AI assistant Ask Zia</li>
                <li>Pannello admin centralizzato</li>
                <li>Data center EU (GDPR)</li>
                <li>Supporto tecnico incluso</li>
              </ul>
              <Link href="/contatti" className="btn-pricing btn-pricing-primary">
                Richiedi una Demo
              </Link>
            </div>
            {/* Plan B */}
            <div className="pricing-card reveal reveal-delay-2">
              <div className="pricing-plan">Utenti flessibili</div>
              <div className="pricing-price">
                <span className="pricing-amount">~€83</span>
                <span className="pricing-unit">/utente/mese</span>
              </div>
              <p className="pricing-note">Fatturazione annuale · Licenza solo per gli utenti effettivi</p>
              <p className="pricing-desc">Ideale quando solo alcune funzioni aziendali hanno bisogno di Zoho One. Paghi solo per chi lo usa davvero, senza vincoli sul resto dell'organico.</p>
              <ul className="pricing-features">
                <li>Stesse 45+ app del piano precedente</li>
                <li>Nessun vincolo sul numero totale dipendenti</li>
                <li>Flessibilità su chi licenziare</li>
                <li>Ideale per implementazioni graduali</li>
                <li>Upgrade a "Tutti i dipendenti" in qualsiasi momento</li>
                <li>30 giorni di prova gratuita</li>
              </ul>
              <Link href="/contatti" className="btn-pricing btn-pricing-ghost">
                Scopri qual è il tuo piano
              </Link>
            </div>
          </div>
          <div className="pricing-comparison reveal">
            <Star size={20} color="#7A65CF" style={{ flexShrink: 0 }} />
            <p>
              <strong>Confronto reale:</strong> Una PMI da 20 persone che usa HubSpot + QuickBooks + Slack + BambooHR + altri tool spende mediamente €2.500–€4.000/mese. Con Zoho One (piano dipendenti) la stessa copertura costa circa <strong>€680/mese</strong> — con tutto integrato e in italiano.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="comparison-section">
        <div className="section-inner">
          <div className="section-overline reveal">Zoho One vs il mercato</div>
          <h2 className="section-title reveal reveal-delay-1">Perché le PMI scelgono Zoho One</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="comparison-table reveal reveal-delay-2">
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
                  ['CRM completo', '✓ Incluso', '✗ Non incluso', '✓ Solo CRM (~€80/u)'],
                  ['Contabilità', '✓ Zoho Books incluso', '✗ Serve QuickBooks/SAP', '✗ Non incluso'],
                  ['Marketing automation', '✓ Incluso', '✗ Serve HubSpot/Mailchimp', '✗ Marketing Cloud a parte'],
                  ['HR & Paghe', '✓ Zoho People incluso', '✗ Serve BambooHR/Personio', '✗ Non incluso'],
                  ['Business Intelligence', '✓ Zoho Analytics incluso', '✗ Power BI a parte', '✗ Tableau a parte'],
                  ['Integrazioni native', '✓ Tutte le app si parlano', '⚠ Richiedono Zapier/API', '⚠ API costose e complesse'],
                  ['Dati in EU (GDPR)', '✓ Data center NL', '⚠ Opzionale a pagamento', '⚠ Opzionale a pagamento'],
                  ['Nessuna pubblicità', '✓ Zero ads, zero data selling', '⚠ Dati usati per ads', '✓ No ads'],
                  ['Prezzo indicativo (20 utenti)', '~€680/mese (tutto incluso)', '~€2.800/mese (stack equiv.)', '~€3.500/mese (stack equiv.)'],
                ].map(([feature, zoho, ms, sf], i) => (
                  <tr key={i}>
                    <td>{feature}</td>
                    <td className="td-good">{zoho}</td>
                    <td className="td-bad">{ms}</td>
                    <td className="td-bad">{sf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PARTNER SECTION (GOSNAIL ADVANTAGE) ── */}
      <section className="partner-section">
        <div className="section-inner">
          <div className="section-overline reveal">Perché scegliere Gosnail</div>
          <h2 className="section-title reveal reveal-delay-1">Il partner italiano che conosce la tua realtà</h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Zoho One è potente. Ma la differenza tra un'implementazione che trasforma l'azienda e una che finisce nel cassetto è il partner che ti affianca.
          </p>
          <div className="partner-grid">
            <div className="partner-points">
              {[
                { icon: <Award size={18} color="#7A65CF" />, bg: '#EDE9FB', title: 'Partner Autorizzato Zoho', text: 'Certificati da Zoho Corporation. Accesso diretto al supporto tecnico Zoho e alle ultime versioni dei prodotti.' },
                { icon: <Globe size={18} color="#349ABA" />, bg: '#DFF1F7', title: 'Supporto completamente in italiano', text: 'Formazione, documentazione, supporto post go-live — tutto in italiano. Nessuna barriera linguistica con un helpdesk in India.' },
                { icon: <Building2 size={18} color="#FF6B6B" />, bg: '#FFE4E4', title: 'Conoscenza del mercato italiano', text: 'Fatturazione elettronica SDI, normative fiscali italiane, GDPR: configuriamo Zoho One per la realtà delle PMI italiane.' },
                { icon: <Users size={18} color="#7A65CF" />, bg: '#EDE9FB', title: 'Metodo in 5 fasi', text: 'Analisi → Mappatura processi → Configurazione → Formazione → Supporto continuo. Non spariam dopo il go-live.' },
              ].map((point, i) => (
                <div key={i} className={`partner-point reveal reveal-delay-${i + 1}`}>
                  <div className="partner-point-icon" style={{ background: point.bg }}>{point.icon}</div>
                  <div>
                    <h4>{point.title}</h4>
                    <p>{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="partner-visual reveal reveal-delay-2">
              <div className="partner-visual-title">Le nostre credenziali</div>
              {[
                { icon: <Award size={18} color="#7A65CF" />, title: 'Zoho Authorized Partner', sub: 'Certificazione ufficiale Zoho Corporation' },
                { icon: <Globe size={18} color="#349ABA" />, title: 'Specializzazione Italia', sub: 'Fiscalità italiana, fattura elettronica, GDPR' },
                { icon: <Users size={18} color="#FF6B6B" />, title: '50+ implementazioni', sub: 'PMI italiane in manifattura, servizi, distribuzione' },
                { icon: <Zap size={18} color="#7A65CF" />, title: 'Supporto post go-live', sub: 'Non spariam dopo il go-live' },
              ].map((cred, i) => (
                <div key={i} className="partner-credential">
                  <div className="partner-credential-icon">{cred.icon}</div>
                  <div>
                    <div className="partner-credential-text">{cred.title}</div>
                    <div className="partner-credential-sub">{cred.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div className="section-inner">
          <div className="section-overline reveal">Domande frequenti</div>
          <h2 className="section-title reveal reveal-delay-1">Tutto quello che vuoi sapere su Zoho One</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="faq-question">
                  {faq.q}
                  <span className="faq-arrow">+</span>
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <div className="cta-section">
        <div className="section-inner">
          <h2>Pronto a unificare la tua azienda su Zoho One?</h2>
          <p>In una call gratuita di 30 minuti analizziamo la tua situazione attuale e ti mostriamo come Zoho One si adatta alla tua realtà.</p>
          <Link href="/contatti" className="btn-cta-white">
            Prenota una consulenza gratuita
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
