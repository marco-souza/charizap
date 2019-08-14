import styled from 'styled-components'

import { getPropsBackground, getColor } from 'app/helpers/theme'

import BaseButton from './BaseButton'

const Button = styled(BaseButton)`
  /* Adapt the colors based on primary prop */
  background: ${getPropsBackground('primary')};
  color: ${getPropsBackground()};

  &:hover {
    background: ${getColor('secondary')};
  }

  &:disabled :hover {
    background: ${getColor('primary')};
  }
`

export default Button
