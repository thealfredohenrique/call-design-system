import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Tooltip = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$gray900',
  color: '$gray100',
  boxShadow: '$space$1 $space$4 $space$6 0 rgba(0, 0, 0, 0.25)',
  borderRadius: '$sm',
  padding: '$3 $4',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  position: 'relative',

  '::after': {
    content: '',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    width: '$6',
    height: '$6',
    transform: 'translate(-50%, 50%) rotate(45deg)',
    backgroundColor: '$gray900',
  },
})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {
  as?: ElementType
}

Tooltip.displayName = 'Tooltip'
