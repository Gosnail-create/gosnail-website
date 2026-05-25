# Design Decisions — Gosnail Website

Registro cronologico delle decisioni di design prese. Per ogni voce: **cosa**, **perché**, **varianti rifiutate** (quando rilevanti).

Complementare a `design-system.md` (che descrive lo stato attuale) — qui sta il *ragionamento*. Se modifichi una decisione, aggiorna entrambi.

---

## 1. Direzione visiva: "Italian editorial, contenuto"

**Decisione.** Estetica da rivista italiana — Fraunces serif sui titoli, italics in coral sugli accenti, paper grain texture, curve organiche tra sezioni, layout asimmetrici, pull quote magazine-style.

**Perché.** Differenziarsi dai tipici siti di consulenza Zoho (template SaaS interscambiabili) e segnalare cura/posizionamento premium senza ricorrere a glossy corporate.

**Varianti rifiutate.**
- *Editoriale spinto* (prima passata, commit `ac1387e` → `fdfdd41`): tag "N.01 MMXXV", eyebrow "Pillar / Zoho One", variazioni Fraunces estreme anche sul body, meta bar nell'hero. **Rifiutato**: pretenzioso per una pagina prodotto B2B; più posa che sostanza. Tenuti Fraunces + grain + curve, rimosso il resto.
- *Template SaaS standard* (Tailwind-like, card grigie, icone stock). **Rifiutato**: indistinguibile dai 50 competitor Zoho italiani.

---

## 2. Palette: brand stretta, no colori derivati

**Decisione.** Si usano solo gli 8 colori brand ufficiali (night, ocean, purple, celestial, coral, glacier, lavender, linen) + 3 toni ink. Niente colori "vicini" inventati.

**Perché.** Coerenza tra sito, materiali commerciali e proposte. Riconoscibilità.

**Variante rifiutata.** Avevo derivato `#2A3260` (navy intermedio) e `#FF5A4D` (coral più caldo) per gradienti più ricchi (commit `fdfdd41`). **Rifiutato**: drift dal brand. Riallineato ai valori ufficiali, gradienti ricostruiti con i colori canonici.

### Ruoli semantici degli accenti

| Colore | Ruolo | Dove appare |
|---|---|---|
| **Coral** | Azione, urgenza | CTA, numeri benefici, italics nei titoli |
| **Purple** | Processo, decoro | Blob sfocati, segni grafici |
| **Celestial** | Dati, intelligence | Riferimenti a BI/dashboard/analytics |

### Ruoli semantici dei background

| Colore | Ruolo |
|---|---|
| **Glacier** | Neutro |
| **Lavender** | Intelletto / processo |
| **Linen** | Calore / fiducia (testimonianze, CTA finale) |

L'alternanza dei background dà ritmo; le transizioni sono curve (`OrganicShapes`), non linee dritte.

---

## 3. Tipografia: tre famiglie, regole rigide sulle size

**Decisione.**
- **Fraunces** (serif variabile) — H1/H2 + italics accentati
- **Poppins** — body, UI, pulsanti
- **JetBrains Mono** — eyebrow, label tecniche, numeri

**Regola tassativa: mai sotto 16px.** Body 18-20px, pulsanti 17px, mono labels prominenti 18px, mono minori 16px.

**Perché.** Richiesta esplicita del cliente (accessibilità + percezione di "spazio respirato"). Audit con bulk replace su 108 occorrenze sotto 16px (commit `01e52dc`).

**Variante rifiutata.** Caption/footnote a 12-13px per gerarchia visiva più marcata. **Rifiutata**: viola la regola. Gerarchia ottenuta con peso, colore (ink-mute), e family (mono vs serif) invece che con dimensione.

### Variation settings Fraunces
- Titoli display: `opsz 96-144, SOFT 30-100, WONK 0-1`
- `<em>` nei titoli: `SOFT 100 + WONK 1`, colore coral
- Body Fraunces (raro, solo pull quote): `opsz 14, SOFT 50, WONK 0`

### Line-heights
- Hero H1: 1.1 · H2: 1.2 · Body: 1.7 · UI: 1.5
- Inizialmente avevo 1.05 sui titoli — troppo serrato, alzato a 1.2 (commit `661604a`).

---

## 4. Hero: due varianti distinte per Home e Pillar

**Decisione.**
- **Home**: foto team Gosnail (umano, chi siamo) + intro su misura.
- **Pillar Zoho One**: diorama astratto — wordmark "Zoho One" al centro + 8 icone Zoho ufficiali fluttuanti + stamp "Authorized Partner / Implementato da Gosnail".

**Perché.** L'home risponde a "chi sono questi?"; la pillar risponde a "cos'è Zoho One e perché Gosnail?". Servono due grammatiche visive diverse + dual branding (Zoho + Gosnail) sulla pillar.

**Varianti rifiutate.**
- *Hero pillar = screenshot dashboard*: troppo generico, non comunica partnership.
- *Hero con meta bar* ("N.01 MMXXV" + pill "Zoho partner"): rimossa (commit `8d221cd`) — rumorosa, riequilibrava male il padding.

---

## 5. Componenti riutilizzabili (e perché esistono)

| Componente | Scopo | Note |
|---|---|---|
| `EdNav` | Mega menu 2 colonne (Soluzioni) + hamburger mobile | Le voci verticali stanno tutte sotto "Soluzioni" → evita nav top-level affollata |
| `EdFooter` | Footer ricco con dual logo (Gosnail + Zoho Partner SVG square) e alberatura completa | Square SVG 74x74 invece dell'orizzontale → si bilancia col logo Gosnail (200px wide) |
| `EdEffects` | Scroll reveal (IntersectionObserver) + counter animati | Centralizzato per evitare un useEffect per pagina |
| `EcosystemTabs` | Tab interattivi per le 7 aree Zoho (sostituisce app grid statica) | Click → tab attivo, ogni tab linka al verticale corrispondente |
| `OrganicShapes` | `CurveDivider`, `BlobDivider`, `BrushStroke` | Transizioni tra sezioni con sfondi diversi |
| `PlaceholderPage` | Pagine in costruzione coerenti | Evita 11 file copia-incolla |
| `ContactForm` | Form contatti (frontend only) | Backend → Zoho CRM, ancora da fare |

**Variante rifiutata: app grid statica** (commit `6900308`). Bella in screenshot, morta in UX: 50 icone allineate non comunicano "ecosistema integrato". Sostituita con `EcosystemTabs` (7 aree, contesto editoriale per ognuna).

---

## 6. Pattern CSS chiave

### 6.1 Box highlight: bordo sottile, non barra a sinistra

**Decisione.** `background: tinted; border: 1px solid in tinta; border-radius su tutti gli angoli`.

**Variante rifiutata.** Pattern classico tipo callout Markdown: barra spessa 4px a sinistra, sfondo tinted, no bordo. **Rifiutato**: cita troppo le docs tecniche / changelog; estraneo al tono editoriale.

### 6.2 Section header: due varianti alternate

- **2 colonne**: H2 a sinistra, body a destra (default)
- **Centered single-column**: H2 + body centrati (varianti `--centered`)

Si alternano per evitare la monotonia visiva di una pillar lunga.

### 6.3 Target audience cards: single row con sfondi alternati

**Decisione.** Una riga di 4 card a tutta larghezza, sfondi alternati `white → lavender → night → linen`, layout verticale dentro.

**Varianti rifiutate.**
- *Grid 2x2* (commit precedente a `9491f86`): perdeva il ritmo orizzontale, sembrava un blocco "feature list" generico.
- *Tutte stesso sfondo*: piatto.

### 6.4 Numbered benefits: numero giant italic coral

Numero gigante in Fraunces italic coral + titolo Fraunces italic + body Poppins. Tutti i numeri sono **coral** (non variati per gerarchia interna — commit `9491f86`).

### 6.5 Pull quote: momento drammatico

Sfondo **ocean** (`#1C318C`), quote serif gigante in italic + body Poppins + signature con logo stamp. Una sola pull quote per pagina, è il "picco" di intensità.

### 6.6 FAQ: accordion nativo

`<details>` / `<summary>` HTML nativo (no JS, no librerie). Icona `+` che ruota a `×` con `transform`. Accessibile e performante.

**Variante rifiutata.** Componente React con stato interno. Più codice, zero benefici qui.

### 6.7 Pricing cards: editorial

Card verticali, prezzo grande in Fraunces, badge "featured" in coral. Prezzi mensili **€37 / €90** (commit `3ff0355`), allineati al listino Zoho.

### 6.8 Pulsanti

- **Primary**: bg coral, testo white, hover → riempimento navy dal basso (`::before` con `transform: scaleY`)
- **Outline**: bordo navy, testo navy
- Tutti **17px**, Poppins 500, padding generoso

---

## 7. Decisioni sul footer (passata dedicata)

Una serie di iterazioni rapide sul footer (commit `e4e6a9c` → `8dccf3d`):

- **Logo Gosnail footer**: 120 → 150 → 200px wide. Rimossa vecchia regola `height: 28px` ereditata che lo schiacciava.
- **Logo Zoho Partner**: usato SVG **square** (74x74) invece dell'orizzontale → si bilancia con Gosnail wide.
- **Logo Zoho centrato** nel box bianco via flex (era ancorato a sinistra).
- **Selector direct-child** sul logo Gosnail: la regola di width non doveva ereditare sul logo Zoho nested (commit `8dccf3d`).
- **Tipografia footer**: link menu 16 → 18px, brand description 16 → 18px, label mono 11 → 13px → 18px (prominent) / 13px (minori), copyright 11 → 13px. Ferma applicazione della regola "mai sotto 16px" anche al footer (commit `f26c87c`, `01e52dc`).

---

## 8. Decoro: dove sì, dove no

**Decisione.** Blob sfocati purple/celestial + brush stroke + grain → **sì** nelle sezioni hero, partnership, testimonianze.
**No** nelle sezioni di solo testo (Problema, Benefici) — creavano artefatti visivi (commit `e0e3e59`).

**Perché.** Il decoro deve respirare; saturare ogni sezione lo neutralizza.

---

## 9. Testi: humanizer obbligatorio

**Decisione.** Tutti i testi originali (Divi del sito vecchio + draft AI) passano dalla skill **humanizer** prima di andare in produzione.

**Pattern da evitare** (osservati e corretti, commit `7716c74`):
- Rule of three forzata ("Veloce, semplice, scalabile")
- Em dash a raffica
- Gerundi posticci ("Trasformando il modo di...")
- Eyebrow pretenziosi ("In an era where...")
- Tag editoriali finti ("N.01 MMXXV", "Pillar Page")

**Perché.** Il sito non deve "sembrare scritto da una AI". Tono diretto, italiano operativo, primo livello di lettura comprensibile a un imprenditore PMI.

---

## 10. Decisioni rifiutate / future revisioni

| Idea | Stato | Motivo |
|---|---|---|
| Dark mode | Non in piano | Sito B2B con poca permanenza, ROI basso |
| Tailwind | Non in piano | Un solo CSS globale è più gestibile per la scala del progetto |
| TypeScript | Non in piano | JS è sufficiente, accelera modifiche del cliente in futuro |
| CMS headless | Da rivalutare quando parte il blog | Per ora MDX statico è candidato |
| i18n EN | Non ora | Focus mercato italiano (Nord-Est) |

---

## Come aggiornare questo file

1. Quando prendi una decisione **non banale** (pattern nuovo, variante rifiutata, scelta tipografica/di palette controversa), aggiungi una voce qui.
2. Se aggiorni il design system, aggiorna *anche* la sezione corrispondente in `design-system.md`.
3. Mantieni il formato: **decisione → perché → varianti rifiutate**. Il "perché" è la parte che invecchia meno.
