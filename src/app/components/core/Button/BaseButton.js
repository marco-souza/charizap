import styled from 'styled-components'

import { getFont } from 'app/helpers/theme'

const Button = styled.button`
  font-size: .8em;
  padding: 10px 20px;
  border-radius: 20px 20px;
  text-transform: uppercase;
  border: none;
  font-family: ${getFont('robotoDefault')};
`

export default Button
