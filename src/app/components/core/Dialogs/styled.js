import styled from 'styled-components'
import Close from 'app/components/core/icons/Close'

import { getFont, getColor, getBgColor } from 'app/helpers/theme'
import ReturnButtom from 'app/components/core/ReturnButton/component'

export const Header = styled.div`
  background-color: ${getBgColor('modalHeader')};
  font-family: ${getFont('helveticaFallback')};
  font-weight: bold;
  font-size: 0.8em;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 10px;
  align-items: baseline;

  & span {
    justify-content: center;
  }
`
export const Body = styled.div`
  min-width: 420px;
  padding: 10px;
`

export const CloseIcon = styled(Close)`
  color: ${getColor('secondaryVariant')};
  justify-content: flex-end;
`
export const ReturnState = styled(ReturnButtom)`
  justify-content: flex-start;
  color: ${getColor('secondaryVariant')};
`
