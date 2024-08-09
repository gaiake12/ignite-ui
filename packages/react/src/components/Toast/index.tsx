import { X } from 'phosphor-react'
import { ToastContainer } from './styles'
import { Heading } from '../Heading'

export interface ToastProps {
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
