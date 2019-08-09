
import styled from 'styled-components'

import { getPropsColor, getPropsBackground } from 'app/helpers/theme'

import BaseButton from './BaseButton'

const Button = styled(BaseButton)`
  /* Adapt the colors based on primary prop */
  color: ${getPropsColor()};
  border-color: ${getPropsBackground('stroke')};
  background: ${getPropsBackground()};

  &:hover {
    border-color: ${getPropsColor()};
  }
`

export default Button
