'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  TrendingUp, Megaphone, Headphones, Receipt, Users, FolderKanban, MessageSquare,
  Users as UsersIcon, UsersRound, Calendar, MessageCircle,
  Workflow, ClipboardList, Share2,
  Monitor, BarChart3, Database,
  BookOpen, FileText, Wallet, RefreshCw,
  UserSearch, Clock,
  GitBranch, Kanban,
  Mail, FolderArchive, Video, FileSpreadsheet,
  ArrowRight,
} from 'lucide-react'

const TABS = [
  {
    id: 'vendite',
    label: 'Vendite',
    icon: <TrendingUp size={18} />,
    accent: '#7A65CF',
    title: 'Una pipeline che non perde un colpo',
    desc: 'Ogni opportunità tracciata, ogni follow-up al momento giusto, previsioni basate sui numeri. Il commerciale lavora su una pipeline sempre aggiornata, con le automazioni che fanno avanzare le trattative al posto del lavoro manuale.',
    apps: [
      { name: 'CRM',      icon: <UsersIcon size={20} /> },
      { name: 'Bigin',    icon: <UsersRound size={20} /> },
      { name: 'Bookings', icon: <Calendar size={20} /> },
      { name: 'SalesIQ',  icon: <MessageCircle size={20} /> },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
    link: '/vendite',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: <Megaphone size={18} />,
    accent: '#FF5A4D',
    title: 'Campagne che finiscono dritte nel commerciale',
    desc: 'Costruisci la presenza online, manda i messaggi giusti alle persone giuste e misuri il ritorno reale del budget. Ogni lead generato entra direttamente nel CRM, senza liste da esportare e reimportare: marketing e vendite sulla stessa pagina.',
    apps: [
      { name: 'Marketing Automation', icon: <Workflow size={20} /> },
      { name: 'Campaigns', icon: <Megaphone size={20} /> },
      { name: 'Forms',     icon: <ClipboardList size={20} /> },
      { name: 'Social',    icon: <Share2 size={20} /> },
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
    link: '/marketing',
  },
  {
    id: 'assistenza',
    label: 'Assistenza',
    icon: <Headphones size={18} />,
    accent: '#349ABA',
    title: "L'assistenza diventa un vantaggio competitivo",
    desc: 'Email, telefono, chat e social in un unico posto, con lo storico completo del cliente sotto gli occhi di chi risponde. Il supporto sa cosa il cliente ha comprato, il commerciale sa quali richieste ha aperto. Niente più clienti che ripetono la stessa cosa a tre persone diverse.',
    apps: [
      { name: 'Desk',    icon: <Headphones size={20} /> },
      { name: 'Assist',  icon: <Monitor size={20} /> },
      { name: 'SalesIQ', icon: <MessageCircle size={20} /> },
    ],
    image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=1200&q=80&auto=format&fit=crop',
    link: '/customer-service',
  },
  {
    id: 'finanza',
    label: 'Finanza',
    icon: <Receipt size={18} />,
    accent: '#1C318C',
    title: 'I conti che tornano da soli',
    desc: "Contabilità, fatturazione elettronica SDI, note spese e magazzino integrati con il resto dell'azienda. Quando un ordine si chiude nel CRM, la fattura è già pronta in amministrazione: i dati passano da soli, senza reinserimenti e senza errori di trascrizione.",
    apps: [
      { name: 'Books',         icon: <BookOpen size={20} /> },
      { name: 'Invoice',       icon: <FileText size={20} /> },
      { name: 'Expense',       icon: <Receipt size={20} /> },
      { name: 'Subscriptions', icon: <RefreshCw size={20} /> },
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop',
    link: '/finanza',
  },
  {
    id: 'hr',
    label: 'Risorse Umane',
    icon: <Users size={18} />,
    accent: '#7A65CF',
    title: 'Le persone gestite come meritano',
    desc: "Anagrafiche, presenze, ferie, selezione e onboarding in un'unica area. I dati dei dipendenti non restano più sparsi su mille fogli Excel: diventano informazione affidabile per chi organizza il lavoro e fa crescere il team.",
    apps: [
      { name: 'People',  icon: <Users size={20} /> },
      { name: 'Recruit', icon: <UserSearch size={20} /> },
      { name: 'Shifts',  icon: <Clock size={20} /> },
    ],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80&auto=format&fit=crop',
    link: '/risorse-umane',
  },
  {
    id: 'operations',
    label: 'Operations',
    icon: <FolderKanban size={18} />,
    accent: '#349ABA',
    title: 'Progetti e commesse sotto controllo',
    desc: "Attività, scadenze e avanzamenti visibili a tutto il team, con i documenti condivisi in un unico spazio. Chi coordina vede a colpo d'occhio dove si è fermato un progetto e perché, senza rincorrere aggiornamenti per email.",
    apps: [
      { name: 'Projects', icon: <Kanban size={20} /> },
      { name: 'Flow',     icon: <GitBranch size={20} /> },
      { name: 'Sprints',  icon: <FolderKanban size={20} /> },
    ],
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80&auto=format&fit=crop',
    link: '/operations',
  },
  {
    id: 'business-intelligence',
    label: 'Business Intelligence',
    icon: <BarChart3 size={18} />,
    accent: '#349ABA',
    title: 'Le decisioni si prendono sui numeri, non a sensazione',
    desc: "Tutti i dati dell'azienda, dalle vendite alla finanza alle operations, confluiscono in dashboard sempre aggiornate. La direzione vede come sta andando l'azienda senza aspettare che qualcuno prepari il report. Gli stessi numeri per tutti, in tempo reale.",
    apps: [
      { name: 'Analytics', icon: <BarChart3 size={20} /> },
      { name: 'DataPrep',  icon: <Database size={20} /> },
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop',
    link: '/business-intelligence',
  },
]

export default function EcosystemTabs() {
  const [activeId, setActiveId] = useState('vendite')
  const tab = TABS.find((t) => t.id === activeId) || TABS[0]

  return (
    <div className="ed-tabs">
      {/* Tab bar */}
      <div className="ed-tabs-bar" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === activeId}
            className={`ed-tabs-btn ${t.id === activeId ? 'active' : ''}`}
            onClick={() => setActiveId(t.id)}
            style={t.id === activeId ? { '--tab-accent': t.accent } : {}}
          >
            <span className="ed-tabs-btn-icon">{t.icon}</span>
            <span className="ed-tabs-btn-label">{t.label}</span>
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div className="ed-tabs-panel" key={tab.id}>
        <div className="ed-tabs-text">
          <h3 className="ed-tabs-title" style={{ '--tab-accent': tab.accent }}>
            {tab.title}
          </h3>
          <p className="ed-tabs-desc">{tab.desc}</p>
          <Link href={tab.link} className="ed-tabs-link" style={{ '--tab-accent': tab.accent }}>
            <span>Scopri di più</span>
            <ArrowRight size={16} />
          </Link>
          <div className="ed-tabs-apps">
            {tab.apps.map((app) => (
              <div key={app.name} className="ed-tabs-app">
                <div className="ed-tabs-app-icon" style={{ color: tab.accent }}>{app.icon}</div>
                <div className="ed-tabs-app-label">{app.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="ed-tabs-image">
          <img src={tab.image} alt={tab.title} />
          <div className="ed-tabs-image-glow" style={{ background: tab.accent }}></div>
        </div>
      </div>
    </div>
  )
}
