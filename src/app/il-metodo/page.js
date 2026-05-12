import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

export const metadata = {
  title: 'Il Nostro Metodo — Gosnail',
  description: 'Strategia prima della tecnologia. Come Gosnail trasforma le aziende italiane con l\'ecosistema Zoho.',
}

const steps = [
  {
    number: 1,
    color: '#7A65CF',
    lineColor: '#EDE9FB',
    title: 'Ascolto e Diagnosi',
    text: 'Sessioni di scoperta approfondite per capire come lavori, dove si creano i colli di bottiglia e quali sono i tuoi obiettivi di business.',
  },
  {
    number: 2,
    color: '#349ABA',
    lineColor: '#DFF1F7',
    title: 'Mappatura dei Processi',
    text: 'Documentiamo e ridisegniamo i flussi di lavoro prima di toccare qualsiasi software. L\'ottimizzazione viene prima dell\'automazione.',
  },
  {
    number: 3,
    color: '#7A65CF',
    lineColor: '#EDE9FB',
    title: 'Configurazione su Misura',
    text: 'Implementiamo la suite Zoho adattandola alla tua realtà. Ogni campo, automazione e dashboard risponde a un\'esigenza reale.',
  },
  {
    number: 4,
    color: '#FF6B6B',
    lineColor: '#FFE4E4',
    title: 'Formazione e Adozione',
    text: 'Formiamo i tuoi team con percorsi pratici, creando una cultura del dato che rende l\'organizzazione autonoma e consapevole.',
  },
  {
    number: 5,
    color: '#349ABA',
    lineColor: null,
    title: 'Supporto Continuo e Misurazione',
    text: 'Il nostro lavoro non finisce con il go-live. Monitoriamo i KPI e siamo al tuo fianco per supportare la crescita nel tempo.',
  },
]

export default function IlMetodoPage() {
  return (
    <>
      <ClientEffects />
      <Nav />

      {/* ── HERO ── */}
      <section className="method-hero" style={{ paddingTop: 108 }}>
        <div className="section-inner">
          <div className="section-overline reveal">Il Nostro Approccio</div>
          <h1 className="reveal reveal-delay-1">Strategia prima della tecnologia</h1>
          <p className="reveal reveal-delay-2">
            Il software è solo l&apos;ultimo miglio. Il vero valore di Gosnail risiede nell&apos;ascolto, nell&apos;analisi dei processi e nel ridisegno dei flussi di lavoro aziendali.
          </p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="method-steps">
        <div className="section-inner" style={{ maxWidth: 720 }}>
          {steps.map((step, i) => (
            <div key={step.number} className="step-row reveal">
              <div className="step-indicator">
                <div className="step-number" style={{ background: step.color }}>
                  {step.number}
                </div>
                {step.lineColor && (
                  <div className="step-line" style={{ background: step.lineColor }}></div>
                )}
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="cta-section">
        <div className="section-inner">
          <h2>Inizia con una consulenza gratuita</h2>
          <p>Raccontaci la tua situazione. Valutiamo insieme il percorso più adatto.</p>
          <Link href="/contatti" className="btn-cta-white">Prenota ora</Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
