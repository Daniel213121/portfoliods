'use client'

import { useInView } from '@/hooks/useInView'

export function ScrollText({ text }: { text: string }) {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const words = text.split(' ')

  return (
    <span ref={ref} className="inline-block">
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom mr-[0.22em] last:mr-0"
        >
          <span
            className="inline-block transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transitionDelay: `${i * 70}ms`,
              transform: inView ? 'translateY(0)' : 'translateY(110%)',
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  )
}
