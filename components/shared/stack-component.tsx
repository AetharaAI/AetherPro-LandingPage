'use client'

import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export interface StackComponentProps {
  icon: LucideIcon
  name: string
  title: string
  description: string
  className?: string
}

export function StackComponent({ icon: Icon, name, title, description, className }: StackComponentProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        'bg-bg-orbital border-l-3 border-signal-beam rounded-lg p-6 transition-all duration-200 cursor-default',
        isHovered && 'bg-bg-steel border-l-accent-voltage',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4">
        <Icon className="w-8 h-8 text-signal-beam mt-1 flex-shrink-0" />
        <div>
          <div className="font-mono text-xs text-accent-voltage uppercase tracking-wider mb-2">
            {name}
          </div>
          <h4 className="font-heading font-semibold text-lg text-text-plasma mb-2">
            {title}
          </h4>
          <p className="text-text-muted text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
