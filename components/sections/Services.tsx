'use client'

import { useRef, useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { ScrollText } from '@/components/ui/ScrollText'
import { SectionLabel } from '@/components/ui/SectionLabel'
import {
  IconArrowRight, IconArrowUpRight,
  IconLanding, IconCommerce, IconBuilding, IconRefresh, IconSearch, IconUser,
} from '@/components/ui/Icons'
import { SERVICES } from '@/lib/data'

/* ── ServiceCard ───────────────────────────────────────────────────── */

type ServiceCardProps = {
  glyph: React.ReactNode
  title: string
  description: string
  num: number
  bordered?: boolean
}

function ServiceCard({ glyph, title, description, num, bordered }: ServiceCardProps) {
  return (
    <div
      className={`svc-card group relative h-full bg-soft hover:bg-white p-7 md:p-9
        transition-colors duration-500 cursor-default
        ${bordered ? 'border border-line rounded-2xl overflow-hidden' : ''}`}
    >
      {/* Top row: icon + number */}
      <div className="flex items-center justify-between">
        <span className="svc-icon text-ink/60 transition-colors duration-300">{glyph}</span>
        <span className="font-mono text-[11px] text-body/50">
          {String(num).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-8 text-[20px] md:text-[22px] font-bold text-ink tracking-tight">
        {title}
      </h3>
      <p className="mt-2.5 text-[14px] leading-[1.65] text-body max-w-[28ch]">
        {description}
      </p>

      {/* Bottom row */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-[12px] text-body/60">Custom build</span>
        <span className="svc-arrow text-burnt opacity-0 -translate-x-2 transition-all duration-300">
          <IconArrowUpRight size={16} stroke={2} />
        </span>
      </div>
    </div>
  )
}

/* ── ServiceGrid ───────────────────────────────────────────────────── */

function ServiceGrid({ iconMap }: { iconMap: Record<string, React.ComponentType<{ size?: number; stroke?: number; className?: string }>> }) {
  return (
    <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
      {SERVICES.map((s, i) => {
        const Glyph = iconMap[s.icon]
        return (
          <Reveal key={s.title} delay={i * 40}>
            <ServiceCard
              glyph={<Glyph />}
              title={s.title}
              description={s.description}
              num={i + 1}
            />
          </Reveal>
        )
      })}
    </div>
  )
}

/* ── ServiceHorizontal ─────────────────────────────────────────────── */

function ServiceHorizontal({ iconMap }: { iconMap: Record<string, React.ComponentType<{ size?: number; stroke?: number; className?: string }>> }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const onScroll = () => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? el.scrollLeft / max : 0)
  }

  const nudge = (dir: number) => () => {
    trackRef.current?.scrollBy({
      left: dir * (trackRef.current.clientWidth * 0.8),
      behavior: 'smooth',
    })
  }

  const currentIdx = Math.round(progress * (SERVICES.length - 1))
  const currentStr = String(currentIdx + 1).padStart(2, '0')
  const totalStr = String(SERVICES.length).padStart(2, '0')

  return (
    <>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-6 md:-mx-10 lg:-mx-14 px-6 md:px-10 lg:px-14 mt-14 md:mt-20"
      >
        <div className="flex gap-5 pb-2 w-max">
          {SERVICES.map((s, i) => {
            const Glyph = iconMap[s.icon]
            return (
              <div key={s.title} className="snap-start shrink-0 w-[78vw] sm:w-[360px] md:w-[400px]">
                <ServiceCard
                  glyph={<Glyph />}
                  title={s.title}
                  description={s.description}
                  num={i + 1}
                  bordered
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-[1280px] mx-auto mt-6 flex items-center gap-4">
        <button
          type="button"
          aria-label="Previous"
          onClick={nudge(-1)}
          className="rounded-full border border-line h-10 w-10 flex items-center justify-center hover:border-burnt hover:text-burnt transition-colors shrink-0"
        >
          <IconArrowRight size={16} className="rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={nudge(1)}
          className="rounded-full border border-line h-10 w-10 flex items-center justify-center hover:border-burnt hover:text-burnt transition-colors shrink-0"
        >
          <IconArrowRight size={16} />
        </button>
        <div className="flex-1 h-[2px] bg-line rounded-full overflow-hidden">
          <div
            className="bg-burnt h-full rounded-full transition-[width] duration-150"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
        <span className="text-[11px] font-mono text-body/70 tabular-nums shrink-0">
          {currentStr} / {totalStr}
        </span>
      </div>
    </>
  )
}

/* ── Services (main export) ────────────────────────────────────────── */

export function Services({ horizontal = false }: { horizontal?: boolean }) {
  const iconMap = {
    landing:  IconLanding,
    commerce: IconCommerce,
    building: IconBuilding,
    refresh:  IconRefresh,
    search:   IconSearch,
    user:     IconUser,
  }

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="bg-white relative">
      <div className={`mx-auto ${horizontal ? '' : 'max-w-[1280px]'} px-6 md:px-10 lg:px-14 py-24 md:py-32`}>
        <div className={horizontal ? 'max-w-[1280px] mx-auto' : ''}>
          <Reveal>
            <SectionLabel>What We Build</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="text-[40px] sm:text-[52px] md:text-[68px] font-bold tracking-tightest text-ink leading-[1.02]">
                <ScrollText text="Services." />
              </h2>
              <p className="max-w-sm text-[15px] leading-[1.7] text-body">
                Custom-built solutions — from a single landing page to a full storefront with admin tooling.
              </p>
            </div>
          </Reveal>
        </div>

        {horizontal
          ? <ServiceHorizontal iconMap={iconMap} />
          : <ServiceGrid iconMap={iconMap} />
        }

        <div className={horizontal ? 'max-w-[1280px] mx-auto' : ''}>
          <Reveal>
            <div className="mt-14 md:mt-20 rounded-2xl border border-line bg-cream/60 px-6 md:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <p className="text-[14px] text-body">Not sure which one you need?</p>
                <p className="mt-1 text-[18px] md:text-[22px] font-bold text-ink">
                  Let's scope it together — first call is on us.
                </p>
              </div>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-burnt text-white text-[14px] font-semibold px-5 py-3 hover:bg-burnt-dark transition-colors"
              >
                Start a project
                <IconArrowRight size={16} stroke={2} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
