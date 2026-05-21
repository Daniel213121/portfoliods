'use client'

import { useInView } from '@/hooks/useInView'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: keyof React.JSX.IntrinsicElements
  [key: string]: unknown
}

export function Reveal({ children, delay = 0, className = '', as: As = 'div', ...rest }: Props) {
  const [ref, inView] = useInView()

  const Tag = As as React.ElementType

  return (
    <Tag
      ref={ref}
      className={`fade-up ${inView ? 'in' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
