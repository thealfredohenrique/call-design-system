import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '$3 $5',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  svg: {
    cursor: 'pointer',
    color: '$gray200',
  },
})

export const ToastContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  strong: {
    color: '$white',
    fontFamily: '$default',
    fontSize: '$xl',
    fontWeight: '$bold',
    lineHeight: '$base',
  },

  p: {
    color: '$gray200',
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})
