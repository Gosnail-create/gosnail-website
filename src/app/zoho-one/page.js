import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'
import {
  TrendingUp, Database, Users, Receipt,
  Eye, Zap, Network, Wallet,
  Briefcase, Megaphone, BarChart3, FolderKanban, Headphones, Mail,
  CheckCircle2, ArrowRight, Star, Award, Globe, Lock, Building2,
} from 'lucide-react'

export const metadata = {
  title: 'Zoho One Italia — Il Sistema Operativo per la Tua Azienda | Gosnail',
  description:
    'Zoho One sostituisce decine di applicazioni con un\'unica suite integrata di oltre 45 strumenti. Gosnail è il partner italiano autorizzato per implementazione, configurazione e formazione. Non vendiamo software, guidiamo trasformazioni.',
  keywords: [
    'Zoho One Italia', 'partner Zoho certificato', 'implementazione Zoho One',
    'sistema operativo aziendale', 'suite gestionale PMI', 'frammentazione tecnologica',
    'piattaforma unificata aziendale', 'consulenza Zoho Italia',
  ],
  openGraph: {
    title: 'Zoho One Italia — Il Sistema Operativo per la Tua Azienda',
    description: 'Una licenza Zoho One è uno strumento. La nostra partnership è la strategia.',
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
      description: 'Partner autorizzato Zoho in Italia. Implementazione, formazione e supporto dell\'ecosistema Zoho per medie imprese italiane.',
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
      '@type': 'Product',
      name: 'Zoho One',
      description: 'Suite aziendale all-in-one con oltre 45 applicazioni enterprise integrate: CRM, marketing, finanza, HR, helpdesk, analytics e collaborazione.',
      brand: { '@type': 'Brand', name: 'Zoho Corporation' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '34',
          priceCurrency: 'EUR',
          description: 'Prezzo indicativo per dipendente al mese, fatturazione annuale',
        },
        seller: { '@type': 'Organization', name: 'Gosnail S.r.l.' },
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
            text: 'Zoho One è la suite aziendale all-in-one di Zoho Corporation: oltre 45 applicazioni enterprise integrate in un\'unica piattaforma per gestire vendite, marketing, finanza, risorse umane, assistenza clienti e operazioni. Sostituisce decine di applicazioni separate con una soluzione unificata dove ogni dato e processo fluisce senza interruzioni tra i reparti.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto costa Zoho One in Italia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zoho One ha due piani. Il piano "Tutti i Dipendenti" (All-Employee) parte da circa €34/dipendente/mese con fatturazione annuale e richiede la licenza per tutti i dipendenti. Il piano "Utenti Flessibili" parte da circa €83/utente/mese e permette di licenziare solo gli utenti effettivi. Contatta Gosnail per il prezzo aggiornato in EUR e per scegliere il piano più adatto.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quante app include Zoho One?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zoho One include oltre 45 applicazioni enterprise organizzate in 6 aree: CRM e marketing (CRM, Campaigns, Social, Survey), HR (People, Recruit, Shifts), analytics e sviluppo (Analytics, Creator), produttività (Projects, WorkDrive, Mail, Cliq), assistenza clienti (Desk, SalesIQ, Assist) e finanza (Books, Expense, Inventory).',
          },
        },
        {
          '@type': 'Question',
          name: 'Zoho One è conforme al GDPR?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sì, Zoho è pienamente conforme al GDPR. Dispone di data center in Europa (Paesi Bassi), non vende mai i dati degli utenti, non include pubblicità in nessun prodotto e ha nominato un Data Protection Officer. Gosnail configura Zoho One con residenza dei dati esclusivamente in EU per le aziende italiane.',
          },
        },
        {
          '@type': 'Question',
          name: 'Cosa differenzia Gosnail da altri partner Zoho?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gosnail è partner autorizzato Zoho in Italia e adotta un approccio consulenziale: non vendiamo software, guidiamo trasformazioni. Analizziamo i processi del cliente, disegniamo la soluzione su misura e formiamo il team per garantire un\'adozione completa e ROI misurabile. Il vero successo di un progetto Zoho One dipende dalla configurazione personalizzata, non dalla licenza.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual è la differenza tra Zoho CRM e Zoho One?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zoho CRM è una singola applicazione per le vendite. Zoho One include Zoho CRM più altre 44+ applicazioni per coprire ogni funzione aziendale (marketing, finanza, HR, support, collaborazione, analytics). Il costo di Zoho One è significativamente inferiore alla somma dei singoli moduli, e tutti i dati fluiscono automaticamente tra le applicazioni.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto dura un\'implementazione Zoho One?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dipende dalla complessità. Un\'implementazione base (CRM + contabilità) richiede 4–8 settimane. Un progetto multi-reparto completo può richiedere 3–6 mesi. Gosnail segue un percorso strutturato in 5 fasi: analisi dei processi, mappatura dei flussi, configurazione su misura, formazione dei team e supporto post go-live.',
          },
        },
      ],
    },
  ],
}

const targetAudience = [
  {
    icon: <TrendingUp size={22} color="#7A65CF" />,
    bg: '#EDE9FB',
    title: 'Imprese in fase di scaleup',
    text: 'Che sentono i limiti dei loro attuali strumenti e necessitano di una piattaforma scalabile che possa crescere con loro.',
  },
  {
    icon: <BarChart3 size={22} color="#349ABA" />,
    bg: '#DFF1F7',
    title: 'Management data-driven',
    text: 'Che desidera prendere decisioni basate su dati unificati e in tempo reale, anziché su report frammentati.',
  },
  {
    icon: <Network size={22} color="#FF6B6B" />,
    bg: '#FFE4E4',
    title: 'Team multi-reparto',
    text: 'Con reparti vendite, marketing, finanza e HR che hanno bisogno di collaborare in modo più efficace.',
  },
  {
    icon: <Zap size={22} color="#7A65CF" />,
    bg: '#EDE9FB',
    title: 'Aziende focus su efficienza',
    text: 'Che vogliono eliminare i processi manuali, ridurre i costi di tanti abbonamenti software e aumentare la produttività complessiva.',
  },
]

const benefits = [
  {
    num: '01',
    title: 'Una Visione Unica e a 360° sul Business',
    text: 'Connetti i dati di vendite, marketing, finanza e assistenza clienti. Ottieni dashboard complete che ti danno una visione d\'insieme in tempo reale, permettendoti di identificare opportunità e problemi prima della concorrenza.',
  },
  {
    num: '02',
    title: 'Efficienza Operativa e Automazione Intelligente',
    text: 'Automatizza i flussi di lavoro che attraversano più reparti. Un ordine chiuso nel CRM può generare automaticamente una fattura in Zoho Books e un progetto in Zoho Projects. Libera il tuo team da compiti ripetitivi e lascia che l\'AI di Zoho li supporti con suggerimenti e previsioni.',
  },
  {
    num: '03',
    title: 'Collaborazione Senza Attriti',
    text: 'Fornisci a tutti i dipartimenti un\'unica fonte di verità. Il team di assistenza può vedere lo storico degli acquisti di un cliente, mentre il team vendite può vedere i ticket di supporto aperti. Meno email, meno incomprensioni, più collaborazione.',
  },
  {
    num: '04',
    title: 'Costi Sotto Controllo e Prevedibili',
    text: 'Sostituisci decine di abbonamenti software con un\'unica licenza per dipendente a un prezzo estremamente competitivo. Il modello "All-Employee" di Zoho One rende i costi tecnologici semplici, prevedibili e scalabili, eliminando le sorprese.',
  },
]

const appCategories = [
  {
    icon: <Briefcase size={22} color="#7A65CF" />,
    bg: '#EDE9FB',
    title: 'Vendite & Marketing',
    apps: 'CRM, Marketing Automation, Campagne Email, Social Media Management, Sondaggi',
  },
  {
    icon: <Users size={22} color="#349ABA" />,
    bg: '#DFF1F7',
    title: 'Risorse Umane',
    apps: 'Gestione dipendenti, Recruitment, Gestione presenze',
  },
  {
    icon: <BarChart3 size={22} color="#FF6B6B" />,
    bg: '#FFE4E4',
    title: 'Analytics & Sviluppo',
    apps: 'Analisi avanzata dei dati, Sviluppo di app personalizzate',
  },
  {
    icon: <FolderKanban size={22} color="#7A65CF" />,
    bg: '#EDE9FB',
    title: 'Produttività & Collaborazione',
    apps: 'Gestione Progetti, Archiviazione file in cloud, Chat interna, Email e Calendario',
  },
  {
    icon: <Headphones size={22} color="#349ABA" />,
    bg: '#DFF1F7',
    title: 'Assistenza Clienti',
    apps: 'Helpdesk multicanale, Chat dal vivo, Accesso Remoto',
  },
  {
    icon: <Receipt size={22} color="#FF6B6B" />,
    bg: '#FFE4E4',
    title: 'Finanza & Operations',
    apps: 'Contabilità e Fatturazione, Gestione Spese, Inventario',
  },
]

const faqs = [
  {
    q: "Cos'è esattamente Zoho One?",
    a: "Zoho One è una suite integrata di oltre 45 applicazioni enterprise di Zoho Corporation, definita ufficialmente \"il sistema operativo per il business\". Sostituisce decine di software separati con un'unica piattaforma dove vendite, marketing, finanza, HR, assistenza e operazioni condividono nativamente gli stessi dati. Un solo login, un solo abbonamento per dipendente, tutto integrato.",
  },
  {
    q: 'Quanto costa Zoho One in Italia?',
    a: 'Esistono due piani. Il piano "Tutti i Dipendenti" (All-Employee) è il più conveniente — circa €34/dipendente/mese con fatturazione annuale, ma richiede di licenziare l\'intero organico aziendale. Il piano "Utenti Flessibili" parte da circa €83/utente/mese e permette di pagare solo per chi effettivamente utilizza la piattaforma. Per il prezzo aggiornato in EUR e per un\'analisi del piano più adatto, contattaci.',
  },
  {
    q: 'Quante e quali app sono incluse?',
    a: 'Oltre 45 applicazioni che coprono ogni area aziendale: CRM e marketing automation (Zoho CRM, Campaigns, Social, Survey), gestione risorse umane (People, Recruit, Shifts), analytics e business intelligence (Analytics, DataPrep), produttività e collaborazione (Projects, WorkDrive, Mail, Cliq, Meeting), assistenza clienti (Desk, SalesIQ, Assist), finanza e contabilità (Books, Expense, Inventory, Subscriptions). Ogni app è integrata nativamente con le altre.',
  },
  {
    q: 'Zoho One è conforme al GDPR e alle normative italiane?',
    a: "Sì, pienamente. Zoho ha data center in Europa (Paesi Bassi), non vende mai i dati degli utenti, non include pubblicità in nessun prodotto e ha nominato un Data Protection Officer. Per le aziende italiane, Gosnail configura Zoho One con residenza dei dati esclusivamente in EU. Zoho Books supporta la fatturazione elettronica europea — per l'integrazione completa con il Sistema di Interscambio (SDI) italiano forniamo configurazione e supporto specializzato.",
  },
  {
    q: "Perché scegliere Gosnail per l'implementazione?",
    a: "Una licenza Zoho One è solo lo strumento. Il successo di un progetto dipende da come la piattaforma viene configurata, personalizzata e integrata nei processi unici della tua azienda. Come Zoho Authorized Partner italiano, analizziamo il tuo modo di lavorare, disegniamo la soluzione su misura e formiamo il tuo team. Non vendiamo software — guidiamo trasformazioni con ROI misurabile.",
  },
  {
    q: 'Qual è la differenza tra Zoho CRM e Zoho One?',
    a: 'Zoho CRM è una singola applicazione focalizzata sulle vendite e gestione clienti. Zoho One include Zoho CRM più altre 44+ applicazioni per coprire ogni funzione aziendale: marketing, finanza, HR, support, collaborazione e analytics. Il costo di Zoho One è significativamente inferiore alla somma dei singoli moduli, e tutti i dati fluiscono automaticamente tra le applicazioni — eliminando il bisogno di integrazioni custom.',
  },
  {
    q: "Quanto tempo richiede un'implementazione?",
    a: "Dipende dalla complessità e dai moduli attivati. Un'implementazione base (CRM + contabilità) può richiedere 4–8 settimane. Un progetto multi-reparto completo con personalizzazioni avanzate può estendersi a 3–6 mesi. Gosnail segue un percorso strutturato in 5 fasi: analisi dei processi, mappatura dei flussi, configurazione su misura, formazione dei team e supporto post go-live.",
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
        <div className="hero-blob hero-blob-3"></div>
        <div className="hero-inner" style={{ maxWidth: 860 }}>
          <div className="partner-badge">
            <span className="partner-badge-dot"></span>
            Zoho Authorized Partner — Italia
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>
            Un unico <em>sistema operativo</em> per gestire e far crescere la tua azienda
          </h1>
          <p style={{ maxWidth: 640 }}>
            La soluzione per superare la frammentazione tecnologica. Unifica vendite, marketing, finanza, HR e operations in un'unica piattaforma integrata, intelligente e pronta per il futuro.
          </p>
          <div className="hero-actions">
            <Link href="/contatti" className="btn-hero-primary">
              Prenota una Demo Gratuita
            </Link>
            <a href="#valore" className="btn-hero-ghost">
              Scopri il valore di Zoho One <ArrowRight size={16} />
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
              <div className="stat-label">Anni di sviluppo Zoho</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMA: frammentazione tecnologica ── */}
      <section className="problems">
        <div className="section-inner" style={{ maxWidth: 920 }}>
          <div className="section-overline reveal">La frammentazione tecnologica</div>
          <h2 className="section-title reveal reveal-delay-1">
            è il nemico nascosto della crescita
          </h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ maxWidth: 820, fontSize: '1.05rem' }}>
            La tua azienda probabilmente utilizza già diverse applicazioni cloud: una per il CRM, una per la contabilità, una per la gestione dei progetti e forse decine di fogli Excel per colmare le lacune.
          </p>
          <p className="reveal reveal-delay-3" style={{ marginTop: 16, fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--fg-secondary)', maxWidth: 820 }}>
            Ogni sistema ha i suoi costi, le sue password e, soprattutto, i suoi dati isolati. Questo "mosaico" di strumenti non comunicanti crea inefficienze, rallenta le decisioni e impedisce al management di avere una visione d'insieme chiara e affidabile.
          </p>
          <div className="reveal reveal-delay-4" style={{
            marginTop: 32, padding: '20px 28px',
            background: 'linear-gradient(90deg, rgba(255,107,107,0.08), transparent)',
            borderLeft: '4px solid #FF6B6B',
            borderRadius: '0 12px 12px 0',
            maxWidth: 820,
          }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111D52', margin: 0, fontStyle: 'italic' }}>
              È un costo operativo nascosto che frena il potenziale della tua azienda.
            </p>
          </div>
        </div>
      </section>

      {/* ── SOLUZIONE ── */}
      <section className="solution">
        <div className="section-inner">
          <div className="section-overline reveal">Progettato per le imprese che pensano in grande</div>
          <h2 className="section-title reveal reveal-delay-1">
            Zoho One, il sistema operativo<br />unico del tuo business
          </h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ maxWidth: 780 }}>
            Zoho One sostituisce decine di applicazioni con un'unica suite integrata di oltre 45 strumenti che coprono ogni area della tua organizzazione. Dalla gestione del primo contatto con un cliente fino alla fatturazione e al supporto post-vendita, ogni dato e ogni processo fluisce senza interruzioni tra i reparti.
          </p>
          <div className="solution-split" style={{ marginTop: 56 }}>
            <div className="solution-points">
              <div className="solution-point reveal reveal-delay-1">
                <div className="solution-point-icon">
                  <CheckCircle2 size={18} color="#349ABA" />
                </div>
                <div className="solution-point-text">
                  <h4>Abbattere i silos informativi</h4>
                  <p>Dati condivisi nativamente tra tutte le 45+ app. Un lead dal marketing diventa contatto CRM, poi cliente in contabilità — senza copia-incolla.</p>
                </div>
              </div>
              <div className="solution-point reveal reveal-delay-2">
                <div className="solution-point-icon">
                  <CheckCircle2 size={18} color="#349ABA" />
                </div>
                <div className="solution-point-text">
                  <h4>Automatizzare i processi tra team</h4>
                  <p>Workflow che attraversano più reparti senza integrazioni custom. Tutto preconfigurato e nativamente connesso.</p>
                </div>
              </div>
              <div className="solution-point reveal reveal-delay-3">
                <div className="solution-point-icon">
                  <CheckCircle2 size={18} color="#349ABA" />
                </div>
                <div className="solution-point-text">
                  <h4>Strumenti giusti per ogni persona</h4>
                  <p>Ogni dipendente ha accesso alle app di cui ha bisogno, con un'interfaccia coerente. Lavoro più intelligente, più collaborativo.</p>
                </div>
              </div>
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

      {/* ── A CHI È RIVOLTO ── */}
      <section className="target-section">
        <div className="section-inner">
          <div className="section-overline reveal">Per chi è pensato Zoho One</div>
          <h2 className="section-title reveal reveal-delay-1">È la scelta giusta se ti riconosci in una di queste situazioni</h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Zoho One è progettato per aziende strutturate che stanno crescendo e hanno bisogno di un'infrastruttura digitale solida e scalabile.
          </p>
          <div className="target-grid">
            {targetAudience.map((t, i) => (
              <div key={i} className={`target-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="target-card-icon" style={{ background: t.bg }}>{t.icon}</div>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALORE DELLA PIATTAFORMA UNIFICATA ── */}
      <section id="valore" className="benefits-section">
        <div className="section-inner">
          <div className="section-overline reveal">I quattro pilastri</div>
          <h2 className="section-title reveal reveal-delay-1">Il Valore di una Piattaforma Realmente Unificata</h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ maxWidth: 760 }}>
            Unificare i processi e i dati, le vendite e il marketing, la finanza ed il supporto cliente ti permette di lavorare come un'unica ed efficiente organizzazione.
          </p>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className={`benefit-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="benefit-card-num">{b.num}</div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP CATEGORIES ── */}
      <section id="app-suite" className="app-section">
        <div className="section-inner">
          <div className="section-overline reveal">L'ecosistema completo</div>
          <h2 className="section-title reveal reveal-delay-1">Un Ecosistema completo con oltre 45 applicazioni per ogni esigenza aziendale</h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Sei aree funzionali, oltre 45 app integrate nativamente, un solo abbonamento per dipendente.
          </p>
          <div className="app-categories">
            {appCategories.map((cat, i) => (
              <div key={i} className={`app-category reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="app-category-icon" style={{ background: cat.bg }}>{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--fg-secondary)', lineHeight: 1.65 }}>{cat.apps}</p>
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

      {/* ── PARTNERSHIP QUOTE (signature section) ── */}
      <section className="partnership-quote">
        <div className="partnership-quote-inner">
          <div className="section-overline reveal" style={{ color: '#349ABA' }}>Il valore del partner</div>
          <h2 className="reveal reveal-delay-1">
            Una licenza Zoho One è uno strumento.<br />
            La nostra <strong>partnership</strong> è la strategia.
          </h2>
          <p className="reveal reveal-delay-2">
            Avere accesso a oltre 45 applicazioni è solo il primo passo. Il vero successo di un progetto Zoho One dipende da come la piattaforma viene configurata, personalizzata e integrata nei tuoi processi unici.
          </p>
          <p className="reveal reveal-delay-3">
            Il nostro ruolo come partner specializzato è proprio questo: analizziamo il tuo modo di lavorare, disegniamo la soluzione su misura per te e formiamo il tuo team per garantire un'adozione completa e un ritorno sull'investimento misurabile.
          </p>
          <div className="reveal reveal-delay-4">
            <span className="partnership-tagline">Non ti vendiamo un software, ti guidiamo in una trasformazione.</span>
          </div>
        </div>
      </section>

      {/* ── PARTNER ADVANTAGE ── */}
      <section className="partner-section">
        <div className="section-inner">
          <div className="section-overline reveal">Le credenziali Gosnail</div>
          <h2 className="section-title reveal reveal-delay-1">Il partner italiano che conosce la tua realtà</h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Implementare Zoho One bene richiede tre cose: conoscenza profonda della piattaforma, esperienza del mercato italiano, presenza continua nel tempo. Le abbiamo tutte e tre.
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
          <h2>Pronto a vedere come Zoho One può unificare la tua azienda?</h2>
          <p>Parlaci del tuo progetto: ti faremo vedere come Zoho One può risolvere le tue sfide specifiche e potenziare i tuoi processi di business.</p>
          <Link href="/contatti" className="btn-cta-white">
            Prenota una consulenza gratuita
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
