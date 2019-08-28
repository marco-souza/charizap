import styled from 'styled-components'

import { getColor } from 'app/helpers/theme'

import Component from './component'

export default styled(Component)`
  color: ${getColor('secondaryVariant')};
`
