import styled from 'styled-components'

import { getColor, getBgColor } from 'app/helpers/theme'

const Block = styled.div`
  background: ${getColor()};
  color: ${getBgColor()};
  font-size: 1em;
  padding: 3em;
  text-align: center;
`

export default Block
