import React from 'react'
import PropTypes from 'prop-types'

import Button from 'app/components/core/Button'

import useAuth from 'app/redux/auth'

const Login = ({ login }) => (
  <div>
    <Button onClick={() => login('Loks')}>
      Login
    </Button>
  </div>
)

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

export default useAuth(Login)
