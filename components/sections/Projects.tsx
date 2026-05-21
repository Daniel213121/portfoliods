'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'
import { ScrollText } from '@/components/ui/ScrollText'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { IconArrowUpRight } from '@/components/ui/Icons'
import { PROJECTS, Project } from '@/lib/data'

/* ── Drag handle ───────────────────────────────────────────────────── */

function DragHandle({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <circle cx="5"  cy="3"  r="1.2" />
      <circle cx="5"  cy="8"  r="1.2" />
      <circle cx="5"  cy="13" r="1.2" />
      <circle cx="11" cy="3"  r="1.2" />
      <circle cx="11" cy="8"  r="1.2" />
      <circle cx="11" cy="13" r="1.2" />
    </svg>
  )
}

/* ── Browser chrome ────────────────────────────────────────────────── */

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-line bg-cream/60 px-3 py-2 flex-shrink-0">
      <span className="h-2 w-2 rounded-full bg-[#E5554D]" />
      <span className="h-2 w-2 rounded-full bg-[#F4BE3F]" />
      <span className="h-2 w-2 rounded-full bg-[#5DC264]" />
      <div className="ml-2 flex-1 rounded-md bg-white border border-line/70 px-2.5 py-1 text-[9.5px] font-mono text-body/80 truncate">
        {url}
      </div>
    </div>
  )
}

/* ── Project mock thumbnails ───────────────────────────────────────── */

function OpalMock() {
  const tiles: [string, string][] = [
    ['#E8D9CB', 'Serum'], ['#D7C6B1', 'Cleanser'], ['#BFA68A', 'Mask'],
    ['#EFE3D2', 'Toner'], ['#C9B393', 'Oil'],      ['#3A2C1F', 'SPF'],
  ]
  return (
    <div className="aspect-[4/3] bg-[#F6F1EA] flex flex-col overflow-hidden">
      <BrowserChrome url="opaledgewellness.vercel.app" />
      <div className="flex-1 grid grid-cols-5 gap-3 p-4 overflow-hidden">
        {/* Left col */}
        <div className="col-span-2 flex flex-col justify-center gap-2">
          <span className="text-[6.5px] font-semibold tracking-[0.18em] uppercase" style={{ color: '#A07555' }}>
            NEW • HYDRATION EDIT
          </span>
          <p className="font-serif italic text-[19px] leading-tight font-normal" style={{ color: '#3A2C1F' }}>
            Skin that feels alive.
          </p>
          <p className="text-[7.5px] leading-relaxed" style={{ color: '#6B5040' }}>
            Curated essentials for your daily skin ritual.
          </p>
          <button
            className="self-start rounded-full px-2.5 py-1 text-[7px] font-semibold text-white"
            style={{ background: '#A07555' }}
          >
            Shop the edit →
          </button>
        </div>
        {/* Right col: 3×2 tile grid */}
        <div className="col-span-3 grid grid-cols-3 grid-rows-2 gap-1.5">
          {tiles.map(([color, label]) => (
            <div
              key={label}
              className="rounded-md p-1.5 flex flex-col items-center justify-between"
              style={{ background: color }}
            >
              <div className="h-6 w-3 rounded-sm" style={{ background: 'rgba(255,255,255,0.6)' }} />
              <span
                className="text-[6.5px] font-semibold mt-1"
                style={{ color: color === '#3A2C1F' ? '#fff' : '#3A2C1F' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function KuromMock() {
  const small: [string, string][] = [
    ['Phone', 'GH₵ 4,800'], ['Watch', 'GH₵ 1,150'],
    ['Drone', 'GH₵ 3,400'], ['Keyboard', 'GH₵ 680'],
  ]
  return (
    <div className="aspect-[4/3] bg-[#0F0F12] text-white flex flex-col overflow-hidden">
      <BrowserChrome url="kurom.vercel.app" />
      <div className="flex-1 grid grid-cols-5 gap-2 p-3 overflow-hidden">
        {/* Left col */}
        <div className="col-span-2 flex flex-col justify-center gap-2 pl-1">
          <span className="text-[7px] font-bold tracking-[0.2em] uppercase" style={{ color: '#E05C1A' }}>
            FLAGSHIP DROP
          </span>
          <p className="font-bold text-[20px] leading-tight">Carry the future.</p>
          <p className="text-[7.5px] leading-relaxed text-white/60">
            Premium gadgets, delivered fast.
          </p>
          <div className="flex gap-1.5 mt-1">
            <button
              className="rounded-full px-2.5 py-1 text-[7px] font-semibold text-white"
              style={{ background: '#E05C1A' }}
            >
              Shop now
            </button>
            <button className="rounded-full border border-white/20 px-2.5 py-1 text-[7px] font-semibold text-white/70">
              Explore
            </button>
          </div>
        </div>
        {/* Right col */}
        <div className="col-span-3 flex flex-col gap-1.5">
          {/* Featured full-width card */}
          <div className="rounded-lg p-2.5 bg-gradient-to-br from-[#2A2A33] to-[#15151A] flex justify-between items-start">
            <div>
              <p className="text-[9px] font-bold text-white">Aero Buds X</p>
              <p className="text-[8px] font-semibold" style={{ color: '#E05C1A' }}>GH₵ 1,290</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-4 w-4 rounded-full border border-white/10" />
              <div className="h-6 w-6 rounded-full border border-white/20" />
            </div>
          </div>
          {/* 2×2 smaller cards */}
          <div className="grid grid-cols-2 gap-1.5 flex-1">
            {small.map(([name, price]) => (
              <div key={name} className="rounded-md p-2 bg-[#17171C] border border-white/5 flex flex-col justify-center">
                <p className="text-[8px] font-semibold text-white/80">{name}</p>
                <p className="text-[7px] text-white/40 mt-0.5">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MinaMock() {
  const services: [string, string, string][] = [
    ['🧹', 'Cleaning', '#FDEBD0'], ['🔧', 'Plumbing', '#D6E4F0'], ['⚡', 'Electric', '#FFF2CC'],
    ['🪴', 'Garden',   '#DCEEDC'], ['🛠️', 'Repair',   '#F4D6D6'], ['🚚', 'Moving',  '#E8E2F4'],
  ]
  return (
    <div className="aspect-[4/3] bg-gradient-to-br from-white to-[#F4F6F2] flex flex-col overflow-hidden">
      <BrowserChrome url="minashauss.vercel.app" />
      {/* Site header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-line/50 bg-white/80 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="h-3.5 w-3.5 rounded-md bg-[#1F5132] flex-shrink-0" />
          <span className="text-[8px] font-bold text-ink">Mina's Haus</span>
        </div>
        <button className="rounded-full bg-[#1F5132] px-2 py-0.5 text-[6.5px] font-semibold text-white">
          Book Now
        </button>
      </div>
      {/* Main content */}
      <div className="flex-1 grid grid-cols-5 gap-3 p-3 overflow-hidden">
        {/* Left col */}
        <div className="col-span-2 flex flex-col justify-center gap-2">
          <span className="text-[6px] font-bold tracking-[0.18em] uppercase" style={{ color: '#1F5132' }}>
            TRUSTED PROS
          </span>
          <p className="text-[12px] font-bold leading-tight text-ink">
            Home help, on demand.
          </p>
          <div className="rounded-md border border-line bg-white shadow-sm p-2 mt-1">
            <p className="text-[6px] font-semibold text-body/60 mb-1.5">Book a service</p>
            <div className="h-1.5 rounded-sm bg-line mb-1" />
            <div className="h-1.5 rounded-sm bg-line w-2/3 mb-2" />
            <div className="h-3 rounded-full w-2/3" style={{ background: '#1F5132' }} />
          </div>
        </div>
        {/* Right col: 3×2 emoji grid */}
        <div className="col-span-3 grid grid-cols-3 grid-rows-2 gap-1.5">
          {services.map(([emoji, name, bg]) => (
            <div
              key={name}
              className="rounded-md p-1.5 flex flex-col items-center justify-center gap-0.5"
              style={{ background: bg }}
            >
              <span className="text-[12px] leading-none">{emoji}</span>
              <span className="text-[6px] font-semibold text-ink/70">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ChezkekeMock() {
  return (
    <div className="aspect-[4/3] bg-[#0A0A0A] flex flex-col overflow-hidden">
      <BrowserChrome url="chezkeke.vercel.app" />
      <div className="relative flex-1 overflow-hidden">
        <Image
          src="/potos/chezkeke-terminal.png"
          alt="Chez Keke POS terminal"
          fill
          className="object-cover object-top"
        />
      </div>
    </div>
  )
}

function MotexizMock() {
  return (
    <div className="aspect-[4/3] bg-[#0F0E13] flex flex-col overflow-hidden">
      <BrowserChrome url="motexiz.vercel.app" />
      <div className="flex-1 flex flex-col items-center justify-center gap-3 p-6">
        <span className="text-[7px] font-bold tracking-[0.22em] uppercase" style={{ color: '#E05C1A' }}>
          YOUR TRUSTED CAR RENTAL
        </span>
        <p className="text-[22px] font-bold text-white leading-tight text-center">Motexiz</p>
        <p className="text-[8.5px] text-white/40 text-center">Preparing your dream cars…</p>
      </div>
    </div>
  )
}

function TourGhanaMock() {
  const destinations = ['Cape Coast', 'Kakum Park', 'Mole Safari', 'Labadi Beach', 'Volta Falls', 'Elmina']
  return (
    <div className="aspect-[4/3] bg-[#1A2F1A] flex flex-col overflow-hidden">
      <BrowserChrome url="tourghana-alpha.vercel.app" />
      <div className="flex-1 flex flex-col items-center justify-center gap-2 px-4">
        <p className="text-[9px] font-bold tracking-[0.16em] uppercase text-[#6BBF84]">Discover Ghana</p>
        <p className="text-[20px] font-bold text-white leading-tight text-center">The Magic of Ghana</p>
        <div className="grid grid-cols-3 gap-1.5 w-full mt-2">
          {destinations.map((d) => (
            <div key={d} className="rounded-md bg-[#2A4A2A]/80 px-1.5 py-1.5 flex items-end">
              <span className="text-[6px] font-semibold text-white/80">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── ProjectCard ───────────────────────────────────────────────────── */

type ProjectCardProps = {
  project: Project
  index: number
  isLast: boolean
  stacking: boolean
  draggable: boolean
  dragging: boolean
  over: boolean
  onDragStart: (e: React.DragEvent) => void
  onDragOver: (e: React.DragEvent) => void
  onDrop: (e: React.DragEvent) => void
  onDragEnd: () => void
}

function ProjectCard({
  project, index, isLast, stacking, draggable,
  dragging, over, onDragStart, onDragOver, onDrop, onDragEnd,
}: ProjectCardProps) {
  const { num, name, featured, url, domain, description, tags, thumbKind } = project

  const stickyStyle = stacking
    ? { position: 'sticky' as const, top: `${88 + index * 32}px` }
    : undefined

  return (
    <Reveal delay={index * 60}>
      <article
        draggable={draggable || undefined}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragEnd={onDragEnd}
        style={stickyStyle}
        className={`proj-card group relative bg-cream
          ${isLast ? '' : 'border-b border-line'}
          ${dragging ? 'opacity-40' : ''}
          ${over ? 'ring-2 ring-burnt/40 ring-offset-2 ring-offset-cream' : ''}
          transition-all`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 md:py-16">

          {/* LEFT: text col */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            {/* Number + badges */}
            <div className="flex items-center gap-3">
              <span className="proj-num font-mono text-[48px] md:text-[64px] font-bold text-ink/15 leading-none transition-colors">
                {num}
              </span>
              {featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-burnt/30 bg-burnt/10 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-burnt">
                  <span className="h-1.5 w-1.5 rounded-full bg-burnt" />
                  Featured
                </span>
              )}
              {draggable && (
                <button
                  type="button"
                  aria-label="Drag to reorder"
                  className="ml-auto h-8 w-8 rounded-md text-body/40 hover:text-burnt hidden md:inline-flex items-center justify-center cursor-grab transition-colors"
                >
                  <DragHandle size={14} />
                </button>
              )}
            </div>

            <h3 className="mt-3 text-[28px] md:text-[36px] font-bold tracking-tight text-ink">
              {name}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-body max-w-[42ch]">
              {description}
            </p>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-full bg-ink text-white text-[11px] font-medium px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="ul-link inline-flex items-center gap-1.5 text-burnt text-[14px] font-semibold"
              >
                Live Site
                <IconArrowUpRight size={15} stroke={2} />
              </a>
              <span className="font-mono text-[12.5px] text-body/70 truncate">{domain}</span>
            </div>
          </div>

          {/* RIGHT: thumbnail */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${name}`}>
              <div className="proj-thumb relative rounded-xl border border-line bg-white overflow-hidden shadow-[0_24px_60px_-32px_rgba(17,17,17,0.18)]">
                {thumbKind === 'opal'      && <OpalMock />}
                {thumbKind === 'kurom'     && <KuromMock />}
                {thumbKind === 'mina'      && <MinaMock />}
                {thumbKind === 'chezkeke'  && <ChezkekeMock />}
                {thumbKind === 'motexiz'   && <MotexizMock />}
                {thumbKind === 'tourghana' && <TourGhanaMock />}
              </div>
            </a>
          </div>

        </div>
      </article>
    </Reveal>
  )
}

/* ── Projects (main export) ────────────────────────────────────────── */

export function Projects({
  stacking = true,
  draggable = true,
}: {
  stacking?: boolean
  draggable?: boolean
}) {
  const [items, setItems] = useState<Project[]>(PROJECTS)
  const [dragIdx, setDragIdx] = useState<number | null>(null)
  const [overIdx, setOverIdx] = useState<number | null>(null)

  const onDragStart = (i: number) => (e: React.DragEvent) => {
    setDragIdx(i)
    e.dataTransfer.effectAllowed = 'move'
  }

  const onDragOver = (i: number) => (e: React.DragEvent) => {
    if (dragIdx === null) return
    e.preventDefault()
    setOverIdx(i)
  }

  const onDrop = (i: number) => (e: React.DragEvent) => {
    e.preventDefault()
    if (dragIdx === null) return
    const next = [...items]
    const [removed] = next.splice(dragIdx, 1)
    next.splice(i, 0, removed)
    setItems(next)
    setDragIdx(null)
    setOverIdx(null)
  }

  const onDragEnd = () => {
    setDragIdx(null)
    setOverIdx(null)
  }

  return (
    <section id="work" className="bg-cream relative">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
        <Reveal>
          <SectionLabel>Selected Work</SectionLabel>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-tightest text-ink leading-[1.05]">
              <ScrollText text="Things I've built." />
            </h2>
            <div className="flex flex-col gap-1">
              <p className="text-[15px] text-body max-w-[36ch]">
                A handful of projects I'm proud to put my name on.
              </p>
              {draggable && (
                <p className="mt-1 flex items-center gap-1.5 text-[12px] text-body/50">
                  <DragHandle size={11} />
                  Drag cards to reorder
                </p>
              )}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20 relative">
          {items.map((p, i) => (
            <ProjectCard
              key={p.num}
              project={p}
              index={i}
              isLast={i === items.length - 1}
              stacking={stacking}
              draggable={draggable}
              dragging={dragIdx === i}
              over={overIdx === i && dragIdx !== i}
              onDragStart={onDragStart(i)}
              onDragOver={onDragOver(i)}
              onDrop={onDrop(i)}
              onDragEnd={onDragEnd}
            />
          ))}
        </div>

        <Reveal>
          <div className="mt-12 md:mt-16 flex justify-center md:justify-start">
            <a
              href="https://github.com/Daniel213121"
              target="_blank"
              rel="noopener noreferrer"
              className="ul-link inline-flex items-center gap-2 text-burnt text-[15px] font-semibold"
            >
              More projects on GitHub
              <IconArrowUpRight size={15} stroke={2} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
