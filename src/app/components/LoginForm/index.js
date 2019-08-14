import styled from 'styled-components'
import { getFont } from 'app/helpers/theme'

import Component from './component'

export default styled(Component)`
  max-width: 430px;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
  font-family: ${getFont('robotoDefault')};
`
