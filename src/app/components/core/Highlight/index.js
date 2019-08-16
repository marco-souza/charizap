import styled from 'styled-components'
import { getPropsColor } from 'app/helpers/theme'

const Highlight = styled.span`
  /* Adapt the colors based on primary prop */
  color: ${getPropsColor()};
`

export default Highlight
