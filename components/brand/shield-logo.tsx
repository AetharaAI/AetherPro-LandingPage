import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface ShieldLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

/** Metallic A glyph (Metalic-A-AetherPro) — site icon for footer and compact brand marks. */
export function ShieldLogo({ size = 'md', className }: ShieldLogoProps) {
  const getSrcAndDimensions = () => {
    switch (size) {
      case 'sm':
        return {
          src: '/brand/aetherpro-glyph-64.png',
          width: 48,
          height: 48,
        }
      case 'md':
        return {
          src: '/brand/aetherpro-glyph-96.png',
          width: 64,
          height: 64,
        }
      case 'lg':
        return {
          src: '/brand/aetherpro-glyph-192.png',
          width: 120,
          height: 120,
        }
      case 'xl':
        return {
          src: '/brand/aetherpro-glyph-512.png',
          width: 160,
          height: 160,
        }
      default:
        return {
          src: '/brand/aetherpro-glyph-96.png',
          width: 64,
          height: 64,
        }
    }
  }

  const { src, width, height } = getSrcAndDimensions()

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt="AetherPro"
      className={cn('object-contain', className)}
      priority
    />
  )
}
