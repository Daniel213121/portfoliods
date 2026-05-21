type IconProps = { size?: number; stroke?: number; className?: string }

function Icon({
  children,
  size = 20,
  stroke = 1.5,
  className = '',
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function IconArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </Icon>
  )
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </Icon>
  )
}

export function IconMenu(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16" />
      <path d="M4 17h16" />
    </Icon>
  )
}

export function IconClose(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </Icon>
  )
}

export function IconPhone(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 14.91 19.79 19.79 0 0 1 1.12 6.24 2 2 0 0 1 3.1 4h3a2 2 0 0 1 2 1.72c.12.96.34 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.54 2.81.66A2 2 0 0 1 22 16.92Z" />
    </Icon>
  )
}

export function IconMail(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </Icon>
  )
}

export function IconGithub(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </Icon>
  )
}

export function IconMapPin(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  )
}

export function IconLanding({ size = 28, stroke = 1.4, ...props }: IconProps) {
  return (
    <Icon size={size} stroke={stroke} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 8h18" />
      <path d="M7 12h8" />
      <path d="M7 16h5" />
    </Icon>
  )
}

export function IconCommerce({ size = 28, stroke = 1.4, ...props }: IconProps) {
  return (
    <Icon size={size} stroke={stroke} {...props}>
      <path d="M3 4h2l2.5 12h11l2-8H6" />
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
    </Icon>
  )
}

export function IconBuilding({ size = 28, stroke = 1.4, ...props }: IconProps) {
  return (
    <Icon size={size} stroke={stroke} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2" />
    </Icon>
  )
}

export function IconRefresh({ size = 28, stroke = 1.4, ...props }: IconProps) {
  return (
    <Icon size={size} stroke={stroke} {...props}>
      <path d="M21 12a9 9 0 1 1-3.4-7" />
      <path d="M21 4v5h-5" />
    </Icon>
  )
}

export function IconSearch({ size = 28, stroke = 1.4, ...props }: IconProps) {
  return (
    <Icon size={size} stroke={stroke} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
      <path d="M11 8v6M8 11h6" />
    </Icon>
  )
}

export function IconUser({ size = 28, stroke = 1.4, ...props }: IconProps) {
  return (
    <Icon size={size} stroke={stroke} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </Icon>
  )
}
