import type { StoryObj, Meta } from '@storybook/react'

import { Toast, ToastProps } from '@math1400-ignite-ui/react'


export default {
  title: "Data Display/Toast",
  component: Toast,
} as Meta<ToastProps>

export const CustomTag: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento Realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h'
  }
}
