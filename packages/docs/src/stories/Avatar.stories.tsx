import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@math1400-ignite-ui/react'


export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: 'https://github.com/gaiake12.png',
    alt: 'Matheus Oliveira'
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      }
    }
}
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: 'undefined',
  }
}
