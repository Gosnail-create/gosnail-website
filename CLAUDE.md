# CLAUDE.md — Gosnail Website

> File letto all'avvio di ogni sessione. Tienilo conciso. Il dettaglio sta in `docs/`.

## Cos'è questo progetto

Sito web di **Gosnail**, società italiana di consulenza B2B che implementa i prodotti **Zoho** e gestisce progetti di trasformazione/digitalizzazione per PMI italiane. Partner autorizzato Zoho.

**Obiettivo del sito:** lead generation + posizionarsi come IL partner Zoho di riferimento in Italia (focus Nord-Est). Strategia: pillar page per conversione + blog per nurturing/SEO/qualificazione AI.

**Sede:** Via Nazionale 40, Tavagnacco (UD) + Padova. Email: info@gosnail.it

## Stack & comandi

- **Next.js 14** (App Router) · JavaScript (no TypeScript) · React 18
- Stile: un unico file CSS globale `src/app/globals.css` (no CSS modules, no Tailwind)
- Icone: `lucide-react` + 119 icone Zoho ufficiali in `public/assets/zoho-products/`
- Font: `next/font/google` — Fraunces (display serif), Poppins (body), JetBrains Mono (label)
- Immagini: Unsplash placeholder (dominio abilitato in `next.config.js`)

```bash
npm run dev      # sviluppo locale
npm run build    # SEMPRE prima del push, verifica compilazione
git push         # Vercel auto-deploya in ~1 minuto
```

- Repo: `github.com/Gosnail-create/gosnail-website` (remote ha già il token)
- `git config commit.gpgsign false` (signing non disponibile in questo ambiente)
- Commit message in italiano, descrittivi

## Regole di design (NON negoziabili)

1. **Font mai sotto 16px.** Body/paragrafi 18-20px. Pulsanti 17px. Mono labels prominenti 18px, minori 16px.
2. **Palette brand stretta** (vedi `docs/design-system.md`). Non inventare colori custom.
   - Accenti semantici: **coral**=azione/CTA · **purple**=processo/decoro · **celestial**=dati/intelligence
   - Background: **glacier**=neutro · **lavender**=intelletto · **linen**=calore/fiducia
3. **Direzione "Italian editorial" MA contenuta.** Fraunces sui titoli, italics sugli accenti. NIENTE tropi da rivista (no tag "N.01", no eyebrow pretenziosi). Refined, non posa.
4. **Box highlight:** bordo sottile 1px in tinta, no barra spessa a sinistra.
5. Testi: applicare la skill **humanizer** — no tic AI (rule of three, -ing posticci, em dash a raffica).

## Stato delle pagine

| Pagina | Stato |
|---|---|
| `/` Home | ✅ Editoriale completa |
| `/zoho-one` | ✅ Editoriale completa (pillar) |
| `/il-metodo` | ⚙️ Usa EdNav/EdFooter ma stile vecchio — DA MIGRARE |
| `/contatti` | ⚙️ Idem — DA MIGRARE + form da collegare |
| `/zoho-crm-plus` + 7 verticali + chi-siamo + blog + soluzioni | 🔲 Placeholder editoriali (testi Divi disponibili, vedi docs/roadmap) |

## Componenti riutilizzabili

- `EdNav` — mega menu desktop (Soluzioni dropdown 2 col) + hamburger mobile
- `EdFooter` — footer con logo Zoho Partner + alberatura completa
- `EdEffects` — scroll reveal (IntersectionObserver) + counter animati
- `EcosystemTabs` — showcase interattivo a tab (usato in Zoho One)
- `OrganicShapes` — `CurveDivider`, `BlobDivider`, `BrushStroke` (transizioni tra sezioni)
- `PlaceholderPage` — pagina "in costruzione" coerente
- `ContactForm` — form (frontend only, backend DA FARE)

## Workflow consigliato

- **Conversazioni separate per tema**: DEV / DESIGN / STRATEGIA
- Aggiornare i file in `docs/` quando si chiude un blocco di lavoro
- Reasoning **medium** di default; **high** per strategia/architettura/debug

## Vedi anche

- `docs/design-system.md` — palette completa, tipografia, pattern componenti
- `docs/strategy.md` — posizionamento, competitor, piano contenuti
- `docs/roadmap.md` — fatto / da fare / known issues / testi disponibili
