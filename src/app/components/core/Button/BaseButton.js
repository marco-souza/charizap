import styled from 'styled-components'

import { getFont, mediaQueryUpTo } from 'app/helpers/theme'
import { removeBlueMark } from 'app/helpers/styles'

const Button = styled.button`
  font-size: 20px;
  height: 64px;
  padding: 10px 20px;
  border-radius: 32px 32px;
  text-transform: uppercase;
  border: none;
  font-family: ${getFont('robotoDefault')};
  cursor: pointer;

  &:disabled {
    opacity: 0.8;
  }

  ${mediaQueryUpTo('xLarge', `
    font-size: 16px;
    height: 42px;
    border-radius: 20px 20px;
  `)}

  ${removeBlueMark}
`

export default Button
