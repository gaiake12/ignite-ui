import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { ToastContainer } from './styles'
import { Heading } from '../Heading'

interface ToastProps extends ComponentProps<typeof Div> {
  description: string
  title: string
}

export function Toast({ description, title }: ToastProps) {
  return (
    <ToastContainer>
      <div>
        <Heading>{title}</Heading>
        <button>
          <X />
        </button>
      </div>

      <span>{description}</span>
    </ToastContainer>
  )
}
