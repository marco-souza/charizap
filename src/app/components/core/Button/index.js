import styled from 'styled-components'

import theme from 'app/helpers/theme'

const { colors } = theme

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => colors[props.primary ? 'primary' : 'secondary']};
  color: ${colors.background};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.primary};
  border-radius: 3px;
`

export default Button
