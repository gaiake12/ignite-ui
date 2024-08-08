import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  width: '$90',
  height: '$20',
  background: '$gray800',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  padding: '$4 $6 $4 $6',
  fontFamily: '$default',
  borderRadius: '$md',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '$8',

    h1: {
      color: '$white',
    },

    button: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',

      svg: {
        height: '$6',
        width: '$6',
        color: '$gray200',
      },

      '&:hover': {
        opacity: '0.5',
      },
    },
  },

  span: {
    color: '$gray200',
    width: '100%',
    height: '$6',
  },
})
