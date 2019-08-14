import styled from 'styled-components'

import { getPropsColor, getFont } from 'app/helpers/theme'

import Component from './component'

export default styled(Component)`
  color: ${getPropsColor('secondaryVariant')};
  font-family: ${getFont('robotoDefault')};
  font-size: ${props => props.small && '12px'};
`
