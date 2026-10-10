'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Mail, MapPin, Menu, MoveUpRight, X } from 'lucide-react'

const EMAIL = 'support@capital-holding.org'
const LINKEDIN = 'https://www.linkedin.com/in/ethangoldberg1211'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Investments', href: '#investments' },
  { label: 'Focus', href: '#focus' },
  { label: 'Team', href: '#team' },
  { label: 'News', href: '#news' },
  { label: 'Contacts', href: '#contacts' },
]

const aboutChapters = [
  {
    index: '01',
    label: 'Our approach',
    paragraphs: [
      'We take an active role in the development of our investments, supporting businesses from their early foundations through expansion and maturity. Every partnership is different, which is why our involvement is tailored to the specific needs, objectives, and potential of each business.',
      'From strategic planning and brand positioning to marketing, customer acquisition, commercial development, and market expansion, we bring together the resources and expertise needed to turn potential into progress. We believe that effective investment requires more than identifying opportunities; it requires the ability to help realise them.',
    ],
  },
  {
    index: '02',
    label: 'Beyond financial investment',
    paragraphs: [
      'Capital is the starting point, not the entire solution. We contribute time, strategic perspective, practical expertise, and access to relevant networks to help our partners navigate challenges and pursue new opportunities.',
      'By aligning capital with execution, we aim to strengthen businesses at every level: commercially, operationally, and strategically. We work closely with founders and management teams, supporting informed decisions, sustainable growth, and the development of long-term competitive advantages.',
    ],
  },
  {
    index: '03',
    label: 'Built for the long term',
    paragraphs: [
      'Our investment philosophy is grounded in patience, discipline, and active involvement. We do not approach businesses as short-term transactions or measure success by constant activity. Instead, we focus on building strong foundations, developing meaningful partnerships, and creating value that compounds over time.',
      'We seek businesses with genuine potential and partners who share our long-term perspective. Through aligned interests, consistent engagement, and a commitment to continuous development, we aim to help transform promising opportunities into enduring businesses.',
    ],
  },
]

const focusAreas = [
  {
    index: '01',
    title: 'Your project',
    image: '/gallery/focus-project.jpg',
    alt: 'A private study at dusk, with a building model on the table and the skyline beyond the glass',
    text: 'We invest in the venture you bring us. A founder, a real business, and a reason to hold it. Capital comes with the work beside it: strategy, relationships, and the patience to stay.',
  },
  {
    index: '02',
    title: 'Real estate',
    image: '/gallery/focus-estate.jpg',
    alt: 'Glass towers reflected in still water at dusk',
    text: 'Property, and the businesses tied to it. Clear ownership, a structure that can travel, and a hold that can sit quietly.',
  },
  {
    index: '03',
    title: 'Web3',
    image: '/gallery/focus-web3.jpg',
    alt: 'A fine network of lights against a dusk sky',
    text: 'Networks and the companies building on them. We look for a use that is already in the world, and a team we can sit with.',
  },
  {
    index: '04',
    title: 'Artificial intelligence',
    image: '/gallery/focus-ai.jpg',
    alt: 'A glass form holding a dusk skyline',
    text: 'Products that change how a business works. We stay where the tool is in the market, with customers and a path that can compound.',
  },
  {
    index: '05',
    title: 'Blockchain',
    image: '/gallery/focus-chain.jpg',
    alt: 'Two glass blocks with a green seam of light, set against the skyline',
    text: 'Infrastructure and applications with a reason to exist after the cycle. The same standard we use on every other holding.',
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
    name: 'Levy Abramowski',
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
    name: 'Rio Lerner',
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

const partnerMarks: { name: string; src: string }[] = [
  { name: 'Deloitte', src: '/partners/deloitte.svg' },
  { name: 'McKinsey', src: '/partners/mckinsey.svg' },
  { name: 'Accenture', src: '/partners/accenture.svg' },
  { name: 'Publicis Groupe', src: '/partners/publicis.svg' },
  { name: 'WPP', src: '/partners/wpp.svg' },
  { name: 'Capgemini', src: '/partners/capgemini.svg' },
  { name: 'Siemens', src: '/partners/siemens.svg' },
  { name: 'KPMG', src: '/partners/kpmg.svg' },
]

function PartnerMarks({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex" aria-hidden={hidden}>
      {partnerMarks.map((partner) => (
        <div
          key={partner.name}
          className="flex h-16 shrink-0 items-center px-10"
          role={hidden ? undefined : 'img'}
          aria-label={hidden ? undefined : partner.name}
        >
          <img
            src={partner.src}
            alt=""
            className="h-7 w-auto max-w-[158px] object-contain opacity-80 brightness-0 invert"
          />
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

const firmStats = [
  { value: 75, prefix: '€', suffix: 'M', label: 'Portfolio Value' },
  { value: 60, prefix: '€', suffix: 'M', label: 'Capital Invested' },
  { value: 84, prefix: '', suffix: '', label: 'Projects Invested In' },
  { value: 19, prefix: '', suffix: '', label: 'Successful Exits' },
]

function CountUp({
  value,
  prefix,
  suffix,
  start,
  delay = 0,
}: {
  value: number
  prefix: string
  suffix: string
  start: boolean
  delay?: number
}) {
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!start) return
    if (reduceMotion) {
      setDisplay(value)
      return
    }
    let frame = 0
    const wait = window.setTimeout(() => {
      const duration = 1700
      const startedAt = performance.now()
      const tick = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration)
        const eased = 1 - (1 - progress) ** 3
        setDisplay(Math.round(eased * value))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, delay)
    return () => {
      window.clearTimeout(wait)
      cancelAnimationFrame(frame)
    }
  }, [start, value, delay, reduceMotion])

  return (
    <span className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

function StatsBand() {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (reduceMotion) {
      setStarted(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.45 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [reduceMotion])

  return (
    <section ref={ref} aria-label="Figures" className="border-b border-white/[0.08] bg-[#080909] px-6 py-14 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-px bg-white/10 grid-cols-2 lg:grid-cols-4">
        {firmStats.map((stat, index) => (
          <div key={stat.label} className="bg-[#080909] px-2 py-8 sm:px-6 lg:px-8">
            <p className="text-[clamp(2.6rem,4.4vw,4.4rem)] leading-none tracking-[-0.055em]">
              <CountUp
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                start={started}
                delay={index * 90}
              />
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300/80">{stat.label}</p>
          </div>
        ))}
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

const heroFrames = [
  {
    src: '/gallery/hero-dubai.jpg',
    alt: 'Dubai at dusk, the Burj Khalifa and the surrounding towers reflected in still water',
    region: 'Gulf',
    place: 'Dubai',
    note: 'The towers',
    position: 'object-center',
  },
  {
    src: '/gallery/luxembourg.jpg',
    alt: 'Luxembourg at dusk, from the old ramparts toward the city',
    region: 'Europe',
    place: 'Luxembourg',
    note: 'The ramparts',
    position: 'object-[28%_center]',
  },
  {
    src: '/gallery/miami.jpg',
    alt: 'Miami at dusk, the skyline across still water',
    region: 'Americas',
    place: 'Miami',
    note: 'The water',
    position: 'object-[center_38%]',
  },
]

export default function CapitalHoldingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sectionTarget, setSectionTarget] = useState<string | null>(null)
  const [openProfile, setOpenProfile] = useState<string | null>(null)
  const [heroIndex, setHeroIndex] = useState(0)
  const [heroPaused, setHeroPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const activeProfile = team.find((member) => member.name === openProfile)
  const heroFrame = heroFrames[heroIndex]

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

  useEffect(() => {
    if (menuOpen || !sectionTarget) return
    const id = sectionTarget
    const timer = window.setTimeout(() => {
      const section = document.getElementById(id)
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - 88
        const root = document.documentElement
        const previous = root.style.scrollBehavior
        root.style.scrollBehavior = 'auto'
        window.scrollTo(0, Math.max(0, top))
        root.style.scrollBehavior = previous
      }
      window.history.pushState(null, '', `#${id}`)
      setSectionTarget(null)
    }, 40)
    return () => window.clearTimeout(timer)
  }, [menuOpen, sectionTarget])

  useEffect(() => {
    if (heroPaused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroFrames.length)
    }, 6400)
    return () => window.clearInterval(id)
  }, [heroPaused, heroIndex])

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#080909]/90 backdrop-blur-xl">
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
              Year Nine
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
            type="button"
            className="relative z-[60] flex size-12 items-center justify-center lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto bg-[#080909] px-6 py-6 lg:hidden"
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault()
                    setSectionTarget(item.href.slice(1))
                    setMenuOpen(false)
                  }}
                  className="border-b border-white/10 py-5 text-sm uppercase tracking-[0.2em] text-white/80"
                >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    <main className="min-h-screen overflow-hidden bg-[#080909] text-[#f5f5f0]">

      <section
        id="overview"
        className="relative mx-auto grid min-h-screen max-w-[1440px] scroll-mt-24 items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-12 lg:pt-24"
      >
        <div className="relative z-10 max-w-[660px]">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-emerald-300/80"
          >
            <span className="h-px w-8 bg-emerald-400" /> Investing with a long view.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(3.4rem,6.2vw,6.4rem)] font-medium leading-[1.08] tracking-[-0.045em]"
          >
            <span className="block">Capital with</span>
            <span className="mt-2 block text-white/95">purpose.</span>
            <span className="mt-8 block text-emerald-300 md:mt-10">Vision without</span>
            <span className="mt-2 block">limits.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-12 max-w-[460px] text-base leading-8 text-[#969b97]"
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
        <motion.figure
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15 }}
          className="relative w-full max-w-[540px] justify-self-end"
          onMouseEnter={() => setHeroPaused(true)}
          onMouseLeave={() => setHeroPaused(false)}
        >
          <div className="group relative aspect-[3/4] overflow-hidden border border-white/10">
            <AnimatePresence initial={false}>
              <motion.img
                key={heroFrame.src}
                src={heroFrame.src}
                alt={heroFrame.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.15, ease: 'easeInOut' }}
                className={`hero-drift absolute inset-0 h-full w-full object-cover ${heroFrame.position}`}
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_40%,transparent_40%,rgba(8,9,9,0.45)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080909] via-[#080909]/15 to-[#080909]/25" />
            <div className="absolute inset-x-6 top-6 z-10 flex gap-2">
              {heroFrames.map((frame, index) => (
                <button
                  key={frame.place}
                  type="button"
                  aria-label={`Show ${frame.place}`}
                  aria-current={index === heroIndex ? 'true' : undefined}
                  onClick={() => setHeroIndex(index)}
                  className="relative flex h-6 flex-1 items-center"
                >
                  <span className="relative h-px w-full bg-white/30">
                    {index < heroIndex && <span className="absolute inset-0 bg-emerald-300" />}
                    {index === heroIndex && (
                      <span key={heroIndex} className="hero-progress absolute inset-y-0 left-0 bg-emerald-300" />
                    )}
                  </span>
                </button>
              ))}
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroFrame.place}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45 }}
                  className="flex items-end justify-between gap-6"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">{heroFrame.region}</p>
                    <p className="mt-2 text-3xl tracking-[-0.05em] sm:text-4xl">{heroFrame.place}</p>
                  </div>
                  <p className="pb-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">{heroFrame.note}</p>
                </motion.div>
              </AnimatePresence>
            </figcaption>
          </div>
        </motion.figure>
      </section>

      <PartnerStrip />

      <StatsBand />

      <section id="about" className="scroll-mt-24 border-t border-white/[0.08] px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 24 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: '-80px' },
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
                })}
          >
            <p className="eyebrow">01 / About</p>
            <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
              <h2 className="text-[clamp(3.2rem,7.2vw,7rem)] leading-[0.88] tracking-[-0.07em]">
                More than
                <span className="mt-1 block text-white/28">capital.</span>
              </h2>
              <p className="max-w-[16ch] text-[clamp(1.55rem,2.2vw,2.15rem)] leading-[1.12] tracking-[-0.045em] text-white/70 lg:justify-self-end lg:pb-3">
                A partner in building lasting value.
              </p>
            </div>
            <div className="mt-10 h-px bg-gradient-to-r from-emerald-300 via-white/15 to-transparent" />
          </motion.div>

          <div className="mt-14 grid items-start gap-12 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <motion.div
              className="max-w-[640px]"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 28 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: '-60px' },
                    transition: { duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] as const },
                  })}
            >
              <p className="text-xl leading-9 text-[#e4e7e3] md:text-[1.35rem] md:leading-[2.15rem]">
                Capital Holding is an independent investment firm focused on long-term strategic partnerships and active
                ownership. Since 2017, we have invested with a clear conviction: lasting value is created not through
                capital alone, but through the right strategy, the right capabilities, and a shared commitment to
                building for the future.
              </p>
              <p className="mt-8 border-l border-emerald-300/70 pl-6 text-base leading-8 text-white/55 md:text-lg">
                We partner with ambitious businesses, founders, and entrepreneurs, combining patient capital with
                strategic guidance, marketing expertise, business development, and operational support. Our role extends
                beyond financing. We work alongside our partners to identify opportunities, strengthen market
                positioning, accelerate growth, and build businesses with the foundations to succeed over the long term.
              </p>
            </motion.div>

            <motion.figure
              className="relative"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 28 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: '-60px' },
                    transition: { duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] as const },
                  })}
            >
              <div className="relative overflow-hidden">
                <img
                  src="/gallery/about-study.jpg"
                  alt="A private study at dusk, with a green lamp and a stone window"
                  className="about-drift aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080909] via-transparent to-black/20" />
                <span className="pointer-events-none absolute top-4 left-4 h-8 w-8 border-t border-l border-emerald-300/80" />
                <span className="pointer-events-none absolute right-4 bottom-4 h-8 w-8 border-r border-b border-white/50" />
              </div>
              <figcaption className="mt-5 flex items-end justify-between gap-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">Since 2017</p>
                  <p className="mt-2 text-2xl tracking-[-0.04em]">Capital Holding</p>
                </div>
                <span className="mb-1 h-px w-16 bg-emerald-300/70" />
              </figcaption>
            </motion.figure>
          </div>

          <div className="mt-24 lg:mt-32">
            {aboutChapters.map((chapter, index) => (
              <motion.article
                key={chapter.label}
                className="group grid gap-6 border-t border-white/10 py-12 last:border-b lg:grid-cols-[7.5rem_minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start lg:gap-14 lg:py-16"
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 28 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, margin: '-40px' },
                      transition: {
                        duration: 0.7,
                        delay: 0.06 * index,
                        ease: [0.22, 1, 0.36, 1] as const,
                      },
                    })}
              >
                <span className="font-mono text-[clamp(2.4rem,4vw,3.4rem)] leading-none tracking-[-0.06em] text-emerald-300 transition-colors duration-500 group-hover:text-white">
                  {chapter.index}
                </span>
                <h3 className="max-w-[16ch] text-[clamp(1.8rem,2.6vw,2.7rem)] leading-[1.05] tracking-[-0.045em]">
                  {chapter.label}
                </h3>
                <div className="space-y-5 text-[15px] leading-7 text-white/55 lg:pt-1">
                  {chapter.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className="max-w-[62ch]">
                      {paragraph}
                    </p>
                  ))}
                  <span className="mt-2 block h-px w-0 bg-emerald-300 transition-all duration-500 group-hover:w-16" />
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="relative mt-16 overflow-hidden border border-white/10 px-7 py-14 sm:px-12 lg:mt-20 lg:px-16 lg:py-20"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 24 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: '-60px' },
                  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
                })}
          >
            <div className="pointer-events-none absolute top-0 left-0 h-24 w-px bg-gradient-to-b from-emerald-300 to-transparent" />
            <p className="max-w-[34rem] text-base leading-7 text-white/55">
              At Capital Holding, we invest with conviction, contribute beyond capital, and remain committed to the
              journey.
            </p>
            <p className="mt-12 text-[clamp(2.5rem,5.2vw,5.2rem)] leading-[0.98] tracking-[-0.055em]">
              <span className="block">From the ground up.</span>
              <span className="block text-white/32">Alongside our partners.</span>
              <span className="block text-emerald-300">For the long term.</span>
            </p>
          </motion.div>
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

      <section id="focus" className="scroll-mt-24 border-t border-white/[0.08] bg-[#101211] px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 24 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: '-80px' },
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
                })}
          >
            <div>
              <p className="eyebrow">03 / Focus</p>
              <h2 className="mt-5 max-w-[760px] text-4xl tracking-[-0.06em] md:text-6xl">
                Where we
                <br />
                <span className="text-white/35">invest.</span>
              </h2>
            </div>
            <p className="max-w-[320px] text-sm leading-6 text-white/45">
              Your project first. Then the markets we already work in: real estate, Web3, artificial intelligence, and
              blockchain.
            </p>
          </motion.div>

          <motion.article
            className="mt-14 grid overflow-hidden bg-[#080909] lg:grid-cols-[1.35fr_0.85fr]"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 28 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: '-80px' },
                  transition: { duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const },
                })}
          >
            <figure className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[480px]">
              <img
                src={focusAreas[0].image}
                alt={focusAreas[0].alt}
                className="focus-drift h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080909] via-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#080909]" />
            </figure>
            <div className="flex flex-col justify-end p-8 lg:py-12 lg:pr-12 lg:pl-4">
              <p className="font-mono text-[10px] tracking-[0.18em] text-emerald-300">{focusAreas[0].index}</p>
              <h3 className="mt-6 text-[clamp(2.6rem,4vw,4.2rem)] leading-[0.95] tracking-[-0.05em]">
                {focusAreas[0].title}.
              </h3>
              <p className="mt-6 max-w-[420px] text-base leading-7 text-white/60">{focusAreas[0].text}</p>
            </div>
          </motion.article>

          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {focusAreas.slice(1).map((area, index) => (
              <motion.article
                key={area.title}
                className="focus-card group"
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 32 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, margin: '-60px' },
                      transition: {
                        duration: 0.7,
                        delay: 0.08 * index,
                        ease: [0.22, 1, 0.36, 1] as const,
                      },
                    })}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#080909]">
                  <img
                    src={area.image}
                    alt={area.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-emerald-300">{area.index}</span>
                    <h3 className="mt-3 text-3xl tracking-[-0.045em]">{area.title}</h3>
                  </div>
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-emerald-300 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
                <p className="mt-4 text-sm leading-6 text-white/50 transition-colors duration-500 group-hover:text-white/70">
                  {area.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 border-t border-white/[0.08] px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-12 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">04 / Team</p>
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
              <p className="eyebrow">05 / News</p>
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

      <section id="contacts" aria-label="Contacts" className="scroll-mt-24 border-t border-white/[0.08] bg-[#101211] px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid border-t border-white/10 md:grid-cols-2">
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
            <div className="py-10 md:pl-10">
              <MapPin className="size-4 text-emerald-300" strokeWidth={1.5} />
              <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Location</p>
              <p className="mt-3 text-xl tracking-[-0.03em] text-white/85 sm:text-2xl">Sheikh Zayed Rd - Zaa'beel Second</p>
              <p className="mt-1 text-xl tracking-[-0.03em] text-white/85 sm:text-2xl">Dubai</p>
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
    </>
  )
}
