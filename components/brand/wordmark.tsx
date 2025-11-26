import { cn } from '@/lib/utils'

export interface WordmarkProps {
  text: 'AETHERPRO' | 'AETHERAI'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Wordmark({ text, size = 'md', className }: WordmarkProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-lg tracking-[0.15em]'
      case 'md':
        return 'text-2xl tracking-[0.15em]'
      case 'lg':
        return 'text-4xl tracking-[0.2em]'
      default:
        return 'text-2xl tracking-[0.15em]'
    }
  }

  const formatText = (text: string) => {
    if (text === 'AETHERAI') {
      return (
        <>
          <span className="text-text-plasma">AETHER</span>
          <span className="text-accent-voltage">AI</span>
        </>
      )
    }
    return <span className="text-text-plasma">{text}</span>
  }

  return (
    <div className={cn('font-heading font-bold uppercase', getSizeClasses(), className)}>
      {formatText(text)}
    </div>
  )
}
