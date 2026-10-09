'use client'

import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Compass,
  Cpu,
  Globe,
  Infinity as InfinityIcon,
  Landmark,
  Layers,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Orbit,
  Palette,
  Scale,
  Target,
  X,
  type LucideIcon,
} from 'lucide-react'

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Focus', href: '#focus' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

const principles: { icon: LucideIcon; num: string; title: string; text: string }[] = [
  { icon: Compass, num: '01', title: 'Curiosity', text: 'Questioning the obvious' },
  { icon: Target, num: '02', title: 'Conviction', text: 'Deciding with clarity' },
  { icon: InfinityIcon, num: '03', title: 'Continuity', text: 'Building what lasts' },
]

const focuses: { icon: LucideIcon; index: string; title: string; text: string }[] = [
  {
    icon: Landmark,
    index: '01',
    title: 'Business',
    text: 'Partnerships and positions built to compound across cycles, not quarters.',
  },
  {
    icon: Cpu,
    index: '02',
    title: 'Technology',
    text: 'Tools and platforms that change how ambitious work actually gets done.',
  },
  {
    icon: Palette,
    index: '03',
    title: 'Culture',
    text: 'Stories, brands, and ideas people choose to stay with.',
  },
]

const team: { icon: LucideIcon; index: string; name: string; role: string; location: string; focus: string }[] = [
  {
    icon: Orbit,
    index: '01',
    name: 'Ethan Goldberg',
    role: 'Founder & CEO',
    location: 'New York',
    focus: 'Vision, capital, and the long view.',
  },
  {
    icon: Target,
    index: '02',
    name: 'Mira Chen',
    role: 'Chief Investment Officer',
    location: 'London',
    focus: 'Where capital should compound.',
  },
  {
    icon: Compass,
    index: '03',
    name: 'Julian Adeyemi',
    role: 'Head of Strategy',
    location: 'New York',
    focus: 'Clarity inside complex decisions.',
  },
  {
    icon: Cpu,
    index: '04',
    name: 'Sofia Alvarez',
    role: 'Partner, Technology',
    location: 'San Francisco',
    focus: 'Products and systems that endure.',
  },
  {
    icon: Palette,
    index: '05',
    name: 'Noah Patel',
    role: 'Partner, Culture',
    location: 'Los Angeles',
    focus: 'Ideas with cultural staying power.',
  },
  {
    icon: Scale,
    index: '06',
    name: 'Amira Hassan',
    role: 'General Counsel',
    location: 'New York',
    focus: 'Judgment that protects conviction.',
  },
  {
    icon: Layers,
    index: '07',
    name: 'Leo Bergström',
    role: 'Head of Operations',
    location: 'Stockholm',
    focus: 'The structure behind every move.',
  },
]

function Mark() {
  return (
    <div className="flex items-center gap-3" aria-label="Capital Holding home">
      <svg viewBox="0 0 36 36" className="size-9" fill="none" aria-hidden="true">
        <path d="M27.5 10.5a11.5 11.5 0 1 0 0 15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 14.5a6.5 6.5 0 1 0 0 7" stroke="var(--emerald)" strokeWidth="1.5" />
        <path d="M27.5 10.5H32v4.5M27.5 25.5H32V21" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-[11px] font-semibold tracking-[0.24em] text-[#f5f5f0]">
        CAPITAL
        <br />
        HOLDING
      </span>
    </div>
  )
}

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex size-11 shrink-0 items-center justify-center border border-white/15 text-emerald-300 transition-colors group-hover:border-emerald-400 group-hover:text-emerald-200">
      <Icon className="size-4" strokeWidth={1.5} />
    </span>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V24H.22V8.5zM8.34 8.5h4.37v2.12h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.76h-4.56v-7.77c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.02-2.98 4.1V24H8.34V8.5z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
        est. 2024 / 01
      </div>
    </div>
  )
}

export default function CapitalHoldingPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  function onContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()
    const subject = encodeURIComponent(`Inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:hello@capitalholding.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080909] text-[#f5f5f0]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#080909]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
          <a href="#overview">
            <Mark />
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] uppercase tracking-[0.16em] text-white/50 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/45">
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(16,185,129,.65)]" />
              Available for select opportunities
            </span>
            <a
              href="#contact"
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
            <span className="h-px w-8 bg-emerald-400" /> Independent thinking. Long-term vision.
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
            className="mt-9 max-w-[470px] text-base leading-7 text-[#969b97]"
          >
            An independent, forward-thinking venture built around strategic perspectives, collective intelligence, and a
            commitment to exploring meaningful opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <a
              href="#philosophy"
              className="group flex items-center gap-4 bg-[#f5f5f0] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#0a0c0b] transition-colors hover:bg-emerald-300"
            >
              Explore our vision
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
            <a
              href="#team"
              className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/65 hover:text-white"
            >
              Meet the team <MoveUpRight className="size-3" />
            </a>
          </motion.div>
          <p className="mt-16 font-mono text-[9px] uppercase tracking-[0.24em] text-white/30">
            Founder-led <span className="px-2 text-emerald-400">·</span> Collaboration-driven
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
        <div className="pointer-events-none absolute bottom-12 left-6 hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/20 lg:block">
          40° 43&apos; 48.4&quot; N <span className="mx-3">/</span> 74° 00&apos; 21.5&quot; W
        </div>
      </section>

      <section id="philosophy" className="scroll-mt-24 border-t border-white/[0.08] bg-[#101211] px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">01 / Philosophy</p>
            <p className="mt-8 max-w-[220px] text-sm leading-6 text-white/45">
              We look past the immediate to build for what comes next.
            </p>
          </div>
          <div>
            <h2 className="max-w-[780px] text-[clamp(2.3rem,5vw,5.2rem)] leading-[.98] tracking-[-0.065em]">
              The best opportunities live <span className="text-white/35">between disciplines.</span>
            </h2>
            <p className="mt-10 max-w-[580px] text-lg leading-8 text-[#969b97]">
              Capital Holding partners with exceptional people and ideas at the intersection of business, technology, and
              culture. We bring clarity to complexity and conviction to the long view.
            </p>
            <div className="mt-14 grid max-w-[720px] gap-8 border-t border-white/10 pt-7 sm:grid-cols-3">
              {principles.map(({ icon: Icon, num, title, text }) => (
                <div key={num} className="group">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-emerald-300">{num}</span>
                    <Icon className="size-4 text-white/35 transition-colors group-hover:text-emerald-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-sm">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/40">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="scroll-mt-24 px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">02 / Focus</p>
              <h2 className="mt-5 max-w-[640px] text-4xl tracking-[-0.06em] md:text-6xl">
                Three fields.
                <br />
                <span className="text-white/35">One standard.</span>
              </h2>
            </div>
            <p className="max-w-[280px] text-sm leading-6 text-white/45">
              We stay close to the work, and only where a long view can still change the outcome.
            </p>
          </div>
          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
            {focuses.map(({ icon: Icon, index, title, text }) => (
              <article key={title} className="group bg-[#080909] p-8 lg:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-emerald-300">{index}</span>
                  <span className="flex size-11 items-center justify-center border border-white/15 text-white/70 transition-colors group-hover:border-emerald-400 group-hover:text-emerald-300">
                    <Icon className="size-4" strokeWidth={1.5} />
                  </span>
                </div>
                <h3 className="mt-16 text-3xl tracking-[-0.05em]">{title}</h3>
                <p className="mt-4 max-w-[280px] text-sm leading-6 text-white/45">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-24 border-t border-white/[0.08] bg-[#101211] px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow">03 / Leadership</p>
          <div className="mt-12 grid items-end gap-12 lg:grid-cols-[1fr_.8fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">Founder &amp; CEO / Investor</p>
              <h2 className="mt-5 text-[clamp(3.4rem,7vw,7rem)] leading-[.9] tracking-[-0.08em]">
                Ethan
                <br />
                <span className="text-white/35">Goldberg.</span>
              </h2>
            </div>
            <div className="border-l border-emerald-400/40 pl-6 text-base leading-7 text-[#969b97]">
              An independent perspective, grounded in the belief that meaningful progress comes from combining strategic
              patience with decisive action.
              <p className="mt-7 text-xs uppercase tracking-[0.14em] text-white/55">
                New York <span className="px-2 text-emerald-400">·</span> Global perspective
              </p>
            </div>
          </div>
          <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-3">
            {[
              { icon: Orbit, label: 'Founder-led', detail: 'One point of view, held in public.' },
              { icon: MapPin, label: 'New York', detail: 'Based here. Working everywhere.' },
              { icon: Globe, label: 'Global', detail: 'Opportunities without a fixed map.' },
            ].map(({ icon: Icon, label, detail }) => (
              <div key={label} className="flex items-start gap-4 bg-[#101211] px-6 py-7">
                <Icon className="mt-0.5 size-4 text-emerald-300" strokeWidth={1.5} />
                <div>
                  <p className="text-sm">{label}</p>
                  <p className="mt-1 text-xs leading-5 text-white/40">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 px-6 py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-12 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">04 / Team</p>
              <h2 className="mt-5 text-4xl tracking-[-0.06em] md:text-6xl">
                Seven minds.
                <br />
                <span className="text-white/35">One direction.</span>
              </h2>
            </div>
            <p className="max-w-[280px] text-sm leading-6 text-white/45">
              A close-knit team bringing distinct expertise, shared standards, and a bias toward action.
            </p>
          </div>
          <div>
            {team.map(({ icon, index, name, role, location, focus }) => (
              <article key={name} className="group border-b border-white/10 py-8 md:py-10">
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-emerald-300">{index}</p>
                    <h3 className="mt-3 text-3xl tracking-[-0.05em] md:text-5xl">{name}</h3>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-white/50">{role}</p>
                  </div>
                  <IconBadge icon={icon} />
                </div>
                <div className="mt-6 flex flex-col gap-2 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
                  <p>{focus}</p>
                  <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                    <MapPin className="size-3 text-emerald-400/80" strokeWidth={1.5} />
                    {location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-white/[0.08] bg-[#101211] px-6 py-28 lg:px-12 lg:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div>
            <p className="eyebrow">05 / Contact</p>
            <h2 className="mt-10 max-w-[640px] text-[clamp(3.2rem,7vw,6.4rem)] leading-[.9] tracking-[-0.085em]">
              Let&apos;s make
              <br />
              <span className="text-emerald-300">something matter.</span>
            </h2>
            <a
              href="mailto:hello@capitalholding.com"
              className="group mt-12 inline-flex items-center gap-4 border-b border-white/25 pb-3 text-sm text-white/70 transition-colors hover:border-emerald-300 hover:text-emerald-300"
            >
              hello@capitalholding.com
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <div className="mt-14 grid gap-8 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-emerald-300" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">Write</p>
                  <p className="mt-1 text-sm text-white/70">hello@capitalholding.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-emerald-300" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">Visit</p>
                  <p className="mt-1 text-sm text-white/70">New York, New York</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 size-4 text-emerald-300" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">Follow</p>
                  <div className="mt-2 flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/capital-holding"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Capital Holding on LinkedIn"
                      className="flex size-9 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-emerald-400 hover:text-emerald-300"
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href="https://x.com/capitalholding"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Capital Holding on X"
                      className="flex size-9 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-emerald-400 hover:text-emerald-300"
                    >
                      <XIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onContactSubmit} className="border border-white/10 bg-[#080909] p-7 sm:p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">Start a conversation</p>
            <div className="mt-8 grid gap-6">
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">Name</span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full border-b border-white/15 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-white/25 focus:border-emerald-400"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full border-b border-white/15 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-white/25 focus:border-emerald-400"
                  placeholder="you@company.com"
                />
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none border-b border-white/15 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-white/25 focus:border-emerald-400"
                  placeholder="What should we look at together?"
                />
              </label>
            </div>
            <button
              type="submit"
              className="group mt-8 flex items-center gap-3 bg-[#f5f5f0] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#0a0c0b] transition-colors hover:bg-emerald-300"
            >
              Send a note
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <Mark />
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
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/capital-holding"
                target="_blank"
                rel="noreferrer"
                aria-label="Capital Holding on LinkedIn"
                className="flex size-9 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-emerald-400 hover:text-emerald-300"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://x.com/capitalholding"
                target="_blank"
                rel="noreferrer"
                aria-label="Capital Holding on X"
                className="flex size-9 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-emerald-400 hover:text-emerald-300"
              >
                <XIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
              © 2026 Capital Holding. All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">Built for the long view</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
