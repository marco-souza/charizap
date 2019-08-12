
import styled from 'styled-components'

import { getPropsColor, getPropsBackground } from 'app/helpers/theme'

import BaseButton from './BaseButton'

const Button = styled(BaseButton)`
  /* Adapt the colors based on primary prop */
  padding: 10px 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  color: ${getPropsColor('secondary')};
  border: 2px solid ${getPropsBackground('stroke')};
  display: flex;
  text-transform: none;

  &:hover {
    border: 2px solid ${getPropsBackground('primary')};
    color: ${getPropsBackground('primary')};
  }
   & > * {
    margin: 0 10px;
  }
`

export default Button
