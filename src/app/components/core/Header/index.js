import styled from 'styled-components'
import Component from './component'

import { getFont, getColor } from 'app/helpers/theme'

const Header = styled(Component)`
  /* Adapt the colors based on primary prop */

  font-family: ${getFont('robotoMontserrat')};
  color: ${getColor('secondVariant')};
  margin: 1em 0;
  max-width: 380px;
  padding: 0.25em 0;
  font-weight: normal;
  text-align: left;

  & h1 {
    font-size: 42px;
  }
`

export default Header
