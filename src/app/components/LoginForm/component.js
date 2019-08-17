import React from 'react'

import Form from './Form'
import { Header, LoginContainer } from './styled'

const LoginForm = props => (
  <LoginContainer {...props}>
    <Header>
      Be a happy DevOps. Enter your account.
    </Header>

    <Form />
  </LoginContainer>
)

export default LoginForm
