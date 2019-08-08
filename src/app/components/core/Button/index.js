import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 20px 20px;
  text-transform: uppercase;
`

export default Button
