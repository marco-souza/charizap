import styled from 'styled-components'

import theme, { getPropsColor } from 'app/helpers/theme'

import Component from './component'

export default styled(Component)`
  color: ${getPropsColor('secondaryVariant')};
  font-family: ${theme.fonts};
  font-size: ${props => props.small && '12px'};
`
