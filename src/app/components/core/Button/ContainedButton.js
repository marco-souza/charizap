import styled from 'styled-components'

import { getPropsColor, getPropsBackground } from 'app/helpers/theme'

import BaseButton from './BaseButton'

const Button = styled(BaseButton)`
  /* Adapt the colors based on primary prop */
  background: ${getPropsColor()};
  color: ${getPropsBackground()};
`

export default Button
