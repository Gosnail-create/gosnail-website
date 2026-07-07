import EdNav from '@/components/EdNav'
import EdFooter from '@/components/EdFooter'
import ClientEffects from '@/components/ClientEffects'
import ContactForm from '@/components/ContactForm'
import { MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contatti — Gosnail, partner Zoho nel Nord-Est',
  description: 'Raccontaci la tua azienda: compila il form e ti ricontattiamo per una prima call gratuita di 30 minuti. Sedi a Tavagnacco (UD) e Padova.',
}

export default function ContattiPage() {
  return (
    <>
      <ClientEffects />
      <EdNav />

      <section className="contact" style={{ paddingTop: 108 }}>
        <div className="section-inner">
          <h1
            className="reveal reveal-delay-1"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#111D52',
              marginBottom: 40,
            }}
          >
            Prenota una consulenza gratuita
          </h1>
          <div className="contact-grid">
            <div className="contact-info reveal reveal-delay-1">
              <h3>Inizia il percorso verso un&apos;azienda più efficiente</h3>
              <p>
                In una prima call di 30 minuti guardiamo insieme come lavori oggi, dove sei diretto e se Zoho può aiutarti ad arrivarci.
              </p>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={18} />
                </div>
                <p>
                  <strong>Sede legale</strong><br />
                  Via Nazionale, 40<br />
                  33010 Tavagnacco (UD)
                </p>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={18} />
                </div>
                <p>
                  <strong>Sede operativa</strong><br />
                  Via Praarie, 28<br />
                  35010 Padova (PD)
                </p>
              </div>
              <div className="contact-guarantee">
                <div className="contact-guarantee-title">Cosa succede dopo</div>
                <div className="contact-guarantee-text">
                  Leggiamo quello che ci scrivi e ti ricontattiamo noi, non un centralino, per fissare una prima call di 30 minuti. Gratuita, senza impegno, senza vendita aggressiva.
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <EdFooter />
    </>
  )
}
