import EdNav from '@/components/EdNav'
import EdFooter from '@/components/EdFooter'
import { CurveDivider } from '@/components/OrganicShapes'
import { Gauge, Network, TrendingUp, Wallet } from 'lucide-react'

export const metadata = {
  title: 'Anteprima layout benefici — Gosnail',
  robots: { index: false, follow: false },
}

const C = { glacier: '#F0F4F8', lavender: '#F5F4FA', linen: '#F6F3F0' }

const IMG = {
  dashboard: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop',
  team:      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format&fit=crop',
  growth:    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop',
  finance:   'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&auto=format&fit=crop',
  tall:      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop',
}

const benefits = [
  { n: '01', accent: 'celestial', icon: <Gauge size={22} color="#349ABA" />, img: IMG.dashboard,
    title: "La direzione vede l'azienda in tempo reale",
    text: "Niente più attese per un report messo insieme a mano. I dati di vendite, finanza e operations in un'unica dashboard, e le decisioni si prendono su numeri certi quando servono." },
  { n: '02', accent: 'purple', icon: <Network size={22} color="#7A65CF" />, img: IMG.team,
    title: 'I reparti lavorano allineati',
    text: "Il commerciale vede i ticket aperti, l'assistenza vede cosa il cliente ha comprato, l'amministrazione vede gli ordini chiusi. Spariscono i passaggi a vuoto e il tempo perso a mettere assieme i pezzi." },
  { n: '03', accent: 'coral', icon: <TrendingUp size={22} color="#FF6B6B" />, img: IMG.growth,
    title: "L'organizzazione cresce senza diventare più complicata",
    text: "Quando aumenti i volumi non aggiungi l'ennesimo software scollegato: attivi una funzione in più sulla stessa piattaforma. La struttura regge invece di incepparsi." },
  { n: '04', accent: 'celestial', icon: <Wallet size={22} color="#349ABA" />, img: IMG.finance,
    title: 'I costi restano prevedibili',
    text: 'Un fornitore, un contratto, una spesa per dipendente che sai già quanto vale oggi e quanto varrà se assumi.' },
]

function SectionHeader() {
  return (
    <div className="ed-section-header ed-section-header--centered">
      <h2 className="ed-h2">
        Cosa cambia per le aziende che scelgono<br />Zoho One <em>con Gosnail</em>
      </h2>
      <div className="ed-section-header-body">
        <p>Quello che cambia si vede nel lavoro di tutti i giorni.</p>
      </div>
    </div>
  )
}

export default function AnteprimaBeneficiPage() {
  return (
    <>
      <EdNav />

      {/* Intro */}
      <section className="ed-section" style={{ paddingBottom: 24 }}>
        <div className="ed-section-inner">
          <span className="lab-label">Anteprima · 3 layout per la sezione benefici</span>
          <p className="lab-note">
            Lo stesso contenuto in tre impaginazioni diverse, tutte con i token del design system (Fraunces
            italic sui titoli, numeri coral, card con bordo 1px in tinta). Le immagini sono placeholder Unsplash.
            Pagina di sola anteprima, non collegata al sito.
          </p>
        </div>
      </section>

      <CurveDivider from={C.glacier} to={C.linen} accent={C.linen} />

      {/* ───── Variante A — griglia a card con icone ───── */}
      <section className="ed-section" style={{ background: 'var(--bg-linen)' }}>
        <div className="ed-section-inner">
          <span className="lab-label">Variante A — Griglia a card con icone</span>
          <SectionHeader />
          <div className="lab-bgrid">
            {benefits.map((b) => (
              <div key={b.n} className={`lab-bcard lab-bcard--${b.accent}`}>
                <div className="lab-bcard-top">
                  <span className="lab-bcard-icon">{b.icon}</span>
                  <span className="lab-bcard-num">{b.n}</span>
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurveDivider from={C.linen} to={C.glacier} />

      {/* ───── Variante B — zig-zag editoriale con immagini ───── */}
      <section className="ed-section">
        <div className="ed-section-inner">
          <span className="lab-label">Variante B — Zig-zag editoriale con immagini</span>
          <SectionHeader />
          <div className="lab-zig">
            {benefits.map((b, i) => (
              <div key={b.n} className={`lab-zig-row ${i % 2 ? 'lab-zig-row--rev' : ''}`}>
                <div className="lab-zig-text">
                  <span className="lab-zig-num">{b.n}</span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
                <div className="lab-zig-img">
                  <img src={b.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurveDivider from={C.glacier} to={C.lavender} />

      {/* ───── Variante C — lista + visual affiancato ───── */}
      <section className="ed-section ed-section--lavender">
        <div className="ed-section-inner">
          <span className="lab-label">Variante C — Lista + visual affiancato</span>
          <SectionHeader />
          <div className="lab-csplit">
            <div className="lab-clist">
              {benefits.map((b) => (
                <div key={b.n} className="lab-citem">
                  <span className="lab-cnum">{b.n}</span>
                  <div>
                    <h3>{b.title}</h3>
                    <p>{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lab-cvisual">
              <img src={IMG.tall} alt="" />
            </div>
          </div>
        </div>
      </section>

      <EdFooter />
    </>
  )
}
