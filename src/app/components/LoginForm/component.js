import React from 'react'
import PropTypes from 'prop-types'

import Button from 'app/components/core/Button'
import Input from 'app/components/core/Input'
import Link from 'app/components/core/Link'

const LoginCover = ({ className }) => (
  <form className={className}>

    <Input
      label='Email Address'
      placeholder='name@project.com'
    />

    <Input
      label='Password'
      placeholder='+5 characters'
      type='password'
    />

    <Button type='submit'>
      Login
    </Button>

    <Link href='#' small>
      Forgot your password?
    </Link>
  </form>
)

LoginCover.propTypes = {
  // children: PropTypes.node,
  className: PropTypes.string,
}

export default LoginCover
