import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'
import {
  Database, Clock, Users, EyeOff,
  Search, Settings2, GraduationCap,
  UsersRound, Megaphone, Headphones,
  BarChart3, Receipt,
  Heart, ShieldCheck, TrendingUp,
  ArrowRight, MapPin, Mail,
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <ClientEffects counters={true} />
      <Nav />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-dots"></div>
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
        <div className="hero-inner">
          <div className="hero-overline">
            <span></span>Partner Zoho Autorizzato
          </div>
          <h1>
            Tecnologia e processi unificati per la <em>crescita</em> della tua <strong>azienda</strong>
          </h1>
          <p>
            Siamo il partner strategico che trasforma i tuoi dati e i tuoi flussi di lavoro in un motore di efficienza, controllo e sviluppo commerciale.
          </p>
          <div className="hero-actions">
            <Link href="/contatti" className="btn-hero-primary">
              Prenota un appuntamento
            </Link>
            <Link href="/il-metodo" className="btn-hero-ghost">
              Scopri il metodo
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-val js-count" data-target="100" data-suffix="%">0%</div>
              <div className="stat-label">Specializzazione Zoho</div>
            </div>
            <div>
              <div className="stat-val js-count" data-target="50" data-suffix="+">0+</div>
              <div className="stat-label">Aziende trasformate</div>
            </div>
            <div>
              <div className="stat-val" style={{ fontSize: '1.4rem' }}>
                1&nbsp;<span style={{ fontSize: '1.1rem' }}>fonte</span>
              </div>
              <div className="stat-label">di verità per ogni reparto</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      <section id="chi-siamo" className="problems">
        <div className="section-inner">
          <div className="section-overline reveal">La Complessità Rallenta il Tuo Business</div>
          <h2 className="section-title reveal reveal-delay-1">Supera gli ostacoli che frenano la tua crescita</h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Aumentare i volumi senza aggiornare gli strumenti porta inevitabilmente a colli di bottiglia.
          </p>
          <div className="problems-grid">
            <div className="problem-card reveal reveal-delay-1">
              <div className="problem-icon" style={{ background: '#EDE9FB' }}>
                <Database size={20} color="#7A65CF" />
              </div>
              <h3>Dati Frammentati e Silos</h3>
              <p>
                Le informazioni vitali sono sparse tra email, file Excel e software che non dialogano. Ricostruire la verità dei numeri richiede ore di lavoro manuale.
              </p>
            </div>
            <div className="problem-card reveal reveal-delay-2">
              <div className="problem-icon" style={{ background: '#DFF1F7' }}>
                <Clock size={20} color="#349ABA" />
              </div>
              <h3>Processi Manuali e Lenti</h3>
              <p>
                Il team spende troppo tempo in data entry e copia-incolla, distogliendosi dalle attività che generano valore reale.
              </p>
            </div>
            <div className="problem-card reveal reveal-delay-3">
              <div className="problem-icon" style={{ background: '#FFE4E4' }}>
                <Users size={20} color="#FF6B6B" />
              </div>
              <h3>Team Disallineati</h3>
              <p>
                Vendite, Marketing e Amministrazione su binari paralleli. Incomprensioni, ritardi nelle risposte e opportunità di business perse.
              </p>
            </div>
            <div className="problem-card reveal reveal-delay-4">
              <div className="problem-icon" style={{ background: '#EDE9FB' }}>
                <EyeOff size={20} color="#7A65CF" />
              </div>
              <h3>Mancanza di Controllo</h3>
              <p>
                Senza una visione d&apos;insieme, il management naviga a vista, reagendo alle urgenze invece di guidare l&apos;azienda con strategia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE BAND ── */}
      <div className="quote-band reveal">
        <div className="quote-inner">
          <span className="quote-mark">&ldquo;</span>
          <p className="quote-text">
            La tecnologia da sola non basta. Il nostro ruolo è colmare il divario tra gli strumenti digitali e i tuoi obiettivi di business.
          </p>
          <div className="quote-author">— Il team Gosnail</div>
        </div>
      </div>

      {/* ── SOLUTION ── */}
      <section id="soluzioni" className="solution">
        <div className="section-inner">
          <div className="section-overline reveal">Un ecosistema digitale unificato</div>
          <h2 className="section-title reveal reveal-delay-1">Un unico sistema operativo per la tua azienda</h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Immagina ogni reparto sulla stessa piattaforma. I dati fluiscono automaticamente dal marketing alle vendite fino alla fatturazione.
          </p>
          <div className="solution-split">
            <div className="solution-points">
              <div className="solution-point reveal reveal-delay-1">
                <div className="solution-point-icon">
                  <Search size={18} color="#349ABA" />
                </div>
                <div className="solution-point-text">
                  <h4>Analisi dei Processi</h4>
                  <p>Prima di installare qualsiasi cosa, studiamo come lavori per ottimizzare i flussi aziendali.</p>
                </div>
              </div>
              <div className="solution-point reveal reveal-delay-2">
                <div className="solution-point-icon">
                  <Settings2 size={18} color="#349ABA" />
                </div>
                <div className="solution-point-text">
                  <h4>Personalizzazione</h4>
                  <p>Adattiamo la piattaforma alla tua realtà, non il contrario. Zoho cucito su misura per te.</p>
                </div>
              </div>
              <div className="solution-point reveal reveal-delay-3">
                <div className="solution-point-icon">
                  <GraduationCap size={18} color="#349ABA" />
                </div>
                <div className="solution-point-text">
                  <h4>Cultura del Dato</h4>
                  <p>Formiamo le tue persone per renderle autonome. Il miglior software è inutile se non viene usato.</p>
                </div>
              </div>
            </div>
            <div className="solution-visual reveal reveal-delay-2">
              <div className="flow-row">
                <div className="flow-dot" style={{ background: '#FF6B6B' }}></div>
                <div className="flow-label">Marketing &amp; Campaigns</div>
                <span className="flow-arrow">→</span>
              </div>
              <div className="flow-row">
                <div className="flow-dot" style={{ background: '#7A65CF' }}></div>
                <div className="flow-label">Vendite &amp; CRM</div>
                <span className="flow-arrow">→</span>
              </div>
              <div className="flow-row">
                <div className="flow-dot" style={{ background: '#349ABA' }}></div>
                <div className="flow-label">Customer Service &amp; Desk</div>
                <span className="flow-arrow">→</span>
              </div>
              <div className="flow-row">
                <div className="flow-dot" style={{ background: '#C8CCDF' }}></div>
                <div className="flow-label">Contabilità &amp; Finance</div>
                <span className="flow-arrow">→</span>
              </div>
              <div className="flow-row flow-row-highlight">
                <div className="flow-dot" style={{ background: '#F6F3F0' }}></div>
                <div className="flow-label">Single Source of Truth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services">
        <div className="section-inner">
          <div className="section-overline reveal">Dove possiamo fare la differenza</div>
          <h2 className="section-title reveal reveal-delay-1">Aree di intervento</h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Le aziende che hanno scelto il nostro percorso hanno trasformato il caos operativo in vantaggio competitivo.
          </p>
          <div className="services-grid">
            <div className="service-card reveal reveal-delay-1">
              <div className="service-icon" style={{ background: '#EDE9FB' }}>
                <UsersRound size={22} color="#7A65CF" />
              </div>
              <h3>Vendite &amp; CRM</h3>
              <p>Per chiudere più contratti in meno tempo con pipeline sempre aggiornate.</p>
              <a href="#" className="service-link">
                Scopri Zoho CRM <ArrowRight size={14} />
              </a>
            </div>
            <div className="service-card reveal reveal-delay-2">
              <div className="service-icon" style={{ background: '#DFF1F7' }}>
                <Megaphone size={22} color="#349ABA" />
              </div>
              <h3>Marketing Automation</h3>
              <p>Per generare lead qualificati e misurare il ROI di ogni campagna.</p>
              <a href="#" className="service-link">
                Scopri Zoho Campaigns <ArrowRight size={14} />
              </a>
            </div>
            <div className="service-card reveal reveal-delay-3">
              <div className="service-icon" style={{ background: '#FFE4E4' }}>
                <Headphones size={22} color="#FF6B6B" />
              </div>
              <h3>Customer Service</h3>
              <p>Per fidelizzare i clienti con un supporto puntuale e tracciabile.</p>
              <a href="#" className="service-link">
                Scopri Zoho Desk <ArrowRight size={14} />
              </a>
            </div>
            <div className="service-card reveal reveal-delay-1">
              <div className="service-icon" style={{ background: '#EDE9FB' }}>
                <BarChart3 size={22} color="#7A65CF" />
              </div>
              <h3>Business Intelligence</h3>
              <p>Per decidere basandosi su dati certi. KPI chiari, dashboard in tempo reale.</p>
              <a href="#" className="service-link">
                Scopri Zoho Analytics <ArrowRight size={14} />
              </a>
            </div>
            <div className="service-card reveal reveal-delay-2">
              <div className="service-icon" style={{ background: '#DFF1F7' }}>
                <Receipt size={22} color="#349ABA" />
              </div>
              <h3>Contabilità &amp; Finanza</h3>
              <p>Per automatizzare fatturazione, pagamenti e flussi finanziari.</p>
              <a href="#" className="service-link">
                Scopri Zoho Finance <ArrowRight size={14} />
              </a>
            </div>
            <div className="service-card service-card-dark reveal reveal-delay-3">
              <div className="service-icon" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <Image src="/assets/Gosnail-logo-only-white.svg" alt="Zoho One" width={22} height={22} />
              </div>
              <h3>Zoho One</h3>
              <p>L&apos;intera suite Zoho in un unico abbonamento. Il sistema operativo completo per la tua azienda.</p>
              <a href="#" className="service-link">
                Scopri Zoho One <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HUMAN BAND ── */}
      <div id="chi-siamo" className="human-band">
        <div className="human-inner">
          <div className="human-text reveal">
            <div className="section-overline" style={{ color: '#7A65CF' }}>Le persone al centro</div>
            <h2 className="section-title">
              Il software lo usiamo noi,<br />ma lavora per le tue persone
            </h2>
            <p className="section-subtitle">
              Sappiamo che la vera sfida non è la tecnologia — è l&apos;adozione. Per questo affianchiamo ogni team nel cambiamento.
            </p>
            <div className="human-list">
              <div className="human-item">
                <div className="human-bullet">
                  <Heart size={14} color="#7A65CF" />
                </div>
                <div className="human-item-text">
                  <h4>Ascolto prima di tutto</h4>
                  <p>Ogni progetto inizia con sessioni di scoperta per capire le persone, non solo i processi.</p>
                </div>
              </div>
              <div className="human-item">
                <div className="human-bullet">
                  <ShieldCheck size={14} color="#7A65CF" />
                </div>
                <div className="human-item-text">
                  <h4>Formazione continua</h4>
                  <p>Non spariam dopo il go-live. Costruiamo una cultura del dato che rende i team autonomi.</p>
                </div>
              </div>
              <div className="human-item">
                <div className="human-bullet">
                  <TrendingUp size={14} color="#7A65CF" />
                </div>
                <div className="human-item-text">
                  <h4>Risultati misurabili</h4>
                  <p>Ogni intervento porta a un ROI calcolabile — non &ldquo;siti belli&rdquo;, ma infrastrutture che scalano.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="human-visual reveal reveal-delay-2">
            <div className="testimonials-label">Cosa dicono i nostri clienti</div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                &ldquo;Prima perdevamo ore a rincorrere i dati tra Excel e email. Oggi tutto è in un posto solo e il team lavora in modo completamente diverso.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: '#7A65CF' }}>MR</div>
                <div>
                  <div className="testimonial-name">Marco R.</div>
                  <div className="testimonial-role">Operations Manager — Manifatturiero</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card testimonial-card-alt">
              <p className="testimonial-text">
                &ldquo;Il nostro reparto commerciale ha chiuso il 30% in più di contratti nel primo trimestre dopo l&apos;implementazione di Zoho CRM.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: '#349ABA' }}>SF</div>
                <div>
                  <div className="testimonial-name">Sara F.</div>
                  <div className="testimonial-role">Sales Director — Servizi B2B</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="cta-section">
        <div className="section-inner">
          <h2>Pronto a digitalizzare i tuoi processi?</h2>
          <p>Non lasciare che la tecnologia sia un limite. Parliamo dei tuoi obiettivi e costruiamo l&apos;infrastruttura su misura.</p>
          <Link href="/contatti" className="btn-cta-white">
            Prenota una consulenza gratuita
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
