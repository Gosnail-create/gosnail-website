'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState({
    nome: '', cognome: '', email: '', azienda: '', dimensione: '', messaggio: '',
  })

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="form-card">
      <div className="form-header">
        <div className="form-header-title">Raccontaci la tua azienda</div>
        <div className="form-header-sub">Compila il form e ti ricontattiamo entro un giorno lavorativo.</div>
      </div>
      <form onSubmit={handleSubmit}>
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
            <option value="">Seleziona...</option>
            <option>10–50 dipendenti</option>
            <option>50–200 dipendenti</option>
            <option>200–500 dipendenti</option>
            <option>Oltre 500 dipendenti</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="messaggio">Come possiamo aiutarti?</label>
          <textarea
            id="messaggio" name="messaggio"
            placeholder="Descrivi brevemente la tua situazione attuale e l'obiettivo che vuoi raggiungere..."
            value={data.messaggio} onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn-form-submit">Invia la richiesta</button>
      </form>
      {submitted && (
        <div className="form-success visible">
          ✓ Richiesta inviata! Ti ricontattiamo entro 24 ore.
        </div>
      )}
    </div>
  )
}
