import styled from 'styled-components'

import { getPropsColor } from 'app/helpers/theme'

import BaseButton from './BaseButton'

const Button = styled(BaseButton)`
/* Adapt the colors based on primary prop */
color: ${getPropsColor};
border: none;
`

export default Button
