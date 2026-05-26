import Link from 'next/link'
import EdNav from '@/components/EdNav'
import EdFooter from '@/components/EdFooter'
import EdEffects from '@/components/EdEffects'
import { CurveDivider, BlobDivider } from '@/components/OrganicShapes'
import { Eye, Users2, LineChart } from 'lucide-react'

const IMG = {
  customer:  'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80&auto=format&fit=crop',
  team:      'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=80&auto=format&fit=crop',
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
  title: 'Zoho CRM Plus Italia — Customer Experience Unificata | Gosnail',
  description:
    "Zoho CRM Plus mette vendite, marketing e assistenza sulla stessa piattaforma. Ogni team vede lo storico completo del cliente, in tempo reale. Implementazione e formazione con Gosnail, partner autorizzato in Italia.",
  keywords: [
    'Zoho CRM Plus Italia', 'customer experience unificata', 'partner Zoho certificato',
    'CRM marketing assistenza integrati', 'piattaforma esperienza cliente', 'implementazione Zoho CRM Plus',
  ],
  openGraph: {
    title: 'Zoho CRM Plus Italia — Gosnail, Partner Autorizzato',
    description: 'Vendite, marketing e assistenza sulla stessa piattaforma. Implementato da Gosnail.',
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
      description: "Partner autorizzato Zoho in Italia. Implementazione, formazione e supporto dell'ecosistema Zoho per medie imprese italiane.",
      address: { '@type': 'PostalAddress', streetAddress: 'Via Nazionale, 40', addressLocality: 'Tavagnacco', addressRegion: 'UD', postalCode: '33010', addressCountry: 'IT' },
      contactPoint: { '@type': 'ContactPoint', email: 'info@gosnail.it', contactType: 'customer service', availableLanguage: 'Italian' },
    },
    {
      '@type': 'Product',
      name: 'Zoho CRM Plus',
      description: "Piattaforma unificata per l'esperienza cliente: CRM, marketing automation, helpdesk, social, analytics e gestione progetti in un'unica interfaccia.",
      brand: { '@type': 'Brand', name: 'Zoho Corporation' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        priceSpecification: { '@type': 'PriceSpecification', price: '57', priceCurrency: 'EUR', description: 'Prezzo per utente al mese con fatturazione annuale' },
        seller: { '@type': 'Organization', name: 'Gosnail S.r.l.' },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: "Cos'è Zoho CRM Plus?", acceptedAnswer: { '@type': 'Answer', text: "Zoho CRM Plus è la piattaforma di Zoho per l'esperienza cliente. Mette sulla stessa interfaccia sei applicazioni — CRM, Campaigns, Analytics, Social, Desk e Projects — così vendite, marketing e assistenza lavorano sugli stessi dati cliente in tempo reale." }},
        { '@type': 'Question', name: 'Qual è la differenza tra Zoho CRM Plus e Zoho One?', acceptedAnswer: { '@type': 'Answer', text: "Zoho CRM Plus si concentra sui team a contatto col cliente: vendite, marketing e supporto. Sono 6 app. Zoho One è la suite completa: oltre 45 app che coprono anche finanza, HR, operations, collaborazione. Si sceglie CRM Plus quando i sistemi gestionali e amministrativi sono già consolidati e non si vogliono sostituire." }},
        { '@type': 'Question', name: 'Quanto costa Zoho CRM Plus in Italia?', acceptedAnswer: { '@type': 'Answer', text: 'Il prezzo pubblico è di €57 per utente al mese con fatturazione annuale, o €69 per utente al mese con fatturazione mensile. Include tutte e sei le applicazioni e il supporto base.' }},
        { '@type': 'Question', name: 'Quali app sono incluse in Zoho CRM Plus?', acceptedAnswer: { '@type': 'Answer', text: 'Zoho CRM (gestione lead e trattative), Zoho Campaigns con Marketing Automation (email marketing e nurturing), Zoho Analytics (dashboard e report), Zoho Social (gestione social media), Zoho Desk (helpdesk multicanale) e Zoho Projects (collaborazione su progetti).' }},
        { '@type': 'Question', name: 'Zoho CRM Plus è adatto a una PMI italiana?', acceptedAnswer: { '@type': 'Answer', text: "Sì. È pensato per aziende strutturate che vogliono unificare l'esperienza del cliente senza sostituire i sistemi ERP o amministrativi esistenti. Tipicamente la fascia 20–250 dipendenti con un commerciale strutturato e un'assistenza già in essere." }},
        { '@type': 'Question', name: "Quanto dura un'implementazione di CRM Plus?", acceptedAnswer: { '@type': 'Answer', text: "Un'implementazione base con configurazione di CRM, Desk e Campaigns richiede tipicamente 6–10 settimane. L'inclusione di Analytics e automazioni cross-team può estendere il progetto a 3–4 mesi. Gosnail segue lo stesso metodo in 5 fasi della pillar Zoho One: analisi processi, mappatura flussi, configurazione, formazione, supporto post go-live." }},
        { '@type': 'Question', name: "Cosa offre Gosnail oltre alla licenza?", acceptedAnswer: { '@type': 'Answer', text: "La licenza è solo l'inizio. Gosnail analizza i tuoi processi di customer experience, configura CRM Plus sulle tue regole di handoff tra vendite, marketing e supporto, costruisce le automazioni cross-app e forma i team. L'obiettivo è che il cliente non si accorga mai del passaggio da un reparto all'altro." }},
      ],
    },
  ],
}

const targets = [
  {
    variant: '',
    icon: <Eye size={22} color="#7A65CF" />,
    title: 'Aziende focalizzate sul cliente',
    text: 'Vendite, marketing e assistenza che vogliono ottimizzare ogni punto di contatto del customer journey, dalla prima campagna al post-vendita.',
  },
  {
    variant: 'lavender',
    icon: <LineChart size={22} color="#7A65CF" />,
    title: "Team commerciali e marketing in crescita",
    text: "Chi ha bisogno di automazione e analisi più potenti di un CRM di base, senza dover montare un puzzle di tool diversi.",
  },
  {
    variant: 'night',
    icon: <Users2 size={22} color="#FF6B6B" />,
    title: 'Organizzazioni con sistemi consolidati',
    text: 'Aziende che hanno già ERP, contabilità o HR funzionanti e non li vogliono toccare. Cercano solo di potenziare i team a contatto con il cliente.',
  },
]

const benefits = [
  { n: '01', title: 'Lo storico cliente in un\'unica vista', text: "Email aperte, campagne ricevute, trattative chiuse, ticket di supporto, post sui social: tutto in un'unica scheda cliente. Chiunque parli con lui ha lo stesso contesto." },
  { n: '02', title: 'Conversazioni che non si perdono', text: 'Email, telefono, chat, social, web form. Tutti i canali confluiscono nello stesso posto. Se un cliente scrive da Facebook lunedì e da email giovedì, il contesto è già lì.' },
  { n: '03', title: 'Handoff tra reparti senza attriti', text: 'Quando il marketing passa un lead qualificato alle vendite, vedi subito le campagne a cui ha risposto. Quando il commerciale chiude, l\'assistenza riceve già lo storico. Niente "te lo passo a voce".' },
  { n: '04', title: 'Metriche che parlano la stessa lingua', text: 'Performance di vendita, ROI delle campagne, soddisfazione clienti: tutto su Analytics, alimentato dagli stessi dati. Niente più discussioni su quale numero è quello giusto.' },
]

const apps = [
  { id: 'crm',        icon: 'crm.svg',        name: 'Zoho CRM',          desc: 'Gestione completa di lead, trattative, contatti e pipeline commerciale.' },
  { id: 'campaigns',  icon: 'campaigns.svg',  name: 'Zoho Campaigns',    desc: 'Email marketing, nurturing automatico, segmentazione comportamentale.' },
  { id: 'desk',       icon: 'desk.svg',       name: 'Zoho Desk',         desc: 'Helpdesk multicanale per ticket, SLA, knowledge base e self-service.' },
  { id: 'analytics',  icon: 'analytics.svg',  name: 'Zoho Analytics',    desc: 'Dashboard e report che incrociano dati di vendite, marketing e supporto.' },
  { id: 'social',     icon: 'social.svg',     name: 'Zoho Social',       desc: 'Pubblicazione, monitoraggio e gestione delle interazioni sui social media.' },
  { id: 'projects',   icon: 'projects.svg',   name: 'Zoho Projects',     desc: 'Collaborazione su progetti interni ed esterni con task, gantt e timesheet.' },
]

const faqs = [
  { q: "Cos'è esattamente Zoho CRM Plus?", a: "È la piattaforma di Zoho dedicata all'esperienza cliente. Mette sulla stessa interfaccia sei applicazioni — CRM, Campaigns, Analytics, Social, Desk e Projects — così i team che parlano col cliente lavorano sugli stessi dati. Una sola licenza, un solo login, una sola scheda cliente condivisa." },
  { q: 'Quanto costa Zoho CRM Plus in Italia?', a: 'Il prezzo pubblico è di €57 per utente al mese con fatturazione annuale, o €69 al mese con fatturazione mensile. Include tutte e sei le applicazioni, l\'AI assistant Zia e il supporto tecnico base. Non ci sono costi extra per ogni app aggiuntiva: paghi una sola tariffa.' },
  { q: 'Qual è la differenza tra CRM Plus e Zoho One?', a: "CRM Plus è specializzato: copre solo i team a contatto col cliente, con 6 app. Zoho One è completo: oltre 45 app che coprono anche finanza, HR, operations, collaborazione. Se hai già gestionali e amministrativi che funzionano e vuoi solo unificare la customer experience, CRM Plus è la scelta naturale. Se invece vuoi sostituire più sistemi insieme, conviene Zoho One." },
  { q: 'Posso integrare CRM Plus con il mio gestionale esistente?', a: "Sì. Zoho CRM ha integrazioni native con i principali ERP e gestionali (SAP, Microsoft Dynamics, fatturazione elettronica) e un'API completa. In implementazione mappiamo gli scambi di dati necessari — anagrafiche clienti, ordini, fatture — così CRM Plus dialoga col tuo gestionale senza doppio lavoro." },
  { q: 'Come gestisce CRM Plus i canali di contatto multipli?', a: "Tutti i canali confluiscono nello stesso ticket o nella stessa scheda cliente. Email, chiamate, chat dal vivo, messaggi social, form sul sito: l'operatore vede lo storico completo, indipendentemente da dove il cliente ha scritto l'ultima volta. Niente più conversazioni che si interrompono al cambio di canale." },
  { q: "Perché scegliere Gosnail per l'implementazione?", a: "Una licenza CRM Plus è solo lo strumento. Il valore reale arriva quando le regole di handoff tra vendite, marketing e supporto sono configurate sui tuoi processi, e quando i team le adottano davvero. Come Zoho Authorized Partner italiano, analizziamo il tuo customer journey, costruiamo le automazioni cross-app e formiamo le persone. Restiamo al tuo fianco anche dopo il go-live." },
  { q: 'Quanto dura un\'implementazione tipica?', a: 'Un setup base — CRM, Desk e Campaigns configurati e collegati — richiede tipicamente 6–10 settimane. Se includiamo Analytics con dashboard custom e automazioni cross-team, si arriva a 3–4 mesi. Il metodo è lo stesso delle altre implementazioni Zoho: analisi processi, mappatura flussi, configurazione, formazione, supporto post go-live.' },
]

export default function ZohoCRMPlusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EdEffects />
      <EdNav />

      {/* ═══════════ HERO ═══════════ */}
      <section className="ed-hero ed-hero--pillar" style={{ background: 'var(--bg-lavender)' }}>
        <div className="ed-deco-blob ed-deco-blob--coral" style={{ width: 360, height: 360, top: '5%', left: '-8%', opacity: 0.35 }}></div>
        <div className="ed-deco-blob ed-deco-blob--purple" style={{ width: 240, height: 240, top: '40%', right: '-5%', opacity: 0.3 }}></div>
        <div className="ed-deco-blob ed-deco-blob--celestial" style={{ width: 200, height: 200, bottom: '5%', left: '35%', opacity: 0.22 }}></div>

        <div className="ed-hero-grid">
          <div className="ed-hero-left">
            <h1 className="ed-display ed-reveal ed-reveal-1">
              Vendite, marketing e assistenza. <em>Stessa piattaforma</em>, stesso cliente.
            </h1>
            <p className="ed-hero-intro ed-reveal ed-reveal-2">
              Zoho CRM Plus mette i sei strumenti che servono ai team a contatto col cliente in un&apos;unica interfaccia. Ogni reparto vede lo storico completo, in tempo reale. Il cliente non si accorge mai del passaggio da una mano all&apos;altra.
            </p>
            <div className="ed-hero-cta-row ed-reveal ed-reveal-3">
              <Link href="/contatti" className="btn-ed-primary">
                <span>Prenota una demo</span>
                <span aria-hidden>→</span>
              </Link>
              <a href="#benefici" className="btn-ed-outline">
                <span>Scopri come funziona</span>
              </a>
            </div>
          </div>

          {/* Diorama: CRM Plus wordmark + 6 app orbiting */}
          <div className="ed-diorama ed-reveal ed-reveal-2">
            <div className="ed-diorama-glow"></div>

            <div className="ed-diorama-center">
              <div className="ed-diorama-zoho-text">Zoho</div>
              <div className="ed-diorama-one-text"><em>CRM Plus</em></div>
            </div>

            <div className="ed-diorama-icons">
              <div className="ed-diorama-icon ed-diorama-icon--1"><img src="/assets/zoho-products/icons/crm.svg" alt="Zoho CRM" /></div>
              <div className="ed-diorama-icon ed-diorama-icon--2"><img src="/assets/zoho-products/icons/campaigns.svg" alt="Zoho Campaigns" /></div>
              <div className="ed-diorama-icon ed-diorama-icon--3"><img src="/assets/zoho-products/icons/desk.svg" alt="Zoho Desk" /></div>
              <div className="ed-diorama-icon ed-diorama-icon--4"><img src="/assets/zoho-products/icons/analytics.svg" alt="Zoho Analytics" /></div>
              <div className="ed-diorama-icon ed-diorama-icon--5"><img src="/assets/zoho-products/icons/social.svg" alt="Zoho Social" /></div>
              <div className="ed-diorama-icon ed-diorama-icon--6"><img src="/assets/zoho-products/icons/projects.svg" alt="Zoho Projects" /></div>
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
              <div className="ed-stat-num">6</div>
              <div className="ed-stat-label">App per i team cliente</div>
            </div>
            <div className="ed-reveal ed-reveal-5">
              <div className="ed-stat-num">360<small>°</small></div>
              <div className="ed-stat-label">Vista cliente unificata</div>
            </div>
            <div className="ed-reveal ed-reveal-6">
              <div className="ed-stat-num" style={{ fontStyle: 'italic' }}>1<small>.</small></div>
              <div className="ed-stat-label">Interfaccia, tre team</div>
            </div>
          </div>
        </div>
      </section>

      <CurveDivider from={C.lavender} to={C.glacier} accent={C.coral} />

      {/* ═══════════ PROBLEMA ═══════════ */}
      <section className="ed-section">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Quando i team non comunicano,<br />il cliente <em>se ne accorge</em>.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Il marketing attira un contatto. Le vendite lo convertono. L&apos;assistenza lo supporta. Sulla carta è una staffetta perfetta. Nella pratica, ogni team usa strumenti diversi e dati che non si parlano.
              </p>
              <p className="ed-reveal ed-reveal-3">
                Un venditore non sa a quale campagna il cliente ha risposto. Un operatore di supporto non vede lo storico acquisti. Il marketing non sa quali lead si sono trasformati in vendite. Risultato: il cliente racconta la sua storia tre volte, e ogni volta sembra di parlare con un&apos;azienda diversa.
              </p>
              <div className="ed-problem-highlight ed-reveal ed-reveal-4">
                <p>Ogni passaggio frammentato erode la fiducia. E la fiducia è il vero costo della customer experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CurveDivider from={C.glacier} to={C.lavender} />

      {/* ═══════════ SOLUZIONE — customer journey ═══════════ */}
      <section className="ed-section ed-section--lavender">
        <div className="ed-deco-blob ed-deco-blob--celestial" style={{ width: 340, height: 340, top: '20%', right: '-8%', opacity: 0.22 }}></div>
        <div className="ed-section-inner">
          <div className="ed-section-header ed-section-header--centered">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Una piattaforma per <em>tutto</em><br />il percorso del cliente.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                CRM Plus mette sulla stessa interfaccia i sei strumenti che servono ai team a contatto col cliente. Marketing, vendite e assistenza condividono nativamente la stessa scheda cliente, gli stessi dati, lo stesso storico. Senza integrazioni custom, senza Zapier in mezzo.
              </p>
            </div>
          </div>

          <div className="ed-split">
            <div className="ed-split-image ed-reveal ed-reveal-1">
              <img src={IMG.customer} alt="Vista cliente unificata in Zoho CRM Plus" />
            </div>
            <div className="ed-flow-visual ed-reveal ed-reveal-2">
              <div className="ed-flow-visual-label">Il customer journey unificato</div>
              {[
                { step: '01', text: 'Campagna marketing &amp; lead' },
                { step: '02', text: 'Qualifica &amp; nurturing' },
                { step: '03', text: 'Trattativa nel CRM' },
                { step: '04', text: 'Onboarding cliente' },
                { step: '05', text: 'Supporto &amp; retention', highlight: true },
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

      <CurveDivider from={C.lavender} to={C.glacier} accent={C.celestial} />

      {/* ═══════════ A CHI È RIVOLTO ═══════════ */}
      <section className="ed-section">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              È la scelta giusta se la tua priorità<br />è l&apos;<em>esperienza del cliente</em>.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                CRM Plus è specializzato. Non sostituisce gestionali o sistemi amministrativi: si concentra esclusivamente sui team che parlano coi clienti, e lo fa molto bene.
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
              Cosa cambia davvero<br />quando i team <em>lavorano insieme</em>.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Mettere vendite, marketing e supporto sulla stessa piattaforma non è una questione di efficienza interna. Quello che cambia è l&apos;esperienza che il cliente vive ogni giorno.
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

      {/* ═══════════ LE 6 APP ═══════════ */}
      <section className="ed-section">
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Le sei applicazioni incluse,<br /><em>integrate nativamente</em>.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Niente Zapier, niente connettori da configurare. Le sei app di CRM Plus condividono lo stesso database cliente e si parlano fin dal primo giorno.
              </p>
            </div>
          </div>

          <div className="ed-crmplus-apps">
            {apps.map((app, i) => (
              <div key={app.id} className={`ed-crmplus-app ed-reveal ed-reveal-${(i % 3) + 1}`}>
                <div className="ed-crmplus-app-icon">
                  <img src={`/assets/zoho-products/icons/${app.icon}`} alt={app.name} />
                </div>
                <div className="ed-crmplus-app-body">
                  <h3>{app.name}</h3>
                  <p>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
            La piattaforma è la stessa per tutti.<br />Il modo in cui la <em>configuriamo</em><br />parla solo della tua azienda.
          </p>
          <p className="ed-pullquote-body ed-reveal ed-reveal-2">
            Le regole di handoff tra marketing, vendite e supporto sono diverse in ogni organizzazione. Ogni team ha i suoi rituali, i suoi tempi di risposta, le sue definizioni di lead qualificato.
          </p>
          <p className="ed-pullquote-body ed-reveal ed-reveal-3">
            Il nostro lavoro è tradurre questi rituali in automazioni concrete dentro CRM Plus, e affiancare i team finché non lo usano con naturalezza. Quando funziona bene, smettono di pensarci. È quello il momento in cui il cliente sente la differenza.
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

      {/* ═══════════ CRM PLUS vs ZOHO ONE ═══════════ */}
      <section className="ed-section ed-section--lavender">
        <div className="ed-section-inner">
          <div className="ed-section-header ed-section-header--centered">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              CRM Plus o <em>Zoho One</em>?<br />Una decisione di scope.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Sono due prodotti diversi pensati per due esigenze diverse. La domanda da farsi non è quale sia più potente, ma quanto ampio è il perimetro che vuoi unificare adesso.
              </p>
            </div>
          </div>

          <div className="ed-comparison-wrap ed-reveal ed-reveal-1">
            <table className="ed-comparison-table">
              <thead>
                <tr>
                  <th>Cosa stai cercando</th>
                  <th>Zoho CRM Plus</th>
                  <th>Zoho One</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['App incluse',                                  '6 app cliente',                              '45+ app per tutta l\'azienda'],
                  ['Vendite, marketing, assistenza',               '✓ Cuore del prodotto',                       '✓ Incluso'],
                  ['Finanza e fatturazione elettronica',           '✗ Resta sul gestionale esistente',           '✓ Zoho Books incluso'],
                  ['HR e gestione presenze',                       '✗ Non incluso',                              '✓ Zoho People incluso'],
                  ['Operations e project management',              '⚠ Solo Projects',                            '✓ Projects + Sprints + Flow'],
                  ['Collaborazione (mail, chat, drive)',           '✗ Non incluso',                              '✓ Mail, Cliq, WorkDrive'],
                  ['Quando ha senso',                              'Sistemi gestionali già consolidati',         'Sostituzione completa multi-reparto'],
                  ['Prezzo per utente (annuale)',                  '€57/mese',                                   '€37/dipendente o €90/utente'],
                ].map(([feature, plus, one], i) => (
                  <tr key={i}>
                    <td>{feature}</td>
                    <td className="ed-comp-good">{plus}</td>
                    <td className="ed-comp-good">{one}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="ed-pricing-callout ed-reveal" style={{ marginTop: 'var(--space-12)' }}>
            <p>
              <strong>Regola pratica:</strong> se i tuoi sistemi gestionali, contabili e HR funzionano e non vuoi toccarli, CRM Plus è la scelta naturale per portare ordine sui team a contatto col cliente. Se invece stai pensando di sostituire più sistemi in un solo progetto, Zoho One ti dà tutto il perimetro e un costo per dipendente più basso.
            </p>
          </div>
        </div>
      </section>

      <CurveDivider from={C.lavender} to={C.glacier} />

      {/* ═══════════ FAQ ═══════════ */}
      <section className="ed-section">
        <div className="ed-section-inner">
          <div className="ed-section-header ed-section-header--centered">
            <h2 className="ed-h2 ed-reveal ed-reveal-1">
              Le cose che ti starai chiedendo<br /><em>su CRM Plus</em>.
            </h2>
            <div className="ed-section-header-body">
              <p className="ed-reveal ed-reveal-2">
                Le risposte alle domande che riceviamo più spesso da chi sta valutando se CRM Plus è la piattaforma giusta per i propri team cliente.
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

      <CurveDivider from={C.glacier} to={C.linen} />

      {/* ═══════════ CTA FINALE ═══════════ */}
      <section className="ed-cta">
        <div className="ed-cta-inner">
          <h2 className="ed-reveal ed-reveal-1">
            Pronto a far parlare<br />i tuoi <em>team cliente</em><br />sulla stessa piattaforma?
          </h2>
          <p className="ed-reveal ed-reveal-2">
            Raccontaci come gestite oggi marketing, vendite e supporto. Capiamo insieme se CRM Plus è la piattaforma giusta, e come trasformarla in un vantaggio competitivo concreto.
          </p>
          <div className="ed-hero-cta-row ed-reveal ed-reveal-3" style={{ justifyContent: 'center' }}>
            <Link href="/contatti" className="btn-ed-primary">
              <span>Prenota una consulenza</span>
              <span aria-hidden>→</span>
            </Link>
            <Link href="/zoho-one" className="btn-ed-outline">
              <span>Vedi anche Zoho One</span>
            </Link>
          </div>
        </div>
      </section>

      <EdFooter />
    </>
  )
}
