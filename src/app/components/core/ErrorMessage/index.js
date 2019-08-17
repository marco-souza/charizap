import styled from 'styled-components'

import { getColor } from 'app/helpers/theme'

const ErrorMessage = styled.span`
  font-size: 0.6em;
  font-weight: 400;
  margin-top: 5px;
  color: ${getColor('error')};
  width: 100%;
  display: ${({ children }) => children && children.length ? 'inline-block' : 'none'};
`

export default ErrorMessage
