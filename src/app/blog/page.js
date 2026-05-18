import PlaceholderPage from '@/components/PlaceholderPage'

export const metadata = {
  title: 'Blog Gosnail — Case study, scenari d\'uso, articoli su Zoho',
  description: 'Case study, scenari d\'uso e approfondimenti su Zoho e la trasformazione digitale delle PMI italiane.',
}

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Insights e case study"
      title="Storie, scenari, articoli."
      titleEm="In arrivo."
      description="Il blog di Gosnail raccoglierà case study di clienti reali, scenari d'uso e approfondimenti sull'ecosistema Zoho. Stiamo preparando i primi contenuti."
      relatedLink="/contatti"
      relatedLabel="Scrivici subito"
    />
  )
}
