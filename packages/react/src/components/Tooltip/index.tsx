import * as TooltipRadix from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'
import { ComponentProps, ReactNode } from 'react'

export interface TooltipProps extends ComponentProps<typeof TooltipRadix.Root> {
  children?: ReactNode
  content?: string
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root {...props}>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipContent align="center">
          {content}
          <TooltipArrow />
        </TooltipContent>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
