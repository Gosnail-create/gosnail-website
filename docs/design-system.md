# Design System — Gosnail Website

Riferimento visivo completo. La fonte token machine-readable è `/home/claude/repo/project/design-tokens.json` (formato DTCG, importabile in Figma con Tokens Studio).

## Palette brand

| Nome | Hex | Uso |
|---|---|---|
| Night | `#111D52` | Testo primario, sezioni dark profonde |
| Ocean | `#1C318C` | Sezione pull quote (momento drammatico) |
| Purple | `#7A65CF` | Accento processo/decoro, blob |
| Celestial | `#349ABA` | Accento dati/intelligence/BI |
| Coral | `#FF6B6B` | Accento azione/CTA, italics nei titoli |
| Glacier | `#F0F4F8` | Background light neutro |
| Lavender | `#F5F4FA` | Background "intelletto/processo" |
| Linen | `#F6F3F0` | Background "calore/fiducia" (testimonianze, CTA finale) |

**Testo:** ink `#111D52` (primario), ink-soft `#3D4680` (body), ink-mute `#7A82B0` (caption).

### Accenti — ruoli semantici
- **Coral** → azione, CTA, urgenza, accenti italic
- **Purple** → processo, decorazione (blob sfocati, segni grafici)
- **Celestial** → dati, intelligence, dashboard, BI

### Background — ruoli semantici
- **Glacier** → sezioni neutre
- **Lavender** → sezioni "intelletto/processo"
- **Linen** → sezioni "fiducia/umano"

Le sezioni alternano questi sfondi per dare ritmo, con `OrganicShapes` come transizioni curve tra una e l'altra.

## Tipografia

- **Fraunces** (serif variabile) — titoli H1/H2, accenti italic. Variation settings: titoli `opsz 96-144, SOFT 30-100, WONK 0-1`. Gli `<em>` nei titoli usano SOFT 100 + WONK 1 + colore coral.
- **Poppins** — body, UI, pulsanti
- **JetBrains Mono** — eyebrow, label tecniche, numeri

### Regola font size (TASSATIVA)
- **Mai sotto 16px**
- Body/paragrafi: **18-20px** (`clamp(1.125rem, 1.5vw, 1.25rem)`)
- Card body / FAQ / pricing desc: 16-17px
- Pulsanti CTA: 17px
- Mono labels prominenti (es. colonne footer): 18px
- Mono labels minori (tab, badge, eyebrow): 16px

### Line-heights
- Hero H1 (display): 1.1
- H2 sezione: 1.2
- Body: 1.7
- Card/UI: 1.5

## Pattern componenti

- **Hero diorama** (Zoho One): wordmark "Zoho One" centrale + 8 icone Zoho fluttuanti + stamp "Authorized Partner / Implementato da Gosnail"
- **Section header**: variante 2 colonne (H2 sx, body dx) OPPURE `--centered` single-column. Alternare per evitare monotonia.
- **Target audience cards**: single row, layout verticale, sfondi alternati (white/lavender/night/linen)
- **Numbered benefits**: numero giant italic coral + titolo serif italic + body sans
- **Pricing cards**: editorial, featured badge coral
- **Comparison table**: header mono + body serif/sans
- **FAQ**: accordion nativo `<details>`/`<summary>`, icona `+` che ruota a `×`
- **Pull quote**: quote serif gigante + body Poppins + signature con logo stamp
- **Highlight box**: bg tinted + bordo 1px in tinta, radius su tutti gli angoli, NO barra sinistra
- **Buttons**: primary su coral (hover riempie navy dal basso) · outline navy

## Decisioni di design prese (e perché)

- **Editoriale ridotto**: l'estetica "rivista" iniziale era pretenziosa per una pagina prodotto B2B. Tenuti Fraunces + grain + curve organiche; rimossi tag N.XX, eyebrow "Pillar", variazioni font estreme sul body.
- **Palette brand stretta**: avevo derivato colori custom (#2A3260, #FF5A4D) — riallineati ai valori brand ufficiali.
- **Hero pillar ≠ hero home**: home parla di Gosnail (foto team), pillar parla del prodotto (diorama Zoho) + dual branding.
- **Font ≥16px**: scelta di accessibilità/leggibilità del cliente.

## Asset

- Logo Gosnail: `/assets/Gosnail-logo-*.svg`
- Zoho Authorized Partner: `-square.svg` (74x74, footer), `.svg` (orizzontale), `-bw.svg` (b/n)
- 119 icone prodotti Zoho: `/assets/zoho-products/icons/`
- Logo prodotti Zoho: `/assets/zoho-products/logos/` + `logos-bw/`
