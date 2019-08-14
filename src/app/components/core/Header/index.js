import styled from 'styled-components'
import Component from './component'

import { getFont } from 'app/helpers/theme'

const Header = styled(Component)`
  /* Adapt the colors based on primary prop */

  font-family: ${getFont('robotoMontserrat')};
  color: ${({ theme, color = 'secondVariant' }) => theme.colors[color]};
  margin: 1em 0;
  max-width: 380px;
  padding: 0.25em 0;
  font-weight: normal;
  text-align: left;
`

export default Header
