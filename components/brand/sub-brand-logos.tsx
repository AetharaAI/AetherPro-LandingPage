import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface SubBrandLogosProps {
  className?: string
}

export function SubBrandLogos({ className }: SubBrandLogosProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <div className="opacity-60 hover:opacity-100 transition-opacity">
        <Image
          src="/logos/AetherAI-logo-256.png"
          alt="AetherAI"
          width={100}
          height={24}
          className="h-6 w-auto object-contain"
          unoptimized={true}
        />
      </div>
      <span className="opacity-30 text-text-muted">•</span>
      <div className="opacity-60 hover:opacity-100 transition-opacity">
        <Image
          src="/logos/blackbox-logo.png"
          alt="BlackBox Audio"
          width={100}
          height={24}
          className="h-6 w-auto object-contain"
          unoptimized={true}
        />
      </div>
    </div>
  )
}
