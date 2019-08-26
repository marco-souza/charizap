import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import useAuth from 'app/redux/auth'

import LoginCover from 'app/components/LoginCover'
import LoginMenu from 'app/components/LoginMenu'
import LoginForm from 'app/components/LoginForm'

import { Container } from './styled'

const Login = ({ login }) => (
  <Container>
    <Grid container padding={0}>
      <Grid item xlg={4} lg={4} md={4} xs={12} sm={12}>
        <LoginCover />
      </Grid>

      <Grid item xlg={8} lg={8} md={8} xs={12} sm={12}>
        <LoginMenu />
        <LoginForm />
      </Grid>
    </Grid>
  </Container>
)

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

export default useAuth(Login)
