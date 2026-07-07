'use client'
import { useState } from 'react'

const EMPTY = {
  nome: '', cognome: '', email: '', azienda: '', dimensione: '', messaggio: '',
  privacy: false, newsletter: false,
  website: '', // honeypot anti-spam: deve restare vuoto
}

export default function ContactForm() {
  const [data, setData] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // 'idle' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    setData((d) => ({ ...d, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot: se compilato è un bot → ignora silenziosamente
    if (data.website) return

    // Consenso privacy obbligatorio
    if (!data.privacy) return

    try {
      // TODO backend: invio a Zoho CRM. Il consenso newsletter (data.newsletter)
      // va gestito come opt-in separato per la lista marketing.
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="form-card">
      <div className="form-header">
        <div className="form-header-title">Raccontaci la tua azienda</div>
        <div className="form-header-sub">Compila il form e ti ricontattiamo noi a breve.</div>
      </div>

      {status === 'success' ? (
        <div className="form-success visible">
          Richiesta ricevuta. Ti ricontattiamo noi a breve per fissare la prima call. A presto.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate={false}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nome">Nome *</label>
              <input id="nome" name="nome" type="text" placeholder="Mario" required value={data.nome} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="cognome">Cognome *</label>
              <input id="cognome" name="cognome" type="text" placeholder="Rossi" required value={data.cognome} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email aziendale *</label>
            <input id="email" name="email" type="email" placeholder="mario@azienda.it" required value={data.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="azienda">Azienda</label>
            <input id="azienda" name="azienda" type="text" placeholder="Acme S.r.l." value={data.azienda} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="dimensione">Dimensione azienda</label>
            <select id="dimensione" name="dimensione" value={data.dimensione} onChange={handleChange}>
              <option value="">Seleziona…</option>
              <option>1–19 dipendenti</option>
              <option>20–49</option>
              <option>50–99</option>
              <option>100–249</option>
              <option>250–500</option>
              <option>Oltre 500</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="messaggio">Come possiamo aiutarti?</label>
            <textarea
              id="messaggio" name="messaggio"
              placeholder="Descrivi brevemente la tua situazione attuale e l'obiettivo che vuoi raggiungere…"
              value={data.messaggio} onChange={handleChange}
            />
          </div>

          {/* Honeypot anti-spam — nascosto agli utenti reali */}
          <div className="form-hp" aria-hidden="true">
            <label htmlFor="website">Non compilare questo campo</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={data.website} onChange={handleChange} />
          </div>

          <div className="form-consent">
            <input id="privacy" name="privacy" type="checkbox" required checked={data.privacy} onChange={handleChange} />
            <label htmlFor="privacy">
              Ho letto e accetto la <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> e acconsento al trattamento dei miei dati per essere ricontattato. *
            </label>
          </div>

          <div className="form-consent">
            <input id="newsletter" name="newsletter" type="checkbox" checked={data.newsletter} onChange={handleChange} />
            <label htmlFor="newsletter">
              Desidero ricevere aggiornamenti e contenuti utili da Gosnail. Niente spam, disiscrizione in un clic.
            </label>
          </div>

          <button type="submit" className="btn-form-submit">Invia la richiesta</button>

          {status === 'error' && (
            <div className="form-error">Qualcosa è andato storto, riprova.</div>
          )}
        </form>
      )}
    </div>
  )
}
