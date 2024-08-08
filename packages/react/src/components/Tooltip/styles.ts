import * as TooltipRadix from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideDownAndFade = keyframes({
  from: {
    opacity: '0',
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: '1',
    transform: 'translateY(0)',
  },
})

export const TooltipArrow = styled(TooltipRadix.Arrow, {
  width: '$4',
  height: '$2',
})

export const TooltipContent = styled(TooltipRadix.Content, {
  display: 'flex',
  justifyContent: 'center',
  align: 'center',
  background: '$gray900',
  fontFamily: '$default',
  color: '$white',
  borderRadius: '$md',
  padding: '$3 $4 $3 $4',

  '&:[data-side="bottom"]': {
    animation: `${slideDownAndFade}`,
  },
})
