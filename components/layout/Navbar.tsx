'use client'

import { useState, useEffect } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { NAV_LINKS } from '@/lib/data'
import { IconArrowRight, IconMenu, IconClose } from '@/components/ui/Icons'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(['work', 'services', 'about', 'contact'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md transition-shadow
        ${scrolled ? 'border-b border-line' : 'border-b border-transparent'}`}
    >
      {/* Main bar */}
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 md:px-10 lg:px-14 h-16 md:h-[72px]">

        {/* Wordmark */}
        <a
          href="#top"
          onClick={handleNav('top')}
          className="text-[15px] md:text-[16px] font-bold tracking-tight text-ink"
        >
          Prime Tech<span className="text-burnt"> Support</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => {
            const isActive = active === l.id
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={handleNav(l.id)}
                className={`relative text-[14px] font-medium transition-colors
                  ${isActive ? 'text-ink' : 'text-body hover:text-ink'}`}
              >
                {l.label}
                <span
                  className="absolute -bottom-1.5 left-0 h-[1.5px] bg-burnt transition-all duration-500 ease-out"
                  style={{ width: isActive ? '100%' : '0%' }}
                />
              </a>
            )
          })}
        </nav>

        {/* Right side: CTA + mobile button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={handleNav('contact')}
            className="hidden md:inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-burnt text-white text-[13px] font-semibold px-4 py-2 hover:bg-burnt-dark transition-colors"
          >
            Work With Us
            <IconArrowRight size={14} stroke={2} />
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden -mr-2 p-2 text-ink"
          >
            {open ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-line transition-[max-height,opacity] duration-500 ease-out
          ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="flex flex-col px-6 py-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={handleNav(l.id)}
              className="flex items-center justify-between py-3 text-[15px] font-medium text-ink border-b border-line/70 last:border-b-0"
            >
              <span>{l.label}</span>
              <IconArrowRight size={16} className="text-body" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNav('contact')}
            className="mt-4 inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-burnt text-white text-[14px] font-semibold px-4 py-3"
          >
            Work With Us <IconArrowRight size={14} stroke={2} />
          </a>
        </nav>
      </div>
    </header>
  )
}
