# Strategia — Gosnail Website

> Aggiornato: luglio 2026 (sessione strategia Claude Project).
> Sostituisce integralmente la versione precedente. Speculare alle pagine Notion
> "Strategia & Posizionamento", "SEO — Keyword Map", "Messaging & Tone of Voice"
> in `Gosnail - MKT / 2026 PRJ - Website`.

## Posizionamento

Gosnail è il partner operativo che aiuta le PMI italiane a trasformare la
complessità organizzativa in chiarezza, efficienza e capacità di crescere,
usando l'ecosistema Zoho come piattaforma. Non un rivenditore di licenze, non
un'agenzia generica: un consulente di processo che usa Zoho per ridisegnare il
modo in cui un'azienda lavora.

**Offerta: 100% consulenza di processo + Zoho.** I servizi di marketing
digitale del 2024 (siti web, SEA, e-commerce, landing page) sono dismessi. Il
materiale Notion in "2024 PRJ - WEBSITE" è archivio storico: non usarlo come
fonte per l'offerta attuale.

Tre pilastri:

1. **Territoriale** — il riferimento per le PMI del Nord-Est (Veneto + Friuli).
2. **Metodologico** — diagnosi e analisi dei processi prima del software.
3. **Editoriale** — la fonte italiana più leggibile su Zoho e digitalizzazione
   delle PMI. Spazio non presidiato dai competitor; richiede costanza di
   pubblicazione (vedi piano blog).

### La doppia anima

- **Anima A — Consulenza di processo.** Visitatore con un problema di business
  che non sa ancora che Zoho è la risposta. Pagine: Home, Il Metodo, Chi Siamo,
  parte del Blog. Il problema prima della soluzione; Zoho è strumento.
- **Anima B — Partner Zoho certificato.** Visitatore che vuole implementare
  Zoho e valuta il partner. Pagine: pillar (Zoho One, CRM Plus) e verticali per
  dipartimento. Competenza tecnica e partnership in primo piano.

Regola pratica: Home e Metodo non aprono mai con "Zoho"; le pillar mettono
Zoho in primo piano, sempre con "implementato da Gosnail".

### Target

Manager di PMI italiana (CEO, direttore vendite, IT, marketing), 20–500
dipendenti, fatturato 1M€+. Settori: manifatturiero, servizi professionali,
software/tech, distribuzione, installazione impianti. Frustrazione: dati
frammentati, processi non scritti, reparti in silos, reportistica manuale.
Promessa: chiarezza e controllo; crescere senza che la complessità cresca in
proporzione.

**Prezzi:** la soglia di ingresso progetti (~7.000€) non compare mai sul sito.
Si affronta solo in call.

### Competitor (sintesi)

CRMpartners = player dominante nazionale, tono istituzionale, nessun focus
geografico. Severini & Partners presidia "partner Zoho Veneto" nelle province
occidentali: si batte con produzione di contenuti superiore, non evitandolo.
Gap comune del mercato: nessuno parla al management nel linguaggio dei problemi
di business. È lo spazio di Gosnail.

## Strategia geografica: identità stretta, copertura larga

- **SEO / identità** → Nord-Est reale (Veneto + Friuli) su Home, Chi Siamo,
  Contatti.
- **Commerciale** → raggiungibilità su tutto il Nord Italia dalla sede
  operativa di Padova ("Nati nel Nord-Est, raggiungiamo di persona le PMI del
  Nord Italia").
- Lombardia ed Emilia-Romagna: mai nell'identità; si conquistano con articoli
  o landing geo-dedicati (keyword esplicita).
- Profilo Google Business su Padova = quick win prioritario.

## Architettura contenuti

```
Pillar / verticali (conversione)          Blog (SEO + nurturing + AI)
────────────────────────────────         ─────────────────────────────
/zoho-one                            ←──  categoria zoho-one
/zoho-crm-plus  ·  /vendite          ←──  categoria crm-vendite
/finanza                             ←──  categoria finanza
/business-intelligence               ←──  categoria business-intelligence
/il-metodo  ·  Home                  ←──  categoria metodo-processi
Home · /chi-siamo                    ←──  categoria case-study
/marketing /customer-service
/operations /risorse-umane           ←──  categorie future (vedi regole)
```

### Categorie blog (attive al lancio)

| Categoria | Slug | Alimenta le card di | Articoli corpus |
|---|---|---|---|
| Zoho One | `zoho-one` | /zoho-one | 1, 2, 3, 4 |
| CRM & Vendite | `crm-vendite` | /zoho-crm-plus, /vendite | 5, 6, 9 |
| Finanza | `finanza` | /finanza | 7 |
| Business Intelligence | `business-intelligence` | /business-intelligence | 8, 10 |
| Processi & Metodo | `metodo-processi` | Home, /il-metodo | 11, 12 |
| Case Study | `case-study` | Home, /chi-siamo | 13, 14 |

Regole:

- Una categoria per articolo. Le categorie sono tematiche, non per anima
  (es. l'articolo 9, anima A, sta in CRM & Vendite: porta una card di problema
  dentro /zoho-crm-plus, mix voluto).
- Categorie future (Marketing, Customer Service, Operations, HR): si creano
  solo quando hanno 2–3 articoli. Mai categorie vuote o con un pezzo solo.
- I **settori** (manifatturiero, servizi, distribuzione, impianti) sono tag
  trasversali nel frontmatter, non categorie. Sono l'infrastruttura delle
  future landing di settore.
- Le verticali per settore NON si costruiscono come pagine al lancio: nascono
  come case study nel blog (1 per settore) e si promuovono a landing solo con
  evidenza SEO.

### Distribuzione card blog nel sito

- Home → 3 card: ultimo case study + 2 da Processi & Metodo (coerenza anima A).
- /zoho-one → 3 card categoria Zoho One.
- /zoho-crm-plus → 3 card categoria CRM & Vendite.
- Verticali future → la propria categoria; se la categoria non esiste, la
  sezione non si renderizza (mai card fuori tema).
- Fine articolo → 2–3 correlati stessa categoria + CTA alla pillar.
- Componente unico riutilizzabile: `<BlogCards category="..." limit={3} />`,
  categoria letta dal frontmatter.

### Archivio /blog

- Pillole filtro orizzontali sopra la griglia (riferimento: concept cliente),
  una per categoria + "Tutti" di default.
- Le pillole sono **link reali** a `/blog/categoria/[slug]`: pagine
  indicizzabili con title e meta description proprie. Il filtro può essere
  fluido lato client, ma l'URL cambia.
- Stile: struttura del concept, estetica del design system editoriale (label
  JetBrains Mono, pillola attiva coral, altre outline). Niente elementi in
  inglese.
- Pagine categoria con meno di 3 articoli → `noindex` finché non si riempiono.

## SEO

Keyword map completa nella pagina Notion "SEO — Keyword Map" (da validare con
volumi reali via Keyword Planner / GSC). Punti fermi:

- Title tag ≠ H1: il title porta la keyword commerciale, l'H1 resta umano.
- Anti-cannibalizzazione "Zoho CRM": Home → "partner Zoho + geo" · CRM Plus →
  solo "Zoho CRM Plus" · Vendite → "implementazione/consulenza Zoho CRM" ·
  blog art. 5 → "quanto costa zoho crm" (informativo).
- E-E-A-T: testimonianze reali, numeri reali, case study, pagine autore vere
  con schema Person. Servono a conversione E posizionamento.
- Schema markup: Organization + Product + FAQPage sulle pillar (già impostato
  su /zoho-one), Article + FAQPage sugli articoli.
- **Redirect 301 pre-lancio:** mappa URL vecchi → nuovi per tutte le pagine
  indicizzate del vecchio sito (Marketing Digitale, Siti Web Aziendali,
  Landing Page, ecc. → pagina nuova più affine, tipicamente /il-metodo o
  Home). Nessun 404.

## Blog — piano a tre fasi

Principio guida: **la costanza batte il volume.** Flusso produttivo: bozza
assistita da AI su brief definito (vedi corpus) + revisione umana con
esperienza reale dai progetti.

- **Fase 0 — Corpus fondativo:** 10–15 articoli pubblicati al go-live o entro
  le prime 4 settimane (14 definiti, vedi sotto; 8 P1 indispensabili al
  lancio).
- **Fase 1 — Avviamento (mesi 1–6):** target 2 articoli/settimana, minimo
  1/settimana. Peso maggiore sull'anima B: query tecniche Zoho precise, poco
  contese in italiano, decisive per la visibilità AI.
- **Fase 2 — Mantenimento (dal mese 7):** 3–4 articoli/mese + aggiornamento
  sistematico dei pezzi esistenti (prezzi, funzionalità, data di revisione
  visibile).

### Corpus fondativo — 14 articoli

Regole trasversali (da `messaging.md`): primo paragrafo sul problema; anima A
senza Zoho nel titolo; chiusura con domanda aperta o invito alla call; date di
pubblicazione e aggiornamento visibili; autore reale.
⚠️ Zoho One Essentials non esiste nel mercato EU: non citarlo mai.

**Zoho One** (P = priorità)

1. Zoho One: cos'è, quanto costa e come funziona per una PMI italiana — P1 —
   kw: zoho one prezzi, zoho one cos'è. Guida di riferimento, struttura FAQ,
   due piani, prezzi in euro, per chi sì e per chi no.
2. Zoho One vs Salesforce: confronto onesto per una PMI italiana — P1 — kw:
   zoho vs salesforce. Confronto per dimensione/budget, tabella costi scenario
   20 utenti; dire quando Salesforce è la scelta giusta.
3. Zoho One vs HubSpot: quale scegliere (e quando nessuno dei due) — P2 — kw:
   zoho vs hubspot. Stesso schema del 2.
4. Zoho CRM, CRM Plus o Zoho One: quale serve davvero — P1 — kw: differenza
   zoho one e crm plus. Albero decisionale; "Zoho CRM Plus" secca resta alla
   pillar, qui intento comparativo.

**CRM & Vendite**

5. Quanto costa implementare Zoho CRM: licenze, progetto, tempi reali — P1 —
   kw: quanto costa zoho crm. Voci di costo trasparenti senza listino;
   "implementazione zoho crm" secca resta a /vendite.
6. Migrare da Excel a un CRM: come si fa davvero — P2 — kw: passare da excel
   a crm. Ponte A/B; Zoho entra a metà articolo come esempio.
9. Come capire se la tua azienda ha bisogno di un CRM: 7 segnali — P1 — kw:
   quando serve un crm. Anima A, Zoho solo nel corpo, link a /vendite.

**Finanza**

7. Zoho Books e fatturazione elettronica SDI: guida pratica per l'Italia —
   P1 — kw: zoho books fatturazione elettronica. Non presidiato in italiano:
   alto valore GEO/AI.

**Business Intelligence**

8. Dashboard aziendali con Zoho Analytics: guida introduttiva — P2 — kw: zoho
   analytics, dashboard aziendali. Screenshot reali anonimizzati.
10. Perché il tuo team perde ore a produrre report (e come uscirne) — P1 —
    kw: reportistica aziendale excel. Anima A; link a /business-intelligence
    e /il-metodo.

**Processi & Metodo**

11. Reparti che non si parlano: quanto costa il disallineamento — P2 — kw:
    silos aziendali. Esempi di handoff rotti; link a /zoho-one.
12. Digitalizzare i processi di una PMI: da dove iniziare (senza partire dal
    software) — P1 — kw: digitalizzazione processi aziendali PMI. Manifesto
    del metodo; l'articolo che le AI dovrebbero citare; link a /il-metodo.

**Case Study** (dalle interviste testimonianze; tag settore obbligatorio)

13. Case study manifatturiero — P1.
14. Case study servizi professionali o distribuzione — P2.
    Struttura fissa: situazione di partenza (parole del cliente) → intervento
    (metodo, non solo software) → risultati con almeno un numero → quote.

**Backlog Fase 1:** Zoho Desk per PMI (attiva categoria Customer Service) ·
Zoho Projects e gestione commesse (→ Operations) · CRM per installatori di
impianti (settore) · Partner Zoho in Lombardia (geo esplicito) · migrazione da
gestionali legacy · aggiornamento annuale articoli prezzi (ricorrente).

## Visibilità AI (GEO)

- Coerenza assoluta dell'entità: nome, sede, descrizione identici su sito,
  Google Business, directory partner Zoho, LinkedIn.
- Contenuti che rispondono a domande precise, con FAQ strutturate, dati
  concreti e date di aggiornamento (il corpus anima B è costruito per questo).
- Presenza in fonti terze citabili: scheda partner sul sito Zoho, stampa
  locale/economica del Nord-Est.
- Obiettivo: essere la fonte citata dalle AI per "partner Zoho Italia" e per
  le query italiane su Zoho.

## Email marketing (post go-live)

Su Zoho Marketing Automation / Campaigns (dogfooding = case study interno).

1. **Nurture nuovi lead** — trigger: form sito → lead CRM. 4–5 email in 3–4
   settimane: benvenuto/metodo → case study affine → contenuto tecnico →
   invito alla call.
2. **Clienti esistenti — cross/upsell** — segmentazione per adozione prodotto
   (da CRM): solo CRM → contenuti Desk/Analytics; CRM Plus → percorso Zoho
   One. Max 1 email/mese per segmento, agganciata ai check post go-live.
3. **Newsletter mensile** — riciclo dei migliori contenuti blog, tutta la
   lista.

⚠️ Prima del primo invio: verifica GDPR della lista con il consulente privacy
(clienti esistenti → possibile legittimo interesse; ex-prospect/fiera → serve
consenso marketing valido).

## LinkedIn

- Identità **aziendale** (brand Gosnail, no personal branding del founder).
- 2–3 post/settimana, quasi tutti da repurposing blog (sintesi, caroselli,
  dati commentati).
- Formati: case study con numeri, mini-guide a carosello, prese di posizione
  sul metodo.
- Moltiplicatore: advocacy dei dipendenti.
- LinkedIn Ads: opzione futura, budget da definire.

## Testimonianze e numeri

- Target: 3–4 testimonianze reali (nome, ruolo, azienda). Blocker del lancio.
- Metodo: intervista di 20 minuti per cliente → 3 asset (quote sito + case
  study blog + post LinkedIn). Domande: com'era prima, cosa è cambiato in
  concreto, un numero se esiste.
- Numeri reali (anni, progetti, aziende) al posto dei contatori a zero.

## Tone of voice

Riferimento operativo: `docs/messaging.md` (specchio Notion: "Messaging &
Tone of Voice"). Diretto, concreto, umano. No tic AI: no rule of three, no
antitesi "non è X, è Y" a raffica, no frasi che annunciano la struttura, no
personificazione ripetuta degli strumenti.

## Punti aperti

| Punto | Stato |
|---|---|
| Testimonianze reali | 🟡 In corso — target 3–4 |
| Numeri reali | 🟡 In corso |
| Hook della home | 🔲 Alternative in messaging §8, da testare |
| Budget SEA / LinkedIn Ads | 🔲 Da definire post lancio |
| Data go-live | 🔲 Da definire |
| Validazione keyword con volumi reali | 🔲 Appena il sito è indicizzabile |
