import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import SignupCover from 'app/components/SignupCover'
import SignupMenu from 'app/components/SignupMenu'
import SignupForm from 'app/components/SignupForm'

import useAuth from 'app/redux/auth'

const Signup = () => (
  <div>
    <Container>
      <Grid container>
        <Grid item md={4} xs={12}>
          <SignupCover />
        </Grid>

        <Grid item md={8} xs={12}>
          <SignupMenu />
          <SignupForm />
        </Grid>
      </Grid>

    </Container>
  </div>
)

export default useAuth(Signup)
