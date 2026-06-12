'use client'

import { Reveal } from '@/components/ui/Reveal'
import { ScrollText } from '@/components/ui/ScrollText'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TechBadge } from '@/components/ui/TechBadge'
import { IconMapPin } from '@/components/ui/Icons'
import { useInView } from '@/hooks/useInView'
import { STATS, STACK, TIMELINE } from '@/lib/data'

/* ── TimelineItem ──────────────────────────────────────────────────── */

type TimelineEntry = {
  year: string
  title: string
  sub: string
  body: string
  chip: string
}

function TimelineItem({ item }: { item: TimelineEntry }) {
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <li
      ref={ref as unknown as React.RefObject<HTMLLIElement>}
      className="relative"
      style={{
        opacity: inView ? 1 : 0.35,
        transform: inView ? 'translateX(0)' : 'translateX(-6px)',
        transition: 'opacity .6s ease, transform .6s ease',
      }}
    >
      {/* Dot marker */}
      <div className="absolute -left-[37px] top-1.5 h-4 w-4 flex items-center justify-center">
        <span
          className="h-2.5 w-2.5 rounded-full transition-colors duration-500"
          style={{ background: inView ? '#E05C1A' : '#E5E5E5' }}
        />
        <span
          className="absolute h-4 w-4 rounded-full border transition-colors duration-500"
          style={{ borderColor: inView ? 'rgba(224,92,26,0.3)' : '#E5E5E5' }}
        />
      </div>

      {/* Meta row */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="font-mono text-[12px] text-burnt font-semibold tracking-wider">
          {item.year}
        </span>
        <span className="text-[11px] uppercase tracking-[0.14em] text-body/60">
          {item.sub}
        </span>
        <span className="ml-auto rounded-full bg-white border border-line text-[10px] font-medium text-body px-2 py-0.5">
          {item.chip}
        </span>
      </div>

      <h4 className="mt-1 text-[20px] md:text-[22px] font-bold text-ink tracking-tight">
        {item.title}
      </h4>
      <p className="mt-1.5 text-[14.5px] leading-[1.7] text-body max-w-prose">
        {item.body}
      </p>
    </li>
  )
}

function Timeline() {
  return (
    <ol className="relative border-l border-line pl-8 space-y-9">
      {TIMELINE.map((t) => (
        <TimelineItem key={t.title} item={t} />
      ))}
    </ol>
  )
}

/* ── About (main export) ───────────────────────────────────────────── */

export function About() {
  return (
    <section id="about" className="bg-cream relative">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14 py-24 md:py-32">

        <Reveal><SectionLabel>About</SectionLabel></Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 text-[40px] sm:text-[52px] md:text-[68px] font-bold tracking-tightest text-ink leading-[1.02]">
            <ScrollText text="A developer who ships." />
          </h2>
        </Reveal>

        {/* Two-column layout */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* LEFT: sticky col */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-6">

              <Reveal>
                <div className="relative">
                  <div className="absolute -left-3 top-1 bottom-1 w-px bg-burnt/60 hidden md:block" />
                  <p className="text-[16px] md:text-[17px] leading-[1.75] text-body">
                    I'm a full-stack developer and the founder of{' '}
                    <span className="text-ink font-semibold">Prime Tech Support</span>,
                    a small studio in Accra building modern web products for
                    businesses across Ghana and beyond.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <p className="text-[16px] md:text-[17px] leading-[1.75] text-body">
                  My focus is simple: fast, accessible, conversion-driven websites.
                  I obsess over the details that turn a visitor into a customer —
                  the load time, the line of copy, the half-second that decides
                  if someone scrolls or leaves.
                </p>
              </Reveal>

              <Reveal delay={160}>
                <div className="rounded-2xl border border-line bg-white p-6">
                  {/* Avatar row */}
                  <div className="flex items-center gap-3">
                    <div className="relative shrink-0">
                      <div className="h-11 w-11 rounded-full bg-ink text-white flex items-center justify-center font-bold text-[15px]">
                        DS
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#5DC264] ring-2 ring-white" />
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-ink">Daniel</div>
                      <div className="text-[12px] text-body">Founder, Prime Tech Support</div>
                    </div>
                  </div>
                  {/* Quote */}
                  <p className="mt-4 text-[14px] leading-[1.65] text-body italic font-serif">
                    "If it doesn't convert, it doesn't ship."
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="flex items-center gap-3 text-[14px] text-body">
                  <IconMapPin size={16} className="text-burnt shrink-0" />
                  Accra, Ghana — open to remote teams worldwide.
                </div>
              </Reveal>

            </div>
          </div>

          {/* RIGHT: scrolling col */}
          <div className="lg:col-span-7 space-y-12">

            <Reveal>
              <div className="grid grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white p-6 md:p-7 flex flex-col justify-between min-h-[140px]"
                  >
                    <div className="text-[40px] md:text-[52px] leading-none font-bold tracking-tightest text-ink">
                      {s.value}
                    </div>
                    <div className="mt-4 text-[12px] uppercase tracking-[0.16em] text-body">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-body/70 font-semibold mb-6">
                  The Path
                </div>
                <Timeline />
              </div>
            </Reveal>

          </div>
        </div>

        {/* Tech stack row */}
        <Reveal delay={120}>
          <div className="mt-16 md:mt-20 border-t border-line pt-10">
            <div className="text-[11px] uppercase tracking-[0.2em] text-body/70 font-semibold">
              The Stack
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-9 gap-y-4">
              {STACK.map((s) => (
                <TechBadge key={s.label} label={s.label} mono={s.mono} />
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
