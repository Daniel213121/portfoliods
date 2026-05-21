export function TechBadge({ label, mono }: { label: string; mono: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[13px] text-body">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-ink text-white font-mono text-[11px] font-semibold tracking-tight">
        {mono}
      </span>
      {label}
    </span>
  )
}
