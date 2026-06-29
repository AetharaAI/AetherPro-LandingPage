import { cn } from '@/lib/utils'

export interface SubBrandLogosProps {
  className?: string
}

export function SubBrandLogos({ className }: SubBrandLogosProps) {
  const brands = ['VoiceOps', 'Passport / APIS', 'COLLAB', 'RedWatch']

  return (
    <div className={cn('flex items-center gap-4', className)}>
      {brands.map((brand) => (
        <span key={brand} className="font-mono text-xs uppercase tracking-wider text-text-muted">
          {brand}
        </span>
      ))}
    </div>
  )
}
