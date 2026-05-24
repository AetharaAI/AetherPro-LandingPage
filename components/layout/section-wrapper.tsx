import { cn } from '@/lib/utils'

export interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  background?: 'void' | 'orbital' | 'gradient'
  id?: string
}

export function SectionWrapper({ children, className, background = 'void', id }: SectionWrapperProps) {
  const getBackgroundClasses = () => {
    switch (background) {
      case 'void':
        return 'bg-bg-void'
      case 'orbital':
        return 'bg-bg-orbital'
      case 'gradient':
        return 'bg-gradient-to-b from-bg-orbital to-bg-void'
      default:
        return 'bg-bg-void'
    }
  }

  return (
    <section
      id={id}
      className={cn('scroll-mt-32 px-6 py-20 lg:px-8 lg:py-30', getBackgroundClasses(), className)}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
