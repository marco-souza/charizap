import styled from 'styled-components'

import Component from './component'

let ComposedComponent = styled(Component)`
  & .container {
    margin: 40px 80px;
  }

  & .navbar {
    margin-bottom: 40px;
  }
`

export default ComposedComponent
