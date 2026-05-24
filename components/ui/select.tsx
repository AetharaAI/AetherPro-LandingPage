import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, ...props }, ref) => {
  return (
    <select
      className={cn(
        'flex h-12 w-full appearance-none rounded-md border border-border-dim bg-bg-steel px-4 py-2 text-text-plasma focus:outline-none focus:border-border-bright focus:ring-1 focus:ring-border-bright disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Select.displayName = 'Select'

export { Select }
