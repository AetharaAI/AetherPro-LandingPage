import { cn } from '@/lib/utils'

export interface StatCardProps {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn('bg-bg-orbital border border-border-dim rounded-lg p-6', className)}>
      <div className="font-mono text-3xl lg:text-4xl font-bold text-text-plasma mb-2">
        {value}
      </div>
      <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}
