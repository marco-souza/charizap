import styled from 'styled-components'

const Header = styled.header`
  /* Adapt the colors based on primary prop */
  color: ${({ theme, variant }) => theme.colors[variant]};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`

export default Header
