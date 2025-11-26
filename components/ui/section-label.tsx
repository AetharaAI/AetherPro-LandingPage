import { cn } from '@/lib/utils'

export interface SectionLabelProps {
  children: string
  variant?: 'default' | 'voltage'
  className?: string
}

export function SectionLabel({ children, variant = 'default', className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'font-mono text-section-label text-text-muted uppercase tracking-wider',
        variant === 'voltage' && 'text-accent-voltage',
        className
      )}
    >
      {children}
    </p>
  )
}
