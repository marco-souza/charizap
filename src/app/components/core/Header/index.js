import styled from 'styled-components'
import Component from './component'

const Header = styled(Component)`
  /* Adapt the colors based on primary prop */

  font-family: ${({ theme }) => theme.fonts};
  color: ${({ theme, color = 'secondVariant' }) => theme.colors[color]};
  margin: 1em;
  padding: 0.25em 1em;
  font-weight: normal;
`

export default Header
