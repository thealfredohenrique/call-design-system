import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Text } from '@call-design-system/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: <Text>26 de Outubro - Disponível</Text>,
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
