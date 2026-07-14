# Documentazione Gosnail — struttura e fonti di verità

Questa cartella `docs/` contiene la documentazione tecnica del progetto sito e marketing di Gosnail. Serve a chi implementa (Claude Code, sviluppatori) e agli strumenti AI che leggono il repository come contesto.

## Divisione dei ruoli: GitHub vs Notion

Il progetto tiene due copie della documentazione, con scopi diversi e deliberatamente non identici.

| | GitHub (`docs/`) | Notion |
|---|---|---|
| **Per chi** | Chi implementa + strumenti AI | Persone (team, collaboratori esterni, nuovi arrivati) |
| **Linguaggio** | Tecnico, sintetico, checklist, path e riferimenti | Discorsivo, leggibile, senza gergo interno |
| **Contiene** | Regole in forma di vincoli, tabelle di mapping, note operative | Le stesse decisioni spiegate in prosa |
| **Fonte di verità per…** | Contenuti tecnici (regole, SEO, architettura) | Leggibilità e allineamento delle persone |

**Regola di precedenza:** per i contenuti tecnici (regole di prosa, keyword, mapping, vincoli) fa fede GitHub. Per la formulazione leggibile fa fede Notion. Quando si aggiorna qualcosa, **prima il repo, poi si riallinea Notion.**

## File in questa cartella

- **`messaging.md`** — Tono di voce, buyer persona, CTA, focus per pagina, regole di prosa anti-AI (§7) come vincoli rigidi, checklist pre-pubblicazione, vincoli di contenuto sempre validi.
- **`strategy.md`** — Posizionamento, offerta, architettura contenuti (categoria→pagina), mappa SEO, strategia geografica, piano editoriale, email marketing, stato punti aperti.

## Come usare questi file per generare testo con un'AI

1. Passare `messaging.md` (e `strategy.md` se serve il contesto strategico) come contesto.
2. Trattare le regole §7 di `messaging.md` come vincoli, non suggerimenti.
3. Eseguire la checklist pre-pubblicazione prima di considerare pronto un testo.
4. La bozza AI è sempre seguita da revisione umana con esperienza reale dai progetti.
