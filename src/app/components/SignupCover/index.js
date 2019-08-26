import React from 'react'

import Switch from './Switch'
import { Cover, Container } from './styled'

const SignupCover = () => (
  <Container>
    <Cover
      message='Leave it to us'
      logo='colored'
      padding='40px'
      renderBelow
      moreSpace
    >
      <Switch />
    </Cover>
  </Container>
)

export default SignupCover
