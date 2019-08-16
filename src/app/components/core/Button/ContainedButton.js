import styled from 'styled-components'

import { getPropsBackground, getPropsColor, getColor } from 'app/helpers/theme'

import BaseButton from './BaseButton'

const Button = styled(BaseButton)`
  /* Adapt the colors based on primary prop */
  background: ${getPropsBackground('primary')};
  color: ${getPropsColor('background')};

  &:hover, &:focus {
    background: ${getColor('secondary')};
  }

  &:disabled {
    background: ${getColor('secondaryVariant')};
  }
`

export default Button
