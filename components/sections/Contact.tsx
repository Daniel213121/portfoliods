'use client'

import { useState } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { ScrollText } from '@/components/ui/ScrollText'
import { SectionLabel } from '@/components/ui/SectionLabel'
import {
  IconArrowRight, IconArrowUpRight,
  IconPhone, IconMail, IconGithub,
} from '@/components/ui/Icons'
import { toast } from 'sonner'
import { contactSchema } from '@/lib/schema/contact'

const PROJECT_TYPES = ['Landing Page', 'E-commerce', 'Business Website', 'Redesign', 'Other']

const CONTACT_LINKS = [
  { href: 'https://wa.me/233557618757?text=Hi%20Daniel%2C%20I%20found%20you%20through%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.', label: 'WhatsApp', value: '055 761 8757', Icon: IconPhone, external: true },
  { href: 'mailto:danielsackitey10@gmail.com', label: 'Email',  value: 'danielsackitey10@gmail.com', Icon: IconMail,   external: false },
  { href: 'https://github.com/Daniel213121',   label: 'GitHub', value: '@Daniel213121',              Icon: IconGithub, external: true  },
]

/* ── Field ─────────────────────────────────────────────────────────── */

type FieldProps = {
  id: string
  label: string
  type?: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  error?: string
}

function Field({ id, label, type = 'text', value, onChange, error }: FieldProps) {
  return (
    <div className="relative pt-4 mt-2">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="field"
        autoComplete="off"
      />
      <label htmlFor={id} className="field-label">{label}</label>
      {error && <div className="mt-1 text-[11.5px] text-burnt">{error}</div>}
    </div>
  )
}

/* ── Spinner ───────────────────────────────────────────────────────── */

function Spinner() {
  return (
    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

/* ── Contact (main export) ─────────────────────────────────────────── */

const EMPTY_FORM = { name: '', email: '', type: '', message: '' }

export function Contact() {
  const [form, setForm]     = useState(EMPTY_FORM)
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const update =
    (k: keyof typeof form): React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> =>
    (e) => {
      setForm((prev) => ({ ...prev, [k]: e.target.value }))
      setErrors((prev) => ({ ...prev, [k]: undefined }))
    }

  const validate = (): boolean => {
    const result = contactSchema.safeParse(form)
    if (result.success) { setErrors({}); return true }
    const errs: Record<string, string | undefined> = {}
    for (const issue of result.error.issues) {
      const key = issue.path[0] as string
      if (key && !errs[key]) errs[key] = issue.message
    }
    setErrors(errs)
    return false
  }

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Send failed')

      setStatus('sent')
      setForm(EMPTY_FORM)
      toast.success("Message sent — we'll be in touch soon!")
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      toast.error('Something went wrong. Please try again.')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="bg-ink text-white relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #E05C1A 0%, transparent 60%)' }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
        <Reveal><SectionLabel>Let's Talk</SectionLabel></Reveal>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* LEFT col */}
          <div className="lg:col-span-6">
            <Reveal delay={80}>
              <h2 className="text-[40px] sm:text-[56px] md:text-[72px] font-bold tracking-tightest leading-[1.0] text-white">
                <ScrollText text="Have a project" />
                <span className="block"><ScrollText text="in mind?" /></span>
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-[18px] md:text-[20px] leading-[1.55] text-white/70 max-w-md">
                Let's build something{' '}
                <span className="italic font-serif text-burnt">great</span> together.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10">
                {CONTACT_LINKS.map(({ href, label, value, Icon, external }, i) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-4 border-t border-white/10 pt-5 hover:border-burnt/70 transition-colors
                      ${i === CONTACT_LINKS.length - 1 ? 'border-b border-white/10 pb-5' : 'mb-5'}`}
                  >
                    <div className="h-10 w-10 rounded-full bg-white/5 text-burnt group-hover:bg-burnt group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                      <Icon size={18} stroke={1.5} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">{label}</div>
                      <div className="text-[16px] font-medium truncate">{value}</div>
                    </div>
                    <IconArrowUpRight size={16} stroke={2} className="ml-auto text-white/30 group-hover:text-burnt transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white/5 px-3 py-1.5 text-[12px] font-medium text-white/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-burnt opacity-75 pulse-dot" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-burnt" />
                </span>
                Replying to new emails within 24 hours
              </div>
            </Reveal>
          </div>

          {/* RIGHT: form */}
          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <form
                onSubmit={onSubmit}
                noValidate
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 md:p-10 backdrop-blur-sm"
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  <Field
                    id="name"
                    label="Name"
                    value={form.name}
                    onChange={update('name') as React.ChangeEventHandler<HTMLInputElement>}
                    error={errors.name}
                  />
                  <Field
                    id="email"
                    type="email"
                    label="Email"
                    value={form.email}
                    onChange={update('email') as React.ChangeEventHandler<HTMLInputElement>}
                    error={errors.email}
                  />
                </div>

                {/* Project type */}
                <div className="mt-8">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/40 mb-3">
                    Project type
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setForm((prev) => ({ ...prev, type: opt }))
                          setErrors((prev) => ({ ...prev, type: undefined }))
                        }}
                        className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-medium border transition-colors
                          ${form.type === opt
                            ? 'bg-burnt border-burnt text-white'
                            : 'bg-transparent border-white/15 text-white/75 hover:border-white/40'
                          }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {errors.type && (
                    <div className="mt-1.5 text-[11.5px] text-burnt">{errors.type}</div>
                  )}
                </div>

                {/* Message */}
                <div className="mt-8 relative pt-4">
                  <textarea
                    id="message"
                    className="field resize-none"
                    placeholder=" "
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                  />
                  <label htmlFor="message" className="field-label">
                    Tell me about your project
                  </label>
                  {errors.message && (
                    <div className="mt-1 text-[11.5px] text-burnt">{errors.message}</div>
                  )}
                </div>

                {/* Footer */}
                <div className="mt-9 flex items-center justify-between gap-4">
                  <p className="text-[11.5px] text-white/40 max-w-[26ch]">
                    We'll usually reply within a day with next steps.
                  </p>

                  {status === 'idle' && (
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-full bg-burnt px-5 py-3 text-[14px] font-semibold text-white hover:bg-burnt-dark transition-colors shrink-0"
                    >
                      Send Message
                      <IconArrowRight size={16} stroke={2} className="transition-transform group-hover:translate-x-0.5" />
                    </button>
                  )}
                  {status === 'sending' && (
                    <button disabled className="inline-flex items-center gap-2 rounded-full bg-burnt/70 px-5 py-3 text-[14px] font-semibold text-white cursor-not-allowed shrink-0">
                      <Spinner /> Sending…
                    </button>
                  )}
                  {status === 'sent' && (
                    <button disabled className="inline-flex items-center gap-2 rounded-full bg-[#5DC264]/20 border border-[#5DC264]/40 px-5 py-3 text-[14px] font-semibold text-[#5DC264] shrink-0">
                      ✓ Sent — we'll be in touch soon
                    </button>
                  )}
                  {status === 'error' && (
                    <button disabled className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-[14px] font-semibold text-white/60 shrink-0">
                      ✕ Something went wrong — try again
                    </button>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
