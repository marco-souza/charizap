import styled from 'styled-components'

import { removeBlueMark } from 'app/helpers/styles'

import Container from './component'

export default styled(Container)`
  padding: 0;
  position:relative;

  ${removeBlueMark}
`
