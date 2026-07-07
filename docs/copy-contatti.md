# Copy — Contatti

Testi della pagina Contatti nel nuovo design. Anima A. Canale unico: form (niente mail, niente telefono).
Allineato a `messaging.md` e alla keyword map.

> **SEO**
> - **Slug:** `/contatti`
> - **Title tag:** `Contatti — Gosnail, partner Zoho nel Nord-Est`
> - **Meta description:** `Raccontaci la tua azienda: compila il form e ti ricontattiamo per una prima call gratuita di 30 minuti. Sedi a Tavagnacco (UD) e Padova.`
> - **Keyword primaria:** consulenza Zoho Udine · **Secondarie:** contatti Gosnail · partner Zoho Nord-Est

---

## Hero

**Eyebrow:** ~~PARLIAMO DEL TUO PROGETTO~~ — rimosso (l'H1 dice già tutto).

**H1:** Prenota una consulenza gratuita

---

## Colonna sinistra — testo e sedi

**Titolo:** Inizia il percorso verso un'azienda più efficiente

**Intro:** In una prima call di 30 minuti guardiamo insieme come lavori oggi, dove sei diretto e se Zoho può aiutarti ad arrivarci.

> Corretto il tic "ecosistema Zoho" e cambiato "come Zoho può supportare" → "se Zoho può aiutarti": il "se" è più onesto e credibile del "come".

**Sedi:**

**Sede legale**
Via Nazionale, 40 · 33010 Tavagnacco (UD)

**Sede operativa**
Via Praarie, 28 · 35010 Padova (PD)

> ⚠️ Verificare via e CAP della sede di Padova sul certificato camerale ("Praarie" e 35010).
> Nessuna mail e nessun telefono in pagina: canale unico = form.

**Box "cosa succede dopo"** (al posto di "Risposta garantita entro 24 ore"):

**Cosa succede dopo**
Leggiamo quello che ci scrivi e ti ricontattiamo noi, non un centralino, per fissare una prima call di 30 minuti. Gratuita, senza impegno, senza vendita aggressiva.

---

## Colonna destra — form

**Titolo form:** Raccontaci la tua azienda
**Sottotitolo form:** Compila il form e ti ricontattiamo noi a breve.

> Ammorbidito "entro un giorno lavorativo" → "a breve" (niente termini espressi, coerente col box).

**Campi:**
- Nome * (placeholder: Mario)
- Cognome * (placeholder: Rossi)
- Email aziendale * (placeholder: mario@azienda.it)
- Azienda (placeholder: Acme S.r.l.)
- Dimensione azienda — menu a tendina (placeholder: Seleziona…)
  Opzioni suggerite: 1–19 dipendenti · 20–49 · 50–99 · 100–249 · 250–500 · Oltre 500
- Come possiamo aiutarti? — area di testo (placeholder: Descrivi brevemente la tua situazione attuale e l'obiettivo che vuoi raggiungere…)

**Consenso privacy (obbligatorio — checkbox NON pre-spuntata):**
Ho letto e accetto la [Privacy Policy] e acconsento al trattamento dei miei dati per essere ricontattato. *

**Opt-in newsletter (facoltativo — checkbox NON pre-spuntata):**
Desidero ricevere aggiornamenti e contenuti utili da Gosnail. Niente spam, disiscrizione in un clic.

**Bottone:** Invia la richiesta

**Messaggio di conferma (dopo l'invio):**
Richiesta ricevuta. Ti ricontattiamo noi a breve per fissare la prima call. A presto.

---

## Note tecniche per lo sviluppo

- **Consenso privacy obbligatorio:** il form non si invia senza la spunta. Link alla Privacy Policy funzionante. Requisito GDPR, non opzionale — e coerente col fatto che su Zoho One la conformità GDPR è un punto di forza.
- **Anti-spam:** proteggere il form con un honeypot (campo nascosto trappola), non con captcha che complica la vita agli utenti reali.
- **Stato di conferma:** mostrare il messaggio di conferma dopo l'invio; gestire anche lo stato di errore ("Qualcosa è andato storto, riprova").
- **Mail fuori dal footer:** poiché il canale è solo il form, rimuovere o offuscare `info@gosnail.it` anche dal footer del sito, altrimenti lo spam entra da lì e la scelta form-only resta a metà.
- **Doppio opt-in newsletter:** se l'iscritto spunta la newsletter, gestirla come consenso separato (utile per la futura lista email su Zoho Marketing Automation).

---

## Da valutare (non prioritari)

- Campo "Ruolo" (CEO, IT, Vendite, Marketing…) per qualificare meglio il lead. Attenzione a non allungare troppo il form: "Dimensione azienda" resta il campo qualificante più importante.
- Mini-mappa delle due sedi, per rinforzare il territorio e il "veniamo da te".

---

*Ultimo aggiornamento: giugno 2026 — sessione copy Claude Project Gosnail*
