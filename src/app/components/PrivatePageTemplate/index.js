import styled from 'styled-components'

import useAuth from 'app/redux/auth'

import Component from './component'

let ComposedComponent = styled(Component)`
  & .container {
    margin: 0 80px;
  }
`
ComposedComponent = useAuth(ComposedComponent)

export default ComposedComponent
