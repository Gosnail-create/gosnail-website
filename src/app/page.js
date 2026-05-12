import Link from 'next/link'
import EdNav from '@/components/EdNav'
import EdFooter from '@/components/EdFooter'
import EdEffects from '@/components/EdEffects'

const problems = [
  {
    n: '01',
    title: 'Dati frammentati, decisioni cieche',
    text: 'Le informazioni vitali sono sparse tra email, file Excel e software che non dialogano. Ricostruire la verità dei numeri richiede ore di lavoro manuale.',
  },
  {
    n: '02',
    title: 'Processi manuali che drenano tempo',
    text: 'Il team spende troppo tempo in data entry e copia-incolla, distogliendosi dalle attività che generano valore reale per il business.',
  },
  {
    n: '03',
    title: 'Reparti che lavorano in parallelo',
    text: 'Vendite, marketing e amministrazione su binari paralleli. Incomprensioni, ritardi nelle risposte, opportunità di business perse.',
  },
  {
    n: '04',
    title: 'Management che naviga a vista',
    text: "Senza una visione d'insieme, la direzione reagisce alle urgenze invece di guidare l'azienda con strategia e dati.",
  },
]

const pillars = [
  {
    n: '01',
    title: 'Analisi dei processi',
    text: 'Prima di installare qualsiasi software, studiamo come lavori per ottimizzare i flussi aziendali. La tecnologia viene dopo.',
  },
  {
    n: '02',
    title: 'Personalizzazione su misura',
    text: 'Adattiamo la piattaforma alla tua realtà, non il contrario. Zoho cucito sui tuoi processi unici, non viceversa.',
  },
  {
    n: '03',
    title: 'Cultura del dato',
    text: 'Formiamo le tue persone per renderle autonome. Il miglior software è inutile se non viene compreso e adottato.',
  },
  {
    n: '04',
    title: 'Supporto continuo',
    text: 'Non spariamo dopo il go-live. Affianchiamo i tuoi team nel tempo, monitorando KPI e iterando sui flussi.',
  },
]

const services = [
  { n: '01', name: 'Vendite & CRM', desc: 'Pipeline sempre aggiornate, lead scoring, automazioni commerciali. Per chiudere più contratti in meno tempo.', tag: 'Zoho CRM' },
  { n: '02', name: 'Marketing Automation', desc: 'Generazione lead qualificati, nurturing automatizzato, ROI misurabile su ogni campagna.', tag: 'Zoho Campaigns' },
  { n: '03', name: 'Customer Service', desc: 'Helpdesk multicanale, ticket tracciabili, knowledge base. Fidelizzare i clienti con un supporto puntuale.', tag: 'Zoho Desk' },
  { n: '04', name: 'Business Intelligence', desc: 'Dashboard in tempo reale, KPI chiari, decisioni basate su dati certi. La cultura del dato resa operativa.', tag: 'Zoho Analytics' },
  { n: '05', name: 'Contabilità & Finanza', desc: 'Fatturazione elettronica SDI, gestione spese, flussi finanziari automatizzati con conformità italiana.', tag: 'Zoho Books' },
  { n: '06', name: 'Zoho One', desc: "L'intera suite Zoho — oltre 45 app integrate. Il sistema operativo completo per la tua azienda.", tag: 'Zoho One', highlight: true },
]

export default function HomePage() {
  return (
    <>
      <EdEffects />
      <EdNav />

      {/* ════════════════════════ HERO ════════════════════════ */}
      <section className="ed-hero grain-light">
        <div className="ed-hero-grid">
          <div className="ed-hero-meta">
            <span className="ed-eyebrow-mono">Gosnail / Zoho Authorized Partner</span>
            <span className="ed-eyebrow-mono">N. 01 — MMXXV</span>
          </div>

          <h1 className="ed-display ed-reveal ed-reveal-1">
            Tecnologia<br />e processi unificati<br />per la <em>crescita</em><br />della tua <strong>azienda</strong>.
          </h1>

          <div className="ed-hero-divider"></div>

          <div className="ed-hero-bottom">
            <p className="ed-hero-intro ed-reveal ed-reveal-2 ed-dropcap">
              Siamo il partner strategico che trasforma i tuoi dati e i tuoi flussi di lavoro in un motore di efficienza, controllo e sviluppo commerciale. Non vendiamo software — guidiamo trasformazioni.
            </p>
            <div className="ed-hero-cta ed-reveal ed-reveal-3">
              <Link href="/contatti" className="btn-ed-primary">
                <span>Prenota una call</span>
                <span aria-hidden>→</span>
              </Link>
              <Link href="/il-metodo" className="btn-ed-ghost">
                Scopri il metodo
              </Link>
            </div>
          </div>

          <div className="ed-stats">
            <div className="ed-reveal ed-reveal-4">
              <div className="ed-stat-num">
                <span className="js-ed-count" data-target="100" data-suffix="">0</span>
                <small>%</small>
              </div>
              <div className="ed-stat-label">Specializzazione Zoho</div>
            </div>
            <div className="ed-reveal ed-reveal-5">
              <div className="ed-stat-num">
                <span className="js-ed-count" data-target="50" data-suffix="">0</span>
                <small>+</small>
              </div>
              <div className="ed-stat-label">Aziende trasformate</div>
            </div>
            <div className="ed-reveal ed-reveal-6">
              <div className="ed-stat-num">
                Una<small>·</small>
              </div>
              <div className="ed-stat-label">fonte di verità per ogni reparto</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ PROBLEMS ════════════════════════ */}
      <section className="ed-section grain-light" id="problemi">
        <div className="ed-watermark" style={{ top: '-4rem', right: '-3rem' }} aria-hidden>02</div>
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <div className="ed-section-header-num ed-reveal">N. 02 — Il Problema</div>
            <div className="ed-section-header-title">
              <h2 className="ed-h2 ed-reveal ed-reveal-1">
                La complessità tecnologica<br />è il <em>nemico nascosto</em><br />della crescita.
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

      {/* ════════════════════════ PULL QUOTE ════════════════════════ */}
      <section className="ed-pullquote grain-dark">
        <div className="ed-pullquote-inner">
          <div className="ed-pullquote-mark ed-reveal">&ldquo;</div>
          <p className="ed-reveal ed-reveal-1">
            La tecnologia da sola non basta. Il nostro ruolo è colmare il divario tra gli strumenti digitali e i tuoi obiettivi di business.
          </p>
          <div className="ed-pullquote-attr ed-reveal ed-reveal-2">
            Il team Gosnail · Tavagnacco, UD
          </div>
        </div>
      </section>

      {/* ════════════════════════ SOLUTION ════════════════════════ */}
      <section className="ed-section ed-section-dark grain-dark" id="approccio">
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

          <div className="ed-solution-split">
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
            <div className="ed-flow ed-reveal ed-reveal-2">
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
      </section>

      {/* ════════════════════════ SERVICES ════════════════════════ */}
      <section className="ed-section grain-light" id="soluzioni">
        <div className="ed-watermark" style={{ bottom: '-6rem', left: '-4rem' }} aria-hidden>04</div>
        <div className="ed-section-inner">
          <div className="ed-section-header">
            <div className="ed-section-header-num ed-reveal">N. 04 — Aree di intervento</div>
            <div className="ed-section-header-title">
              <h2 className="ed-h2 ed-reveal ed-reveal-1">
                <em>Dove</em> facciamo<br />la differenza.
              </h2>
              <p className="ed-reveal ed-reveal-2">
                Sei aree dove l&apos;ecosistema Zoho, configurato con metodo, trasforma il caos operativo in vantaggio competitivo.
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

      {/* ════════════════════════ TESTIMONIALS ════════════════════════ */}
      <section className="ed-testimonials grain-light">
        <div className="ed-testimonials-inner">
          <div className="ed-testimonial-col">
            <div className="ed-eyebrow ed-reveal">Le persone al centro</div>
            <h3 className="ed-reveal ed-reveal-1" style={{ marginTop: 16 }}>
              Il software lo usiamo noi, ma lavora per <em>le tue persone</em>.
            </h3>
            <p className="ed-body ed-reveal ed-reveal-2" style={{ marginBottom: 32 }}>
              Sappiamo che la vera sfida non è la tecnologia — è l&apos;adozione. Per questo affianchiamo ogni team nel cambiamento.
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
                <p>Ogni intervento porta a un ROI calcolabile — non &ldquo;siti belli&rdquo;, ma infrastrutture che scalano.</p>
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
                <span><strong>Marco R.</strong> — Operations, Manifatturiero</span>
              </div>
            </div>
            <div className="ed-testimonial-card ed-reveal ed-reveal-2">
              <div className="ed-testimonial-card-mark">&ldquo;</div>
              <p className="ed-testimonial-card-text">
                Il nostro reparto commerciale ha chiuso il 30% in più di contratti nel primo trimestre dopo l&apos;implementazione di Zoho CRM.
              </p>
              <div className="ed-testimonial-card-attr">
                <span><strong>Sara F.</strong> — Sales Director, Servizi B2B</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ FINAL CTA ════════════════════════ */}
      <section className="ed-cta grain-light">
        <div className="ed-watermark" style={{ top: '-2rem', left: '50%', transform: 'translateX(-50%)' }} aria-hidden>
          05
        </div>
        <div className="ed-cta-inner">
          <div className="ed-eyebrow ed-reveal" style={{ justifyContent: 'center', marginBottom: 24 }}>
            N. 05 — Inizia qui
          </div>
          <h2 className="ed-reveal ed-reveal-1">
            Pronto a digitalizzare<br />i tuoi <em>processi</em>?
          </h2>
          <p className="ed-reveal ed-reveal-2">
            Non lasciare che la tecnologia sia un limite. Parliamo dei tuoi obiettivi e costruiamo l&apos;infrastruttura su misura.
          </p>
          <div className="ed-reveal ed-reveal-3">
            <Link href="/contatti" className="btn-ed-primary">
              <span>Prenota una consulenza gratuita</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <EdFooter />
    </>
  )
}
