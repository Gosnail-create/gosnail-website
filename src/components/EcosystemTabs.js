'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  TrendingUp, Megaphone, Headphones, Receipt, Users, FolderKanban, MessageSquare,
  Users as UsersIcon, UsersRound, Calendar, MessageCircle,
  Workflow, ClipboardList, Share2,
  Monitor,
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
    title: 'Definisci e automatizza il processo di vendita',
    desc: 'Dai al tuo team commerciale gli strumenti per vendere in modo efficiente su ogni canale. Lead scoring, pipeline sempre aggiornata, automazioni che fanno avanzare le trattative senza spinte.',
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
    title: 'Coinvolgi i prospect su ogni canale',
    desc: 'Costruisci la presenza online, manda ai prospect i messaggi giusti e ottieni ritorni misurabili dal budget marketing. Workflow email, autoresponder, segmentazione automatica.',
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
    title: "Trasforma l'assistenza in un vantaggio",
    desc: 'Helpdesk multicanale che centralizza email, telefono, chat e social in un unico posto. Ticket sempre tracciabili, knowledge base condivisa, customer satisfaction misurabile.',
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
    title: 'Metti in ordine la finanza',
    desc: 'Strumenti di contabilità per organizzare i conti, tracciare i pagamenti, gestire fatture e spese. Fatturazione elettronica conforme al SDI italiano, integrata con CRM e magazzino.',
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
    title: 'Gestisci le persone, non i moduli',
    desc: 'Gestione presenze, recruitment, performance, formazione. Una sola piattaforma per il reparto HR, con dati condivisi tra payroll, CRM e Operations.',
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
    title: 'Orchestra processi e progetti',
    desc: 'Gestione progetti, workflow tra reparti, automazioni custom che attraversano l\'azienda. Un ordine chiuso nel CRM diventa un progetto in Projects con i task assegnati al team operativo.',
    apps: [
      { name: 'Projects', icon: <Kanban size={20} /> },
      { name: 'Flow',     icon: <GitBranch size={20} /> },
      { name: 'Sprints',  icon: <FolderKanban size={20} /> },
    ],
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80&auto=format&fit=crop',
    link: '/operations',
  },
  {
    id: 'collaborazione',
    label: 'Collaborazione',
    icon: <MessageSquare size={18} />,
    accent: '#FF5A4D',
    title: 'Una sola casa per il lavoro quotidiano',
    desc: 'Email, chat aziendale, videoconferenze, archivio file in cloud, documenti collaborativi. Tutto nello stesso ambiente, con SSO e gestione utenti centralizzata.',
    apps: [
      { name: 'Mail',      icon: <Mail size={20} /> },
      { name: 'Cliq',      icon: <MessageSquare size={20} /> },
      { name: 'Meeting',   icon: <Video size={20} /> },
      { name: 'WorkDrive', icon: <FolderArchive size={20} /> },
      { name: 'Writer',    icon: <FileSpreadsheet size={20} /> },
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop',
    link: '#',
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
