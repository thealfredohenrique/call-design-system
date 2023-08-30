import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@call/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/thealfredohenrique.png',
    alt: 'Alfredo Henrique',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
