import React from 'react'
import PropTypes from 'prop-types'
// import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import LoginCover from 'app/components/LoginCover'
import Button from 'app/components/core/Button'
import Container from 'app/components/core/Container'

import useAuth from 'app/redux/auth'

const Login = ({ login }) => (
  <div>
    <Container>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <LoginCover />
        </Grid>

        <Grid item sm={6} xs={12}>
          {/* <Menu></Menu> */}
          {/* <LoginForm></LoginForm> */}
          <Button onClick={() => login('Loks')}>
            Login
          </Button>
        </Grid>
      </Grid>

    </Container>
  </div>
)

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

export default useAuth(Login)
