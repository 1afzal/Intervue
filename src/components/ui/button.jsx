import React from 'react'
import { cn } from '@/lib/utils'

const variantClasses = {
  default: 'bg-black text-white hover:bg-black/90',
  outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
  link: 'underline underline-offset-4 hover:no-underline p-0 h-auto',
}

export const Button = React.forwardRef(({ className, variant = 'default', type = 'button', ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2',
        variantClasses[variant] ?? variantClasses.default,
        className,
      )}
      {...props}
    />
  )
})

Button.displayName = 'Button'
