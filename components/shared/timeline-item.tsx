import { StatusIndicator } from '@/components/ui/status-indicator'
import { cn } from '@/lib/utils'

export interface TimelineItemProps {
  phase: string
  title: string
  description: string
  status: 'active' | 'voltage' | 'thinking' | 'pending'
  className?: string
}

export function TimelineItem({ phase, title, description, status, className }: TimelineItemProps) {
  return (
    <div className={cn('relative pl-8 pb-12', className)}>
      {/* Vertical connector line */}
      <div className="absolute left-2 top-0 bottom-0 w-px bg-border-dim" />

      {/* Phase indicator */}
      <div className="absolute left-0 top-0">
        <StatusIndicator status={status} label={phase} />
      </div>

      {/* Content */}
      <div className="pt-8">
        <h4 className="font-heading font-bold text-2xl text-text-plasma mb-3">
          {title}
        </h4>
        <p className="text-text-muted text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
