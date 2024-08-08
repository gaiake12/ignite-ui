import type { StoryObj, Meta } from '@storybook/react'

import { Text, Tooltip, TooltipProps } from '@math1400-ignite-ui/react'


export default {
  title: "Data Display/Tooltip",
  component: Tooltip,
} as Meta<TooltipProps>

export const CustomTag: StoryObj<TooltipProps> = {
  args: {
    children: <Text>Teste</Text>,
    content: '21 de Outubro - Indisponível'
  }
}
