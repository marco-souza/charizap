import styled from 'styled-components'
import Close from 'app/components/core/icons/Close'
import Arrow from 'app/components/core/icons/BackArrow'

import { getFont, getColor, getBgColor } from 'app/helpers/theme'

export const Header = styled.div`
  background-color: ${getBgColor('modalHeader')};
  font-family: ${getFont('helveticaFallback')};
  text-align: center;
  font-weight: bold;
  font-size: 0.8em;
  padding: 10px;
`
export const Body = styled.div`
  min-width: 420px;
  padding: 10px;
`

export const CloseIcon = styled(Close)`
  float: right;
  color: ${getColor('secondaryVariant')};
`
export const LeftArrow = styled(Arrow)`
  float: left;
  color: ${getColor('secondaryVariant')};
`
