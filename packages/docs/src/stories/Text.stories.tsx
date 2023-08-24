import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@call/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat praesentium nisi possimus. Obcaecati laborum corporis, velit modi voluptates minus possimus cum quae hic saepe quas consequuntur similique nostrum nam ad?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
