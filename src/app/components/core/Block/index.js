import styled from 'styled-components'

import theme from 'app/helpers/theme'

const { colors } = theme
const Block = styled.div`
  background: ${colors['primary']};
  color: ${colors['background']};
  font-size: 1em;
  padding: 3em;
  text-align: center;
`

export default Block
