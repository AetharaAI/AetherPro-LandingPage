import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface ShieldLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function ShieldLogo({ size = 'md', className }: ShieldLogoProps) {
  const getSrcAndDimensions = () => {
    switch (size) {
      case 'sm':
        return {
          src: '/logos/shield-48.png',
          width: 48,
          height: 48,
        }
      case 'md':
        return {
          src: '/logos/shield-192.png',
          width: 64,
          height: 64,
        }
      case 'lg':
        return {
          src: '/logos/shield-256.png',
          width: 120,
          height: 120,
        }
      case 'xl':
        return {
          src: '/logos/shield-512.png',
          width: 160,
          height: 160,
        }
      default:
        return {
          src: '/logos/shield-192.png',
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
      alt="AetherPro Shield Logo"
      className={cn('object-contain', className)}
      priority
      unoptimized={true}
    />
  )
}
