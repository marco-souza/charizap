import styled from 'styled-components'

import useAuth from 'app/redux/auth'

import Component from './component'

let ComposedComponent = styled(Component)`
  & .container {
    margin: 40px 80px;
  }

  & .navbar {
    margin-bottom: 40px;
  }
`
ComposedComponent = useAuth(ComposedComponent)

export default ComposedComponent
