import styled from 'styled-components'

import { getFont, mediaQueryUpTo } from 'app/helpers/theme'
import { removeBlueMark } from 'app/helpers/styles'

const Button = styled.button`
  font-size: 16px;
  height: 42px;

  padding: 10px 32px;
  border-radius: 20px 20px;
  text-transform: uppercase;
  border: none;
  font-family: ${getFont('robotoDefault')};
  cursor: pointer;
  min-width: 168px;

  ${mediaQueryUpTo('xLarge', `min-width: 160px;`)}

  &:disabled {
    opacity: 0.8;
  }

  ${mediaQueryUpTo('xSmall', `
    font-size: 14px;
    min-width: 140px;
    padding: 10px 24px;
  `)}

  ${removeBlueMark}
`

export default Button
