# strategy.md — Strategia e architettura dei contenuti

> **Fonte di verità** per posizionamento, architettura del sito, categorie blog e mappa SEO. La versione discorsiva "per persone" vive su Notion (*Strategia & Posizionamento*, *SEO — Keyword Map*).

---

## Posizionamento

Gosnail = consulente di processo che usa Zoho, non rivenditore di licenze. Tre pilastri: territoriale (Nord-Est), metodologico (analisi prima del software), editoriale (fonte italiana più leggibile su Zoho).

Valori riconosciuti dai clienti: empatia, precisione, affidabilità.

## Target

Manager PMI 20-500 dipendenti, fatturato ≥1M€. Soglia progetto d'ingresso ~7.000€ (off-site). Settori: manifatturiero, servizi professionali, software/tech, distribuzione, impianti.

## Offerta

100% consulenza di processo + ecosistema Zoho. I servizi di marketing digitale pre-2024 (siti, SEA, e-commerce, landing) sono dismessi.

**Azione tecnica pre-lancio:** mappa redirect 301 dalle vecchie pagine indicizzate → pagina nuova più affine. Zero 404.

---

## Architettura contenuti — mapping categoria → pagina

| Categoria blog (slug) | Alimenta | Articoli corpus |
|---|---|---|
| zoho-one | /zoho-one | 1, 2, 3, 4 |
| crm-vendite | /zoho-crm-plus, /vendite | 5, 6, 9 |
| finanza | /finanza | 7 |
| business-intelligence | /business-intelligence | 8, 10 |
| metodo-processi | Home, /il-metodo | 11, 12 |
| case-study | Home, /chi-siamo | 13, 14 |

Regole categorie:
- Una categoria per articolo, tematica (non per anima).
- Categorie future (marketing, customer-service, operations, hr) solo con ≥2-3 articoli. Mai categorie vuote o con un pezzo solo.
- Settori (manifatturiero, servizi, distribuzione, impianti) = tag trasversali nel frontmatter, non categorie.
- Verticali di settore: nascono come case study nel blog (1/settore), si promuovono a landing solo con evidenza SEO.

## Distribuzione card blog

- Home → 3 card: ultimo case study + 2 da metodo-processi.
- /zoho-one → 3 card zoho-one. /zoho-crm-plus → 3 card crm-vendite.
- Verticali future → propria categoria; se assente, sezione non renderizzata.
- Fine articolo → 2-3 correlati stessa categoria + CTA pillar.
- Componente: `<BlogCards category="..." limit={3} />`, categoria dal frontmatter.

## Archivio /blog

- Pillole filtro = link reali a `/blog/categoria/[slug]`, pagine indicizzabili con title+meta propri.
- Categorie <3 articoli → `noindex`.

---

## Mappa SEO — pagine core

> Validare con volumi reali (Keyword Planner, Search Console, Ahrefs/Semrush) prima del definitivo.
> Title tag ≠ H1: il title porta la keyword commerciale, l'H1 resta umano.

| Pagina | Anima | KW primaria | KW secondarie | Title tag |
|---|---|---|---|---|
| Home | A | partner Zoho Nord-Est | consulenza Zoho PMI · digitalizzazione processi aziendali | Gosnail — Partner Zoho per PMI del Nord-Est |
| Zoho One | B | Zoho One | Zoho One prezzi · Zoho One cos'è · Zoho One partner Italia | Zoho One per PMI: cos'è, prezzi e implementazione |
| Zoho CRM Plus | B | Zoho CRM Plus | Zoho CRM Plus prezzi · differenza Zoho One e CRM Plus | Zoho CRM Plus: vendite, marketing e assistenza uniti |
| Vendite | B | implementazione Zoho CRM | consulenza Zoho CRM · Zoho CRM prezzi · configurazione | Implementazione Zoho CRM per le vendite |
| Marketing | B | Zoho marketing automation | Zoho Campaigns · email marketing automation PMI | Marketing automation con Zoho per PMI |
| Business Intelligence | B | Zoho Analytics | dashboard aziendali · business intelligence PMI | Zoho Analytics: dashboard e BI per PMI |
| Finanza | B | Zoho Books | Zoho Books fatturazione elettronica SDI · software contabilità PMI | Zoho Books: contabilità e fatturazione elettronica SDI |
| Customer Service | B | Zoho Desk | helpdesk PMI · software ticketing assistenza clienti | Zoho Desk: helpdesk multicanale per PMI |
| Operations | B | Zoho Projects | software gestione commesse · gestione progetti PMI | Zoho Projects: gestione progetti e commesse |
| Risorse Umane | B | Zoho People | software HR PMI · gestione risorse umane software | Zoho People: gestione HR per PMI |
| Il Metodo | A | consulenza digitalizzazione processi | reingegnerizzazione processi aziendali | Il nostro metodo: prima i processi, poi il software |
| Chi Siamo | A | consulenti Zoho Veneto | Gosnail · partner Zoho Nord-Est | Chi siamo — Consulenti Zoho nel Nord-Est |
| Contatti | A | consulenza Zoho Veneto | contatti Gosnail · partner Zoho Nord-Est | Contatti — Gosnail, partner Zoho nel Nord-Est |

Riferimenti prezzo per i contenuti: Zoho One ~45$/utente/mese (all-employee); Zoho CRM ~14$/utente/mese (Standard).

## Anti-cannibalizzazione "Zoho CRM"

Home → "partner Zoho + geo" · CRM Plus → "Zoho CRM Plus" · Vendite → "implementazione/consulenza Zoho CRM" · blog art.5 → "quanto costa zoho crm" (informativo).

## Strategia geografica: identità stretta, copertura larga

- **SEO (identità stretta):** Home/Chi Siamo/Contatti ancorate a Nord-Est reale (Veneto + Friuli). Milano/Bologna/Brescia solo via articoli/landing geo-dedicati, non allargando l'etichetta "Nord-Est".
- **Commerciale (copertura larga):** claim = raggiungibilità. "Nati nel Nord-Est, raggiungiamo di persona le PMI del Nord Italia."
- Google Business su sede → ricerche locali.

## E-E-A-T e dati strutturati

- Testimonianze reali, numeri reali, case study, pagine autore vere (schema Person).
- Schema: Organization + Product + FAQPage sulle pillar; Article + FAQPage sugli articoli.

## Visibilità AI (GEO)

- Coerenza entità: nome/sede/descrizione identici su sito, Google Business, directory partner Zoho, LinkedIn.
- FAQ strutturate, dati concreti, date di aggiornamento visibili.
- Fonti terze citabili: scheda partner Zoho, stampa locale/economica Nord-Est.

---

## Piano editoriale — fasi

- **Fase 0 (corpus):** 10-15 articoli al go-live. Mix: 6-8 tecnici B, 3-4 problema A, 2-3 case study.
- **Fase 1 (mesi 1-6):** target 2/settimana, min 1/settimana. Peso su anima B.
- **Fase 2 (dal mese 7):** 3-4/mese + aggiornamento sistematico dei pezzi esistenti.
- Flusso: bozza assistita AI su brief definito → revisione umana.

## Email marketing (post go-live)

Piattaforma: Zoho Marketing Automation / Campaigns.
1. Nurture nuovi lead — trigger form→CRM, 4-5 email in 3-4 settimane.
2. Cross/upsell clienti — segmentazione per adozione prodotto da CRM, max 1/mese.
3. Newsletter mensile — riuso blog, tutta la lista.

⚠️ Verifica GDPR lista prima del primo invio (consulente privacy).

## Stato punti aperti

| Punto | Stato |
|---|---|
| Testimonianze reali | In corso — target 3-4 via intervista |
| Numeri reali | In corso — verificare pre-lancio |
| Posizionamento geografico | Risolto |
| Prezzi sul sito | Risolto — soglia off-site |
| Hook della home | Aperto — da testare |
| Verticali di settore | Risolto — via blog case study |
| Frequenza editoriale | Risolto — piano a fasi |
| Budget SEA/LinkedIn Ads | Aperto |
| Data go-live | Aperta |
