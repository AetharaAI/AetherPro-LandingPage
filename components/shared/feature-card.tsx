import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  highlighted?: boolean
  className?: string
}

export function FeatureCard({ icon: Icon, title, description, highlighted = false, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        'bg-bg-orbital border border-border-dim rounded-lg p-8 transition-all duration-200 hover:border-border-bright hover:-translate-y-1',
        highlighted && 'border-accent-voltage bg-bg-orbital/50',
        className
      )}
    >
      <Icon className="w-10 h-10 text-accent-voltage mb-4" />
      <h4 className="font-heading font-semibold text-lg uppercase tracking-wide text-text-plasma mb-3">
        {title}
      </h4>
      <p className="text-text-muted text-base leading-relaxed">
        {description}
      </p>
    </div>
  )
}
