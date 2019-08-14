import styled from 'styled-components'

const Link = styled.a`
  /* Adapt the colors based on primary prop */
  color: ${({ theme, variant = 'primary' }) => theme.colors[variant]};
  font-size: ${({ small }) => small ? '0.8em' : '1em'};
  text-decoration: none;
`

export default Link
