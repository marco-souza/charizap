import React from 'react'

import Form from './Form'
import { Header, Container } from './styled'

const LoginForm = props => (
  <Container {...props}>
    <Header>
      Be a happy DevOps. Enter your account.
    </Header>

    <Form />
  </Container>
)

export default LoginForm
