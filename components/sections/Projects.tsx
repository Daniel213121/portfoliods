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
  return (
    <div className="aspect-[4/3] bg-[#F5F0E8] flex flex-col overflow-hidden">
      <BrowserChrome url="opaledgewellness.vercel.app" />

      {/* Announcement ticker */}
      <div className="flex items-center gap-4 bg-[#2B4A2E] px-3 py-1 overflow-hidden flex-shrink-0">
        {['NEW ARRIVALS — COSMETIC PEELS & SERUMS', 'CLEAN. EFFECTIVE. LUXE.', 'FREE SHIPPING OVER $75'].map((t) => (
          <span key={t} className="text-[6px] font-semibold tracking-[0.14em] text-white/90 whitespace-nowrap">
            {t} &nbsp;·&nbsp;
          </span>
        ))}
      </div>

      {/* Nav bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#E8E2D8] bg-[#F5F0E8] flex-shrink-0">
        <div className="flex items-center gap-1">
          <div className="h-3.5 w-3.5 rounded-full border border-[#B8935A]" />
          <span className="text-[7px] font-semibold tracking-wide" style={{ color: '#1C1C1C' }}>Opal Edge</span>
        </div>
        <div className="flex items-center gap-3">
          {['SHOP', 'ABOUT', 'BLOG'].map((n) => (
            <span key={n} className="text-[6px] font-medium tracking-widest" style={{ color: '#4A4A4A' }}>{n}</span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-3 w-3 rounded-full bg-[#1C1C1C]/10" />
          ))}
        </div>
      </div>

      {/* Hero split */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: product image area */}
        <div className="w-[52%] bg-[#E8E2F0] flex items-end justify-center overflow-hidden relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E0D8EE] to-[#C8C0DC]" />
          <div
            className="relative z-10 w-10 rounded-t-full"
            style={{
              height: '88%',
              background: 'linear-gradient(160deg, #5A5080 0%, #3D3560 60%, #2A2445 100%)',
            }}
          >
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <div className="text-[5px] font-light text-white/70 italic">the cleanser</div>
              <div className="text-[4.5px] text-white/50 mt-0.5">80 ml / 2.7 fl oz</div>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="flex-1 flex flex-col justify-center px-4 py-3 gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#2B4A2E]" />
            <span className="text-[5.5px] font-semibold tracking-[0.18em] uppercase" style={{ color: '#2B4A2E' }}>
              NEW SEASON EDIT · SPRING '26
            </span>
          </div>

          <div className="text-[11px] font-bold leading-[1.2]" style={{ color: '#1C1C1C' }}>
            Your skin deserves{' '}
            <span className="italic font-serif font-normal" style={{ color: '#B8935A' }}>
              the edit.
            </span>
          </div>

          <p className="text-[6px] leading-relaxed" style={{ color: '#5A5A5A' }}>
            Curated skincare &amp; wellness essentials — formulated with clean actives.
          </p>

          <div className="flex items-center gap-2 mt-1">
            <button className="rounded-full px-2.5 py-1 text-[6px] font-bold tracking-widest text-white"
                    style={{ background: '#1C1C1C' }}>
              SHOP NOW
            </button>
            <button className="rounded-full border px-2.5 py-1 text-[6px] font-bold tracking-widest"
                    style={{ borderColor: '#1C1C1C', color: '#1C1C1C' }}>
              EXPLORE
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 mt-2 pt-2 border-t border-[#E8E2D8]">
            {[['12', 'CATEGORIES'], ['240+', 'PRODUCTS'], ['4.9', 'AVG. RATING']].map(([v, l]) => (
              <div key={l}>
                <div className="text-[9px] font-bold" style={{ color: '#1C1C1C' }}>{v}</div>
                <div className="text-[5px] tracking-[0.1em]" style={{ color: '#8A8A8A' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function KuromMock() {
  const categories = ['Speakers', 'Watch', 'Earbuds', 'Mouse', 'Decoration', 'Headphones']
  return (
    <div className="aspect-[4/3] bg-white flex flex-col overflow-hidden">
      <BrowserChrome url="kurom.vercel.app" />

      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100 flex-shrink-0">
        <div className="flex items-center gap-0.5">
          <span className="text-[9px] font-bold" style={{ color: '#1C1C1C' }}>Kurom</span>
          <span className="text-[9px] font-bold" style={{ color: '#3CB043' }}>.</span>
        </div>
        <div className="flex items-center gap-3">
          {['Home', 'Shop', 'About'].map((n) => (
            <span key={n} className="text-[6px]" style={{ color: '#444' }}>{n}</span>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <div className="rounded-full bg-gray-100 px-2 py-0.5 text-[5.5px] text-gray-400 flex items-center gap-1">
            <span>🔍</span> Search products
          </div>
          <div className="rounded-full px-2 py-0.5 text-[6px] font-semibold text-white" style={{ background: '#7B5CF5' }}>
            Login
          </div>
        </div>
      </div>

      {/* Hero: large left card + two right cards */}
      <div className="flex flex-1 gap-2 p-2.5 overflow-hidden">
        {/* Main hero card — mint green */}
        <div className="flex-1 rounded-xl p-3 flex flex-col justify-between overflow-hidden relative" style={{ background: '#C5F0C0' }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-1 self-start rounded-full px-1.5 py-0.5" style={{ background: '#3CB043' }}>
            <span className="text-[5.5px] font-bold text-white">NEWS</span>
            <span className="text-[5.5px] text-white/80">Free Shipping on Orders Above $50!</span>
          </div>

          <div>
            <p className="text-[13px] font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Gadgets you'll{' '}
              <span style={{ color: '#3CB043' }}>love.</span>
            </p>
            <p className="text-[13px] font-bold leading-tight" style={{ color: '#2A2A2A' }}>
              Prices you'll{' '}
              <span style={{ color: '#3CB043' }}>trust.</span>
            </p>
            <p className="text-[6px] mt-1" style={{ color: '#555' }}>Starts from</p>
            <p className="text-[10px] font-bold" style={{ color: '#1C1C1C' }}>¢4.90</p>
          </div>

          <button className="self-start rounded-md px-2.5 py-1 text-[6px] font-bold tracking-widest text-white"
                  style={{ background: '#1C1C1C' }}>
            LEARN MORE
          </button>

          {/* Decorative circle for person */}
          <div className="absolute right-2 bottom-0 w-14 h-20 rounded-t-full"
               style={{ background: 'rgba(100,200,80,0.3)' }} />
        </div>

        {/* Right cards */}
        <div className="flex flex-col gap-2 w-[38%]">
          {/* Best products — peach */}
          <div className="flex-1 rounded-xl p-3 flex items-center justify-between overflow-hidden" style={{ background: '#F5DFA0' }}>
            <div>
              <p className="text-[9px] font-bold leading-tight" style={{ color: '#1C1C1C' }}>Best<br/>products</p>
              <p className="text-[6px] mt-1" style={{ color: '#555' }}>View more →</p>
            </div>
            <div className="w-10 h-8 rounded-lg bg-white/60 flex items-center justify-center">
              <span className="text-[14px]">🎧</span>
            </div>
          </div>
          {/* 20% discounts — blue */}
          <div className="flex-1 rounded-xl p-3 flex items-center justify-between overflow-hidden" style={{ background: '#B8CCF0' }}>
            <div>
              <p className="text-[9px] font-bold leading-tight" style={{ color: '#1C1C1C' }}>20%<br/>discounts</p>
              <p className="text-[6px] mt-1" style={{ color: '#555' }}>View more →</p>
            </div>
            <div className="w-10 h-8 rounded-lg bg-white/60 flex items-center justify-center">
              <span className="text-[14px]">⌚</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex items-center gap-1.5 px-3 py-2 overflow-hidden flex-shrink-0 border-t border-gray-100">
        {categories.map((c) => (
          <span key={c} className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[5.5px] font-medium whitespace-nowrap"
                style={{ color: '#444' }}>{c}</span>
        ))}
      </div>
    </div>
  )
}

function MinaMock() {
  const pills = ['Cleaning', 'Laundry', 'Electrical', 'Plumbing', 'Facility Works', 'Solar']
  const navy = '#162040'
  const blue = '#4A7FB5'
  const navBg = '#B8D8EC'

  return (
    <div className="aspect-[4/3] bg-white flex flex-col overflow-hidden">
      <BrowserChrome url="minashauss.com" />

      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2 flex-shrink-0" style={{ background: navBg }}>
        <div className="flex items-center gap-1.5">
          {/* Mountain icon */}
          <svg width="14" height="10" viewBox="0 0 20 14" fill="none">
            <path d="M2 13L8 4L13 9L16 5L19 13" stroke="#3CB043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <span className="text-[7.5px] font-bold" style={{ color: navy }}>
              Mina's <span style={{ color: blue }}>Haus</span>
            </span>
            <div className="text-[4.5px] tracking-[0.12em]" style={{ color: '#5A7A9A' }}>CLEAN · CARE · CONNECT</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {['Services', 'Why us', 'Process', 'Contact'].map((n) => (
            <span key={n} className="text-[5.5px]" style={{ color: navy }}>{n}</span>
          ))}
        </div>
        <button className="rounded-full px-2.5 py-1 text-[6px] font-semibold text-white" style={{ background: navy }}>
          Get started
        </button>
      </div>

      {/* Hero split */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: text */}
        <div className="flex-1 flex flex-col justify-center px-5 py-4 gap-2 bg-white" style={{ minWidth: 0 }}>
          {/* Badge */}
          <div className="self-start flex items-center gap-1 rounded-full border border-gray-300 px-2 py-0.5">
            <span className="text-[6px]" style={{ color: navy }}>✓</span>
            <span className="text-[6px]" style={{ color: navy }}>Verified &amp; insured professionals</span>
          </div>

          {/* Heading */}
          <div className="text-[12px] font-bold leading-[1.25]" style={{ color: navy }}>
            Your complete
            <span className="block italic font-serif font-normal" style={{ color: blue }}>
              home &amp; business
            </span>
            service partner.
          </div>

          {/* Subtext */}
          <p className="text-[6px] leading-relaxed" style={{ color: '#5A5A6A' }}>
            One verified team for every need — booked in minutes, handled by professionals, guaranteed in writing.
          </p>

          {/* Service pills */}
          <div className="flex flex-wrap gap-1">
            {pills.map((p) => (
              <span key={p} className="flex items-center gap-0.5 rounded-full border border-gray-300 px-1.5 py-0.5 text-[5.5px]"
                    style={{ color: navy }}>
                <span className="h-1 w-1 rounded-full flex-shrink-0" style={{ background: navy }} />
                {p}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-2 mt-1">
            <button className="rounded-full px-3 py-1 text-[6px] font-bold text-white" style={{ background: navy }}>
              Book a service
            </button>
            <button className="rounded-full border px-3 py-1 text-[6px] font-bold" style={{ borderColor: navy, color: navy }}>
              Learn more
            </button>
          </div>
        </div>

        {/* Right: pro photo area */}
        <div className="w-[42%] flex-shrink-0 flex items-center justify-center overflow-hidden"
             style={{ background: 'linear-gradient(135deg, #E8F0F8 0%, #D0E4F4 100%)' }}>
          {/* Silhouette stand-in */}
          <div className="relative flex flex-col items-center justify-end h-full w-full pb-0">
            {/* Apron shape */}
            <div className="absolute bottom-0 w-16 h-24 rounded-t-full" style={{ background: '#2B6CB0' }} />
            {/* Head */}
            <div className="absolute bottom-16 w-10 h-10 rounded-full" style={{ background: '#C68B5A' }} />
            {/* MH badge */}
            <div className="absolute bottom-6 right-4 h-6 w-6 rounded-full border-2 border-white flex items-center justify-center"
                 style={{ background: '#2B6CB0' }}>
              <span className="text-[5px] font-bold text-white">MH</span>
            </div>
          </div>
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
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  )
}

function MotexizMock() {
  const red = '#DC1414'
  return (
    <div className="aspect-[4/3] bg-white flex flex-col overflow-hidden">
      <BrowserChrome url="motexiz.vercel.app" />

      {/* Red nav */}
      <div className="flex items-center justify-between px-4 py-2 flex-shrink-0" style={{ background: red }}>
        <div className="flex items-center gap-1">
          <span className="text-[8px] font-black text-white">Go</span>
          <span className="text-[8px] font-black" style={{ color: '#FFD0D0' }}>Car</span>
        </div>
        <div className="flex items-center gap-3">
          {['Cars for Rent', 'Cars for Sale', 'Contact'].map((n) => (
            <span key={n} className="text-[5.5px] text-white/90">{n}</span>
          ))}
        </div>
        <button className="rounded-full border border-white px-2 py-0.5 text-[6px] font-semibold text-white">
          Login / Sign Up
        </button>
      </div>

      {/* Hero: large left + two right */}
      <div className="flex flex-1 gap-2 p-2.5 overflow-hidden">
        {/* Main hero card — light pink */}
        <div className="flex-1 rounded-xl p-3 flex flex-col justify-between overflow-hidden relative"
             style={{ background: '#FFF0EE' }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-1 self-start">
            <span className="rounded-full px-1.5 py-0.5 text-[5.5px] font-bold text-white" style={{ background: red }}>NEW</span>
            <span className="text-[5.5px]" style={{ color: '#4A1A1A' }}>Free Delivery on All Rentals! ›</span>
          </div>

          <div>
            <p className="text-[12px] font-black leading-tight" style={{ color: '#1A1A1A' }}>
              Dream Cars for<br />Rent. Prices You'll<br />Love.
            </p>
            <p className="text-[6px] mt-1.5" style={{ color: '#555' }}>Starting from</p>
            <p className="text-[11px] font-black" style={{ color: red }}>GHS450/day</p>
          </div>

          <button className="self-start rounded-md px-3 py-1 text-[6px] font-black tracking-widest text-white"
                  style={{ background: red }}>
            RENT NOW
          </button>

          {/* Car silhouettes */}
          <div className="absolute bottom-0 right-2 flex items-end gap-0.5">
            <div className="w-8 h-4 rounded-t-lg" style={{ background: '#CC1111' }} />
            <div className="w-10 h-5 rounded-t-lg" style={{ background: '#2A2A2A' }} />
            <div className="w-8 h-4 rounded-t-lg" style={{ background: '#AAAAAA' }} />
          </div>
        </div>

        {/* Right cards */}
        <div className="flex flex-col gap-2 w-[36%]">
          {/* Premium Fleet — light blue */}
          <div className="flex-1 rounded-xl p-3 flex items-center justify-between overflow-hidden"
               style={{ background: '#EEF2F8' }}>
            <div>
              <p className="text-[9px] font-black leading-tight" style={{ color: '#1C2A4A' }}>Premium<br />Fleet</p>
              <p className="text-[6px] mt-1" style={{ color: '#666' }}>View more →</p>
            </div>
            <div className="w-10 h-7 rounded-md overflow-hidden flex items-center justify-center"
                 style={{ background: '#D8E4F4' }}>
              <span className="text-[16px]">🚙</span>
            </div>
          </div>
          {/* 20% Off — peach */}
          <div className="flex-1 rounded-xl p-3 flex items-center justify-between overflow-hidden"
               style={{ background: '#FFF4EC' }}>
            <div>
              <p className="text-[9px] font-black leading-tight" style={{ color: red }}>20% Off</p>
              <p className="text-[6px] mt-1" style={{ color: '#666' }}>View more →</p>
            </div>
            <div className="w-10 h-7 rounded-md overflow-hidden flex items-center justify-center"
                 style={{ background: '#FFE4D4' }}>
              <span className="text-[16px]">🚗</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TourGhanaMock() {
  return (
    <div className="aspect-[4/3] flex flex-col overflow-hidden relative">
      <BrowserChrome url="tourghana-alpha.vercel.app" />

      {/* Full-bleed hero with simulated monument photo + dark overlay */}
      <div className="relative flex-1 flex flex-col overflow-hidden">
        {/* Simulated landscape: warm earthy tones like Accra sky + stone */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #7BA8A0 0%, #8AB0A0 30%, #C4A87A 60%, #B89860 100%)',
        }} />
        {/* Monument silhouette */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          {/* Arch top */}
          <div className="w-24 h-8 rounded-t-full" style={{ background: '#C4A870' }} />
          {/* Two pillars */}
          <div className="flex gap-6">
            <div className="w-3 h-14" style={{ background: '#B89860' }} />
            <div className="w-3 h-14" style={{ background: '#B89860' }} />
          </div>
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(10,35,25,0.58)' }} />

        {/* Nav */}
        <div className="relative z-10 flex items-center justify-between px-4 py-2.5 flex-shrink-0">
          <span className="text-[8px] font-black tracking-[0.18em] text-white">TOUR GHANA</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[7px] font-bold tracking-widest text-white">MENU</span>
            <div className="flex flex-col gap-[2px]">
              <span className="block h-[1.5px] w-3.5 bg-white" />
              <span className="block h-[1.5px] w-3.5 bg-white" />
            </div>
          </div>
        </div>

        {/* Hero text — centered */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 gap-2">
          <h2 className="text-[16px] font-black text-white leading-tight">
            Discover the Magic of
          </h2>
          <h2 className="text-[18px] font-black leading-tight" style={{ color: '#FFCC00' }}>
            Ghana
          </h2>
          <p className="text-[6px] text-white/80 max-w-[28ch] leading-relaxed">
            Experience rich culture, breathtaking landscapes, warm hospitality,
            and centuries of history in the heart of West Africa
          </p>
          <div className="flex items-center gap-2 mt-1">
            <button className="rounded-full px-3 py-1 text-[6px] font-bold" style={{ background: '#2D8B4E', color: '#FFCC00' }}>
              Start Your Journey
            </button>
            <button className="rounded-full border border-white px-3 py-1 text-[6px] font-bold text-white">
              Watch Video
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 flex justify-center pb-2">
          <div className="h-4 w-2.5 rounded-full border border-white/60 flex items-start justify-center pt-0.5">
            <div className="h-1 w-0.5 rounded-full bg-white/80" />
          </div>
        </div>
      </div>
    </div>
  )
}

function SolvedPascoMock() {
  const indigo = '#3B4A9C'
  const bg     = '#ECEEF8'
  const card   = '#F2F4FB'

  const rows = [
    { label: 'Welcome!',      expanded: true  },
    { label: 'BECE Pasco',    expanded: false },
    { label: 'WASSCE Pasco',  expanded: false },
    { label: 'Extras',        expanded: false },
  ]

  return (
    <div className="aspect-[4/3] flex flex-col overflow-hidden" style={{ background: bg }}>
      <BrowserChrome url="solvedpasco.com" />

      {/* Nav */}
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-100 flex-shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-0.5">
          <span className="text-[8px] font-black" style={{ color: indigo }}>S</span>
          <span className="text-[7px] font-black" style={{ color: '#CC3322' }}>✓</span>
          <span className="text-[8px] font-black" style={{ color: indigo }}>lvedPasco</span>
          <span className="text-[6px] font-medium" style={{ color: '#888' }}>.com</span>
        </div>
        <div className="flex items-center gap-3">
          {['PAST QUESTIONS', 'EXTRAS / APPLICATIONS', 'FAQS', 'MEMBERSHIP'].map((n) => (
            <span key={n} className="text-[4.5px] font-semibold tracking-[0.1em]" style={{ color: indigo }}>{n}</span>
          ))}
        </div>
      </div>

      {/* Accordion body */}
      <div className="flex-1 px-5 py-4 flex flex-col gap-2 overflow-hidden">
        {rows.map(({ label, expanded }) => (
          <div
            key={label}
            className="rounded-lg overflow-hidden flex-shrink-0"
            style={{ background: card }}
          >
            {/* Accordion header */}
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[9px] font-bold" style={{ color: indigo }}>{label}</span>
              <span className="text-[10px] font-light" style={{ color: indigo }}>
                {expanded ? '−' : '+'}
              </span>
            </div>

            {/* Expanded content — only Welcome */}
            {expanded && (
              <div className="px-4 pb-3 border-t" style={{ borderColor: '#D8DCF0' }}>
                <p className="text-[7px] mt-2" style={{ color: '#6A75A8' }}>
                  What would you like to do today?
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {['Try Free Samples', 'Create Free Account', 'Buy Membership'].map((link, i) => (
                    <span key={link} className="flex items-center gap-1">
                      {i > 0 && <span className="text-[6px]" style={{ color: '#9AA' }}>|</span>}
                      <span className="text-[6.5px] font-medium" style={{ color: indigo }}>{link}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
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
                {thumbKind === 'tourghana'   && <TourGhanaMock />}
                {thumbKind === 'solvedpasco' && <SolvedPascoMock />}
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
