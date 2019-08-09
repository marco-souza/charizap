import styled from 'styled-components'

import { getPropsBackground } from 'app/helpers/theme'

import BaseButton from './BaseButton'

const Button = styled(BaseButton)`
  /* Adapt the colors based on primary prop */
  background: ${getPropsBackground('primary')};
  color: ${getPropsBackground()};
`

export default Button
