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
  title: 'Zoho One per PMI: cos\'è, prezzi e implementazione | Gosnail',
  description:
    'Zoho One mette tutta l\'azienda su un\'unica piattaforma di 45+ app. Gosnail, partner Zoho del Nord-Est, ti guida dalla strategia all\'adozione. Prenota una consulenza.',
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
        { '@type': 'Question', name: 'Cos\'è esattamente Zoho One?', acceptedAnswer: { '@type': 'Answer', text: 'È la piattaforma aziendale di Zoho: oltre 45 applicazioni integrate che coprono vendite, marketing, finanza, HR, assistenza e operations, condividendo nativamente gli stessi dati. Un solo login, un solo contratto, una sola fonte di verità per tutta l\'azienda.' }},
        { '@type': 'Question', name: 'Quanto costa Zoho One in Italia?', acceptedAnswer: { '@type': 'Answer', text: 'Un\'unica edizione, due modelli di licenza con fatturazione annuale. «Tutti i dipendenti»: €37 a dipendente al mese, ma vanno licenziati tutti. «Utenti flessibili»: €90 a utente al mese, paghi solo chi la usa. Il costo dell\'implementazione è a parte e lo definiamo insieme in base al progetto.' }},
        { '@type': 'Question', name: 'Zoho One è conforme al GDPR e alle normative italiane?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. Zoho ha data center in Europa, non vende i dati degli utenti e non include pubblicità. Per le aziende italiane configuriamo la residenza dei dati in EU. Zoho Books supporta la fatturazione elettronica: per l\'integrazione con il Sistema di Interscambio (SDI) forniamo configurazione e supporto specializzato.' }},
        { '@type': 'Question', name: 'Perché scegliere Gosnail per l\'implementazione?', acceptedAnswer: { '@type': 'Answer', text: 'Una licenza è solo lo strumento. Il risultato dipende da come la piattaforma viene disegnata sui tuoi processi, adottata dal team e fatta evolvere nel tempo. Come Zoho Authorized Partner analizziamo come lavori, configuriamo su misura e formiamo le persone. Siamo nel Nord-Est e raggiungiamo di persona le PMI in tutto il Nord Italia. Non ti vendiamo software, ti guidiamo in una trasformazione con ROI misurabile.' }},
        { '@type': 'Question', name: 'Qual è la differenza tra Zoho CRM e Zoho One?', acceptedAnswer: { '@type': 'Answer', text: 'Zoho CRM è una sola applicazione, per le vendite. Zoho One include il CRM più tutte le altre aree aziendali, a un costo molto inferiore alla somma dei singoli moduli, con i dati che fluiscono tra tutte le funzioni.' }},
        { '@type': 'Question', name: 'Quanto tempo richiede un\'implementazione?', acceptedAnswer: { '@type': 'Answer', text: 'Dipende dalla complessità. Un avvio base (CRM più contabilità) richiede in genere 4–8 settimane. Un progetto multi-reparto completo può estendersi a 3–6 mesi. Seguiamo un percorso in fasi: analisi, mappatura dei flussi, configurazione su misura, formazione e supporto post go-live.' }},
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
  { n: '01', title: 'La direzione vede l\'azienda in tempo reale', text: 'Niente più attese per un report messo insieme a mano. I dati di vendite, finanza e operations in un\'unica dashboard, e le decisioni si prendono su numeri certi quando servono.' },
  { n: '02', title: 'I reparti lavorano allineati', text: 'Il commerciale vede i ticket aperti, l\'assistenza vede cosa il cliente ha comprato, l\'amministrazione vede gli ordini chiusi. Spariscono i passaggi a vuoto e il tempo perso a mettere assieme i pezzi.' },
  { n: '03', title: 'L\'organizzazione cresce senza diventare più complicata', text: 'Quando aumenti i volumi non aggiungi l\'ennesimo software scollegato: attivi una funzione in più sulla stessa piattaforma. La struttura regge invece di incepparsi.' },
  { n: '04', title: 'I costi restano prevedibili', text: 'Un fornitore, un contratto, una spesa per dipendente che sai già quanto vale oggi e quanto varrà se assumi.' },
]

const faqs = [
  { q: "Cos'è esattamente Zoho One?", a: 'È la piattaforma aziendale di Zoho: oltre 45 applicazioni integrate che coprono vendite, marketing, finanza, HR, assistenza e operations, condividendo nativamente gli stessi dati. Un solo login, un solo contratto, una sola fonte di verità per tutta l\'azienda.' },
  { q: 'Quanto costa Zoho One in Italia?', a: 'Un\'unica edizione, due modelli di licenza con fatturazione annuale. «Tutti i dipendenti»: €37 a dipendente al mese, ma vanno licenziati tutti. «Utenti flessibili»: €90 a utente al mese, paghi solo chi la usa. Il costo dell\'implementazione è a parte e lo definiamo insieme in base al progetto.' },
  { q: 'Zoho One è conforme al GDPR e alle normative italiane?', a: 'Sì. Zoho ha data center in Europa, non vende i dati degli utenti e non include pubblicità. Per le aziende italiane configuriamo la residenza dei dati in EU. Zoho Books supporta la fatturazione elettronica: per l\'integrazione con il Sistema di Interscambio (SDI) forniamo configurazione e supporto specializzato.' },
  { q: "Perché scegliere Gosnail per l'implementazione?", a: 'Una licenza è solo lo strumento. Il risultato dipende da come la piattaforma viene disegnata sui tuoi processi, adottata dal team e fatta evolvere nel tempo. Come Zoho Authorized Partner analizziamo come lavori, configuriamo su misura e formiamo le persone. Siamo nel Nord-Est e raggiungiamo di persona le PMI in tutto il Nord Italia. Non ti vendiamo software, ti guidiamo in una trasformazione con ROI misurabile.' },
  { q: 'Qual è la differenza tra Zoho CRM e Zoho One?', a: 'Zoho CRM è una sola applicazione, per le vendite. Zoho One include il CRM più tutte le altre aree aziendali, a un costo molto inferiore alla somma dei singoli moduli, con i dati che fluiscono tra tutte le funzioni.' },
  { q: "Quanto tempo richiede un'implementazione?", a: 'Dipende dalla complessità. Un avvio base (CRM più contabilità) richiede in genere 4–8 settimane. Un progetto multi-reparto completo può estendersi a 3–6 mesi. Seguiamo un percorso in fasi: analisi, mappatura dei flussi, configurazione su misura, formazione e supporto post go-live.' },
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
              Un unico <em>sistema operativo</em> per far funzionare tutta la tua azienda
            </h1>
            <p className="ed-hero-intro ed-reveal ed-reveal-2">
              Zoho One mette vendite, marketing, finanza, assistenza, HR e operations sulla stessa piattaforma: un solo posto dove l&apos;azienda lavora allineata, sugli stessi dati. Noi la configuriamo intorno a come lavori davvero.
            </p>
            <div className="ed-hero-cta-row ed-reveal ed-reveal-3">
              <Link href="/contatti" className="btn-ed-primary">
                <span>Prenota una consulenza</span>
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
              <div className="ed-stat-num">4,5<small>/5</small></div>
              <div className="ed-stat-label">Su oltre 19.000 recensioni</div>
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
              La frammentazione che ti frena è <em>organizzativa</em>,<br />prima ancora che tecnologica
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                La tua azienda è cresciuta. I tuoi strumenti no: si sono solo moltiplicati. Un software per il CRM, uno per la contabilità, uno per i progetti, più i soliti fogli Excel a tappare i buchi.
              </p>
              <p className="ed-reveal ed-reveal-3">
                Gli abbonamenti che si sommano sono il meno. Il costo vero è un altro: ogni reparto lavora per conto suo, con i suoi dati. Le informazioni restano dove sono, le decisioni rallentano, e chi guida l&apos;azienda non ha mai un quadro affidabile di cosa sta succedendo adesso.
              </p>
              <div className="ed-problem-highlight ed-reveal ed-reveal-4">
                <p>Più l&apos;azienda cresce, più questa distanza tra i reparti pesa.</p>
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
          <div className="ed-split">
            <div className="ed-reveal ed-reveal-1">
              <h2 className="ed-h2">
                Un solo sistema<br />per <em>tutta</em> la tua azienda
              </h2>
              <div className="ed-section-header-body" style={{ marginTop: 24 }}>
                <p>
                  La cosa importante di Zoho One è che, pur coprendo ogni area dell&apos;azienda, resta un&apos;unica piattaforma con un solo archivio di dati. Le app sono tante; il sistema è uno.
                </p>
                <p>
                  Quando vendite, marketing, finanza, assistenza, HR e operations lavorano sugli stessi dati, l&apos;azienda smette di essere un insieme di reparti separati e comincia a muoversi come una cosa sola. Un&apos;informazione inserita una volta è disponibile ovunque serve. Un ordine che passa per tre reparti non si blocca al confine di ognuno.
                </p>
                <p>
                  Non stai comprando un software. Stai dando all&apos;azienda un sistema nervoso unico.
                </p>
              </div>
            </div>

            <div className="ed-split-image ed-reveal ed-reveal-2">
              <img src={IMG.dashboard} alt="Dashboard unificata Zoho One" />
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
              È la scelta giusta se ti riconosci<br />in <em>una di queste situazioni</em>
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Zoho One è pensato per aziende di ogni dimensione che vogliono un&apos;infrastruttura tecnologica unificata, senza la frammentazione e i costi che frenano la crescita.
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
              Cosa cambia per le aziende che scelgono<br />Zoho One <em>con Gosnail</em>
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Quello che cambia si vede nel lavoro di tutti i giorni.
              </p>
            </div>
          </div>

          <div className="ed-benefit-split">
            <div className="ed-benefit-list">
              {benefits.map((b, i) => (
                <div key={b.title} className={`ed-benefit-item ed-reveal ed-reveal-${(i % 4) + 1}`}>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
            <div className="ed-benefit-visual ed-reveal ed-reveal-2">
              <div className="ed-benefit-blob"></div>
              <div className="ed-benefit-photo">
                <img src={IMG.team} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CurveDivider from={C.linen} to={C.glacier} />

      {/* ═══════════ ECOSISTEMA 45+ APP — interactive tabs ═══════════ */}
      <section className="ed-section">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Tutti i reparti.<br />Una sola <em>piattaforma</em>
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Zoho One è una suite di oltre 45 applicazioni pensata per coprire ogni esigenza e dipartimento aziendale: vendite, marketing, customer care e così via. Si possono usare anche separate. Qui però sono già collegate e condividono gli stessi dati, così quello che inserisci una volta lo ritrovi dappertutto.
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
            La nostra <em>partnership</em> è strategica.<br />Zoho One è lo strumento.
          </p>
          <p className="ed-pullquote-body ed-reveal ed-reveal-2">
            Attivare 45 applicazioni è il primo passo, e il più facile. Il valore di un progetto Zoho One dipende da come la piattaforma è disegnata attorno ai tuoi processi, come la adottano le persone e come continua a evolvere dopo il via.
          </p>
          <p className="ed-pullquote-body ed-reveal ed-reveal-3">
            È il nostro mestiere. Prima analizziamo come lavori, poi configuriamo. Coinvolgiamo il team, perché un sistema che le persone non usano non serve a niente. E restiamo dopo il go-live, per far crescere la soluzione con l&apos;azienda. Siamo nel Nord-Est e raggiungiamo di persona le PMI in tutto il Nord Italia.
          </p>
          <div className="ed-pullquote-cta ed-reveal ed-reveal-4">
            <Link href="/contatti" className="btn-ed-primary">
              <span>Prenota una consulenza</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="ed-pullquote-signature ed-reveal ed-reveal-5">
            <div className="ed-pullquote-signature-logo">
              <img src="/assets/zoho-authorized-partner.svg" alt="Zoho Authorized Partner" />
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
              Un prezzo. Tutta l&apos;azienda.<br /><em>Nessuna sorpresa</em>
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Zoho One è sempre al massimo delle sue capacità: un&apos;unica edizione con tutte le 45+ app. Cambia solo il modello di licenza, e il vantaggio maggiore lo hai attivandolo per tutti gli utenti.
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
              <div className="ed-pricing-note">Fatturazione annuale (€444/anno) · Licenza per tutti i dipendenti</div>
              <p className="ed-pricing-desc">Il prezzo più basso per utente. Vanno licenziati tutti i dipendenti, anche chi usa solo la mail.</p>
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
              <div className="ed-pricing-note">Fatturazione annuale (€1.080/anno) · Licenza per gli utenti effettivi</div>
              <p className="ed-pricing-desc">Licenzi solo chi usa Zoho One davvero, senza vincoli sull&apos;organico.</p>
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
              <strong>Confronto:</strong> una PMI da 20 persone con HubSpot, QuickBooks, Slack, BambooHR e altri strumenti spende in media €2.500–€4.000 al mese. Con Zoho One la stessa copertura costa circa <strong>€740 al mese</strong>, tutto integrato e in italiano.
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
              Perché le PMI scelgono<br /><em>Zoho One</em> rispetto agli altri
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Confronto tra le principali alternative per una PMI italiana da circa 20 utenti.
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
                  ['Integrazioni native',             '✓ Tutte le app integrate',        '⚠ Richiedono Zapier/API',        '⚠ API costose e complesse'],
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
              Le cose che ti starai chiedendo<br /><em>su Zoho One</em>
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
            Parlaci di come lavori oggi. Ti mostriamo cosa cambierebbe con un solo sistema per tutta l&apos;azienda, e ti diciamo con onestà se ha senso per te.
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
