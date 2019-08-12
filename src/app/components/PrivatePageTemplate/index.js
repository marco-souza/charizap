import styled from 'styled-components'

import Component from './component'

let ComposedComponent = styled(Component)`
  & .container {
    margin: 40px 0;
  }
`

export default ComposedComponent