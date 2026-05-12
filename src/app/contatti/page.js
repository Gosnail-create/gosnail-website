import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'
import ContactForm from '@/components/ContactForm'
import { MapPin, Mail } from 'lucide-react'

export const metadata = {
  title: 'Contatti — Gosnail',
  description: 'Prenota una consulenza gratuita con Gosnail. Scopri come l\'ecosistema Zoho può trasformare la tua azienda.',
}

export default function ContattiPage() {
  return (
    <>
      <ClientEffects />
      <Nav />

      <section className="contact" style={{ paddingTop: 108 }}>
        <div className="section-inner">
          <div className="section-overline reveal">Parliamo del tuo progetto</div>
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
                In una prima call di 30 minuti capiremo insieme la tua situazione attuale, i tuoi obiettivi e come l&apos;ecosistema Zoho può supportare la crescita della tua azienda.
              </p>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={18} />
                </div>
                <p>
                  Via Nazionale, 40<br />
                  33010 Tavagnacco (UD) — Italia
                </p>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Mail size={18} />
                </div>
                <p>
                  <a href="mailto:info@gosnail.it" style={{ color: 'inherit', textDecoration: 'none' }}>
                    info@gosnail.it
                  </a>
                </p>
              </div>
              <div className="contact-guarantee">
                <div className="contact-guarantee-title">Risposta garantita entro 24 ore</div>
                <div className="contact-guarantee-text">
                  Prima consulenza gratuita e senza impegno. Nessuna vendita aggressiva.
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
