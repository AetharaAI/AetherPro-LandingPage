'use client'

import { cn } from '@/lib/utils'

export interface StatusIndicatorProps {
  status: 'active' | 'voltage' | 'thinking' | 'critical' | 'pending'
  label: string
  className?: string
}

export function StatusIndicator({ status, label, className }: StatusIndicatorProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'active':
        return 'bg-status-active'
      case 'voltage':
        return 'bg-accent-voltage'
      case 'thinking':
        return 'bg-status-thinking animate-pulse-thinking'
      case 'critical':
        return 'bg-status-crit'
      case 'pending':
        return 'bg-text-dark'
      default:
        return 'bg-text-dark'
    }
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div
        className={cn(
          'w-2 h-2 rounded-full',
          getStatusColor()
        )}
      />
      <span className="font-mono text-section-label text-text-muted uppercase tracking-wider">
        {label}
      </span>
    </div>
  )
}
