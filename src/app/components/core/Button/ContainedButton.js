import styled from 'styled-components'

import { getPropsColor } from 'app/helpers/theme'

import BaseButton from './BaseButton'

const Button = styled(BaseButton)`
/* Adapt the colors based on primary prop */
background: ${getPropsColor};
color: ${({ theme }) => theme.colors.background};
`

export default Button
