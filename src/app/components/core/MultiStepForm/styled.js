import styled from 'styled-components'

import { getColor } from 'app/helpers/theme'

const ColorSwitch = (props, isBorder) => (
  // TODO Desgin got a border in different collor, idkw one is it.
  // Check background and border colors with @Rafael
  getColor(props.selected
    ? 'primary'
    : isBorder ? 'inputFontColor' : 'secondaryVariant'
  )
)

export const DotStep = styled.div`
  width: ${props => props.selected ? '12px' : '10px'};
  height: ${props => props.selected ? '12px' : '10px'};
  margin: 10px 5px 20px;
  border-radius: 10px;
  border: solid 2px ${props => ColorSwitch(props, true)};
  background-color: ${props => ColorSwitch(props)};
  opacity: ${props => !props.selected ? 0.5 : 1};
`

export const StepManager = styled.div`
  display: flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
`
