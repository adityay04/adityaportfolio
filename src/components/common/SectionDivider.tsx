interface SectionDividerProps {
  className?: string
}

export function SectionDivider({ className = '' }: SectionDividerProps) {
  return <hr className={`section-divider ${className}`.trim()} />
}
