import { ComponentProps } from 'react'
import { ToastContainer, ToastContent } from './styles'
import { X } from '@phosphor-icons/react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  content: string
}

export function Toast(props: ToastProps) {
  return (
    <ToastContainer>
      <ToastContent>
        <strong>{props.title}</strong>
        <p>{props.content}</p>
      </ToastContent>

      <X size={20} />
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
