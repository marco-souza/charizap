import React from 'react'

import Form from './Form'
import { Header, Container } from './styled'

const SignupForm = props => (
  <Container {...props}>
    <Header>
      Get started absolutely free.<br />
      No credit card needed.
    </Header>

    <Form />
  </Container>
)

export default SignupForm
