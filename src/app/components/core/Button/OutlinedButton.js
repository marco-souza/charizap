
import styled from 'styled-components'

import { getPropsColor, getPropsBackground } from 'app/helpers/theme'

import BaseButton from './BaseButton'

const Button = styled(BaseButton)`
  /* Adapt the colors based on primary prop */
  color: ${getPropsColor()};
  background: ${getPropsBackground()};
  border: 2px solid ${getPropsBackground('stroke')};

  &:hover, &:focus {
    border: 2px solid ${getPropsBackground('primary')};
  }
`

export default Button
