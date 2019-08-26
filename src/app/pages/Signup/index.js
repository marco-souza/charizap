import React from 'react'
import Grid from '@material-ui/core/Grid'

import SignupCover from 'app/components/SignupCover'
import SignupMenu from 'app/components/SignupMenu'
import SignupForm from 'app/components/SignupForm'

import useAuth from 'app/redux/auth'

import { Container } from './styled'

const Signup = () => (
  <Container>
    <Grid container padding={0}>
      <Grid item xlg={4} lg={4} md={4} xs={12} sm={12}>
        <SignupCover />
      </Grid>

      <Grid item xlg={8} lg={8} md={8} xs={12} sm={12}>
        <SignupMenu />
        <SignupForm />
      </Grid>
    </Grid>
  </Container>
)

export default useAuth(Signup)
