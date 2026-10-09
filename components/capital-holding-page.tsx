'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Mail, MapPin, Menu, MoveUpRight, X } from 'lucide-react'

const EMAIL = 'ethan@capital-holding.org'
const LINKEDIN = 'https://www.linkedin.com/in/ethangoldberg1211'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Investments', href: '#investments' },
  { label: 'Team', href: '#team' },
  { label: 'News', href: '#news' },
  { label: 'Contacts', href: '#contacts' },
]

const thesis = [
  {
    label: 'Since 2017',
    text: 'The managers have invested behind one thesis, and the thesis has not moved.',
  },
  {
    label: 'Our vision',
    text: 'The holdings worth owning can sit quietly for years: real businesses, clear ownership, and work that lives between commerce, technology, and culture.',
  },
  {
    label: 'Our mission',
    text: 'Give a small circle of partners a direct line to that work, and stay long enough for it to matter.',
  },
]

const practice: { index: string; title: string; text: string }[] = [
  {
    index: '01',
    title: 'Underwrite',
    text: 'A small number of businesses and partnerships each year. If it does not belong on the platform, it does not get a meeting that pretends otherwise.',
  },
  {
    index: '02',
    title: 'Structure',
    text: 'Capital, governance, and the decisions that compound. We sit with owners. We do not hand over a deck and leave.',
  },
  {
    index: '03',
    title: 'Steward',
    text: 'One standard in three cities. A conversation in Miami and a structure in Luxembourg are the same firm.',
  },
]

const places = [
  {
    city: 'Luxembourg',
    role: 'Europe',
    image: '/gallery/luxembourg.jpg',
    text: 'Where the structure lives. European holdings, counsel, and the long paperwork of a patient position.',
  },
  {
    city: 'Dubai',
    role: 'Gulf',
    image: '/gallery/dubai.jpg',
    text: 'Where the partnership is in the room. Gulf relationships that do not travel well by email.',
  },
  {
    city: 'Miami',
    role: 'Americas',
    image: '/gallery/miami.jpg',
    text: 'Where the Americas conversation starts. The same memo that leaves Luxembourg.',
  },
]

const team: {
  index: string
  name: string
  role: string
  location: string
  since: string
  bio: string
  paragraphs: string[]
  href?: string
}[] = [
  {
    index: '01',
    name: 'Ethan Goldberg',
    role: 'Founder & Chief Executive Officer',
    location: 'Across the platform',
    since: 'Since 2017',
    href: LINKEDIN,
    bio: 'An investor and entrepreneur since 2017, across startups, established businesses, real estate, AI, and blockchain.',
    paragraphs: [
      'An investor and entrepreneur since 2017, focused on identifying promising opportunities and building long-term value across startups, established businesses, real estate, artificial intelligence, and blockchain technology.',
      'My investment philosophy is centered on long-term equity partnerships, strategic collaboration, and sustainable growth. I believe successful businesses are built through a combination of vision, strong leadership, disciplined decision-making, and the ability to recognize opportunities before they reach their full potential.',
      'As Founder and CEO, I focus on strategic direction, investment opportunities, business development, and building relationships with entrepreneurs and partners who share a long-term vision.',
      'My goal is to support innovative ventures, develop strong business partnerships, and create lasting value across traditional and emerging markets.',
    ],
  },
  {
    index: '02',
    name: 'Mira Chen',
    role: 'Managing Partner | Strategic Leadership',
    location: 'Luxembourg',
    since: 'Since 2017',
    bio: 'Works with the CEO on major decisions, investment evaluations, and the long-term direction of the firm.',
    paragraphs: [
      'Working closely with the CEO, the Managing Partner contributes to major business decisions, investment evaluations, and the company\u2019s long-term strategic direction.',
      'With a focus on identifying opportunities, evaluating business potential, and developing strategic partnerships, the role combines commercial awareness with a long-term perspective on growth and value creation.',
      'The partnership is built on shared responsibility, strategic alignment, and a commitment to making informed decisions that support the company\u2019s objectives.',
    ],
  },
  {
    index: '03',
    name: 'Julian Adeyemi',
    role: 'Investment Broker | Business Development',
    location: 'Miami',
    since: 'Since 2017',
    bio: 'Sources opportunities, opens relationships, and connects the firm with businesses and partners.',
    paragraphs: [
      'Focused on identifying potential investment opportunities, establishing professional relationships, and connecting the company with promising businesses and strategic partners.',
      'The role involves opportunity sourcing, relationship development, preliminary business evaluation, and supporting communication throughout the investment process.',
      'With an emphasis on professionalism and long-term collaboration, the objective is to develop a strong network of opportunities that aligns with the company\u2019s investment interests.',
    ],
  },
  {
    index: '04',
    name: 'Hugo Moreau',
    role: 'Investment Broker | Business Development',
    location: 'Luxembourg',
    since: 'Joined 2017',
    bio: 'Sources opportunities in Europe and brings businesses and partners into the same conversation as Miami.',
    paragraphs: [
      'Focused on identifying potential investment opportunities across Europe, establishing professional relationships, and connecting the company with promising businesses and strategic partners.',
      'The role involves opportunity sourcing, relationship development, preliminary business evaluation, and keeping communication clear from the first introduction through the investment process.',
      'With an emphasis on professionalism and long-term collaboration, the objective is to build a European network of opportunities that aligns with the company\u2019s investment interests.',
    ],
  },
  {
    index: '05',
    name: 'Sofia Alvarez',
    role: 'Investment Advisor | Research & Strategy',
    location: 'Dubai',
    since: 'Joined 2017',
    bio: 'Researches markets, weighs risk, and brings a strategic view to each opportunity.',
    paragraphs: [
      'Focused on researching market trends, evaluating business opportunities, and providing strategic insights to support informed decision-making.',
      'The role includes examining market conditions, considering potential risks, and assessing the long-term prospects of investment opportunities across relevant sectors.',
      'By combining analytical thinking with a strategic perspective, the objective is to help the company evaluate opportunities carefully and pursue decisions aligned with its long-term goals.',
    ],
  },
  {
    index: '06',
    name: 'Leo Bergström',
    role: 'Operations Manager | Business Operations',
    location: 'Dubai',
    since: 'Joined 2017',
    bio: 'Keeps the work organized, the process clear, and the day aligned with the firm\u2019s priorities.',
    paragraphs: [
      'Responsible for coordinating operational activities, supporting project execution, and maintaining efficient internal processes.',
      'The role focuses on organization, workflow management, communication between team members, and ensuring that day-to-day activities remain aligned with the company\u2019s priorities.',
      'Through structured planning and operational coordination, the objective is to support productivity, strengthen internal collaboration, and contribute to the company\u2019s continued development.',
    ],
  },
]

const news = [
  {
    date: '12 March 2017',
    place: 'Miami',
    title: 'The Americas desk is open.',
    text: 'Conversations that used to travel now start on the water. The memo is the same one that leaves Luxembourg. The city changed. The standard did not.',
    image: '/gallery/news-miami.jpg',
  },
  {
    date: '4 November 2017',
    place: 'Dubai',
    title: 'A Gulf presence, for partnerships that need the room.',
    text: 'Some relationships do not survive a video call. Dubai is where those meetings happen. The thesis was already a year old when the door opened.',
    image: '/gallery/news-dubai.jpg',
  },
  {
    date: '15 January 2017',
    place: 'The firm',
    title: 'Capital Holding is established.',
    text: 'One thesis, written down on the first day: fewer positions, longer holds, and a team small enough that every partner can still explain every holding.',
    image: '/gallery/news-founding.jpg',
  },
]

const partnerMarks: { name: string; icon: () => ReactNode }[] = [
  {
    name: 'Halden',
    icon: () => (
      <svg viewBox="0 0 28 28" className="size-6" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 8.5h4.2a4 4 0 0 1 0 8H9V8.5Zm0 8v3" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'Vesper',
    icon: () => (
      <svg viewBox="0 0 28 28" className="size-6" fill="none" aria-hidden="true">
        <path d="M5 7.5 14 22 23 7.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9.2 7.5h9.6" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'Northline',
    icon: () => (
      <svg viewBox="0 0 28 28" className="size-6" fill="none" aria-hidden="true">
        <path d="M4 14h20M14 5v6M14 17v6" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Alder',
    icon: () => (
      <svg viewBox="0 0 28 28" className="size-6" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="20" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 20 14 8l5 12M10.4 16h7.2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'Marlowe',
    icon: () => (
      <svg viewBox="0 0 28 28" className="size-6" fill="none" aria-hidden="true">
        <path d="M4 21V8l10 8 10-8v13" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'Ostara',
    icon: () => (
      <svg viewBox="0 0 28 28" className="size-6" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
        <path d="M14 2.5v3.2M14 22.3v3.2M2.5 14h3.2M22.3 14h3.2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'Pell & Co',
    icon: () => (
      <svg viewBox="0 0 28 28" className="size-6" fill="none" aria-hidden="true">
        <path d="M8 20c4-1 6-4 6-8s-2-6-6-6M16 8c2 2 3 4 3 6s-1 4-3 6" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'Cinder',
    icon: () => (
      <svg viewBox="0 0 28 28" className="size-6" fill="none" aria-hidden="true">
        <path d="M14 3.5 24 14 14 24.5 4 14 14 3.5Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M14 9.5 18.5 14 14 18.5 9.5 14 14 9.5Z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
]

function PartnerMarks({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex" aria-hidden={hidden}>
      {partnerMarks.map((partner) => (
        <div key={partner.name} className="flex h-14 shrink-0 items-center gap-3 px-10 text-white/50" role={hidden ? undefined : 'img'} aria-label={hidden ? undefined : partner.name}>
          {partner.icon()}
          <span className="text-[13px] font-medium uppercase tracking-[0.32em]">{partner.name}</span>
        </div>
      ))}
    </div>
  )
}

function PartnerStrip() {
  return (
    <section aria-label="Partners" className="border-y border-white/[0.08] bg-[#080909]">
      <div className="mx-auto flex max-w-[1440px] items-stretch">
        <p className="hidden shrink-0 items-center border-r border-white/[0.08] px-8 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35 sm:flex">
          Partners
        </p>
        <div className="relative min-w-0 flex-1 overflow-hidden py-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#080909] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#080909] to-transparent sm:w-24" />
          <div className="partner-track flex w-max items-center">
            <PartnerMarks />
            <PartnerMarks hidden />
          </div>
        </div>
      </div>
    </section>
  )
}

function Logo() {
  return <img src="/logo.svg" alt="Capital Holding" className="h-9 w-auto" />
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V24H.22V8.5zM8.34 8.5h4.37v2.12h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.76h-4.56v-7.77c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.02-2.98 4.1V24H8.34V8.5z" />
    </svg>
  )
}

function OrbitalObject() {
  return (
    <div className="relative aspect-square w-full max-w-[620px] overflow-hidden rounded-full bg-[#0c100e] shadow-[0_0_100px_rgba(16,185,129,0.07)]">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="absolute left-1/2 top-1/2 size-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 [transform:translate(-50%,-50%)_rotate(29deg)_scaleY(.45)]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        className="absolute left-1/2 top-1/2 h-[86%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-emerald-400/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
        className="absolute left-1/2 top-1/2 h-[32%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/15"
      />
      <motion.div
        animate={{ y: [-12, 12, -12], rotate: [0, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 size-[43%] -translate-x-1/2 -translate-y-1/2 rounded-[44%] bg-[linear-gradient(135deg,#3c4841_0%,#18211c_35%,#0b0f0d_68%,#243e31_100%)] shadow-[inset_-18px_-18px_45px_rgba(0,0,0,.75),inset_12px_8px_30px_rgba(255,255,255,.12),0_0_70px_rgba(16,185,129,.15)] [transform:translate(-50%,-50%)_rotate(45deg)_skew(-8deg,-8deg)]"
      >
        <div className="absolute left-[19%] top-[18%] h-[70%] w-[38%] rounded-full border border-white/15 border-r-transparent" />
      </motion.div>
      <div className="absolute left-[25%] top-[27%] size-1.5 rounded-full bg-emerald-300 shadow-[0_0_16px_5px_rgba(16,185,129,.35)]" />
      <div className="absolute bottom-[24%] right-[26%] size-1 rounded-full bg-white/70 shadow-[0_0_13px_3px_rgba(255,255,255,.25)]" />
      <div className="absolute bottom-[12%] left-[20%] font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
        est. 2017 / year 09
      </div>
    </div>
  )
}

export default function CapitalHoldingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openProfile, setOpenProfile] = useState<string | null>(null)
  const activeProfile = team.find((member) => member.name === openProfile)

  useEffect(() => {
    if (!openProfile) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenProfile(null)
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [openProfile])

  return (
    <main className="min-h-screen overflow-hidden bg-[#080909] text-[#f5f5f0]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#080909]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-12">
          <a href="#overview" className="shrink-0">
            <Logo />
          </a>
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <span className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/45 2xl:flex">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(16,185,129,.65)]" />
              Year three
            </span>
            <a
              href="#contacts"
              className="group flex items-center gap-2 border border-white/20 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:border-emerald-400 hover:text-emerald-300"
            >
              Let&apos;s talk
              <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/[0.07] bg-[#0b0d0c] lg:hidden"
            >
              <div className="flex flex-col gap-5 px-6 py-7">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-xs uppercase tracking-[0.2em] text-white/65"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section
        id="overview"
        className="relative mx-auto grid min-h-screen max-w-[1440px] scroll-mt-24 items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1fr_1.05fr] lg:gap-4 lg:px-12 lg:pt-24"
      >
        <div className="relative z-10 max-w-[660px]">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-emerald-300/80"
          >
            <span className="h-px w-8 bg-emerald-400" /> Investing with a long view.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(3.6rem,7vw,7.2rem)] font-medium leading-[.92] tracking-[-0.075em]"
          >
            Capital with
            <br />
            <span className="text-white/95">purpose.</span>
            <br />
            <span className="text-emerald-300">Vision without</span>
            <br />
            limits.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-9 max-w-[480px] text-base leading-7 text-[#969b97]"
          >
            One relationship. A founder-led platform for patient capital, held from Luxembourg, Dubai, and Miami.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <a
              href="#about"
              className="group flex items-center gap-4 bg-[#f5f5f0] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#0a0c0b] transition-colors hover:bg-emerald-300"
            >
              Read the thesis
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
            <a
              href="#team"
              className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/65 hover:text-white"
            >
              The team <MoveUpRight className="size-3" />
            </a>
          </motion.div>
          <p className="mt-16 font-mono text-[9px] uppercase tracking-[0.24em] text-white/30">
            Est. 2017 <span className="px-2 text-emerald-400">·</span> Year three
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <OrbitalObject />
        </motion.div>
      </section>

      <PartnerStrip />

      <section id="about" className="scroll-mt-24 bg-[#101211] px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] items-start gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <figure className="relative overflow-hidden">
            <img
              src="/gallery/about-study.jpg"
              alt="A private study at dusk, with a green lamp and a stone window"
              className="aspect-[3/4] w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">The room</p>
              <p className="mt-2 text-2xl tracking-[-0.04em]">Luxembourg</p>
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow">01 / About</p>
            <h2 className="mt-5 max-w-[720px] text-[clamp(2.2rem,4.6vw,4.6rem)] leading-[.98] tracking-[-0.06em]">
              Investing with a <span className="text-white/35">long view.</span>
            </h2>
            <p className="mt-8 max-w-[640px] text-lg leading-8 text-[#969b97]">
              Capital Holding is an independent investment firm. We are not a marketplace, and we are not a new thesis
              every quarter. We study a situation, decide if it belongs here, and then we hold it.
            </p>
            <dl className="mt-10 grid max-w-[520px] grid-cols-3 gap-4 border-y border-white/10 py-6">
              {[
                ['2017', 'Founded'],
                ['09', 'Year of the thesis'],
                ['03', 'Cities'],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">{label}</dt>
                  <dd className="mt-2 text-2xl tracking-[-0.04em] text-emerald-300">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-2 max-w-[720px]">
              {thesis.map((item) => (
                <div key={item.label} className="grid gap-3 border-b border-white/10 py-6 sm:grid-cols-[140px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">{item.label}</p>
                  <p className="text-sm leading-7 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-[1.1fr_.9fr] sm:items-end">
              <div className="max-w-[460px] space-y-5 text-base leading-7 text-[#969b97]">
                <p>
                  In practice the work is origination, structuring, and stewardship. We underwrite a small number of
                  businesses and partnerships. We sit with founders and owners on capital and governance.
                </p>
                <p>Two years on, that is still the whole description. Fewer positions. Longer holds.</p>
              </div>
              <img
                src="/gallery/luxembourg.jpg"
                alt="Luxembourg at dusk, from the old ramparts toward the city"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="investments" className="scroll-mt-24 px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">02 / Investments</p>
              <h2 className="mt-5 max-w-[720px] text-4xl tracking-[-0.06em] md:text-6xl">
                Capital Holding
                <br />
                <span className="text-white/35">strategy.</span>
              </h2>
            </div>
            <p className="max-w-[300px] text-sm leading-6 text-white/45">
              Capital Holding invests in businesses and partnerships. The strategy is the thesis, repeated until it is
              boring, which is the point.
            </p>
          </div>
          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
            {practice.map((item) => (
              <article key={item.title} className="bg-[#080909] p-8 lg:p-10">
                <span className="font-mono text-[10px] text-emerald-300">{item.index}</span>
                <h3 className="mt-16 text-3xl tracking-[-0.05em]">{item.title}</h3>
                <p className="mt-4 max-w-[320px] text-sm leading-6 text-white/45">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <div className="flex items-end justify-between gap-6">
              <h3 className="text-2xl tracking-[-0.04em] md:text-4xl">
                Three cities. <span className="text-white/35">One platform.</span>
              </h3>
              <p className="hidden max-w-[240px] text-right font-mono text-[10px] uppercase tracking-[0.16em] text-white/35 sm:block">
                Luxembourg / Dubai / Miami
              </p>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {places.map((place) => (
                <figure key={place.city} className="group">
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#101211]">
                    <img
                      src={place.image}
                      alt={`${place.city} at dusk`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">{place.role}</p>
                      <p className="mt-1 text-2xl tracking-[-0.04em]">{place.city}</p>
                    </figcaption>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/45">{place.text}</p>
                </figure>
              ))}
            </div>
          </div>
          <p className="mt-10 max-w-[640px] text-xs leading-5 text-white/30">
            This page describes how the firm works. It is not an offer to sell securities or a solicitation to invest.
          </p>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 border-t border-white/[0.08] bg-[#101211] px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-12 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">03 / Team</p>
              <h2 className="mt-5 text-4xl tracking-[-0.06em] md:text-6xl">
                Six minds.
                <br />
                <span className="text-white/35">One direction.</span>
              </h2>
            </div>
            <p className="max-w-[320px] text-sm leading-6 text-white/45">
              A close team. Each profile opens with the work they actually do.
            </p>
          </div>
          <div>
            {team.map((member) => (
              <article key={member.name} className="border-b border-white/10 py-10">
                <div className="grid gap-6 lg:grid-cols-[120px_1fr_1.1fr] lg:gap-10">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-emerald-300">{member.index}</p>
                  <div>
                    <h3 className="text-3xl tracking-[-0.05em] md:text-5xl">
                      <button
                        type="button"
                        onClick={() => setOpenProfile(member.name)}
                        className="text-left hover:text-emerald-300"
                      >
                        {member.name}
                      </button>
                    </h3>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-white/50">{member.role}</p>
                    <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="size-3 text-emerald-400/80" strokeWidth={1.5} />
                        {member.location}
                      </span>
                      <span>{member.since}</span>
                    </p>
                    {member.href && (
                      <a
                        href={member.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="mt-6 inline-flex size-9 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-emerald-400 hover:text-emerald-300"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                  </div>
                  <div className="lg:pt-2">
                    <p className="text-sm leading-7 text-white/55">{member.bio}</p>
                    <button
                      type="button"
                      onClick={() => setOpenProfile(member.name)}
                      className="mt-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-emerald-300 hover:text-white"
                    >
                      View profile
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="scroll-mt-24 px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">04 / News</p>
              <h2 className="mt-5 max-w-[640px] text-4xl tracking-[-0.06em] md:text-6xl">
                The record,
                <br />
                <span className="text-white/35">in order.</span>
              </h2>
            </div>
            <p className="max-w-[260px] text-sm leading-6 text-white/45">Three notes. The cities, then the day the firm opened.</p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            <article className="group lg:col-span-7">
              <div className="relative overflow-hidden">
                <img
                  src={news[0].image}
                  alt="Miami waterfront at dusk"
                  className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <p className="absolute left-5 top-5 bg-black/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white">
                  {news[0].date}
                </p>
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">{news[0].place}</p>
              <h3 className="mt-3 text-3xl tracking-[-0.05em] md:text-5xl">{news[0].title}</h3>
              <p className="mt-4 max-w-[520px] text-sm leading-7 text-white/50">{news[0].text}</p>
            </article>
            <div className="grid gap-5 lg:col-span-5">
              {news.slice(1).map((item) => (
                <article key={item.date} className="group">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.place} — ${item.title}`}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">
                    {item.date} <span className="px-2 text-white/25">/</span> {item.place}
                  </p>
                  <h3 className="mt-2 text-2xl tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/45">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="scroll-mt-24 border-t border-white/[0.08] bg-[#101211] px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow">05 / Contacts</p>
          <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-[760px] text-[clamp(3.2rem,7vw,6.4rem)] leading-[.9] tracking-[-0.08em]">
              Write to
              <br />
              <span className="text-emerald-300">Ethan.</span>
            </h2>
            <p className="max-w-[320px] text-sm leading-6 text-white/45">
              He founded the firm, and he still reads the mail. Email, LinkedIn, and the three cities.
            </p>
          </div>
          <div className="mt-16 grid border-t border-white/10 md:grid-cols-3">
            <a
              href={`mailto:${EMAIL}`}
              className="group border-b border-white/10 py-10 md:border-b-0 md:border-r md:pr-10"
            >
              <span className="flex items-center justify-between">
                <Mail className="size-4 text-emerald-300" strokeWidth={1.5} />
                <ArrowUpRight className="size-4 text-white/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300" />
              </span>
              <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Email</p>
              <p className="mt-3 text-xl tracking-[-0.03em] text-white/85 group-hover:text-emerald-300 sm:text-2xl">
                {EMAIL}
              </p>
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="group border-b border-white/10 py-10 md:border-b-0 md:border-r md:px-10"
            >
              <span className="flex items-center justify-between text-emerald-300">
                <LinkedInIcon />
                <ArrowUpRight className="size-4 text-white/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300" />
              </span>
              <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">LinkedIn</p>
              <p className="mt-3 text-xl tracking-[-0.03em] text-white/85 group-hover:text-emerald-300 sm:text-2xl">
                ethangoldberg1211
              </p>
            </a>
            <div className="py-10 md:pl-10">
              <MapPin className="size-4 text-emerald-300" strokeWidth={1.5} />
              <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Platform</p>
              <p className="mt-3 text-xl tracking-[-0.03em] text-white/85 sm:text-2xl">Luxembourg</p>
              <p className="mt-1 text-xl tracking-[-0.03em] text-white/85 sm:text-2xl">Dubai</p>
              <p className="mt-1 text-xl tracking-[-0.03em] text-white/85 sm:text-2xl">Miami</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <a href="#overview">
              <Logo />
            </a>
            <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[10px] uppercase tracking-[0.16em] text-white/40 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="Ethan Goldberg on LinkedIn"
              className="flex size-9 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-emerald-400 hover:text-emerald-300"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
              © 2017 Capital Holding. All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">Built for the long view</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {activeProfile && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close profile"
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              onClick={() => setOpenProfile(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="member-profile-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35 }}
              className="relative max-h-[90vh] w-full max-w-[860px] overflow-y-auto border border-white/10 bg-[#101211] p-7 shadow-[0_30px_80px_rgba(0,0,0,.55)] sm:p-12"
            >
              <button
                type="button"
                onClick={() => setOpenProfile(null)}
                aria-label="Close profile"
                className="absolute right-5 top-5 flex size-9 items-center justify-center border border-white/15 text-white/70 hover:border-emerald-400 hover:text-emerald-300"
              >
                <X className="size-4" />
              </button>
              <p className="eyebrow pr-12">{activeProfile.role}</p>
              <h2 id="member-profile-title" className="mt-5 text-[clamp(3rem,7vw,5.5rem)] leading-[.9] tracking-[-0.07em]">
                {activeProfile.name.split(' ')[0]}
                <br />
                <span className="text-white/35">{activeProfile.name.split(' ').slice(1).join(' ')}.</span>
              </h2>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-300">{activeProfile.role}</p>
              <div className="mt-8 max-w-[640px] space-y-5 border-l border-emerald-400/40 pl-6 text-base leading-7 text-[#c5cac6]">
                {activeProfile.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              {activeProfile.href && (
                <a
                  href={activeProfile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex items-center gap-3 border border-white/15 px-4 py-3 text-[10px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:border-emerald-400 hover:text-emerald-300"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
