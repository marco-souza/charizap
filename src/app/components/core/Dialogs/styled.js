import styled from 'styled-components'
import Close from 'app/components/core/icons/Close'

import { getFont, getColor, getBgColor } from 'app/helpers/theme'
import ReturnButtom from 'app/components/core/ReturnButton/component'

export const Header = styled.div`
  background-color: ${getBgColor('modalHeader')};
  font-family: ${getFont('helveticaFallback')};
  color: ${getColor('secondary')};
  font-weight: bold;
  font-size: 16px;
  display: flex;
  position: relative;
  flex: 1;
  padding: 10px;
  text-align: center;

  & span {
    margin: 0 auto;
  }
`

export const Body = styled.div`
  min-width: 420px;
  padding: 10px;
`

export const CloseIcon = styled(Close)`
  right: 0;
  font-size: 16px;
  opacity: 0.7;
  position: absolute;
  cursor: pointer;
  padding-right: 12px;
`
export const ReturnState = styled(ReturnButtom)`
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  opacity: 0.7;
  font-size: 16px;
  cursor: pointer;

  & svg {
    font-size: 14px;
    padding-right: 12px;
  }

  &&& {
    margin-left: 12px;
  }
`
