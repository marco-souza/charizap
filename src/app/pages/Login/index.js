import React from 'react'
import PropTypes from 'prop-types'
// import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import LoginCover from 'app/components/LoginCover'
import LoginMenu from 'app/components/LoginMenu'
import LoginForm from 'app/components/LoginForm'
import Container from 'app/components/core/Container'
import Header from 'app/components/core/Header'

import useAuth from 'app/redux/auth'

const Login = ({ login }) => (
  <div>
    <Container>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <LoginCover />
        </Grid>

        <Grid item sm={6} xs={12}>
          <LoginMenu />
          <Header>Be a happy DevOps. Enter your account</Header>
          <LoginForm />
        </Grid>
      </Grid>

    </Container>
  </div>
)

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

export default useAuth(Login)
