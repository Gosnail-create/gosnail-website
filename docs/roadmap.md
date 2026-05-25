# Roadmap — Gosnail Website

## ✅ Fatto

- Setup Next.js + deploy Vercel + GitHub
- Design system editoriale (Fraunces + Poppins + JetBrains Mono, palette brand, organic shapes, grain)
- Home page completa (editoriale)
- Zoho One pillar page completa (hero diorama, tabs ecosistema, pricing, comparison, FAQ accordion, partnership quote)
- Mega menu + hamburger mobile + footer ristrutturato
- Alberatura completa con 10 placeholder pages
- Audit tipografico (font ≥16px ovunque)
- Design system aggiornato in `/home/claude/repo/project/` (colors_and_type.css, design-tokens.json, CHANGELOG.md, FIGMA.md)

## 🔲 Da fare — tecnico (pre-produzione)

- **Form contatti + backend** → integrazione con **Zoho CRM** (crea lead). Probabilmente più form diversi.
- **Cookie banner + GDPR** → policy mancanti (Privacy, Cookie). Link footer puntano a "#".
- **Analytics** → GA4 + **Zoho PageSense**. Da fare a fine progetto, prima del go-live sul dominio principale.
- Migrare `/il-metodo` e `/contatti` allo stile editoriale (oggi stile vecchio).

## 🔲 Da fare — pagine

Pillar e verticali da costruire (testi Divi del vecchio sito disponibili — vedi sotto):
- `/zoho-crm-plus` (pillar)
- `/vendite`, `/marketing`, `/business-intelligence`, `/finanza`, `/customer-service`, `/operations`
- `/risorse-umane` (priorità bassa)
- `/chi-siamo`
- `/blog` + sistema articoli

## 🔲 Da fare — contenuti (cliente prepara)

- Foto team Gosnail (ora placeholder)
- Logo clienti autorizzati (social proof)
- Testimonianze reali (nome, ruolo, azienda, foto)
- Founding story
- Numeri reali (anni, progetti, dipendenti)
- 2-3 case study per avviare il blog
- Elementi grafici dal grafico del cliente

## 📦 Testi disponibili (estratti dai JSON Divi del sito attuale)

Salvati in `/tmp/gosnail-pages-texts.md` durante la sessione di import. Pagine con testi pronti da rivedere/integrare:
- Zoho CRM Plus, Zoho CRM (Vendite), Zoho Campaigns (Marketing), Zoho Finance (Contabilità), Zoho Analytics (BI), Zoho Desk (Customer Service), Il Nostro Metodo, Perché Scegliere Noi (Chi Siamo), Contatti, I nostri servizi.
- NB: i testi del sito attuale hanno tic AI — passare sempre la skill **humanizer**.

## ⚠️ Known issues / note

- Le pagine `/il-metodo` e `/contatti` usano ancora CSS vecchio (classi `.section-*`, `.contact`, `.method-*`) — vanno migrate ai pattern editoriali.
- ContactForm è solo frontend (mostra "inviato" senza inviare).
- Immagini = Unsplash placeholder, da sostituire con foto reali del cliente.
