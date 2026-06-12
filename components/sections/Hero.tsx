'use client'

import { useState, useEffect, useRef } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { IconArrowRight, IconMapPin } from '@/components/ui/Icons'

const ROTATING_VERBS = ['convert.', 'ship.', 'perform.', 'scale.', 'delight.']

function CyclingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setI((v) => (v + 1) % words.length)
        setAnimating(false)
      }, 380)
    }, 2600)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words.length])

  const longest = words.reduce((a, b) => (a.length > b.length ? a : b))

  return (
    <span
      className="relative inline-block align-baseline"
      style={{ minWidth: `${longest.length * 0.52}em` }}
    >
      <span aria-hidden className="invisible italic font-serif font-normal">
        {longest}
      </span>
      <span
        key={i}
        className={`absolute left-0 top-0 italic font-serif font-normal text-burnt
          transition-all duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          ${animating ? 'opacity-0 -translate-y-3 blur-[2px]' : 'opacity-100 translate-y-0 blur-0'}`}
      >
        {words[i]}
      </span>
    </span>
  )
}

function CodeLine({
  n,
  indent = 0,
  children,
}: {
  n: number
  indent?: number
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <span className="w-7 select-none text-right pr-3 text-body/40">{n}</span>
      <span style={{ paddingLeft: `${indent * 16}px` }}>{children}</span>
    </div>
  )
}

function CodeWindow() {
  return (
    <div className="relative">
      {/* Decorative left border line */}
      <div className="absolute -left-6 md:-left-10 top-6 bottom-6 w-px bg-burnt/60 hidden lg:block" />
      {/* Dot grid decoration */}
      <div className="absolute -right-3 -top-3 hidden md:grid grid-cols-5 gap-1.5 opacity-70">
        {Array.from({ length: 25 }).map((_, idx) => (
          <span key={idx} className="h-1 w-1 rounded-full bg-ink/15" />
        ))}
      </div>
      {/* Main card */}
      <div className="relative rounded-xl border border-line bg-white shadow-[0_24px_70px_-30px_rgba(17,17,17,0.18),0_4px_14px_-6px_rgba(17,17,17,0.05)] overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-line bg-cream/60 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E5554D]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F4BE3F]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#5DC264]" />
          </div>
          <div className="text-[11px] font-mono text-body">~/daniel-sackitey/portfolio</div>
          <div className="w-10" />
        </div>
        {/* Code body */}
        <div className="px-5 md:px-6 py-6 font-mono text-[12.5px] leading-[1.85] text-ink/85">
          <CodeLine n={1}>
            <span className="text-[#9B8FAF]">{'// hello.ts'}</span>
          </CodeLine>
          <CodeLine n={2}>
            <span className="text-[#C24A0F]">const</span>{' developer = {'}
          </CodeLine>
          <CodeLine n={3} indent={1}>
            {'name: '}<span className="text-[#5DC264]">'Daniel'</span>,
          </CodeLine>
          <CodeLine n={4} indent={1}>
            {'role: '}<span className="text-[#5DC264]">'Full-Stack Developer'</span>,
          </CodeLine>
          <CodeLine n={5} indent={1}>
            {'location: '}<span className="text-[#5DC264]">'Accra, Ghana 🇬🇭'</span>,
          </CodeLine>
          <CodeLine n={6} indent={1}>
            {'stack: ['}<span className="text-[#5DC264]">'Next.js'</span>{", 'TS', 'Node'],"}
          </CodeLine>
          <CodeLine n={7} indent={1}>
            {'mission: '}<span className="text-burnt font-semibold">'Websites that convert.'</span>,
          </CodeLine>
          <CodeLine n={8} indent={1}>
            {'available: '}<span className="text-[#C24A0F]">true</span>,
          </CodeLine>
          <CodeLine n={9}>{'};'}</CodeLine>
          <CodeLine n={10}>&nbsp;</CodeLine>
          <CodeLine n={11}>
            {'> ship(developer);'}<span className="caret text-burnt ml-1">▍</span>
          </CodeLine>
        </div>
        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-line bg-cream/60 px-4 py-2 text-[10.5px] font-mono text-body">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5DC264]" />
            online
          </div>
          <div>TypeScript · UTF-8</div>
        </div>
      </div>
      {/* Location pill */}
      <div className="absolute -bottom-5 -left-4 md:-bottom-6 md:-left-6 rounded-full bg-ink text-white text-[11px] font-medium px-4 py-2 shadow-lg flex items-center gap-2">
        <IconMapPin size={13} className="text-burnt" />Accra, Ghana
      </div>
    </div>
  )
}

function TechMarquee() {
  const items = [
    'Next.js', 'TypeScript', 'neon', 'Tailwind CSS', 'Prisma', 'Clerk', 'recharts', 'OpenAI',
    'Prisma', 'sonner', 'zustand', 'bcryptjs', 'imagekit', 'next-auth', 'zod', 'Framer Motion', 'clsx', 'uuid', 'jsonwebtoken', 'Vercel', 'Supabase', 'Stripe', 'Resend', 'tRPC', 'shadcn/ui',
  ]

  return (
    <div className="relative border-t border-line bg-white py-5 overflow-hidden">
      <div
        className="flex items-center gap-8 px-4 drift no-scrollbar"
        style={{ width: 'max-content' }}
      >
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-[13px] font-medium text-body whitespace-nowrap"
          >
            <span className="h-1 w-1 rounded-full bg-burnt/70" />
            {t}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
    </div>
  )
}

function Mousetrail() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = ref.current
    if (!host) return
    if (window.matchMedia('(hover: none), (max-width: 900px)').matches) return

    const symbols = ['{', '}', '/>', '⟶', '#', '$', '*', '⌘', '+']
    let last = 0
    let idx = 0

    const onMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - last < 55) return
      if (document.body.dataset.mousetrail === 'off') return
      last = now

      const rect = host.getBoundingClientRect()
      const span = document.createElement('span')
      span.className = 'mt-glyph'
      span.textContent = symbols[idx++ % symbols.length]
      span.style.left = `${e.clientX - rect.left}px`
      span.style.top = `${e.clientY - rect.top}px`
      span.style.setProperty('--tilt', `${Math.random() * 30 - 15}deg`)
      host.appendChild(span)
      setTimeout(() => span.remove(), 900)
    }

    const section = host.closest('section')
    section?.addEventListener('mousemove', onMove)
    return () => section?.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      className="mousetrail absolute inset-0 pointer-events-none z-0"
      aria-hidden
    />
  )
}

export function Hero() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute left-6 md:left-10 lg:left-14 top-0 bottom-0 w-px bg-line pointer-events-none hidden md:block" />
      <div className="absolute right-6 md:right-10 lg:right-14 top-0 bottom-0 w-px bg-line pointer-events-none hidden md:block" />
      <Mousetrail />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14 pt-14 md:pt-20 pb-12 md:pb-16 min-h-[calc(100vh-72px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* LEFT col */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-3 py-1.5 text-[12px] font-medium text-body">
                <span className="relative flex h-2 w-2">
                  <span className="pulse-dot h-full w-full rounded-full bg-burnt" />
                </span>
                Available for freelance
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 text-[44px] leading-[1.02] sm:text-[56px] md:text-[68px] lg:text-[84px] font-bold tracking-tightest text-ink">
                Full-Stack Developer.
                <span className="block">
                  Websites that <CyclingWord words={ROTATING_VERBS} />
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-[17px] md:text-[18px] leading-[1.7] text-body">
                I'm Daniel — I build fast, modern web products for businesses and startups. Based in Accra, Ghana.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  onClick={scrollTo('work')}
                  className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-burnt text-white text-[14px] font-semibold px-5 py-3 hover:bg-burnt-dark transition-colors"
                >
                  View My Work
                  <IconArrowRight
                    size={16}
                    stroke={2}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  onClick={scrollTo('contact')}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-ink text-ink text-[14px] font-semibold px-5 py-3 hover:bg-ink hover:text-white transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </Reveal>
          </div>
          {/* RIGHT col */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={200}>
              <CodeWindow />
            </Reveal>
          </div>
        </div>
      </div>
      <TechMarquee />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-line" />
    </section>
  )
}
