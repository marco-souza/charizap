import styled from 'styled-components'
import Component from './component'

const Header = styled(Component)`
  /* Adapt the colors based on primary prop */

  font-family: ${({ theme }) => theme.fonts};
  color: ${({ theme, color = 'secondVariant' }) => theme.colors[color]};
  margin: 1em;
  max-width: 420px;
  padding: 0.25em auto;
  font-weight: normal;
`

export default Header
